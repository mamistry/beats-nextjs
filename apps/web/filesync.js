//TO RUN FROM COMMAND LINE: node filesync.js
const { S3Client } = require('@aws-sdk/client-s3');
const S3SyncClient = require('s3-sync-client');
const mime = require('mime-types');
const manifest = require('./deploy/.next/prerender-manifest.json');
let cache_routes = {};

const s3Client = new S3Client({ accessKeyId: 'akid', secretAccessKey: 'secret' });
const { sync } = new S3SyncClient({ client: s3Client });
const regEx_staticDIR = new RegExp("^_next/static");
const regEx_dataDIR = new RegExp("^_next/data");
const regEx_publicIMG = new RegExp("^public\\/+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$");
const regEx_staticPageDIR = new RegExp("^static-pages");

const generateCacheArray = () => {
  const routes = manifest.routes;
  for (const key in routes) {
    if (routes[key].initialRevalidateSeconds) {
      cache_routes[key.substring(1) + ".html"] = routes[key].initialRevalidateSeconds;
      cache_routes[routes[key].dataRoute.substring(1)] = routes[key].initialRevalidateSeconds;
      if (routes[key].srcRoute && routes[key].srcRoute != null) {
        cache_routes[routes[key].srcRoute.substring(1) + ".html"] = 0;
      }
    }
  }
}

const syncS3 = async () => { 
  await sync('./deploy/.serverless_nextjs/assets', 's3://beatsnext-int', { 
    del: true,
    commandInput: {
      ContentType: (syncCommandInput) => (
          mime.lookup(syncCommandInput.Key)
      ),
      CacheControl: (syncCommandInput) => (
        cacheControlLookup(syncCommandInput.Key)
      ),
      Expires: (syncCommandInput) => (
        expiresLookup(syncCommandInput.Key)
      ), 
    },
  });
}

const cacheControlLookup = (key) => {
  if (key.match(regEx_staticDIR)) return "public, max-age=31536000, immutable";
  if (key.match(regEx_publicIMG)) return "public, max-age=31536000, must-revalidate";
  if (key.match(regEx_staticPageDIR)) {
    const splitRoute = key.split("/").slice(2).join('/');
    if (splitRoute in cache_routes) {
      if (cache_routes[splitRoute] === 0) return "public, max-age=0, s-maxage=0, must-revalidate";
    } else {  
      return "public, max-age=0, s-maxage=2678400, must-revalidate";
    }
  }
  if (key.match(regEx_dataDIR)) {
    if (key in cache_routes) {
      if (cache_routes[key] === 0) return "public, max-age=0, s-maxage=0, must-revalidate";
    } else {  
      return "public, max-age=0, s-maxage=2678400, must-revalidate";
    }
  }
  return null;
}

const expiresLookup = (key) => {
  if (key.match(regEx_staticPageDIR)) {
    const splitRoute = key.split("/").slice(2).join('/');
    if (splitRoute in cache_routes) {
      if (cache_routes[splitRoute] !== 0) {
        let date = new Date();
        date.setSeconds(date.getSeconds() + cache_routes[splitRoute]);
        return date;
      }
    }
  }
  if (key.match(regEx_dataDIR)) {
    if (key in cache_routes) {
      if (cache_routes[key] !== 0) {
        let date = new Date();
        date.setSeconds(date.getSeconds() + cache_routes[key]);
        return date;
      }
    }
  }
  return null;
}

generateCacheArray();
syncS3();

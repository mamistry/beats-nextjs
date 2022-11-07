local lib = import 'common/lib.libsonnet';
local envs = import 'common/envs.libsonnet';

{} + {
    [env.name + '.json']: {
      web: {
        component: '@sls-next/serverless-component@3.7.0-alpha.11',
        inputs: {
          domain: [env.subDomain, env.domain],
          bucketName: env.s3Bucket,
          nextConfigDir: '../',
          build: {
            cmd: './build.sh',
            args: ''
          },
          cloudfront: {
            defaults: {
              viewerProtocolPolicy: 'redirect-to-https'
            },
            certificate: {
              acmCertificateArn: env.cert
            },
            aliases: [env.subDomain + "." + env.domain]
          }
        }
      }
    }
    for env in envs.environments
  }
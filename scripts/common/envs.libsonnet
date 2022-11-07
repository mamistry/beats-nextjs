{
  environments: [
    {
      name: 'dev', 
      domain: 'nonprod.wmsports.io',
      subDomain: 'gsp-nextjs-bp-dev',
      s3Bucket: "gsp-dev-nextjs-bucket",
      cert: 'arn:aws:acm:us-east-1:152471664880:certificate/2c319a14-499e-4f0e-8df4-5012a620a812',
    },
    {
      name: 'qa', 
      domain: 'nonprod.wmsports.io',
      subDomain: 'gsp-nextjs-bp-qa',
      s3Bucket: "gsp-qa-nextjs-bucket",
      cert: 'arn:aws:acm:us-east-1:152471664880:certificate/2c319a14-499e-4f0e-8df4-5012a620a812',
      needs: 'dev'
    }
  ]
}

{
  environments: [
    {
      name: 'dev', 
      domain: 'testdomain.io',
      subDomain: 'beats-nextjs-dev',
      s3Bucket: "beats-dev-nextjs-bucket",
      cert: '',
    },
    {
      name: 'qa', 
      domain: 'testdomain.io',
      subDomain: 'beats-nextjs-qa',
      s3Bucket: "beats-qa-nextjs-bucket",
      cert: '',
      needs: 'dev'
    }
  ]
}

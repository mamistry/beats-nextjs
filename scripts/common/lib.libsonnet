{
  deploy_service(
        keyId = "${{ secrets.AWS_ACCESS_KEY_ID }}", 
        accessKey = "${{ secrets.AWS_SECRET_ACCESS_KEY }}",
        environment="Development",
        serverAlias=null,
        s3Bucket=null,
        needs=null
    ):: {
      environment: {
        name: environment
      },
      name: "Deploy to " + environment,
      needs: [if needs != null then 'Deploy-To-' + needs else 'Test'],
      "runs-on":"ubuntu-latest",
      steps: [
        {
          name: "Checkout",
          uses: "actions/checkout@v2",
          with: {
              token: "${{ secrets.GITHUB_TOKEN }}",
              "fetch-depth": 2
          },
        },
        {
          name: "Install node.js",
          uses: "actions/setup-node@v1",
          with: {
              "node-version": "14.x"
          }
        },
        {
          name: "Configure AWS credentials",
          uses: "aws-actions/configure-aws-credentials@v1",
          with: {
            "aws-access-key-id": keyId, 
            "aws-secret-access-key": accessKey, 
            "aws-region": "us-east-1"
          }
        },
        {
          uses:"c-hive/gha-yarn-cache@v2"
        },
        {
          name: 'Download serverless state from S3',
          run: "aws s3 sync s3://gsp-serverless-state-bucket/" + s3Bucket + "/.serverless apps/web/deploy/" + environment + "/.serverless"
        },
        {
          name: "Install and Deploy",
          env: {
            ENV: environment,
            SERVERALIAS: serverAlias,
            S3BUCKET: s3Bucket
          },
          run: "yarn top-jfrog-login\nyarn install\nNODE_ENV=" + environment + " yarn nx affected --target=build --base=$(git rev-parse @~) HEAD=$GITHUB_REF\nyarn nx affected --target=deploy --base=$(git rev-parse @~) HEAD=$GITHUB_REF --env=" + environment
        },
        {
          name: 'Upload serverless state from S3',
          run: "aws s3 sync apps/web/deploy/" + environment + "/.serverless s3://gsp-serverless-state-bucket/" + s3Bucket + "/.serverless"
        },
      ]
    }
}
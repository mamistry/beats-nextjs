local lib = import 'common/lib.libsonnet';
local envs = import 'common/envs.libsonnet';

local triggerCondition = {
    push: {
        branches: ["main"],
    }
};

{
  name: "Continious Integration",
  on: triggerCondition,
  env: {
      NPM_PASSWORD: "${{ secrets.NPM_PASSWORD }}",
      NPM_USERNAME: "${{ secrets.NPM_USERNAME }}",
      NPM_EMAIL: "${{ secrets.NPM_EMAIL }}"
  },
  jobs: {
    Test: {
      name: "Test",
      "runs-on": "ubuntu-latest",
      steps: [
        {
          name: "Checkout",
          uses: "actions/checkout@v2",
          with: {
              token: "${{ secrets.GITHUB_TOKEN }}",
              "fetch-depth": 1
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
          uses:"c-hive/gha-yarn-cache@v2"
        },
        {
          name: "Running Test",
          run: |||
              yarn
              yarn lint
              yarn test
          |||
        },
      ],
    },
  } + {
    ['Deploy-To-' + env.name]: lib.deploy_service(
      environment=env.name,
      serverAlias=env.subDomain + "." + env.domain,
      s3Bucket=env.s3Bucket,
      needs=if "needs" in env then env.needs else null
    )
    for env in envs.environments
  }
}  


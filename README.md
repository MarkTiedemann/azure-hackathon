# azure-hackathon

## Tasks

**Meta**

- Setup a Kanban board in Azure DevOps and add your work items.
- Create a Slack team and invite your teammates. Create a Slack channel and connect it with Azure DevOps.
- Create an info sheet that compares Azure DevOps Services and Central Platform Services (CPS).

**Product**

- Track "aborted ratings" (page was opened, but rating was never submitted). Add this metric to the admin dashboard.
- Add a textbox for additional feedback on the rating page. Add a table with the feedback in the admin dashboard. Create a CSV download for the feedback.
- Create and execute manual test cases for your features using Azure DevOps Test Plans.
- Come up with potential new features and improvements. Add them to the backlog. Plan the next sprint.

**DevOps**

- Import the Git repository from CPS into Azure DevOps.
- Setup Azure Pipelines to run the build and tests on each push.
- Schedule a recurring, automated [dependency vulnerability audit](https://yarnpkg.com/lang/en/docs/cli/audit/) using Azure Pipelines.
- Connect the app with Azure Application Insights. Setup alerts for possible issues. Track a custom metric (e.g. aborted ratings).
- Replace the in-memory database of the app with Azure Cosmos DB or another database.
- Create a Dockerfile for the app. Build a Docker image. Push the image into an Azure Container Registry.
- Create a Kubernetes.yaml file which declares a service and a deployment. Continuously deploy the app into the Kubernetes cluster.
- Run a load test using [`autocannon`](https://github.com/mcollina/autocannon) on your local machine. Run a load test for the deployed app using Azure DevOps Load Tests.
- Extract some functionality of the app into a seperate NPM package. Publish the NPM package to Azure DevOps Artifacts. Import the package into the app.

## Development

**Requirements**

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

**Commands**

- `yarn install`: Install the dependencies
- `yarn format`: Format the code
- `yarn build`: Compile TypeScript to JavaScript
- `yarn test`: Run the tests
- `yarn start`: Start the app

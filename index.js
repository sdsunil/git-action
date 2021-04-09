const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const issueTitle = core.getInput("issue-title");
  const jokeBody = core.getInput("joke");
  const token = core.getInput("repo-token");
  console.log(`My Hello ${issueTitle}!`);
  console.log(`My Hello ${jokeBody}!`);
  console.log(`My Hello ${token}!`);
  const sum = '12'
  core.setOutput("sum", sum);
  let sub ='1'
  core.setOutput("sub", sub);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
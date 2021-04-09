const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const firstInp = core.getInput('numOctocats');
  const secondInp = core.getInput('octocatEyeColor');
  console.log(`My Hello ${firstInp}!`);
  console.log(`My Hello ${secondInp}!`);
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
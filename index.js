const core = require('@actions/core');
const axios = require('axios').default;

try {
  const baseURL = core.getInput('baseURL');
  const componentId = core.getInput('componentId');
  const versionId = core.getInput('versionId');
  const secret = core.getInput('secret');
  const payload = core.getInput('payload');

  const url = `${baseURL}/component/code-push?componentId=${componentId}&versionId=${versionId}`;
  const reqPayload = JSON.parse(payload);
  const config = {
    headers: {
      "X-GitHub-Event": "push",
      "X-Hub-Signature-256": secret,
      "Action": "auto-deploy"
    }
  };

  console.log("Payload : ", payload);
  axios.post(url, reqPayload, config).then(
    () => {
      console.log("choreo-code-push-trigger", "saved");
    }
  ).catch((error => {
        console.error('Error', error);
        if (error.response) {
            console.log("choreo-status", error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
            console.log("choreo-status", "failed");
        }
    })
  )   
} catch (e) {
    console.log("choreo-code-push-trigger", "failed");
    console.log("choreo-code-push-trigger", e.message);
}

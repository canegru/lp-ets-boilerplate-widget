/**
 * Used to initialize the Agent Widget SDK
 */


const notificationCallback = (notificationData) => {
  console.log('blaaaaaaaaaaaaaaaaaaa', notificationData)
};

const AgentSdk = {
  init: () => {
    try {
      window.lpTag.agentSDK.init({
        notificationCallback
      });
    } catch (e) {

    }
  }
}

export default AgentSdk
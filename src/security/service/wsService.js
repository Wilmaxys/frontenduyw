import { Client } from '@stomp/stompjs';

export const initializeWS = () => {
  if(client === null || !client.activate){
    client = new Client();

    client.configure({
      brokerURL: 'ws://localhost:8080/stomp',
    });

    client.activate();
  }
};

const waitFor = (conditionFunction) => {

  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }

  return new Promise(poll);
}


export const subscribe = (path, callback) => {
  subscription = [...subscription, client.subscribe(path, callback)]
}

export const unsubscribeALL = () => {
  console.log(subscription);

  subscription.forEach(element => {
    console.log("succeed");
    element.unsubscribe();
  });
}

export const publish = (path, body) => {
  client.publish({destination: path, body: JSON.stringify(body)});
}

export const waitForConnect = async () => {
  await waitFor(_ => client.connected === true);
}

export let client = null;
export let subscription = [];



    
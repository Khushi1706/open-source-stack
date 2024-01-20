// src/background.ts
import { MessageType } from '@oss/api-interfaces';

const sendSnowStatus = (isEnabled: boolean) => {
  const message = { type: 'TOGGLE_STATUS', isEnabled };
  // send message to popup
  chrome.runtime.sendMessage(message);

  // send message to every active tab
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, message);
      }
    });
  });
};

chrome.runtime.onMessage.addListener(
  (message: MessageType, sender, sendResponse) => {
    console.log('message', message, sender);
    switch (message.type) {
      case 'TOGGLE_STATUS':
        console.log('Here I am');
        sendResponse({ farewell: 'helllooo' });
        break;
      default:
        break;
    }
    return true;
  }
);

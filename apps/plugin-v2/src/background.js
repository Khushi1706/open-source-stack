chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'FETCH_URL') {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      sendResponse({
        data: {
          url: tabs[0]?.url,
        },
        status: 'success',
      });
    });
  }
  return true;
});

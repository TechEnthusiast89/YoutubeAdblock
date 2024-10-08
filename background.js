let filterList = [];

fetch(chrome.runtime.getURL('filterlist.txt'))
  .then(response => response.text())
  .then(text => {
    filterList = text.split('\n').filter(line => line && !line.startsWith('!'));
  });

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    for (let filter of filterList) {
      if (details.url.includes(filter)) {
        return { cancel: true };
      }
    }
    return { cancel: false };
  },
  { urls: ["*://*.youtube.com/*", "*://*.googlevideo.com/*"] },
  ["blocking"]
);

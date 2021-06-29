let color = '#3aa757';

let ticker;

console.log("ticker: ", ticker);

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  ticker = 0;
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'get-ticker') {
    sendResponse(ticker);
    ticker++;
  }
});
chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) {
    throw new Error("Tab ID is not available");
  }
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});

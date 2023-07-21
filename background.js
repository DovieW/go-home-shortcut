chrome.action.onClicked.addListener((tab) => {
  navigateToHomepage(tab);
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "_execute_browser_action") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      navigateToHomepage(tabs[0]);
    });
  }
});

function navigateToHomepage(tab) {
  const url = new URL(tab.url);
  const homepage = url.protocol + "//" + url.hostname;
  chrome.tabs.update(tab.id, { url: homepage });
}

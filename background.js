// Listen for when the user presses the keyboard shortcut
chrome.commands.onCommand.addListener((command) => {
  if (command === "go_home") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      navigateToHomepage(tabs[0]);
    });
  }
});

// Function to navigate to the homepage
function navigateToHomepage(tab) {
  const url = new URL(tab.url);
  const homepage = url.protocol + "//" + url.hostname;
  chrome.tabs.update(tab.id, { url: homepage });
}
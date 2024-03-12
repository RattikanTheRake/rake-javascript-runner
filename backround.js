// Listen for clicks on the extension icon
chrome.action.onClicked.addListener((tab) => {
  // Open the popup when the icon is clicked
  chrome.action.openPopup();
});

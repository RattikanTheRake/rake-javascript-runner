// Function to run the code based on selected language
function runCode() {
  // Get the selected language
  var language = document.getElementById('language').value;

  // Get the code from the textarea
  var code = document.getElementById('code').value;

  // Execute the code based on the selected language
  if (language === 'lua') {
    // Execute Lua code
    // (You'll need to implement Lua execution logic)
  } else if (language === 'css') {
    // Execute CSS code
    chrome.tabs.insertCSS({ code: code });
  } else if (language === 'javascript') {
    // Execute JavaScript code
    chrome.tabs.executeScript({ code: code });
  }
}

// Run the code when the button is clicked
document.getElementById('run').addEventListener('click', runCode);

'use strict';

// Service worker for StoryPoint for Asana
chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === 'install') {
    console.log('StoryPoint for Asana installed');
  } else if (details.reason === 'update') {
    console.log('StoryPoint for Asana updated from', details.previousVersion);
  }
});

console.log('StoryPoint for Asana service worker initialized');

// Development reloading
if (process.env.NODE_ENV === 'development') {
  let lastReload = Date.now();
  
  // Listen for reload messages from development server
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'RELOAD_EXTENSION') {
      const currentTime = Date.now();
      if (currentTime - lastReload > 60000) { // Don't reload more than once a minute
        lastReload = currentTime;
        chrome.runtime.reload();
      }
    }
  });
}

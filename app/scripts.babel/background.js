'use strict';

// Service worker for StoryPoint for Asana
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === 'install') {
    console.log('StoryPoint for Asana installed');
  } else if (details.reason === 'update') {
    console.log('StoryPoint for Asana updated from', details.previousVersion);
  }
});

console.log('StoryPoint for Asana service worker initialized');

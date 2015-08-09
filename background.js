function resetDefaultSuggestion() {
    chrome.omnibox.setDefaultSuggestion({
    description: 'dapi: Search the Drupal API for %s'
    });
  }
  resetDefaultSuggestion();

 function navigate(url) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
    });
  }

 chrome.omnibox.onInputEntered.addListener(function(text) {
    navigate("https://api.drupal.org/api/drupal/7/search/" + text);
  });
document.getElementById('start').addEventListener('click', function() {
  chrome.storage.sync.remove(['confirmed']);
});

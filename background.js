

chrome.tabs.onRemoved.addListener(function(tabid, removed) {

  chrome.tabs.query({}, function(tabs) {
    chrome.storage.sync.get(function(data) {
        let found = false;
        for (var i = 0; i < tabs.length; i++) {
          let url = new URL(tabs[i].url);
          if (data.confirmed == url.hostname) {
            found = true;
          }
        }

        if (!found) {
          chrome.storage.sync.remove(['confirmed']);
        }
  });

});

});



chrome.webNavigation.onCompleted.addListener( function() {
    chrome.tabs.query({active: true}, function(tab) {
      let url = new URL(tab[0].url);
      let base_url = url.hostname;
      chrome.storage.sync.remove(['back'], function(){
        chrome.storage.sync.set({back: tab[0].url}, function() {
          chrome.storage.sync.get(function(data){
            if (data.url.includes(base_url) && !data.back.includes(data.confirmed)) {
              console.log(data.back + " " + data.confirmed);
              chrome.tabs.update({
                url: 'enterPassword.html',
                active: true
              });
            }
          });
        });
      });
    });
  });

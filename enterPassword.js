/*chrome.webNavigation.onCompleted.addListener(function(){
  chrome.tabs.query({active: true}, function(tab) {
    let url = new URL(tab[0].url);
    let base_url = url.hostname;

    chrome.storage.sync.get(['url'], function(data){
      if (data.url.includes(base_url)) {
        let psd = prompt("Enter Password");
        if (psd != data.pass) {
          alert("Wrong Password!");
        }
      }
    });
  });

});*/

document.getElementById('sub').addEventListener("click", function() {
  chrome.storage.sync.get(data => {

    if (data.pass == document.getElementById('pwd').value && data.back != data.confirmed) {
        chrome.tabs.update({
          url: data.back,
          active: true

      });

      let u = new URL(data.back);
      chrome.storage.sync.set({confirmed: u.hostname});
    }
    else {
      alert("Wrong password");
    }
  });
});

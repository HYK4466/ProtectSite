var start_flag = false;
document.getElementById("cond").innerHTML = "Stopped";




function getStorage(callback) {
  chrome.storage.sync.get((data) => {
    callback(data.url, data.pass);
  });
}

document.getElementById('start').addEventListener("click", function() {
  start_flag = !start_flag;
  console.log(start_flag);
  if (start_flag) {
    document.getElementById("cond").innerHTML = "Started";
  }
  else {
    document.getElementById("cond").innerHTML = "Stopped";
  }

  getStorage((url, pass) => {
    console.log(url + " " + pass);
  });
});

document.getElementById('save').addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
    let base_url = tab[0].url;
    let urlObj = new URL(base_url);
    var s = urlObj.hostname;
    var urlString = "";
    chrome.storage.sync.get(['url'], function(data){
      if (data.url != null && !data.url.includes(s)) {
        urlString = urlString + data.url + s+",";
        chrome.storage.sync.set({url: urlString}, function() {
          console.log("stored " + urlString);
      });
      }
      else if (data.url == null) {
        urlString = urlString + s+",";
        chrome.storage.sync.set({url: urlString}, function() {
          console.log("stored " + urlString);
        });
      }
    });
  });
});

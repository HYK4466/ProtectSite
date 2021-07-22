
chrome.storage.sync.get(function(data) {
  let pr = data.url;
  if (data.url == null || data.url =="") {
    pr = null;
  }
  document.getElementById("listed").innerHTML =  pr + "<br>" + data.confirmed;

});

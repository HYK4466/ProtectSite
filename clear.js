let li = document.getElementById("list");

if (li) {
  li.addEventListener("click", function() {
    chrome.tabs.create( {
      active: true,
      url: "list.html"
    });
  });
}

let su = document.getElementById("sub");

if (su) {
  su.addEventListener("click", function() {
    chrome.storage.sync.get(function(data){
        var urlString = data.url;
        let val = document.getElementById('pwd').value;

        if (urlString != null && urlString.includes(val)) {

            let t = urlString.replace(val, "");

            chrome.storage.sync.set({url: t}, function() {
              console.log(t);
            });
        }




    });
  });
}


let sa = document.getElementById("suball");

if (sa) {
  sa.addEventListener("click", function() {
    chrome.storage.sync.remove(["url"]);
  });
}

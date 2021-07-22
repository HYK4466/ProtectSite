

  document.getElementById("sub").onclick = function() {
    if (document.getElementById('pwd').value == document.getElementById('repwd').value) {
      chrome.storage.sync.remove(["pass"]);
      console.log("cleared");


      chrome.storage.sync.get(['pass'], function(data){
        console.log("GOT " + data.pass);

      });

      chrome.storage.sync.set({pass: document.getElementById('pwd').value}, function() {
        console.log("ADDED " + document.getElementById('pwd').value);
      });
      window.location.replace("main.html");
    }
    else {
      console.log("not added");
      document.getElementById('a').innerHTML = "Confirmation password does not match.";
    }
  };

var J_KEY_CODE = 74; //Next song
var N_KEY_CODE = 78;//Previous song

document.addEventListener("keydown", function(event){
    if (event.altKey && event.keyCode == J_KEY_CODE) {
        console.log('J pressed');
        chrome.extension.sendRequest({
            'next': true
        });
    }

    if (event.altKey && event.keyCode == N_KEY_CODE) {
        console.log('N pressed');
      /*
      var tabNameLoc = prompt("Name your tab");
      if (tabNameLoc) {
        chrome.extension.sendRequest({name_tab: true, tabName: tabNameLoc});
      }
      */
    }

    
}, false);
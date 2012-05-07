document.addEventListener("keydown", function(event){
    if (event.altKey && event.keyCode == 75) { //k pressed
        log('J pressed');
        chrome.extension.sendRequest({
            'next': true
        });
    }

    if (event.altKey && event.keyCode == 80) {//p pressed
        log('N pressed');
        chrome.extension.sendRequest({
            'toggle': true
        });
    }

    function log(str) {
        //console.log(str);
    }
    
}, false);

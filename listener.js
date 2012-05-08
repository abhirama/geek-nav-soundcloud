document.addEventListener("keydown", function(event){
    if (event.altKey && event.keyCode == 75) { //k pressed
        log('j pressed');
        chrome.extension.sendRequest({
            'next': true
        });
    }

    if (event.altKey && event.keyCode == 80) {//p pressed
        log('n pressed');
        chrome.extension.sendRequest({
            'toggle': true
        });
    }

    if (event.altKey && event.keyCode == 77) {//m pressed
        log('m pressed');
        chrome.extension.sendRequest({
            'favorite': true
        });
    }

    function log(str) {
        console.log(str);
    }
    
}, false);

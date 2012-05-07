var J_KEY_CODE = 74; //Next song
var N_KEY_CODE = 78;//Previous song

document.addEventListener("keydown", function(event){
    if (event.altKey && event.keyCode == J_KEY_CODE) {
        console.log('J pressed');

        chrome.extension.sendRequest({});


        /*
        var songLinks = $('.tracks-list > .player .play');

        var nextSongBlock = getNextSongBlock(getCurrentlyPlaying());

        var linkToClick;

        if (!nextSongBlock.length) {
            linkToClick = getNextPageLink();    
        } else {
            linkToClick = getPlayLink(nextSongBlock)
        }

        clickThisLink(linkToClick);

      /*
      var tabNameLoc = prompt("Jump to");
      if (tabNameLoc) {
        chrome.extension.sendRequest({jump_tabs: true, tabName: tabNameLoc});
      }*/
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

    function clickThisLink(link) {
        var e = document.createEvent('MouseEvents');
        e.initEvent('click', true, true);
        console.log(link.toString())
        link[0].dispatchEvent(e);
    }

    function getCurrentlyPlaying() {
        return $('.tracks-list > .player .play.playing').first();
    }

    function getNextSongBlock(currentlyPlaying) {
        log('Currently playing length:' + currentlyPlaying.length);
        var currentPlayer = currentlyPlaying.parents('.tracks-list > .player').first();    

        log(currentPlayer);

        log(currentPlayer.next());

        var nextPlayer = currentPlayer.nextAll().first(); 
        log('Length of next player:' + nextPlayer.length);
        return nextPlayer;
    }

    function getPlayLink(elem) {
        return elem.find('.play').first();
    }

    function getNextPageLink() {
        return $('.next_page').first();
    }

    function log(str) {
        console.log(str)
    }
    
}, false);

(function() {
    chrome.app.runtime.onLaunched.addListener(start);
    chrome.runtime.onInstalled.addListener(start);

    function start() {
        chrome.app.window.create('views/window.html',
            {
                'innerBounds': {
                      'width': 400,
                      'height': 665,
                      'minWidth': 700,
                      'minHeight': 600,
                      'maxWidth': 300,
                      'maxHeight': 600
                }, frame : {'color' : '#26262B'},
                id: 'whatsapp'
            },
            onWindowCreated
        );
    }

    function onWindowCreated(appWin) {
        //nothing for now 
    }

}());
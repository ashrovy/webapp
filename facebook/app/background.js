(function() {
    chrome.app.runtime.onLaunched.addListener(start);
    chrome.runtime.onInstalled.addListener(start);

    function start() {
        chrome.app.window.create('views/window.html',
            {
                'innerBounds': {
                      'width': 400,
                      'height': 665,
                      'minWidth': 350,
                      'minHeight': 600,
                      'maxWidth': 310,
                      'maxHeight': 600
                },
                id: 'whatsapp', frame : {'color' : '#3B5898'}
            },
            onWindowCreated
        );
    }

    function onWindowCreated(appWin) {
        //nothing for now 
    }

}());
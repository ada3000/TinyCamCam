// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var element = document.getElementById("deviceready");
        element.innerHTML = 'Device Ready 1';
        element.className += ' ready';

        document.getElementsByClassName("js-ir-on")[0].onclick = function (ev)
        {
            var x = $.get("http://5.5.5.141/light-command.py?cmd=On:wardrobeIr");
            log.debug("click On");
            x.done(function ()
            {
                log.debug("On: success")
            });

            x.error(function (e1, e2, e3)
            {
                log.error("On: error, " + e1 + " " + e2 + " " + e3);
            });

        };

        document.getElementsByClassName("js-ir-off")[0].onclick = function (ev)
        {
            var x = $.get("http://5.5.5.141/light-command.py?cmd=Off:wardrobeIr");
            log.debug("click Off");
            x.done(function ()
            {
                log.debug("Off: success")
            });

            x.error(function (e1, e2, e3)
            {
                log.error("Off: error, " + e1 + " " + e2 + " " + e3);
            });
        };
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
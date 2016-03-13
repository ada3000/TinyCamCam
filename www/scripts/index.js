// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    var layoutState =
        {
            headerIsVisible: false,
            layoutClass: "layout-2",
            pageId:0
        };

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
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

        $(".js-app-layout").click(layout_click);

        updateCameraLits();
        updateUI();
    };

    function updateCameraLits()
    {
        var items = $(".js-app-layout").empty();
        var camIds = App.Profile.Cameras.items();

        for (var i = 0; i < camIds.length; i++)
        {
            var camera = App.Profile.Cameras.get(camIds[i]);
            var node = $("<div class='camera'><img class='camera-view'/></div>").appendTo(items);
            node.find("img").attr("src",camera.url);
        }
    };

    function updateUI()
    {
        $(".js-app-layout-header")[layoutState.headerIsVisible ? "slideDown" : "slideUp"]("fast");
        $(".js-app-layout")[0].className = "js-app-layout " + layoutState.layoutClass;
    };

    function layout_click()
    {
        layoutState.headerIsVisible = !layoutState.headerIsVisible;
        updateUI();
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
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
        //alert(location.href.substr(location.href.lastIndexOf("/")+1).replace(".html",""));

        //return;

        var items = $(".js-items").empty();
        var camIds = App.Profile.Cameras.items();

        for(var i=0;i< camIds.length; i++)
        {
            var camera = App.Profile.Cameras.get(camIds[i]);
            var node = $("<li><a href='#' class='ui-btn ui-btn-icon-right ui-icon-carat-r'></a></li>").appendTo(items);
            node.find("a")
                .text(camera.name)
                .data("id", camera.id)
                .click(cameraItemClick);
        }
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function cameraItemClick(ev)
    {
        var id = $(this).data("id");
        App.PageStorage.store("cameraId", { id: id }, "cameraItem");
        location.href = 'cameraItem.html';
    }

    window.addCamera = function()
    {
        App.PageStorage.del("cameraId", "cameraItem");
        location.href = 'cameraItem.html';
    };

} )();
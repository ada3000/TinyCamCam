// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function ()
{
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    var curCamera =
        {
            id: null,
            name: "",
            type: "MJPEG",
            url: ""
        };

    function onDeviceReady()
    {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        var cameraId = App.PageStorage.load("cameraId");
        if (cameraId != null) {
            curCamera = App.Profile.Cameras.get(cameraId.id);
        }

        updateIU();
    };

    function updateIU()
    {
        $(".js-name").val(curCamera.name);
        $(".js-url").val(curCamera.url);

        if (curCamera.type == "MJPEG")
            $("#radio-choice-mjpeg").prop("checked", true);
        else
            $("#radio-choice-snapshot").prop("checked", true);
    };

    function updateModel()
    {
        curCamera.name = $(".js-name").val();
        curCamera.url = $(".js-url").val();
        curCamera.type = $("#radio-choice-mjpeg").prop("checked") ? "MJPEG" : "SNAPSHOT";
    };

    window.saveAndBack = function ()
    {
        updateModel();

        if (curCamera.name == "")
            return navigator.notification.alert("Camera name not set!");
        if (curCamera.url == "")
            return navigator.notification.alert("Camera url not set!");

        if (curCamera.id == null)
        {
            curCamera.id = new Date().getTime();
            App.Profile.Cameras.add(curCamera);
        }
        else
            App.Profile.Cameras.update(curCamera);

        location.href = 'cameraList.html';
    };

    window.deleteCamera = function ()
    {
        if (curCamera.id != null)
            App.Profile.Cameras.del(curCamera.id);

        location.href = 'cameraList.html';
    };

    function onPause()
    {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume()
    {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();
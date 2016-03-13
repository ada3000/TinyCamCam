// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function ()
{
    "use strict";

    window.App = window.App || {};

    var keyPrefix = "app_profile_";
    /*
        camera= 
        {
            id: 1,
            name: "name",
            type: "MJPEG",//or "SNAPSHOT"
            url: "http://",
            updateIntervalMSec: 1000, //1000 = 1s
            login: "",
            password:""
        }
    */
    window.App.Profile =
        {
            Cameras: 
                {
                    items: function()
                    {
                        var ids = App.ProfileStorage.load("cameras_ids") || [];
                        return ids;
                    },
                    add: function(camera)
                    {
                        var ids = this.items();
                        ids.push(camera.id);

                        App.ProfileStorage.store("cameras_ids", ids);
                        App.ProfileStorage.store("cameras_config_" + camera.id, camera);
                    },
                    update: function (camera)
                    {
                        App.ProfileStorage.store("cameras_config_" + camera.id, camera);
                    },
                    del: function(id)
                    {
                        var ids = this.items();
                        var newIds = [];
                        for (var i = 0; i < ids.length; i++)
                            if (ids[i]!=id)
                                newIds.push(ids[i])

                        App.ProfileStorage.store("cameras_ids", newIds);
                        App.ProfileStorage.del("cameras_config_" + id);
                    },
                    get: function(id)
                    {
                        return App.ProfileStorage.load("cameras_config_" + id);
                    }
                }
        };

})();
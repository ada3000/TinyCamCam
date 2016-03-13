// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function ()
{
    "use strict";

    window.App = window.App || {};

    var keyPrefix = "app_profile_";

    window.App.ProfileStorage =
        {
            load: function (key)
            {
                var item = localStorage.getItem(keyPrefix + key);
                return item !== null ? JSON.parse(item) : null;
            },
            store: function (key, data)
            {
                localStorage.setItem(keyPrefix + key, JSON.stringify(data));
            },
            del: function (key)
            {
                localStorage.removeItem(keyPrefix + key);
            }
        };

})();
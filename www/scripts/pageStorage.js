// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function ()
{
    "use strict";

    window.App = window.App || {};

    var keyPrefix = "app_profile_";

    function validatePageId(pageId)
    {
        return pageId == null ? location.href.substr(location.href.lastIndexOf("/") + 1).replace(".html", "") : pageId;
    };

    window.App.PageStorage =
        {
            load: function (key, pageId)
            {
                pageId = validatePageId(pageId);
                var item = sessionStorage.getItem(keyPrefix + key + pageId);
                return item !== null ? JSON.parse(item) : null;
            },
            store: function (key, data, pageId)
            {
                pageId = validatePageId(pageId);
                sessionStorage.setItem(keyPrefix + key + pageId, JSON.stringify(data));
            },
            del: function (key, pageId)
            {
                pageId = validatePageId(pageId);
                sessionStorage.removeItem(keyPrefix + key + pageId);
            }
        };
})();
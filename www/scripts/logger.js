// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    if (window.log != null) return;

    function getLogNode()
    {
        var node = $("#logger_window");
        if(node.length==0)
        {
           node = $(document.body).append("<ul id='logger_window'/>");
        }

        return node;
    };

    window.log =
        {
            debug: function (msg)
            {
                var node = getLogNode();
                node.prepend("<li>" + msg + "</li>");
            },
            error: function (msg) { this.debug(msg); },
            info: function (msg) { this.debug(msg); }
        };

})();
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMainWindowId: function() {
            return a
        },
        getWindowId: function() {
            return o
        },
        setupWindowId: function() {
            return i
        }
    });
    var r = n("392711");

    function o(e) {
        return e.__DISCORD_WINDOW_ID
    }

    function i(e) {
        var t = (0, r.uniqueId)("window-");
        return e.__DISCORD_WINDOW_ID = t, t
    }

    function a() {
        return o(window)
    }
}
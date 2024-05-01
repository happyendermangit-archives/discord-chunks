function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMainWindowId: function() {
            return s
        },
        getWindowId: function() {
            return r
        },
        setupWindowId: function() {
            return a
        }
    });
    var i = n("392711");

    function r(e) {
        return e.__DISCORD_WINDOW_ID
    }

    function a(e) {
        let t = (0, i.uniqueId)("window-");
        return e.__DISCORD_WINDOW_ID = t, t
    }

    function s() {
        return r(window)
    }
}
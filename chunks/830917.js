function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMainWindowId: function() {
            return a
        },
        getWindowId: function() {
            return r
        },
        setupWindowId: function() {
            return s
        }
    });
    var i = n("392711");

    function r(e) {
        return e.__DISCORD_WINDOW_ID
    }

    function s(e) {
        let t = (0, i.uniqueId)("window-");
        return e.__DISCORD_WINDOW_ID = t, t
    }

    function a() {
        return r(window)
    }
}
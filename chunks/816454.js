function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        getWindowId: function() {
            return o
        },
        setupWindowId: function() {
            return n
        },
        getMainWindowId: function() {
            return r
        }
    });
    var t = E("917351");

    function o(e) {
        return e.__DISCORD_WINDOW_ID
    }

    function n(e) {
        let _ = (0, t.uniqueId)("window-");
        return e.__DISCORD_WINDOW_ID = _, _
    }

    function r() {
        return o(window)
    }
}
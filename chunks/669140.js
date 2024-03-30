function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("629815");
    t.default = {
        startTyping: function(e) {
            n.default.dispatch({
                type: "TYPING_START_LOCAL",
                channelId: e
            })
        },
        stopTyping: function(e) {
            n.default.dispatch({
                type: "TYPING_STOP_LOCAL",
                channelId: e
            })
        }
    }
}
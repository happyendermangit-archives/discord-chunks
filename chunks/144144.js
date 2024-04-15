function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140");
    t.default = {
        startTyping(e) {
            i.default.dispatch({
                type: "TYPING_START_LOCAL",
                channelId: e
            })
        },
        stopTyping(e) {
            i.default.dispatch({
                type: "TYPING_STOP_LOCAL",
                channelId: e
            })
        }
    }
}
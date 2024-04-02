function(t, e, i) {
    "use strict";
    i.r(e);
    var l = i("570140");
    e.default = {
        startTyping(t) {
            l.default.dispatch({
                type: "TYPING_START_LOCAL",
                channelId: t
            })
        },
        stopTyping(t) {
            l.default.dispatch({
                type: "TYPING_STOP_LOCAL",
                channelId: t
            })
        }
    }
}
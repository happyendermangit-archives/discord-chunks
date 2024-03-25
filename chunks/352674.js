function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return r
        }
    });
    var l = i("913144"),
        r = {
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
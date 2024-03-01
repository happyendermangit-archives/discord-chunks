function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var l = n("271938"),
        i = n("42203"),
        a = n("800762");

    function s() {
        let e = a.default.getVoiceStateForSession(l.default.getId(), l.default.getSessionId()),
            t = null == e ? void 0 : e.channelId;
        return i.default.getChannel(t)
    }
}
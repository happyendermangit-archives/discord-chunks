function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("271938"),
        l = n("42203"),
        a = n("800762");

    function s() {
        let e = a.default.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
            t = null == e ? void 0 : e.channelId;
        return l.default.getChannel(t)
    }
}
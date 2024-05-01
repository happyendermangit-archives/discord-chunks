function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("314897"),
        r = n("592125"),
        a = n("979651");

    function s() {
        let e = a.default.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
            t = null == e ? void 0 : e.channelId;
        return r.default.getChannel(t)
    }
}
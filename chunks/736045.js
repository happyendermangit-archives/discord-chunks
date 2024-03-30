function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("314897"),
        r = n("592125"),
        s = n("979651");

    function a() {
        let e = s.default.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
            t = null == e ? void 0 : e.channelId;
        return r.default.getChannel(t)
    }
}
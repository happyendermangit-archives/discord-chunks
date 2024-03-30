function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("217014"),
        o = n("935741"),
        i = n("665863");

    function a() {
        var e = i.default.getVoiceStateForSession(r.default.getId(), r.default.getSessionId()),
            t = null == e ? void 0 : e.channelId;
        return o.default.getChannel(t)
    }
}
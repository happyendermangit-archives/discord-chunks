function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("569492"),
        o = n("935741"),
        i = n("665863");

    function a(e) {
        var t, n = e.channelId,
            a = e.userId,
            u = e.activity,
            s = o.default.getChannel(n),
            l = (null == u ? void 0 : u.session_id) == null || null != s && (0, r.isTextChannel)(s.type) ? n : null === (t = i.default.getVoiceStateForSession(a, null == u ? void 0 : u.session_id)) || void 0 === t ? void 0 : t.channelId;
        return null != l ? l : void 0
    }
}
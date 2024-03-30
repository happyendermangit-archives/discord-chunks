function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("131704"),
        r = n("592125"),
        s = n("979651");

    function a(e) {
        var t;
        let {
            channelId: n,
            userId: a,
            activity: o
        } = e, l = r.default.getChannel(n), u = (null == o ? void 0 : o.session_id) == null || null != l && (0, i.isTextChannel)(l.type) ? n : null === (t = s.default.getVoiceStateForSession(a, null == o ? void 0 : o.session_id)) || void 0 === t ? void 0 : t.channelId;
        return null != u ? u : void 0
    }
}
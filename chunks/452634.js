function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("131704"),
        r = n("592125"),
        a = n("979651");

    function s(e) {
        var t;
        let {
            channelId: n,
            userId: s,
            activity: o
        } = e, l = r.default.getChannel(n), u = (null == o ? void 0 : o.session_id) == null || null != l && (0, i.isTextChannel)(l.type) ? n : null === (t = a.default.getVoiceStateForSession(s, null == o ? void 0 : o.session_id)) || void 0 === t ? void 0 : t.channelId;
        return null != u ? u : void 0
    }
}
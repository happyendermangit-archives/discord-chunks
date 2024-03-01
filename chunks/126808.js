function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var l = n("233069"),
        i = n("42203"),
        a = n("800762");

    function s(e) {
        var t;
        let {
            channelId: n,
            userId: s,
            activity: r
        } = e, o = i.default.getChannel(n), u = (null == r ? void 0 : r.session_id) == null || null != o && (0, l.isTextChannel)(o.type) ? n : null === (t = a.default.getVoiceStateForSession(s, null == r ? void 0 : r.session_id)) || void 0 === t ? void 0 : t.channelId;
        return null != u ? u : void 0
    }
}
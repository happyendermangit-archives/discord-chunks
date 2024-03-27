function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("564594"),
        a = n("871388"),
        s = n("429928"),
        r = n("49111"),
        o = n("423622");

    function u(e) {
        let {
            activity: t,
            user: n,
            color: u,
            look: d,
            guildId: c,
            channelId: f,
            source: m
        } = e;
        if (null == t || !(0, a.default)(t, r.ActivityFlags.PLAY) || !(0, s.default)(t)) return null;
        let p = {
            key: "play",
            className: o.button,
            size: o.buttonSize,
            color: u,
            look: d,
            activity: t,
            user: n,
            fullWidth: !0
        };
        return (0, i.jsx)(l.default, {
            guildId: null != c ? c : void 0,
            channelId: f,
            source: m,
            ...p
        })
    }
}
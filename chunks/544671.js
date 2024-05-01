function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("557711"),
        a = n("620662"),
        s = n("503438"),
        o = n("981631"),
        l = n("659485");

    function u(e) {
        let {
            activity: t,
            user: n,
            color: u,
            look: d,
            guildId: _,
            channelId: c,
            source: E
        } = e;
        if (null == t || !(0, a.default)(t, o.ActivityFlags.SYNC)) return null;
        let I = {
            key: "sync",
            className: l.button,
            size: l.buttonSize,
            color: u,
            look: d,
            user: n,
            activity: t
        };
        return (0, s.default)(t) ? (0, i.jsx)(r.default, {
            guildId: null != _ ? _ : void 0,
            channelId: c,
            source: E,
            ...I
        }) : null
    }
}
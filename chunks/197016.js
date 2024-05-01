function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("685072"),
        a = n("287734"),
        s = n("67212"),
        o = n("158631"),
        l = n("871499"),
        u = n("689938");

    function d(e) {
        let {
            centerButton: t = !1,
            channel: n,
            onClick: d,
            onMouseEnter: _,
            onMouseLeave: c,
            ...E
        } = e, I = t ? l.CenterControlButton : l.default, T = n.isBroadcastChannel(), f = (0, o.useIsBroadcastingInChannel)(n.id), {
            Component: S,
            events: h
        } = (0, r.useEndCallLottie)();
        return (0, i.jsx)(I, {
            ...E,
            onClick: () => {
                f && (0, s.stopBroadcast)(), a.default.disconnect(), null == d || d()
            },
            iconComponent: S,
            onMouseEnter: e => {
                null == _ || _(e), h.onMouseEnter()
            },
            onMouseLeave: e => {
                null == c || c(e), h.onMouseLeave()
            },
            label: f ? u.default.Messages.STOP_BROADCASTING : T ? u.default.Messages.LEAVE_BROADCAST : u.default.Messages.DISCONNECT_SELF
        })
    }
}
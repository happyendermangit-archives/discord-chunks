function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("653564"),
        s = n("987317"),
        l = n("713726"),
        i = n("754493"),
        u = n("981913"),
        o = n("782340");

    function d(e) {
        let {
            centerButton: t = !1,
            channel: n,
            onClick: d,
            onMouseEnter: c,
            onMouseLeave: f,
            ...h
        } = e, E = t ? u.CenterControlButton : u.default, p = n.isBroadcastChannel(), m = (0, i.useIsBroadcastingInChannel)(n.id), {
            Component: C,
            events: S
        } = (0, r.useEndCallLottie)();
        return (0, a.jsx)(E, {
            ...h,
            onClick: () => {
                m && (0, l.stopBroadcast)(), s.default.disconnect(), null == d || d()
            },
            iconComponent: C,
            onMouseEnter: e => {
                null == c || c(e), S.onMouseEnter()
            },
            onMouseLeave: e => {
                null == f || f(e), S.onMouseLeave()
            },
            label: m ? o.default.Messages.STOP_BROADCASTING : p ? o.default.Messages.LEAVE_BROADCAST : o.default.Messages.DISCONNECT_SELF
        })
    }
}
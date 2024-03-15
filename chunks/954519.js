function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("607837"),
        i = n("981913"),
        o = n("782340");

    function r(e) {
        let {
            isSelfStream: t,
            centerButton: n = !1,
            onMouseEnter: r,
            onMouseLeave: s,
            ...d
        } = e, u = n ? i.CenterControlButton : i.default, {
            Component: c,
            events: p
        } = (0, l.useScreenshareLottie)("off");
        return (0, a.jsx)(u, {
            label: t ? o.default.Messages.STOP_STREAMING : o.default.Messages.STOP_WATCHING,
            iconComponent: c,
            isActive: !0,
            onMouseEnter: e => {
                null == r || r(e), p.onMouseEnter()
            },
            onMouseLeave: e => {
                null == s || s(e), p.onMouseLeave()
            },
            ...d
        })
    }
}
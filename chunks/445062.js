function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("864094"),
        s = n("871499"),
        a = n("689938");

    function o(e) {
        let {
            isSelfStream: t,
            centerButton: n = !1,
            onMouseEnter: o,
            onMouseLeave: l,
            ...u
        } = e, d = n ? s.CenterControlButton : s.default, {
            Component: _,
            events: c
        } = (0, r.useScreenshareLottie)("disable");
        return (0, i.jsx)(d, {
            label: t ? a.default.Messages.STOP_STREAMING : a.default.Messages.STOP_WATCHING,
            iconComponent: _,
            isActive: !0,
            onMouseEnter: e => {
                null == o || o(e), c.onMouseEnter()
            },
            onMouseLeave: e => {
                null == l || l(e), c.onMouseLeave()
            },
            ...u
        })
    }
}
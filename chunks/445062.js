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
        a = n("871499"),
        s = n("689938");

    function o(e) {
        let {
            isSelfStream: t,
            centerButton: n = !1,
            onMouseEnter: o,
            onMouseLeave: l,
            ...u
        } = e, d = n ? a.CenterControlButton : a.default, {
            Component: _,
            events: c
        } = (0, r.useScreenshareLottie)("disable");
        return (0, i.jsx)(d, {
            label: t ? s.default.Messages.STOP_STREAMING : s.default.Messages.STOP_WATCHING,
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
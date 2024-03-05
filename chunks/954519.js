function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("985622"),
        s = n("356553"),
        i = n("981913"),
        l = n("782340");

    function u(e) {
        let {
            isSelfStream: t,
            centerButton: n = !1,
            ...u
        } = e, o = n ? i.CenterControlButton : i.default;
        return (0, a.jsx)(o, {
            label: t ? l.default.Messages.STOP_STREAMING : l.default.Messages.STOP_WATCHING,
            iconComponent: t ? r.default : s.default,
            isActive: !0,
            ...u
        })
    }
}
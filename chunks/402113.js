function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("566620"),
        a = n("87086"),
        s = n("871499"),
        o = n("689938");

    function l(e) {
        let {
            channelId: t,
            applicationId: n,
            centerButton: l = !1,
            ...u
        } = e, d = l ? s.CenterControlButton : s.default;
        return (0, i.jsx)(d, {
            ...u,
            onClick: () => {
                (0, r.stopEmbeddedActivity)({
                    channelId: t,
                    applicationId: n
                })
            },
            iconComponent: a.default,
            label: o.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
        })
    }
}
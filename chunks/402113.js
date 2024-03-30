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
        s = n("87086"),
        a = n("871499"),
        o = n("689938");

    function l(e) {
        let {
            channelId: t,
            applicationId: n,
            centerButton: l = !1,
            ...u
        } = e, d = l ? a.CenterControlButton : a.default;
        return (0, i.jsx)(d, {
            ...u,
            onClick: () => {
                (0, r.stopEmbeddedActivity)({
                    channelId: t,
                    applicationId: n
                })
            },
            iconComponent: s.default,
            label: o.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("710845"),
        s = n("620662"),
        a = n("915863"),
        o = n("981631"),
        l = n("689938");

    function u(e) {
        let {
            activity: t,
            user: n,
            look: u,
            color: d
        } = e;
        return (0, s.default)(t, o.ActivityFlags.INSTANCE) ? (0, i.jsx)(a.default, {
            look: u,
            color: d,
            onClick: function() {
                new r.default("UserActivityActions").log("notify", n.id, t)
            },
            fullWidth: !0,
            children: l.default.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME
        }, "notify") : null
    }
}
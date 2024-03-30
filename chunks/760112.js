function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("35523"),
        i = n("111540"),
        a = n("521862"),
        u = n("281767"),
        s = n("941504");

    function l(e) {
        var t = e.activity,
            n = e.user,
            l = e.look,
            c = e.color;
        return (0, i.default)(t, u.ActivityFlags.INSTANCE) ? r.createElement(a.default, {
            key: "notify",
            look: l,
            color: c,
            onClick: function() {
                new o.default("UserActivityActions").log("notify", n.id, t)
            },
            fullWidth: !0
        }, s.default.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME) : null
    }
}
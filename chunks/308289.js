function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("77078"),
        s = n("390236"),
        r = l.memo(function(e) {
            var t, n, r, o;
            let {
                user: u,
                size: d = a.AvatarSizes.SIZE_32,
                animate: c = !1,
                "aria-hidden": f = !1,
                ...p
            } = e, m = l.useContext(s.default);
            return (0, i.jsx)(a.Avatar, {
                src: (t = u, n = (0, a.getAvatarSize)(d), r = c, o = m, t.getAvatarURL(o, n, r)),
                size: d,
                "aria-label": f ? void 0 : u.username,
                "aria-hidden": f,
                ...p
            })
        })
}
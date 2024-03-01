function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("77078"),
        s = n("390236"),
        r = i.memo(function(e) {
            var t, n, r, o;
            let {
                user: u,
                size: d = a.AvatarSizes.SIZE_32,
                animate: c = !1,
                "aria-hidden": f = !1,
                ...m
            } = e, p = i.useContext(s.default);
            return (0, l.jsx)(a.Avatar, {
                src: (t = u, n = (0, a.getAvatarSize)(d), r = c, o = p, t.getAvatarURL(o, n, r)),
                size: d,
                "aria-label": f ? void 0 : u.username,
                "aria-hidden": f,
                ...m
            })
        })
}
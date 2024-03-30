function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("372900");
    t.default = r.memo(function(e) {
        var t, n, o, l;
        let {
            user: u,
            size: d = s.AvatarSizes.SIZE_32,
            animate: _ = !1,
            "aria-hidden": c = !1,
            ...E
        } = e, I = r.useContext(a.default);
        return (0, i.jsx)(s.Avatar, {
            src: (t = u, n = (0, s.getAvatarSize)(d), o = _, l = I, t.getAvatarURL(l, n, o)),
            size: d,
            "aria-label": c ? void 0 : u.username,
            "aria-hidden": c,
            ...E
        })
    })
}
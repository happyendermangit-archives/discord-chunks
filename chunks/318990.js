function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("204197"),
        d = n("357355"),
        _ = n("689938"),
        c = n("888386");

    function E() {
        let e = (0, o.useStateFromStores)([d.default], () => d.default.affinities.slice(0, 3)),
            t = e[0],
            {
                avatarSrc: n,
                eventHandlers: s
            } = (0, u.default)({
                user: t,
                size: l.AvatarSizes.SIZE_24,
                animateOnHover: !0
            }),
            E = e => null != e.globalName ? e.globalName : e.username,
            I = r.useMemo(() => e.length >= 2 ? _.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
                username: E(e[0])
            }) : 1 === e.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
                username: E(e[0])
            }) : "", [e]);
        return 0 === e.length ? null : (0, i.jsxs)("div", {
            className: c.container,
            children: [(0, i.jsx)(l.Avatar, {
                className: c.icon,
                src: n,
                "aria-label": t.username,
                size: l.AvatarSizes.SIZE_24,
                ...s
            }), (0, i.jsx)(l.Text, {
                className: a()(c.text),
                variant: "text-sm/normal",
                color: "always-white",
                children: I
            })]
        })
    }
}
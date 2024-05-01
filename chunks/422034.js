function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AvatarWrapper: function() {
            return T
        },
        default: function() {
            return I
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("481060"),
        u = n("204197"),
        d = n("357355"),
        _ = n("182294"),
        c = n("689938"),
        E = n("588646");

    function I(e) {
        let {
            smallerText: t,
            className: n,
            textColor: a
        } = e, u = (0, o.useStateFromStores)([d.default], () => d.default.affinities.slice(0, 3).reverse()), I = u.map((e, t) => (0, i.jsx)(T, {
            affinity: e,
            applyMask: t !== u.length - 1,
            size: _.AvatarSizes.SIZE_32
        }, e.id)), f = e => null != e.globalName ? e.globalName : e.username, S = r.useMemo(() => 3 === u.length ? c.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
            username: f(u[2])
        }) : 2 === u.length ? c.default.Messages.AFFINITIES_MARKETING_HEADER_V2_2.format({
            username: f(u[1]),
            otherUsername: f(u[0])
        }) : 1 === u.length ? c.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
            username: f(u[0])
        }) : "", [u]);
        return 0 === u.length ? null : (0, i.jsxs)("div", {
            className: s()(E.container, n),
            children: [(0, i.jsx)("div", {
                className: E.iconContainer,
                children: I
            }), (0, i.jsx)("div", {
                className: E.textContainer,
                children: (0, i.jsx)(function() {
                    return t ? (0, i.jsx)(l.Text, {
                        variant: "text-lg/medium",
                        color: a,
                        children: S
                    }) : (0, i.jsx)(l.Heading, {
                        variant: "heading-xl/medium",
                        color: a,
                        children: S
                    })
                }, {})
            })]
        })
    }

    function T(e) {
        let {
            affinity: t,
            applyMask: n,
            size: r
        } = e, {
            avatarSrc: a,
            eventHandlers: o
        } = (0, u.default)({
            user: t,
            size: r,
            animateOnHover: !0
        });
        return (0, i.jsx)(l.Avatar, {
            className: s()(E.icon, {
                [E.mask]: n
            }),
            src: a,
            "aria-label": t.username,
            size: r,
            ...o
        })
    }
}
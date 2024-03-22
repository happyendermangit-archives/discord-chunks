function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        },
        AvatarWrapper: function() {
            return E
        }
    });
    var r = n("37983"),
        i = n("884691"),
        a = n("414456"),
        l = n.n(a),
        s = n("446674"),
        o = n("77078"),
        u = n("106435"),
        c = n("446488"),
        d = n("52904"),
        f = n("782340"),
        m = n("270166");

    function _(e) {
        let {
            smallerText: t,
            className: n,
            textColor: a
        } = e, u = (0, s.useStateFromStores)([c.default], () => c.default.affinities.slice(0, 3).reverse()), _ = u.map((e, t) => (0, r.jsx)(E, {
            affinity: e,
            applyMask: t !== u.length - 1,
            size: d.AvatarSizes.SIZE_32
        }, e.id)), I = e => null != e.globalName ? e.globalName : e.username, T = i.useMemo(() => 3 === u.length ? f.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
            username: I(u[2])
        }) : 2 === u.length ? f.default.Messages.AFFINITIES_MARKETING_HEADER_V2_2.format({
            username: I(u[1]),
            otherUsername: I(u[0])
        }) : 1 === u.length ? f.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
            username: I(u[0])
        }) : "", [u]);
        return 0 === u.length ? null : (0, r.jsxs)("div", {
            className: l(m.container, n),
            children: [(0, r.jsx)("div", {
                className: m.iconContainer,
                children: _
            }), (0, r.jsx)("div", {
                className: m.textContainer,
                children: (0, r.jsx)(function() {
                    return t ? (0, r.jsx)(o.Text, {
                        variant: "text-lg/medium",
                        color: a,
                        children: T
                    }) : (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/medium",
                        color: a,
                        children: T
                    })
                }, {})
            })]
        })
    }

    function E(e) {
        let {
            affinity: t,
            applyMask: n,
            size: i
        } = e, {
            avatarSrc: a,
            eventHandlers: s
        } = (0, u.default)({
            user: t,
            size: i,
            animateOnHover: !0
        });
        return (0, r.jsx)(o.Avatar, {
            className: l(m.icon, {
                [m.mask]: n
            }),
            src: a,
            "aria-label": t.username,
            size: i,
            ...s
        })
    }
}
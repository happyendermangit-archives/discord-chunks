function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return l
        },
        default: function() {
            return S
        }
    }), n("424973");
    var l, i, a = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        o = n("77078"),
        u = n("572544"),
        d = n("244201"),
        c = n("298878"),
        f = n("643121"),
        m = n("217513"),
        p = n("590456"),
        h = n("49111"),
        E = n("782340"),
        g = n("77374"),
        C = n("696246");

    function S(e) {
        let {
            user: t,
            guildId: n,
            className: l,
            shrinkAtCount: i,
            shrinkToSize: s,
            isTryItOutFlow: S,
            size: T = 0
        } = e, v = (0, m.default)(t.id, n), I = (0, f.default)(v).map(e => ({
            ...e,
            src: (0, p.getBadgeAsset)(e.icon)
        })), _ = (0, d.useWindowDispatch)();
        if (t.isClyde()) return (0, a.jsx)("div", {
            className: r(l, g.container, g.clydeBadgeList),
            "aria-label": E.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: (0, a.jsx)(c.default, {})
        });
        S && null == I.find(e => "premium" === e.id) && I.push({
            id: "premium",
            icon: C,
            src: C,
            description: E.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        });
        let N = null != i && null != s && I.length > i ? s : T;
        return (0, a.jsx)("div", {
            className: r(l, I.length > 0 ? g.containerWithContent : g.container),
            "aria-label": E.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: I.map(e => (0, a.jsx)(o.Tooltip, {
                position: "top",
                text: e.description,
                spacing: 12,
                children: t => (0, a.jsx)(o.Anchor, {
                    ...t,
                    onClick: n => {
                        var l;
                        null === (l = t.onClick) || void 0 === l || l.call(t);
                        let i = null != e.link ? (0, u.default)(e.link) : null;
                        if (null != i) return _.dispatch(h.ComponentActions.POPOUT_CLOSE), i(n)
                    },
                    href: e.link,
                    children: (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.src,
                        className: r({
                            [g.profileBadge24]: 0 === N,
                            [g.profileBadge22]: 1 === N,
                            [g.profileBadge18]: 2 === N
                        })
                    })
                })
            }, e.id))
        })
    }(i = l || (l = {}))[i.SIZE_24 = 0] = "SIZE_24", i[i.SIZE_22 = 1] = "SIZE_22", i[i.SIZE_18 = 2] = "SIZE_18"
}
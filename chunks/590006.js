function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return i
        },
        default: function() {
            return g
        }
    }), n("424973");
    var i, l, a = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        o = n("77078"),
        u = n("572544"),
        d = n("244201"),
        c = n("298878"),
        f = n("643121"),
        p = n("217513"),
        m = n("590456"),
        h = n("49111"),
        x = n("782340"),
        E = n("77374"),
        y = n("696246");

    function g(e) {
        let {
            user: t,
            guildId: n,
            className: i,
            shrinkAtCount: l,
            shrinkToSize: s,
            isTryItOutFlow: g,
            size: S = 0
        } = e, C = (0, p.default)(t.id, n), I = (0, f.default)(C).map(e => ({
            ...e,
            src: (0, m.getBadgeAsset)(e.icon)
        })), _ = (0, d.useWindowDispatch)();
        if (t.isClyde()) return (0, a.jsx)("div", {
            className: r(i, E.container, E.clydeBadgeList),
            "aria-label": x.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: (0, a.jsx)(c.default, {})
        });
        g && null == I.find(e => "premium" === e.id) && I.push({
            id: "premium",
            icon: y,
            src: y,
            description: x.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        });
        let T = null != l && null != s && I.length > l ? s : S;
        return (0, a.jsx)("div", {
            className: r(i, I.length > 0 ? E.containerWithContent : E.container),
            "aria-label": x.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: I.map(e => (0, a.jsx)(o.Tooltip, {
                position: "top",
                text: e.description,
                spacing: 12,
                children: t => (0, a.jsx)(o.Anchor, {
                    ...t,
                    onClick: n => {
                        var i;
                        null === (i = t.onClick) || void 0 === i || i.call(t);
                        let l = null != e.link ? (0, u.default)(e.link) : null;
                        if (null != l) return _.dispatch(h.ComponentActions.POPOUT_CLOSE), l(n)
                    },
                    href: e.link,
                    children: (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.src,
                        className: r({
                            [E.profileBadge24]: 0 === T,
                            [E.profileBadge22]: 1 === T,
                            [E.profileBadge18]: 2 === T
                        })
                    })
                })
            }, e.id))
        })
    }(l = i || (i = {}))[l.SIZE_24 = 0] = "SIZE_24", l[l.SIZE_22 = 1] = "SIZE_22", l[l.SIZE_18 = 2] = "SIZE_18"
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return i
        },
        default: function() {
            return C
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
        f = n("756507"),
        p = n("4462"),
        m = n("643121"),
        h = n("217513"),
        x = n("590456"),
        E = n("49111"),
        y = n("782340"),
        g = n("77374"),
        S = n("696246");

    function C(e) {
        let {
            user: t,
            guildId: n,
            className: i,
            shrinkAtCount: l,
            shrinkToSize: s,
            isTryItOutFlow: C,
            size: T = 0
        } = e, _ = (0, h.default)(t.id, n), I = (0, m.default)(_).map(e => ({
            ...e,
            src: (0, x.getBadgeAsset)(e.icon)
        })), {
            trackUserProfileAction: v,
            ...N
        } = (0, f.useUserProfileAnalyticsContext)(), A = (0, d.useWindowDispatch)();
        if (t.isClyde()) return (0, a.jsx)("div", {
            className: r(i, g.container, g.clydeBadgeList),
            "aria-label": y.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: (0, a.jsx)(c.default, {})
        });
        C && null == I.find(e => "premium" === e.id) && I.push({
            id: "premium",
            icon: S,
            src: S,
            description: y.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        });
        let O = null != l && null != s && I.length > l ? s : T;
        return (0, a.jsx)("div", {
            className: r(i, I.length > 0 ? g.containerWithContent : g.container),
            "aria-label": y.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: I.map(e => (0, a.jsx)(o.Tooltip, {
                position: "top",
                text: e.description,
                spacing: 12,
                children: t => (0, a.jsx)(o.Anchor, {
                    ...t,
                    onClick: n => {
                        var i;
                        v({
                            action: "PRESS_BADGE"
                        }), (0, p.trackUserProfileBadgePressed)({
                            badge: e.id,
                            ...N
                        }), null === (i = t.onClick) || void 0 === i || i.call(t);
                        let l = null != e.link ? (0, u.default)(e.link) : null;
                        if (null != l) return A.dispatch(E.ComponentActions.POPOUT_CLOSE), l(n)
                    },
                    href: e.link,
                    children: (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.src,
                        className: r({
                            [g.profileBadge24]: 0 === O,
                            [g.profileBadge22]: 1 === O,
                            [g.profileBadge18]: 2 === O
                        })
                    })
                })
            }, e.id))
        })
    }(l = i || (i = {}))[l.SIZE_24 = 0] = "SIZE_24", l[l.SIZE_22 = 1] = "SIZE_22", l[l.SIZE_18 = 2] = "SIZE_18"
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return i
        },
        default: function() {
            return C
        }
    }), n("653041");
    var i, r, s = n("735250");
    n("470079");
    var a = n("120356"),
        o = n.n(a),
        l = n("481060"),
        u = n("315263"),
        d = n("100527"),
        _ = n("906732"),
        c = n("688465"),
        E = n("617136"),
        I = n("497505"),
        T = n("626135"),
        f = n("785717"),
        S = n("221292"),
        h = n("290421"),
        A = n("318661"),
        m = n("228168"),
        N = n("981631"),
        p = n("689938"),
        O = n("845713"),
        R = n("839973");

    function C(e) {
        let {
            user: t,
            guildId: n,
            className: i,
            shrinkAtCount: r,
            shrinkToSize: a,
            isTryItOutFlow: C,
            onBadgeClick: g,
            size: L = 0
        } = e, v = (0, A.default)(t.id, n), {
            analyticsLocations: D
        } = (0, _.default)(d.default.BADGE), {
            trackUserProfileAction: M,
            ...y
        } = (0, f.useUserProfileAnalyticsContext)(), P = (0, h.default)(v).map(e => ({
            ...e,
            src: (0, m.getBadgeAsset)(e.icon)
        }));
        if (t.isClyde()) return (0, s.jsx)("div", {
            className: o()(i, O.container, O.clydeBadgeList),
            "aria-label": p.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: (0, s.jsx)(c.default, {})
        });
        C && null == P.find(e => "premium" === e.id) && P.push({
            id: "premium",
            src: R,
            description: p.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        });
        let U = null != r && null != a && P.length > r ? a : L;
        return (0, s.jsx)(_.AnalyticsLocationProvider, {
            value: D,
            children: (0, s.jsx)("div", {
                className: o()(i, P.length > 0 ? O.containerWithContent : O.container),
                "aria-label": p.default.Messages.PROFILE_USER_BADGES,
                role: "group",
                children: P.map(e => (0, s.jsx)(l.Tooltip, {
                    position: "top",
                    text: e.description,
                    spacing: 12,
                    children: t => (0, s.jsx)(l.Anchor, {
                        ...t,
                        onClick: n => {
                            var i;
                            M({
                                action: "PRESS_BADGE"
                            }), (0, S.trackUserProfileBadgePressed)({
                                badge: e.id,
                                analyticsLocations: D,
                                ...y
                            }), null === (i = t.onClick) || void 0 === i || i.call(t);
                            let r = null != e.link ? (0, u.default)(e.link, {
                                analyticsLocations: D
                            }) : null;
                            if (null != r) return null == g || g(), r(n)
                        },
                        onMouseEnter: () => {
                            var n;
                            e.id === h.QUEST_COMPLETED_BADGE && (T.default.track(N.AnalyticEvents.QUEST_CONTENT_VIEWED, {
                                ...(0, E.getContentProperties)(I.QuestContent.QUEST_BADGE)
                            }), (0, S.trackUserProfileBadgeHovered)({
                                badge: e.id,
                                analyticsLocations: D,
                                ...y
                            })), null === (n = t.onMouseEnter) || void 0 === n || n.call(t)
                        },
                        href: e.link,
                        children: (0, s.jsx)("img", {
                            alt: " ",
                            "aria-hidden": !0,
                            src: e.src,
                            className: o()({
                                [O.profileBadge24]: 0 === U,
                                [O.profileBadge22]: 1 === U,
                                [O.profileBadge20]: 2 === U,
                                [O.profileBadge18]: 3 === U
                            })
                        })
                    })
                }, e.id))
            })
        })
    }(r = i || (i = {}))[r.SIZE_24 = 0] = "SIZE_24", r[r.SIZE_22 = 1] = "SIZE_22", r[r.SIZE_20 = 2] = "SIZE_20", r[r.SIZE_18 = 3] = "SIZE_18"
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return i
        },
        default: function() {
            return g
        }
    }), n("653041");
    var i, r, s = n("735250");
    n("470079");
    var a = n("120356"),
        o = n.n(a),
        l = n("481060"),
        u = n("315263"),
        d = n("40851"),
        _ = n("100527"),
        c = n("906732"),
        E = n("688465"),
        I = n("617136"),
        T = n("497505"),
        f = n("626135"),
        S = n("785717"),
        h = n("221292"),
        A = n("290421"),
        m = n("318661"),
        N = n("228168"),
        p = n("981631"),
        O = n("689938"),
        R = n("845713"),
        C = n("839973");

    function g(e) {
        let {
            user: t,
            guildId: n,
            className: i,
            shrinkAtCount: r,
            shrinkToSize: a,
            isTryItOutFlow: g,
            size: L = 0
        } = e, D = (0, m.default)(t.id, n), {
            analyticsLocations: v
        } = (0, c.default)(_.default.BADGE), {
            trackUserProfileAction: M,
            ...y
        } = (0, S.useUserProfileAnalyticsContext)(), P = (0, A.default)(D).map(e => ({
            ...e,
            src: (0, N.getBadgeAsset)(e.icon)
        })), U = (0, d.useWindowDispatch)();
        if (t.isClyde()) return (0, s.jsx)("div", {
            className: o()(i, R.container, R.clydeBadgeList),
            "aria-label": O.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: (0, s.jsx)(E.default, {})
        });
        g && null == P.find(e => "premium" === e.id) && P.push({
            id: "premium",
            src: C,
            description: O.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        });
        let b = null != r && null != a && P.length > r ? a : L;
        return (0, s.jsx)(c.AnalyticsLocationProvider, {
            value: v,
            children: (0, s.jsx)("div", {
                className: o()(i, P.length > 0 ? R.containerWithContent : R.container),
                "aria-label": O.default.Messages.PROFILE_USER_BADGES,
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
                            }), (0, h.trackUserProfileBadgePressed)({
                                badge: e.id,
                                analyticsLocations: v,
                                ...y
                            }), null === (i = t.onClick) || void 0 === i || i.call(t);
                            let r = null != e.link ? (0, u.default)(e.link, {
                                analyticsLocations: v
                            }) : null;
                            if (null != r) return U.dispatch(p.ComponentActions.POPOUT_CLOSE), r(n)
                        },
                        onMouseEnter: () => {
                            var n;
                            e.id === A.QUEST_COMPLETED_BADGE && (f.default.track(p.AnalyticEvents.QUEST_CONTENT_VIEWED, {
                                ...(0, I.getContentProperties)(T.QuestContent.QUEST_BADGE)
                            }), (0, h.trackUserProfileBadgeHovered)({
                                badge: e.id,
                                analyticsLocations: v,
                                ...y
                            })), null === (n = t.onMouseEnter) || void 0 === n || n.call(t)
                        },
                        href: e.link,
                        children: (0, s.jsx)("img", {
                            alt: " ",
                            "aria-hidden": !0,
                            src: e.src,
                            className: o()({
                                [R.profileBadge24]: 0 === b,
                                [R.profileBadge22]: 1 === b,
                                [R.profileBadge20]: 2 === b,
                                [R.profileBadge18]: 3 === b
                            })
                        })
                    })
                }, e.id))
            })
        })
    }(r = i || (i = {}))[r.SIZE_24 = 0] = "SIZE_24", r[r.SIZE_22 = 1] = "SIZE_22", r[r.SIZE_20 = 2] = "SIZE_20", r[r.SIZE_18 = 3] = "SIZE_18"
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("315263"),
        l = n("100527"),
        u = n("906732"),
        d = n("617136"),
        _ = n("497505"),
        c = n("626135"),
        E = n("785717"),
        I = n("221292"),
        T = n("290421"),
        f = n("228168"),
        S = n("981631"),
        h = n("689938"),
        A = n("104018");

    function m(e) {
        let {
            badges: t,
            className: n,
            badgeClassName: r,
            onClose: m
        } = e, {
            analyticsLocations: N
        } = (0, u.default)(l.default.BADGE), {
            trackUserProfileAction: p,
            ...O
        } = (0, E.useUserProfileAnalyticsContext)();
        return (0, i.jsx)("div", {
            className: s()(A.container, n),
            "aria-label": h.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: t.map(e => (0, i.jsx)(a.TooltipContainer, {
                text: e.description,
                children: (0, i.jsx)(a.Anchor, {
                    onClick: t => {
                        p({
                            action: "PRESS_BADGE"
                        }), (0, I.trackUserProfileBadgePressed)({
                            badge: e.id,
                            analyticsLocations: N,
                            ...O
                        });
                        let n = null != e.link ? (0, o.default)(e.link, {
                            analyticsLocations: N
                        }) : null;
                        if (null != n) return null == m || m(), n(t)
                    },
                    onMouseEnter: () => {
                        e.id === T.QUEST_COMPLETED_BADGE && c.default.track(S.AnalyticEvents.QUEST_CONTENT_VIEWED, {
                            ...(0, d.getContentProperties)(_.QuestContent.QUEST_BADGE)
                        }), p({
                            action: "HOVER_BADGE"
                        }), (0, I.trackUserProfileBadgeHovered)({
                            badge: e.id,
                            analyticsLocations: N,
                            ...O
                        })
                    },
                    href: e.link,
                    children: (0, i.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: (0, f.getBadgeAsset)(e.icon),
                        className: s()(A.badge, r)
                    })
                })
            }, e.id))
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("315263"),
        l = n("40851"),
        u = n("100527"),
        d = n("906732"),
        _ = n("617136"),
        c = n("497505"),
        E = n("626135"),
        I = n("785717"),
        T = n("221292"),
        f = n("290421"),
        S = n("228168"),
        h = n("981631"),
        A = n("689938"),
        m = n("104018");

    function N(e) {
        let {
            badges: t,
            className: n,
            badgeClassName: r
        } = e, {
            analyticsLocations: N
        } = (0, d.default)(u.default.BADGE), {
            trackUserProfileAction: p,
            ...O
        } = (0, I.useUserProfileAnalyticsContext)(), R = (0, l.useWindowDispatch)();
        return (0, i.jsx)("div", {
            className: s()(m.container, n),
            "aria-label": A.default.Messages.PROFILE_USER_BADGES,
            role: "group",
            children: t.map(e => (0, i.jsx)(a.TooltipContainer, {
                text: e.description,
                children: (0, i.jsx)(a.Anchor, {
                    onClick: t => {
                        p({
                            action: "PRESS_BADGE"
                        }), (0, T.trackUserProfileBadgePressed)({
                            badge: e.id,
                            analyticsLocations: N,
                            ...O
                        });
                        let n = null != e.link ? (0, o.default)(e.link, {
                            analyticsLocations: N
                        }) : null;
                        if (null != n) return R.dispatch(h.ComponentActions.POPOUT_CLOSE), n(t)
                    },
                    onMouseEnter: () => {
                        e.id === f.QUEST_COMPLETED_BADGE && E.default.track(h.AnalyticEvents.QUEST_CONTENT_VIEWED, {
                            ...(0, _.getContentProperties)(c.QuestContent.QUEST_BADGE)
                        }), p({
                            action: "HOVER_BADGE"
                        }), (0, T.trackUserProfileBadgeHovered)({
                            badge: e.id,
                            analyticsLocations: N,
                            ...O
                        })
                    },
                    href: e.link,
                    children: (0, i.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: (0, S.getBadgeAsset)(e.icon),
                        className: s()(m.badge, r)
                    })
                })
            }, e.id))
        })
    }
}
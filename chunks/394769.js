function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("718017"),
        s = n("399606"),
        a = n("481060"),
        o = n("607070"),
        l = n("346656"),
        u = n("678558"),
        d = n("981631"),
        _ = n("560013");
    t.default = function(e) {
        let {
            closeLayer: t,
            guild: n,
            isVisible: c
        } = e, E = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), I = (0, r.useSpring)({
            transform: c ? "translateY(-100%)" : "translateY(0%)",
            opacity: c ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            },
            immediate: E
        });
        return (0, i.jsx)(r.animated.div, {
            className: _.wrapper,
            style: I,
            children: (0, i.jsxs)("div", {
                className: _.innerWrapper,
                children: [(0, i.jsxs)("div", {
                    className: _.guildInfo,
                    children: [(0, i.jsx)(l.default, {
                        className: _.guildIcon,
                        guild: n,
                        size: l.default.Sizes.LARGER
                    }), (0, i.jsx)(a.Heading, {
                        className: _.guildName,
                        variant: "text-lg/bold",
                        children: n.name
                    })]
                }), (0, i.jsx)(u.default, {
                    className: _.ctaButton,
                    guild: n,
                    analyticsLocation: {
                        page: d.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                        section: d.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                        object: d.AnalyticsObjects.BUTTON_CTA,
                        objectType: d.AnalyticsObjectTypes.BUY
                    },
                    closeLayer: t,
                    pauseAnimation: !c,
                    size: a.Button.Sizes.LARGE
                })]
            })
        })
    }
}
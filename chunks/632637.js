function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("718017"),
        i = n("37295"),
        a = n("784184"),
        u = n("622780"),
        s = n("372844"),
        l = n("535457"),
        c = n("281767"),
        f = n("423281");
    t.default = function(e) {
        var t = e.closeLayer,
            n = e.guild,
            d = e.isVisible,
            _ = (0, i.useStateFromStores)([u.default], function() {
                return u.default.useReducedMotion
            }),
            E = (0, o.useSpring)({
                transform: d ? "translateY(-100%)" : "translateY(0%)",
                opacity: d ? 1 : 0,
                config: {
                    tension: 120,
                    friction: 12
                },
                immediate: _
            });
        return r.createElement(o.animated.div, {
            className: f.wrapper,
            style: E
        }, r.createElement("div", {
            className: f.innerWrapper
        }, r.createElement("div", {
            className: f.guildInfo
        }, r.createElement(s.default, {
            className: f.guildIcon,
            guild: n,
            size: s.default.Sizes.LARGER
        }), r.createElement(a.Heading, {
            className: f.guildName,
            variant: "text-lg/bold"
        }, n.name)), r.createElement(l.default, {
            className: f.ctaButton,
            guild: n,
            analyticsLocation: {
                page: c.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                section: c.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                object: c.AnalyticsObjects.BUTTON_CTA,
                objectType: c.AnalyticsObjectTypes.BUY
            },
            closeLayer: t,
            pauseAnimation: !d,
            size: a.Button.Sizes.LARGE
        })))
    }
}
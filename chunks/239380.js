function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIdForGuildTransition: function() {
            return _
        },
        transitionToGuild: function() {
            return h
        }
    });
    var i = n("471706"),
        s = n("290886"),
        r = n("21121"),
        a = n("934306"),
        o = n("42203"),
        l = n("923959"),
        u = n("18494"),
        d = n("393414"),
        c = n("49111"),
        f = n("724210");

    function _(e) {
        var t;
        let n = u.default.getChannelId(e),
            r = null === (t = l.default.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
        if (n === f.StaticChannelRoute.GUILD_ONBOARDING && !i.default.shouldShowOnboarding(e) || n === f.StaticChannelRoute.GUILD_HOME && !(0, s.canSeeOnboardingHome)(e)) return r;
        let a = o.default.getChannel(n);
        return null == a ? r : n
    }

    function h(e, t) {
        let n = !(0, r.isInMainTabsExperiment)() || (0, a.shouldHandleNewPanelsRoute)(e) ? _(e) : void 0;
        (0, d.transitionTo)(c.Routes.CHANNEL(e, n), {
            navigationReplace: (0, a.shouldHandleNewPanelsRoute)(e),
            ...t
        })
    }
}
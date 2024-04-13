function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIdForGuildTransition: function() {
            return E
        },
        transitionToGuild: function() {
            return I
        }
    });
    var i = n("819553"),
        r = n("931261"),
        s = n("57132"),
        a = n("781157"),
        o = n("592125"),
        l = n("984933"),
        u = n("944486"),
        d = n("703656"),
        _ = n("981631"),
        c = n("176505");

    function E(e) {
        var t;
        let n = u.default.getChannelId(e),
            s = null === (t = l.default.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
        return (n !== c.StaticChannelRoute.GUILD_ONBOARDING || i.default.shouldShowOnboarding(e)) && (n !== c.StaticChannelRoute.GUILD_HOME || (0, r.canSeeOnboardingHome)(e)) && null != o.default.getChannel(n) ? n : s
    }

    function I(e, t) {
        let n = !(0, s.isInMainTabsExperiment)() || (0, a.shouldHandleNewPanelsRoute)(e) ? E(e) : void 0;
        (0, d.transitionTo)(_.Routes.CHANNEL(e, n), {
            navigationReplace: (0, a.shouldHandleNewPanelsRoute)(e),
            ...t
        })
    }
}
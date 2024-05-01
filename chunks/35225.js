function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIdForGuildTransition: function() {
            return u
        }
    });
    var i = n("819553"),
        r = n("931261"),
        a = n("592125"),
        s = n("984933"),
        o = n("944486"),
        l = n("176505");

    function u(e) {
        var t;
        let n = o.default.getChannelId(e),
            u = null === (t = s.default.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
        return (n !== l.StaticChannelRoute.GUILD_ONBOARDING || i.default.shouldShowOnboarding(e)) && (n !== l.StaticChannelRoute.GUILD_HOME || (0, r.canSeeOnboardingHome)(e)) && null != a.default.getChannel(n) ? n : u
    }
}
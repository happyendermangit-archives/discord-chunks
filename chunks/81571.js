function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e) {
        return !(__OVERLAY__ || null == e || e.id === r.ME || e.id === r.FAVORITES || !e.hasFeature(r.GuildFeatures.COMMUNITY) || !e.hasFeature(r.GuildFeatures.GUILD_SERVER_GUIDE) || !e.hasFeature(r.GuildFeatures.GUILD_ONBOARDING))
    }
}
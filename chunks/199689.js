function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("981631");

    function r(e) {
        return !(__OVERLAY__ || null == e || e.id === i.ME || e.id === i.FAVORITES || !e.hasFeature(i.GuildFeatures.COMMUNITY) || !e.hasFeature(i.GuildFeatures.GUILD_SERVER_GUIDE) || !e.hasFeature(i.GuildFeatures.GUILD_ONBOARDING))
    }
}
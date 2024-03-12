function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("49111");

    function s(e) {
        let t = __OVERLAY__ || null == e || e.id === i.ME || e.id === i.FAVORITES || !e.hasFeature(i.GuildFeatures.COMMUNITY) || !e.hasFeature(i.GuildFeatures.GUILD_SERVER_GUIDE) || !e.hasFeature(i.GuildFeatures.GUILD_ONBOARDING);
        return !t
    }
}
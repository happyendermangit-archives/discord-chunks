function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        isCreatorMonetizationEnabledGuild: function() {
            return a
        }
    });
    var r = n("898511"),
        o = n("306912"),
        i = n("281767");

    function a(e) {
        return !e.hasFeature(i.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(i.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(i.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    }

    function u(e) {
        return (0, r.useStateFromStores)([o.default], function() {
            var t = o.default.getGuild(e);
            return null != t && a(t)
        })
    }
}
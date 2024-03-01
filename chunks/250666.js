function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isCreatorMonetizationEnabledGuild: function() {
            return a
        },
        default: function() {
            return o
        }
    });
    var s = n("446674"),
        i = n("305961"),
        r = n("49111");

    function a(e) {
        return !e.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    }

    function o(e) {
        return (0, s.useStateFromStores)([i.default], () => {
            let t = i.default.getGuild(e);
            return null != t && a(t)
        })
    }
}
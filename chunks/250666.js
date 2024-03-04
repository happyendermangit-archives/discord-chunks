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
    var i = n("446674"),
        s = n("305961"),
        r = n("49111");

    function a(e) {
        return !e.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    }

    function o(e) {
        return (0, i.useStateFromStores)([s.default], () => {
            let t = s.default.getGuild(e);
            return null != t && a(t)
        })
    }
}
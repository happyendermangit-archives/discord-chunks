function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        },
        isCreatorMonetizationEnabledGuild: function() {
            return a
        }
    });
    var i = n("442837"),
        r = n("430824"),
        s = n("981631");

    function a(e) {
        return !e.hasFeature(s.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(s.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    }

    function o(e) {
        return (0, i.useStateFromStores)([r.default], () => {
            let t = r.default.getGuild(e);
            return null != t && a(t)
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        },
        isCreatorMonetizationEnabledGuild: function() {
            return s
        }
    });
    var i = n("442837"),
        r = n("430824"),
        a = n("981631");

    function s(e) {
        return !e.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    }

    function o(e) {
        return (0, i.useStateFromStores)([r.default], () => {
            let t = r.default.getGuild(e);
            return null != t && s(t)
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        isGuildOnboardingAvailable: function() {
            return u
        }
    });
    var r = n("898511"),
        o = n("717744"),
        i = n("281767");

    function a(e) {
        return (0, r.useStateFromStores)([o.default], function() {
            if ((null == e ? void 0 : e.id) == null) return !1;
            var t = o.default.isFullServerPreview(e.id),
                n = o.default.isOnboardingEnabled(e.id);
            return t && n
        }) || (null == e ? void 0 : e.hasFeature(i.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
    }

    function u(e) {
        if (null == e) return !1;
        var t = o.default.isFullServerPreview(e.id),
            n = o.default.isOnboardingEnabled(e.id);
        return t && n || e.hasFeature(i.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        isGuildOnboardingAvailable: function() {
            return o
        }
    });
    var i = n("442837"),
        r = n("160404"),
        a = n("981631");

    function s(e) {
        return (0, i.useStateFromStores)([r.default], () => {
            if ((null == e ? void 0 : e.id) == null) return !1;
            let t = r.default.isFullServerPreview(e.id),
                n = r.default.isOnboardingEnabled(e.id);
            return t && n
        }) || (null == e ? void 0 : e.hasFeature(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
    }

    function o(e) {
        if (null == e) return !1;
        let t = r.default.isFullServerPreview(e.id),
            n = r.default.isOnboardingEnabled(e.id);
        return t && n || e.hasFeature(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
    }
}
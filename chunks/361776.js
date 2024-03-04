function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        isGuildOnboardingAvailable: function() {
            return o
        }
    });
    var i = n("446674"),
        s = n("38654"),
        r = n("49111");

    function a(e) {
        let t = (0, i.useStateFromStores)([s.default], () => {
            if ((null == e ? void 0 : e.id) == null) return !1;
            let t = s.default.isFullServerPreview(e.id),
                n = s.default.isOnboardingEnabled(e.id);
            return t && n
        });
        return t || (null == e ? void 0 : e.hasFeature(r.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
    }

    function o(e) {
        if (null == e) return !1;
        let t = s.default.isFullServerPreview(e.id),
            n = s.default.isOnboardingEnabled(e.id);
        return t && n || e.hasFeature(r.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
    }
}
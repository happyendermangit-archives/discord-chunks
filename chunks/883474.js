function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        GuildVisibility: function() {
            return r
        },
        getGuildTraits: function() {
            return n
        }
    }), s("222007");
    var r, o, l = s("813006"),
        a = s("49111");

    function n(e) {
        let t = new Set(e.features),
            s = t.has(a.GuildFeatures.COMMUNITY) && t.has(a.GuildFeatures.DISCOVERABLE) ? "PUBLIC" : "INVITE_ONLY",
            r = function(e) {
                return null != e && (e instanceof l.default ? e.premiumSubscriberCount > 0 || e.premiumTier > a.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
            }(e),
            o = 0;
        if (r) {
            var n;
            o = null !== (n = e instanceof l.default ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== n ? n : 0
        }
        let i = e instanceof l.default ? e.premiumTier : a.BoostedGuildTiers.NONE;
        return {
            verified: t.has(a.GuildFeatures.VERIFIED),
            partnered: t.has(a.GuildFeatures.PARTNERED),
            community: t.has(a.GuildFeatures.COMMUNITY),
            staff: t.has(a.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
            visibility: s,
            premium: r,
            premiumSubscriberCount: o,
            premiumTier: i
        }
    }(o = r || (r = {})).PUBLIC = "PUBLIC", o.INVITE_ONLY = "INVITE_ONLY"
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildVisibility: function() {
            return i
        },
        getGuildTraits: function() {
            return o
        }
    }), n("47120");
    var i, r, a = n("601964"),
        s = n("981631");

    function o(e) {
        let t = new Set(e.features),
            n = t.has(s.GuildFeatures.COMMUNITY) && t.has(s.GuildFeatures.DISCOVERABLE) ? "PUBLIC" : "INVITE_ONLY",
            i = function(e) {
                return null != e && (e instanceof a.default ? e.premiumSubscriberCount > 0 || e.premiumTier > s.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
            }(e),
            r = 0;
        if (i) {
            var o;
            r = null !== (o = e instanceof a.default ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== o ? o : 0
        }
        let l = e instanceof a.default ? e.premiumTier : s.BoostedGuildTiers.NONE;
        return {
            verified: t.has(s.GuildFeatures.VERIFIED),
            partnered: t.has(s.GuildFeatures.PARTNERED),
            community: t.has(s.GuildFeatures.COMMUNITY),
            staff: t.has(s.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
            clan: t.has(s.GuildFeatures.CLAN),
            visibility: n,
            premium: i,
            premiumSubscriberCount: r,
            premiumTier: l
        }
    }(r = i || (i = {})).PUBLIC = "PUBLIC", r.INVITE_ONLY = "INVITE_ONLY"
}
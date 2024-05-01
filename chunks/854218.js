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
    var i, r, s = n("601964"),
        a = n("981631");

    function o(e) {
        let t = new Set(e.features),
            n = t.has(a.GuildFeatures.COMMUNITY) && t.has(a.GuildFeatures.DISCOVERABLE) ? "PUBLIC" : "INVITE_ONLY",
            i = function(e) {
                return null != e && (e instanceof s.default ? e.premiumSubscriberCount > 0 || e.premiumTier > a.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
            }(e),
            r = 0;
        if (i) {
            var o;
            r = null !== (o = e instanceof s.default ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== o ? o : 0
        }
        let l = e instanceof s.default ? e.premiumTier : a.BoostedGuildTiers.NONE;
        return {
            verified: t.has(a.GuildFeatures.VERIFIED),
            partnered: t.has(a.GuildFeatures.PARTNERED),
            community: t.has(a.GuildFeatures.COMMUNITY),
            staff: t.has(a.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
            clan: t.has(a.GuildFeatures.CLAN),
            visibility: n,
            premium: i,
            premiumSubscriberCount: r,
            premiumTier: l
        }
    }(r = i || (i = {})).PUBLIC = "PUBLIC", r.INVITE_ONLY = "INVITE_ONLY"
}
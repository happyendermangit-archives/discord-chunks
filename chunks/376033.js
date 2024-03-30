function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildVisibility: function() {
            return o
        },
        getGuildTraits: function() {
            return s
        }
    });
    var r, o, i = n("393588"),
        a = n("281767");

    function u(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function s(e) {
        var t, n = new Set(e.features),
            r = n.has(a.GuildFeatures.COMMUNITY) && n.has(a.GuildFeatures.DISCOVERABLE) ? "PUBLIC" : "INVITE_ONLY",
            o = function(e) {
                return null != e && (u(e, i.default) ? e.premiumSubscriberCount > 0 || e.premiumTier > a.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
            }(e),
            s = 0;
        o && (s = null !== (t = u(e, i.default) ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== t ? t : 0);
        var l = u(e, i.default) ? e.premiumTier : a.BoostedGuildTiers.NONE;
        return {
            verified: n.has(a.GuildFeatures.VERIFIED),
            partnered: n.has(a.GuildFeatures.PARTNERED),
            community: n.has(a.GuildFeatures.COMMUNITY),
            staff: n.has(a.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
            visibility: r,
            premium: o,
            premiumSubscriberCount: s,
            premiumTier: l
        }
    }(r = o || (o = {})).PUBLIC = "PUBLIC", r.INVITE_ONLY = "INVITE_ONLY"
}
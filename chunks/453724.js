function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isRestrictedFromMonetizationReapplication: function() {
            return f
        },
        isRestrictedFromShowingGuildPurchaseEntryPoints: function() {
            return u
        },
        isRestrictedFromUpdatingCreatorMonetizationSettings: function() {
            return l
        },
        shouldHideGuildPurchaseEntryPoints: function() {
            return s
        },
        shouldRestrictUpdatingCreatorMonetizationSettings: function() {
            return c
        }
    });
    var r = n("88806"),
        o = n("306912"),
        i = n("627534"),
        a = n("281767");

    function u(e) {
        return null != e && e.includes(i.CreatorMonetizationRestrictions.NEW_PURCHASES_DISABLED)
    }

    function s(e) {
        if (null == e) return !1;
        var t, n = r.default.getMonetizationRestrictionsFetchState(e),
            i = r.default.getMonetizationRestrictions(e),
            s = o.default.getGuild(e);
        return n === r.FetchState.FETCHED ? u(i) : null === (t = null == s ? void 0 : s.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
    }

    function l(e) {
        return null != e && e.includes(i.CreatorMonetizationRestrictions.SETTINGS_READ_ONLY)
    }

    function c(e) {
        if (null == e) return !1;
        var t, n = r.default.getMonetizationRestrictionsFetchState(e),
            i = r.default.getMonetizationRestrictions(e),
            u = o.default.getGuild(e);
        return n === r.FetchState.FETCHED ? l(i) : null === (t = null == u ? void 0 : u.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
    }

    function f(e) {
        return null != e && e.includes(i.CreatorMonetizationRestrictions.REAPPLICATION_DISABLED)
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isRestrictedFromShowingGuildPurchaseEntryPoints: function() {
            return o
        },
        shouldHideGuildPurchaseEntryPoints: function() {
            return l
        },
        isRestrictedFromUpdatingCreatorMonetizationSettings: function() {
            return u
        },
        shouldRestrictUpdatingCreatorMonetizationSettings: function() {
            return d
        },
        isRestrictedFromMonetizationReapplication: function() {
            return c
        }
    });
    var i = n("648825"),
        s = n("305961"),
        r = n("139170"),
        a = n("49111");

    function o(e) {
        return null != e && e.includes(r.CreatorMonetizationRestrictions.NEW_PURCHASES_DISABLED)
    }

    function l(e) {
        var t;
        if (null == e) return !1;
        let n = i.default.getMonetizationRestrictionsFetchState(e),
            r = i.default.getMonetizationRestrictions(e),
            l = s.default.getGuild(e);
        return n === i.FetchState.FETCHED ? o(r) : null === (t = null == l ? void 0 : l.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
    }

    function u(e) {
        return null != e && e.includes(r.CreatorMonetizationRestrictions.SETTINGS_READ_ONLY)
    }

    function d(e) {
        var t;
        if (null == e) return !1;
        let n = i.default.getMonetizationRestrictionsFetchState(e),
            r = i.default.getMonetizationRestrictions(e),
            o = s.default.getGuild(e);
        return n === i.FetchState.FETCHED ? u(r) : null === (t = null == o ? void 0 : o.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
    }

    function c(e) {
        return null != e && e.includes(r.CreatorMonetizationRestrictions.REAPPLICATION_DISABLED)
    }
}
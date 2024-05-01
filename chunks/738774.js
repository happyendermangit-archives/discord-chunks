function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isRestrictedFromMonetizationReapplication: function() {
            return _
        },
        isRestrictedFromShowingGuildPurchaseEntryPoints: function() {
            return o
        },
        isRestrictedFromUpdatingCreatorMonetizationSettings: function() {
            return u
        },
        shouldHideGuildPurchaseEntryPoints: function() {
            return l
        },
        shouldRestrictUpdatingCreatorMonetizationSettings: function() {
            return d
        }
    });
    var i = n("289393"),
        r = n("430824"),
        s = n("308636"),
        a = n("981631");

    function o(e) {
        return null != e && e.includes(s.CreatorMonetizationRestrictions.NEW_PURCHASES_DISABLED)
    }

    function l(e) {
        var t;
        if (null == e) return !1;
        let n = i.default.getMonetizationRestrictionsFetchState(e),
            s = i.default.getMonetizationRestrictions(e),
            l = r.default.getGuild(e);
        return n === i.FetchState.FETCHED ? o(s) : null === (t = null == l ? void 0 : l.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
    }

    function u(e) {
        return null != e && e.includes(s.CreatorMonetizationRestrictions.SETTINGS_READ_ONLY)
    }

    function d(e) {
        var t;
        if (null == e) return !1;
        let n = i.default.getMonetizationRestrictionsFetchState(e),
            s = i.default.getMonetizationRestrictions(e),
            o = r.default.getGuild(e);
        return n === i.FetchState.FETCHED ? u(s) : null === (t = null == o ? void 0 : o.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
    }

    function _(e) {
        return null != e && e.includes(s.CreatorMonetizationRestrictions.REAPPLICATION_DISABLED)
    }
}
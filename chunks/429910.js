function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsMonetizationReapplicationDisabled: function() {
            return E
        },
        useShouldHideGuildPurchaseEntryPoints: function() {
            return d
        },
        useShouldRestrictUpdatingCreatorMonetizationSettings: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("129940"),
        a = n("178431"),
        u = n("88806"),
        s = n("306912"),
        l = n("453724"),
        c = n("281767"),
        f = function(e) {
            var t = (0, i.default)();
            r.useEffect(function() {
                if (null != e && !!e.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) u.default.getMonetizationRestrictionsFetchState(e.id) === u.FetchState.NOT_FETCHED && a.fetchMonetizationRestrictions(e.id, {
                    signal: t
                })
            }, [e, t]);
            var n = null == e ? void 0 : e.id;
            return {
                restrictions: (0, o.useStateFromStoresArray)([u.default], function() {
                    var e;
                    return null !== (e = u.default.getMonetizationRestrictions(null != n ? n : c.EMPTY_STRING_SNOWFLAKE_ID)) && void 0 !== e ? e : []
                }),
                restrictionsLoading: (0, o.useStateFromStores)([u.default], function() {
                    return u.default.getMonetizationRestrictionsFetchState(null != n ? n : c.EMPTY_STRING_SNOWFLAKE_ID) === u.FetchState.FETCHING
                })
            }
        },
        d = function(e) {
            var t, n = (0, o.useStateFromStores)([s.default], function() {
                    return s.default.getGuild(e)
                }, [e]),
                r = f(n),
                i = r.restrictions,
                a = r.restrictionsLoading;
            return {
                shouldHideGuildPurchaseEntryPoints: !((null == n ? void 0 : n.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) || (a ? null === (t = null == n ? void 0 : n.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, l.isRestrictedFromShowingGuildPurchaseEntryPoints)(i)),
                restrictionsLoading: a
            }
        },
        _ = function(e) {
            var t, n = (0, o.useStateFromStores)([s.default], function() {
                    return s.default.getGuild(e)
                }, [e]),
                r = f(n),
                i = r.restrictions,
                a = r.restrictionsLoading,
                u = a ? null === (t = null == n ? void 0 : n.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, l.isRestrictedFromUpdatingCreatorMonetizationSettings)(i),
                d = !!(null == n ? void 0 : n.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
            return {
                shouldRestrictUpdatingCreatorMonetizationSettings: u || d,
                allowSelfRemoveMonetization: !u,
                restrictionsLoading: a
            }
        },
        E = function(e) {
            var t = f((0, o.useStateFromStores)([s.default], function() {
                    return s.default.getGuild(e)
                }, [e])),
                n = t.restrictions,
                r = t.restrictionsLoading;
            return {
                isMonetizationReapplicationDisabled: (0, l.isRestrictedFromMonetizationReapplication)(n),
                restrictionsLoading: r
            }
        }
}
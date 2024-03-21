function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldHideGuildPurchaseEntryPoints: function() {
            return _
        },
        useShouldRestrictUpdatingCreatorMonetizationSettings: function() {
            return f
        },
        useIsMonetizationReapplicationDisabled: function() {
            return E
        }
    });
    var i = n("884691"),
        s = n("446674"),
        r = n("763898"),
        a = n("371358"),
        o = n("648825"),
        l = n("305961"),
        u = n("736271"),
        d = n("49111");
    let c = e => {
            let t = (0, r.default)();
            i.useEffect(() => {
                if (null != e && !!e.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) o.default.getMonetizationRestrictionsFetchState(e.id) === o.FetchState.NOT_FETCHED && a.fetchMonetizationRestrictions(e.id, {
                    signal: t
                })
            }, [e, t]);
            let n = null == e ? void 0 : e.id,
                l = (0, s.useStateFromStoresArray)([o.default], () => {
                    var e;
                    return null !== (e = o.default.getMonetizationRestrictions(null != n ? n : d.EMPTY_STRING_SNOWFLAKE_ID)) && void 0 !== e ? e : []
                }),
                u = (0, s.useStateFromStores)([o.default], () => o.default.getMonetizationRestrictionsFetchState(null != n ? n : d.EMPTY_STRING_SNOWFLAKE_ID) === o.FetchState.FETCHING);
            return {
                restrictions: l,
                restrictionsLoading: u
            }
        },
        _ = e => {
            var t;
            let n = (0, s.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
                {
                    restrictions: i,
                    restrictionsLoading: r
                } = c(n),
                a = (null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)),
                o = !a || (r ? null === (t = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.isRestrictedFromShowingGuildPurchaseEntryPoints)(i));
            return {
                shouldHideGuildPurchaseEntryPoints: o,
                restrictionsLoading: r
            }
        },
        f = e => {
            var t;
            let n = (0, s.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
                {
                    restrictions: i,
                    restrictionsLoading: r
                } = c(n),
                a = r ? null === (t = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.isRestrictedFromUpdatingCreatorMonetizationSettings)(i),
                o = !!(null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
            return {
                shouldRestrictUpdatingCreatorMonetizationSettings: a || o,
                allowSelfRemoveMonetization: !a,
                restrictionsLoading: r
            }
        },
        E = e => {
            let t = (0, s.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
                {
                    restrictions: n,
                    restrictionsLoading: i
                } = c(t),
                r = (0, u.isRestrictedFromMonetizationReapplication)(n);
            return {
                isMonetizationReapplicationDisabled: r,
                restrictionsLoading: i
            }
        }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsMonetizationReapplicationDisabled: function() {
            return I
        },
        useShouldHideGuildPurchaseEntryPoints: function() {
            return c
        },
        useShouldRestrictUpdatingCreatorMonetizationSettings: function() {
            return E
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("81897"),
        a = n("423117"),
        o = n("289393"),
        l = n("430824"),
        u = n("738774"),
        d = n("981631");
    let _ = e => {
            let t = (0, s.default)();
            i.useEffect(() => {
                if (null != e && !!e.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) o.default.getMonetizationRestrictionsFetchState(e.id) === o.FetchState.NOT_FETCHED && a.fetchMonetizationRestrictions(e.id, {
                    signal: t
                })
            }, [e, t]);
            let n = null == e ? void 0 : e.id,
                l = (0, r.useStateFromStoresArray)([o.default], () => {
                    var e;
                    return null !== (e = o.default.getMonetizationRestrictions(null != n ? n : d.EMPTY_STRING_SNOWFLAKE_ID)) && void 0 !== e ? e : []
                });
            return {
                restrictions: l,
                restrictionsLoading: (0, r.useStateFromStores)([o.default], () => o.default.getMonetizationRestrictionsFetchState(null != n ? n : d.EMPTY_STRING_SNOWFLAKE_ID) === o.FetchState.FETCHING)
            }
        },
        c = e => {
            var t;
            let n = (0, r.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
                {
                    restrictions: i,
                    restrictionsLoading: s
                } = _(n);
            return {
                shouldHideGuildPurchaseEntryPoints: !((null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) || (s ? null === (t = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.isRestrictedFromShowingGuildPurchaseEntryPoints)(i)),
                restrictionsLoading: s
            }
        },
        E = e => {
            var t;
            let n = (0, r.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
                {
                    restrictions: i,
                    restrictionsLoading: s
                } = _(n),
                a = s ? null === (t = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.isRestrictedFromUpdatingCreatorMonetizationSettings)(i),
                o = !!(null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
            return {
                shouldRestrictUpdatingCreatorMonetizationSettings: a || o,
                allowSelfRemoveMonetization: !a,
                restrictionsLoading: s
            }
        },
        I = e => {
            let {
                restrictions: t,
                restrictionsLoading: n
            } = _((0, r.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]));
            return {
                isMonetizationReapplicationDisabled: (0, u.isRestrictedFromMonetizationReapplication)(t),
                restrictionsLoading: n
            }
        }
}
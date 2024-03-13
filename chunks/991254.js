function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        LoadState: function() {
            return i
        },
        useFetchListingsForApplication: function() {
            return R
        },
        useFetchEntitlementsForGuild: function() {
            return h
        },
        useSubscriptionListingsForGroup: function() {
            return L
        },
        useActiveSubscriptionListingForApplication: function() {
            return F
        },
        useUnseenEndedApplicationSubscriptionEntitlements: function() {
            return O
        },
        useFetchListingsForSubscriptions: function() {
            return g
        },
        useFetchUserApplicationSubscriptionEntitlements: function() {
            return y
        },
        useApplication: function() {
            return G
        },
        default: function() {
            return D
        },
        useEligibleApplicationSubscriptionGuilds: function() {
            return B
        }
    }), n("424973"), n("222007");
    var i, r, u = n("884691"),
        l = n("446674"),
        a = n("316718"),
        o = n("598981"),
        s = n("299285"),
        c = n("305961"),
        d = n("957255"),
        S = n("10514"),
        E = n("521012"),
        f = n("437712"),
        _ = n("552712"),
        T = n("602960"),
        I = n("927078"),
        A = n("739295"),
        p = n("248933"),
        C = n("785473"),
        P = n("129408"),
        N = n("49111");
    (r = i || (i = {}))[r.NOT_LOADED = 0] = "NOT_LOADED", r[r.LOADING = 1] = "LOADING", r[r.LOADED = 2] = "LOADED", r[r.ERROR = 3] = "ERROR";
    let R = function(t, e) {
            let {
                refetchOnMount: n = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = (0, l.useStateFromStores)([p.default], () => null != t ? p.default.getSubscriptionGroupListingsForApplicationFetchState(t) : p.FetchState.FETCHED, [t]);
            return u.useEffect(() => {
                if (null == t || null == e) return;
                let i = p.default.getSubscriptionGroupListingsForApplicationFetchState(t);
                (n || i === p.FetchState.NOT_FETCHED) && (0, I.fetchAllSubscriptionListingsDataForApplication)(t, e)
            }, [t, e, n]), {
                listingsLoaded: i === p.FetchState.FETCHED
            }
        },
        h = t => {
            let {
                guildId: e,
                canFetch: n = !0,
                forceRefetch: i = !1
            } = t, r = (0, l.useStateFromStores)([p.default], () => null != e ? p.default.getEntitlementsForGuildFetchState(e) : null, [e]);
            return u.useEffect(() => {
                if (null == e || e === N.ME) return;
                let t = p.default.getEntitlementsForGuildFetchState(e);
                n && (t === p.FetchState.NOT_FETCHED || i) && (0, I.fetchEntitlementsForGuild)(e)
            }, [e, n, i]), {
                entitlementsLoaded: r === p.FetchState.FETCHED
            }
        },
        U = t => {
            let {
                applicationId: e,
                canFetch: n = !0,
                forceRefetch: i = !1,
                loggedIn: r
            } = t, o = (0, l.useStateFromStores)([f.default], () => f.default.isFetchedForApplication(e), [e]);
            return u.useEffect(() => {
                if (r) {
                    let t = f.default.isFetchingForApplication(e),
                        r = n && !t && !o || i;
                    r && (0, a.fetchUserEntitlements)({
                        entitlementType: N.EntitlementTypes.APPLICATION_SUBSCRIPTION
                    })
                }
            }, [e, n, o, i, r]), {
                entitlementsLoaded: o
            }
        },
        L = function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                includeSoftDeleted: !1
            };
            return (0, l.useStateFromStoresArray)([p.default], () => {
                if (null == t) return [];
                let n = p.default.getSubscriptionGroupListing(t);
                if (null == n) return [];
                let i = [];
                for (let t of n.subscription_listings_ids) {
                    let n = p.default.getSubscriptionListing(t);
                    if (null != n)(!n.soft_deleted || e.includeSoftDeleted) && i.push(n)
                }
                return i
            }, [t, e.includeSoftDeleted])
        },
        m = [],
        M = [];

    function F(t, e) {
        let n = (0, l.useStateFromStores)([E.default], () => E.default.getSubscriptions()),
            {
                subscriptionGroupListing: i,
                guildEntitlements: r,
                userEntitlements: a
            } = (0, l.useStateFromStoresObject)([p.default, f.default], () => {
                var n, i;
                return {
                    subscriptionGroupListing: null != t ? p.default.getSubscriptionGroupListingForApplication(t) : null,
                    guildEntitlements: null != t && null != e ? p.default.getApplicationEntitlementsForGuild(t, e) : m,
                    userEntitlements: null != t && null !== (i = null === (n = f.default.getForApplication(t)) || void 0 === n ? void 0 : n.values()) && void 0 !== i ? i : M
                }
            }, [t, e]),
            o = u.useMemo(() => [...r, ...a], [r, a]),
            s = null == i ? void 0 : i.subscription_listings,
            {
                activeSubscriptionListing: c,
                activeEntitlement: d
            } = u.useMemo(() => {
                if (null != s) {
                    for (let t of o)
                        for (let n of s)
                            if ((0, P.isListingActiveInGuild)(n, t, e)) return {
                                activeSubscriptionListing: n,
                                activeEntitlement: t
                            }
                }
                return {
                    activeSubscriptionListing: null,
                    activeEntitlement: null
                }
            }, [o, s, e]),
            S = u.useMemo(() => {
                if (null == n) return null;
                let t = null == c ? void 0 : c.subscription_plans[0].id;
                for (let e of Object.values(n))
                    if (e.type === N.SubscriptionTypes.APPLICATION) {
                        let n = e.items[0].planId;
                        if (n === t) return e
                    } return null
            }, [c, n]);
        return {
            activeSubscription: S,
            activeSubscriptionListing: c,
            activeEntitlement: d,
            subscriptionGroupListing: i
        }
    }

    function O(t) {
        var e;
        let n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : N.EMPTY_STRING_SNOWFLAKE_ID,
            i = (0, l.useStateFromStores)([d.default], () => d.default.can(N.Permissions.ADMINISTRATOR, t)),
            {
                entitlementsLoaded: r
            } = h({
                guildId: n,
                canFetch: i
            }),
            a = (0, l.useStateFromStores)([T.default], () => T.default.getLastGuildDismissedTime(n)),
            o = (0, l.useStateFromStoresArray)([p.default], () => {
                let t = p.default.getEntitlementsForGuild(n),
                    e = p.default.getEntitlementsForGuild(n, !1),
                    i = t.map(t => t.applicationId);
                return e.filter(t => !i.includes(t.applicationId))
            }),
            s = (0, l.useStateFromStoresObject)([_.default], () => _.default.getSKUs()),
            c = u.useMemo(() => o.filter(t => {
                let e = s[t.skuId];
                return null != e && e.available
            }), [o, s]);
        return r ? c.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(null != a ? a : 0, Date.now() - 2592e6)) : []
    }
    let g = t => {
            let [e, n] = u.useState(!1), i = u.useMemo(() => t.map(P.getApplicationSubscriptionPlanId), [t]), r = (0, l.useStateFromStoresArray)([S.default], () => i.filter(t => null == S.default.get(t)), [i]);
            return u.useEffect(() => {
                r.length > 0 && (n(!0), Promise.all(r.map(t => (0, I.fetchSubscriptionListingForPlan)(t))).catch(() => {}).then(() => {
                    n(!1)
                }))
            }, [r]), {
                loading: e
            }
        },
        y = () => {
            let [t, e] = u.useState(0);
            return u.useEffect(() => {
                e(1), (0, a.fetchUserEntitlements)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: N.EntitlementTypes.APPLICATION_SUBSCRIPTION
                }).catch(() => {
                    e(3)
                }).then(() => {
                    e(2)
                })
            }, []), {
                loadState: t
            }
        },
        G = t => {
            let e = (0, o.default)(),
                n = (0, l.useStateFromStores)([s.default], () => null != t ? s.default.getApplication(t) : null, [t]),
                i = null != n;
            return u.useEffect(() => {
                !i && null != t && e && (0, A.fetchApplication)(t)
            }, [i, t, e]), n
        };

    function D(t) {
        let {
            applicationId: e,
            groupListingId: n,
            guildId: i
        } = t, r = (0, o.default)(), {
            listingsLoaded: u
        } = R(e, n), {
            entitlementsLoaded: l
        } = h({
            guildId: i
        }), {
            entitlementsLoaded: a
        } = U({
            applicationId: e,
            loggedIn: r
        }), s = G(e), {
            enabled: c
        } = C.otpSkusExperiment.useExperiment({
            location: "useApplicationSubscriptionListingsShown"
        }), {
            subscriptionGroupListing: d
        } = F(e, i), S = c ? (null == s ? void 0 : s.isMonetized) === !0 : null != d && (0, P.hasPayableSubscriptionPlan)(d);
        return {
            applicationSubscriptionListingsShown: null != e && null != n && (null == i || l) && (!r || a) && u && S
        }
    }

    function B(t, e) {
        let n = (0, l.useStateFromStores)([c.default], () => c.default.isLoaded()),
            [i, r] = u.useState([]);
        return u.useEffect(() => {
            null == e && null != t && n && (0, A.fetchEligibleApplicationSubscriptionGuilds)(t).then(t => {
                let e = t.map(t => c.default.getGuild(t)).filter(t => null != t);
                r(e)
            })
        }, [t, e, n]), i
    }
}
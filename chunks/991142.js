function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LoadState: function() {
            return o
        },
        default: function() {
            return B
        },
        useActiveSubscriptionListingForApplication: function() {
            return M
        },
        useApplication: function() {
            return G
        },
        useEligibleApplicationSubscriptionGuilds: function() {
            return j
        },
        useFetchEntitlementsForGuild: function() {
            return R
        },
        useFetchListingsForApplication: function() {
            return N
        },
        useFetchListingsForSubscriptions: function() {
            return w
        },
        useFetchUserApplicationSubscriptionEntitlements: function() {
            return k
        },
        useSubscriptionListingsForGroup: function() {
            return P
        },
        useUnseenEndedApplicationSubscriptionEntitlements: function() {
            return U
        }
    });
    var r, o, i = n("470079"),
        a = n("898511"),
        u = n("772309"),
        s = n("974274"),
        l = n("342942"),
        c = n("306912"),
        f = n("29884"),
        d = n("622753"),
        _ = n("428920"),
        E = n("756658"),
        p = n("332716"),
        m = n("511612"),
        y = n("942604"),
        I = n("557537"),
        h = n("512001"),
        O = n("305394"),
        T = n("216239"),
        S = n("281767");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || b(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function A(e) {
        return function(e) {
            if (Array.isArray(e)) return v(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || b(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, t) {
        if (e) {
            if ("string" == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
        }
    }(r = o || (o = {}))[r.NOT_LOADED = 0] = "NOT_LOADED", r[r.LOADING = 1] = "LOADING", r[r.LOADED = 2] = "LOADED", r[r.ERROR = 3] = "ERROR";
    var N = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = n.refetchOnMount,
                o = void 0 !== r && r,
                u = (0, a.useStateFromStores)([h.default], function() {
                    return null != e ? h.default.getSubscriptionGroupListingsForApplicationFetchState(e) : h.FetchState.FETCHED
                }, [e]);
            return i.useEffect(function() {
                if (null != e) {
                    if (null != t) {
                        var n = h.default.getSubscriptionGroupListingsForApplicationFetchState(e);
                        (o || n === h.FetchState.NOT_FETCHED) && (0, y.fetchAllSubscriptionListingsDataForApplication)(e, t)
                    }
                }
            }, [e, t, o]), {
                listingsLoaded: u === h.FetchState.FETCHED
            }
        },
        R = function(e) {
            var t = e.guildId,
                n = e.canFetch,
                r = void 0 === n || n,
                o = e.forceRefetch,
                u = void 0 !== o && o,
                s = (0, a.useStateFromStores)([h.default], function() {
                    return null != t ? h.default.getEntitlementsForGuildFetchState(t) : null
                }, [t]);
            return i.useEffect(function() {
                if (null != t && t !== S.ME) {
                    var e = h.default.getEntitlementsForGuildFetchState(t);
                    r && (e === h.FetchState.NOT_FETCHED || u) && (0, y.fetchEntitlementsForGuild)(t)
                }
            }, [t, r, u]), {
                entitlementsLoaded: s === h.FetchState.FETCHED
            }
        },
        C = function(e) {
            var t = e.applicationId,
                n = e.canFetch,
                r = void 0 === n || n,
                o = e.forceRefetch,
                s = void 0 !== o && o,
                l = e.loggedIn,
                c = (0, a.useStateFromStores)([E.default], function() {
                    return E.default.isFetchedForApplication(t)
                }, [t]);
            return i.useEffect(function() {
                if (l) {
                    var e = E.default.isFetchingForApplication(t);
                    (r && !e && !c || s) && (0, u.fetchUserEntitlements)({
                        entitlementType: S.EntitlementTypes.APPLICATION_SUBSCRIPTION
                    })
                }
            }, [t, r, c, s, l]), {
                entitlementsLoaded: c
            }
        },
        P = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                includeSoftDeleted: !1
            };
            return (0, a.useStateFromStoresArray)([h.default], function() {
                if (null == e) return [];
                var n = h.default.getSubscriptionGroupListing(e);
                if (null == n) return [];
                var r = [],
                    o = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var u, s = n.subscription_listings_ids[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                        var l = u.value,
                            c = h.default.getSubscriptionListing(l);
                        if (null != c)(!c.soft_deleted || t.includeSoftDeleted) && r.push(c)
                    }
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !o && null != s.return && s.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }, [e, t.includeSoftDeleted])
        },
        D = [],
        L = [];

    function M(e, t) {
        var n = (0, a.useStateFromStores)([_.default], function() {
                return _.default.getSubscriptions()
            }),
            r = (0, a.useStateFromStoresObject)([h.default, E.default], function() {
                var n, r;
                return {
                    subscriptionGroupListing: null != e ? h.default.getSubscriptionGroupListingForApplication(e) : null,
                    guildEntitlements: null != e && null != t ? h.default.getApplicationEntitlementsForGuild(e, t) : D,
                    userEntitlements: null != e && null !== (r = null === (n = E.default.getForApplication(e)) || void 0 === n ? void 0 : n.values()) && void 0 !== r ? r : L
                }
            }, [e, t]),
            o = r.subscriptionGroupListing,
            u = r.guildEntitlements,
            s = r.userEntitlements,
            l = i.useMemo(function() {
                return A(u).concat(A(s))
            }, [u, s]),
            c = null == o ? void 0 : o.subscription_listings,
            f = i.useMemo(function() {
                if (null != c) {
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = l[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
                            var a = o.value,
                                u = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, _ = c[Symbol.iterator](); !(u = (d = _.next()).done); u = !0) {
                                    var E = d.value;
                                    if ((0, T.isListingActiveInGuild)(E, a, t)) return {
                                        activeSubscriptionListing: E,
                                        activeEntitlement: a
                                    }
                                }
                            } catch (e) {
                                s = !0, f = e
                            } finally {
                                try {
                                    !u && null != _.return && _.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !e && null != i.return && i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
                return {
                    activeSubscriptionListing: null,
                    activeEntitlement: null
                }
            }, [l, c, t]),
            d = f.activeSubscriptionListing,
            p = f.activeEntitlement;
        return {
            activeSubscription: i.useMemo(function() {
                if (null == n) return null;
                var e = null == d ? void 0 : d.subscription_plans[0].id,
                    t = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = Object.values(n)[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                        var u = i.value;
                        if (u.type === S.SubscriptionTypes.APPLICATION && u.items[0].planId === e) return u
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !t && null != a.return && a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return null
            }, [d, n]),
            activeSubscriptionListing: d,
            activeEntitlement: p,
            subscriptionGroupListing: o
        }
    }

    function U(e) {
        var t, n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : S.EMPTY_STRING_SNOWFLAKE_ID,
            r = R({
                guildId: n,
                canFetch: (0, a.useStateFromStores)([f.default], function() {
                    return f.default.can(S.Permissions.ADMINISTRATOR, e)
                })
            }).entitlementsLoaded,
            o = (0, a.useStateFromStores)([m.default], function() {
                return m.default.getLastGuildDismissedTime(n)
            }),
            u = (0, a.useStateFromStoresArray)([h.default], function() {
                var e = h.default.getEntitlementsForGuild(n),
                    t = h.default.getEntitlementsForGuild(n, !1),
                    r = e.map(function(e) {
                        return e.applicationId
                    });
                return t.filter(function(e) {
                    return !r.includes(e.applicationId)
                })
            }),
            s = (0, a.useStateFromStoresObject)([p.default], function() {
                return p.default.getSKUs()
            }),
            l = i.useMemo(function() {
                return u.filter(function(e) {
                    var t = s[e.skuId];
                    return null != t && t.available
                })
            }, [u, s]);
        return r ? l.filter(function(e) {
            return null != e.endsAt && e.endsAt.getTime() > Math.max(null != o ? o : 0, Date.now() - 2592e6)
        }) : []
    }
    var w = function(e) {
            var t = g(i.useState(!1), 2),
                n = t[0],
                r = t[1],
                o = i.useMemo(function() {
                    return e.map(T.getApplicationSubscriptionPlanId)
                }, [e]),
                u = (0, a.useStateFromStoresArray)([d.default], function() {
                    return o.filter(function(e) {
                        return null == d.default.get(e)
                    })
                }, [o]);
            return i.useEffect(function() {
                u.length > 0 && (r(!0), Promise.all(u.map(function(e) {
                    return (0, y.fetchSubscriptionListingForPlan)(e)
                })).catch(function() {}).then(function() {
                    r(!1)
                }))
            }, [u]), {
                loading: n
            }
        },
        k = function() {
            var e = g(i.useState(0), 2),
                t = e[0],
                n = e[1];
            return i.useEffect(function() {
                n(1), (0, u.fetchUserEntitlements)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: S.EntitlementTypes.APPLICATION_SUBSCRIPTION
                }).catch(function() {
                    n(3)
                }).then(function() {
                    n(2)
                })
            }, []), {
                loadState: t
            }
        },
        G = function(e) {
            var t = (0, s.default)(),
                n = (0, a.useStateFromStores)([l.default], function() {
                    return null != e ? l.default.getApplication(e) : null
                }, [e]),
                r = null != n;
            return i.useEffect(function() {
                !r && null != e && t && (0, I.fetchApplication)(e)
            }, [r, e, t]), n
        };

    function B(e) {
        var t = e.applicationId,
            n = e.groupListingId,
            r = e.guildId,
            o = (0, s.default)(),
            i = N(t, n).listingsLoaded,
            a = R({
                guildId: r
            }).entitlementsLoaded,
            u = C({
                applicationId: t,
                loggedIn: o
            }).entitlementsLoaded,
            l = G(t),
            c = O.otpSkusExperiment.useExperiment({
                location: "useApplicationSubscriptionListingsShown"
            }).enabled,
            f = M(t, r).subscriptionGroupListing,
            d = c ? (null == l ? void 0 : l.isMonetized) === !0 : null != f && (0, T.hasPayableSubscriptionPlan)(f);
        return {
            applicationSubscriptionListingsShown: null != t && null != n && (null == r || a) && (!o || u) && i && d
        }
    }

    function j(e, t) {
        var n = (0, a.useStateFromStores)([c.default], function() {
                return c.default.isLoaded()
            }),
            r = g(i.useState([]), 2),
            o = r[0],
            u = r[1];
        return i.useEffect(function() {
            null == t && null != e && n && (0, I.fetchEligibleApplicationSubscriptionGuilds)(e).then(function(e) {
                u(e.map(function(e) {
                    return c.default.getGuild(e)
                }).filter(function(e) {
                    return null != e
                }))
            })
        }, [e, t, n]), o
    }
}
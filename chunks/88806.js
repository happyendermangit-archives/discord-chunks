function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return u
        }
    });
    var r, o, i, a, u, s, l = n("512722"),
        c = n.n(l),
        f = n("898511"),
        d = n("727309"),
        _ = n("629815"),
        E = n("627534");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e) {
        return "guild:".concat(e)
    }

    function O(e) {
        return "subscription_listing:".concat(e)
    }

    function T(e) {
        return "application:".concat(e)
    }

    function S(e) {
        return "plan:".concat(e)
    }(r = u || (u = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
    var v = new d.SecondaryIndexMap(function(e) {
            var t;
            return [h(e.guild_id)].concat(function(e) {
                if (Array.isArray(e)) return p(e)
            }(t = e.subscription_listings_ids.map(O)) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }
            }(t) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())
        }, function(e) {
            return e.id
        }),
        g = new d.SecondaryIndexMap(function(e) {
            return [T(e.application_id), S(e.subscription_plans[0].id)]
        }, function(e) {
            return e.id
        }),
        A = {},
        b = new Set,
        N = {},
        R = {},
        C = {},
        P = {},
        D = new Map;

    function L(e) {
        return v.values(h(e))
    }

    function M(e) {
        v.set(e.id, e), D.set(e.guild_id, e.application_id);
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i, a = (null !== (o = e.subscription_listings) && void 0 !== o ? o : [])[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                var u = i.value;
                U(u)
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != a.return && a.return()
            } finally {
                if (n) throw r
            }
        }
    }

    function U(e) {
        g.set(e.id, e)
    }
    var w = [],
        k = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && I(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = y(t);
                if (n) {
                    var a = y(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "getSubscriptionGroupListingsForGuildFetchState",
                value: function(e) {
                    var t;
                    return null !== (t = A[e]) && void 0 !== t ? t : 0
                }
            }, {
                key: "getDidFetchListingForSubscriptionPlanId",
                value: function(e) {
                    return b.has(e)
                }
            }, {
                key: "getSubscriptionGroupListing",
                value: function(e) {
                    return v.get(e)
                }
            }, {
                key: "getSubscriptionGroupListingsForGuild",
                value: function(e) {
                    return L(e)
                }
            }, {
                key: "getSubscriptionGroupListingForSubscriptionListing",
                value: function(e) {
                    var t = v.values(O(e));
                    return c()(t.length <= 1, "Found multiple group listings for listing"), t[0]
                }
            }, {
                key: "getSubscriptionListing",
                value: function(e) {
                    return g.get(e)
                }
            }, {
                key: "getSubscriptionListingsForGuild",
                value: function(e) {
                    var t, n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
                    return null != n ? g.values(T(n)) : w
                }
            }, {
                key: "getSubscriptionListingForPlan",
                value: function(e) {
                    var t = g.values(S(e));
                    return c()(t.length <= 1, "Found multiple listings for plan"), t[0]
                }
            }, {
                key: "getSubscriptionSettings",
                value: function(e) {
                    return N[e]
                }
            }, {
                key: "getSubscriptionTrial",
                value: function(e) {
                    return R[e]
                }
            }, {
                key: "getMonetizationRestrictions",
                value: function(e) {
                    return C[e]
                }
            }, {
                key: "getMonetizationRestrictionsFetchState",
                value: function(e) {
                    var t;
                    return null !== (t = P[e]) && void 0 !== t ? t : 0
                }
            }, {
                key: "getApplicationIdForGuild",
                value: function(e) {
                    return D.get(e)
                }
            }], m(r.prototype, o), i && m(r, i), u
        }(f.default.Store);
    a = "GuildRoleSubscriptionsStore", (i = "displayName") in(o = k) ? Object.defineProperty(o, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[i] = a, t.default = new k(_.default, {
        CONNECTION_OPEN: function() {
            v.clear(), g.clear(), A = {}, b.clear(), N = {}, R = {}, C = {}, P = {}, D.clear()
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function(e) {
            var t = e.settings;
            N[t.guild_id] = t
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
            var t = e.guildId;
            A[t] = 1;
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = L(t)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    v.delete(u.id);
                    var s = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var f, d = u.subscription_listings_ids[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                            var _ = f.value;
                            g.delete(_)
                        }
                    } catch (e) {
                        l = !0, c = e
                    } finally {
                        try {
                            !s && null != d.return && d.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.groupListings,
                r = e.settings,
                o = e.subscriptionTrials;
            A[t] = 2;
            var i = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l = n[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                    var c = s.value;
                    M(c)
                }
            } catch (e) {
                a = !0, u = e
            } finally {
                try {
                    !i && null != l.return && l.return()
                } finally {
                    if (a) throw u
                }
            }
            N[t] = r;
            var f = !0,
                d = !1,
                _ = void 0;
            try {
                for (var E, p = o[Symbol.iterator](); !(f = (E = p.next()).done); f = !0) {
                    var m = E.value;
                    R[m.id] = m
                }
            } catch (e) {
                d = !0, _ = e
            } finally {
                try {
                    !f && null != p.return && p.return()
                } finally {
                    if (d) throw _
                }
            }
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
            A[e.guildId] = 2
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function(e) {
            M(e.listing)
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function(e) {
            var t = e.groupListingId;
            v.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function(e) {
            var t = e.planId;
            b.add(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
            M(e.groupListing)
        },
        GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function(e) {
            var t = e.listing,
                n = e.groupListing;
            U(t), M(n)
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function(e) {
            U(e.listing)
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function(e) {
            var t = e.listingId;
            return g.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function(e) {
            var t = e.subscriptionTrial;
            R[t.id] = t
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function(e) {
            P[e.guildId] = 1
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.restrictions;
            C[t] = n, P[t] = 2
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
            var t = e.guildId;
            P[t] = 2, C[t] = E.DefaultCreatorMonetizationRestrictions
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function(e) {
            P[e.guildId] = 0
        }
    })
}
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
        E = n("660560"),
        p = n("332716");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function O(e) {
        return "subscription_listing:".concat(e)
    }

    function T(e) {
        return "application:".concat(e)
    }

    function S(e) {
        return "plan:".concat(e)
    }

    function v(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t)
    }

    function g(e, t) {
        return "entitlement:".concat(t, ":").concat(e)
    }(r = u || (u = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
    var A = new d.SecondaryIndexMap(function(e) {
            var t;
            return [T(e.application_id)].concat(function(e) {
                if (Array.isArray(e)) return m(e)
            }(t = e.subscription_listings_ids.map(O)) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }
            }(t) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())
        }, function(e) {
            return e.id
        }),
        b = new d.SecondaryIndexMap(function(e) {
            return [T(e.application_id), S(e.subscription_plans[0].id)]
        }, function(e) {
            return e.id
        }),
        N = new d.SecondaryIndexMap(function(e) {
            return [v(e.applicationId, e.isValid(null, p.default), e.guildId), g(e.isValid(null, p.default), e.guildId)]
        }, function(e) {
            return e.id
        }),
        R = {},
        C = {};

    function P(e) {
        var t = A.values(T(e));
        return c()(t.length <= 1, "Found multiple group listings for application"), t[0]
    }

    function D(e) {
        A.set(e.id, e);
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i, a = (null !== (o = e.subscription_listings) && void 0 !== o ? o : [])[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                var u = i.value;
                (function(e) {
                    b.set(e.id, e)
                })(u)
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
    var L = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
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
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
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
            key: "getSubscriptionGroupListingsForApplicationFetchState",
            value: function(e) {
                var t;
                return null !== (t = R[e]) && void 0 !== t ? t : 0
            }
        }, {
            key: "getSubscriptionGroupListing",
            value: function(e) {
                return A.get(e)
            }
        }, {
            key: "getSubscriptionGroupListingForApplication",
            value: function(e) {
                return P(e)
            }
        }, {
            key: "getSubscriptionGroupListingForSubscriptionListing",
            value: function(e) {
                var t = A.values(O(e));
                return c()(t.length <= 1, "Found multiple group listings for listing"), t[0]
            }
        }, {
            key: "getSubscriptionListing",
            value: function(e) {
                return b.get(e)
            }
        }, {
            key: "getSubscriptionListingsForApplication",
            value: function(e) {
                return b.values(T(e))
            }
        }, {
            key: "getEntitlementsForGuildFetchState",
            value: function(e) {
                var t;
                return null !== (t = C[e]) && void 0 !== t ? t : 0
            }
        }, {
            key: "getSubscriptionListingForPlan",
            value: function(e) {
                var t = b.values(S(e));
                return c()(t.length <= 1, "Found multiple listings for plan"), t[0]
            }
        }, {
            key: "getApplicationEntitlementsForGuild",
            value: function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                return N.values(v(e, n, t))
            }
        }, {
            key: "getEntitlementsForGuild",
            value: function(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return N.values(g(t, e))
            }
        }], y(r.prototype, o), i && y(r, i), u
    }(f.default.Store);
    a = "ApplicationSubscriptionStore", (i = "displayName") in(o = L) ? Object.defineProperty(o, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[i] = a, t.default = new L(_.default, {
        LOGOUT: function() {
            A.clear(), b.clear(), N.clear(), R = {}, C = {}
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
            var t = e.applicationId;
            R[t] = 1;
            var n = P(t);
            if (null != n) {
                var r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = n.subscription_listings_ids[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var s = a.value;
                        b.delete(s)
                    }
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && null != u.return && u.return()
                    } finally {
                        if (o) throw i
                    }
                }
            }
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
            var t = e.applicationId,
                n = e.groupListing;
            R[t] = 2, D(n)
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
            R[e.applicationId] = 2
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS: function(e) {
            C[e.guildId] = 1
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.entitlements;
            C[t] = 2, n.forEach(function(e) {
                var t = E.default.createFromServer(e);
                N.set(t.id, t)
            })
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE: function(e) {
            C[e.guildId] = 0
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
            D(e.groupListing)
        }
    })
}
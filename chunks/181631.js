function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMPTY_DISCOVERABLE_GUILDS_SECTION: function() {
            return b
        }
    });
    var r, o, i, a, u = n("512722"),
        s = n.n(u),
        l = n("392711"),
        c = n.n(l),
        f = n("898511");
    n("252546");
    var d = n("629815"),
        _ = n("300213"),
        E = n("217014"),
        p = n("804434"),
        m = n("281767"),
        y = n("904895");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                O(e, t, n[t])
            })
        }
        return e
    }

    function v(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function A(e, t) {
        if (e) {
            if ("string" == typeof e) return I(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
        }
    }(r = o || (o = {})).UNSET = "unset", r.FETCHING = "fetching", r.FAILED = "failed", r.SUCCEEDED = "succeeded";
    var b = {
            guilds: [],
            total: 0,
            offset: 0,
            limit: 0,
            loading: !1,
            isFirstLoad: !0
        },
        N = (O(i = {}, m.GuildDiscoverySections.FEATURED, S({}, b)), O(i, m.GuildDiscoverySections.GAMES_YOU_PLAY, S({}, b)), O(i, m.GuildDiscoverySections.MISC, S({}, b)), O(i, m.GuildDiscoverySections.SEARCH, {}), O(i, y.DISCOVERY_ALL_CATEGORIES_ID, S({}, b)), i),
        R = "",
        C = !1,
        P = "unset",
        D = null,
        L = y.DISCOVERY_ALL_CATEGORIES_ID,
        M = y.DISCOVERY_ALL_CATEGORIES_ID,
        U = null,
        w = [],
        k = (0, _.makeAnalyticsID)();

    function G(e) {
        return {
            id: e.id,
            name: e.name,
            description: e.description,
            splash: e.splash,
            banner: e.banner,
            icon: e.icon,
            features: new Set(e.features),
            presenceCount: e.approximate_presence_count,
            memberCount: e.approximate_member_count,
            premiumSubscriptionCount: e.premium_subscription_count,
            preferredLocale: e.preferred_locale,
            discoverySplash: e.discovery_splash,
            emojis: e.emojis,
            emojiCount: e.emoji_count,
            keywords: e.keywords
        }
    }
    var B = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
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
            var e, r, o, i = T(t);
            if (n) {
                var a = T(this).constructor;
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
            key: "initialize",
            value: function() {
                this.waitFor(E.default)
            }
        }, {
            key: "isFetching",
            value: function() {
                return C || null == D || null == p.default.lastFetched
            }
        }, {
            key: "isFetchingSearch",
            value: function() {
                return "fetching" === P
            }
        }, {
            key: "hasSearchError",
            value: function() {
                return "failed" === P
            }
        }, {
            key: "getDiscoverableGuilds",
            value: function() {
                return N
            }
        }, {
            key: "getCurrentCategoryId",
            value: function() {
                return L
            }
        }, {
            key: "getCurrentHomepageCategoryId",
            value: function() {
                return M
            }
        }, {
            key: "getSearchIndex",
            value: function() {
                return U
            }
        }, {
            key: "getMostRecentQuery",
            value: function() {
                return R
            }
        }, {
            key: "getTopCategoryCounts",
            value: function(e) {
                var t;
                return null === (t = N[m.GuildDiscoverySections.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts
            }
        }, {
            key: "getSeenGuildIds",
            value: function() {
                return w
            }
        }, {
            key: "getLoadId",
            value: function() {
                return k
            }
        }], h(r.prototype, o), i && h(r, i), u
    }(f.default.Store);
    O(B, "displayName", "GuildDiscoveryStore"), t.default = new B(d.default, {
        GUILD_DISCOVERY_SEARCH_INIT: function(e) {
            U = e.index
        },
        GUILD_DISCOVERY_FETCH_START: function(e) {
            var t = e.section;
            C = !0, N = v(S({}, N), O({}, t, v(S({}, N[t]), {
                loading: !0
            })))
        },
        GUILD_DISCOVERY_FETCH_SUCCESS: function(e) {
            var t = e.guilds,
                n = e.section,
                r = e.total,
                o = e.offset,
                i = e.limit;
            C = !1, D = Date.now(), k = (0, _.makeAnalyticsID)();
            var a = c().map(t, G);
            N = v(S({}, N), O({}, n, {
                guilds: a,
                offset: o,
                limit: i,
                total: r,
                loading: !1,
                isFirstLoad: !1
            }))
        },
        GUILD_DISCOVERY_FETCH_FAILURE: function(e) {
            var t = e.section;
            C = !1, N = v(S({}, N), O({}, t, v(S({}, b), {
                loading: !1
            })))
        },
        GUILD_DISCOVERY_POPULAR_FETCH_START: function(e) {
            var t = e.categoryId;
            C = !0, N = v(S({}, N), O({}, t, v(S({}, b, N[t]), {
                loading: !0
            })))
        },
        GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function(e) {
            var t = e.categoryId,
                n = e.guilds;
            C = !1, D = Date.now();
            var r = c().map(n, G);
            N = v(S({}, N), O({}, t, v(S({}, b), {
                guilds: r,
                loading: !1,
                isFirstLoad: !1
            })))
        },
        GUILD_DISCOVERY_POPULAR_FETCH_FAILURE: function(e) {
            var t = e.categoryId;
            C = !1, N = v(S({}, N), O({}, t, v(S({}, b), {
                loading: !1
            })))
        },
        GUILD_DISCOVERY_SEARCH_FETCH_START: function(e) {
            var t, n = e.section,
                r = e.query,
                o = e.categoryId;
            s()("search" === n, "This action only supports search it seems"), P = "fetching", N = v(S({}, N), O({}, n, v(S({}, N[n]), O({}, r, v(S({}, N[n][r]), O({}, o, v(S({}, null === (t = N[n][r]) || void 0 === t ? void 0 : t[o]), {
                loading: !0
            }))))))), R = r
        },
        GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function(e) {
            var t, n = e.section,
                r = e.guilds,
                o = e.total,
                i = e.offset,
                a = e.limit,
                u = e.query,
                l = e.categoryId;
            s()("search" === n, "This action only supports search it seems");
            var c = r.map(G);
            N = v(S({}, N), O({}, n, v(S({}, N[n]), O({}, u, v(S({}, N[n][u]), O({}, l, v(S({}, null === (t = N[n][u]) || void 0 === t ? void 0 : t[l]), {
                guilds: c,
                total: o,
                offset: i,
                limit: a,
                loading: !1
            }))))))), R = u, P = "succeeded"
        },
        GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function(e) {
            var t, n = e.section,
                r = e.query,
                o = e.categoryId;
            s()("search" === n, "This action only supports search it seems"), P = "failed", N = v(S({}, N), O({}, n, v(S({}, N[n]), O({}, r, v(S({}, N[n][r]), O({}, o, v(S({}, null === (t = N[n][r]) || void 0 === t ? void 0 : t[o]), {
                loading: !1
            })))))))
        },
        GUILD_DISCOVERY_SELECT_CATEGORY: function(e) {
            var t = e.categoryId,
                n = e.isHomepage;
            L = t, n && (M = t)
        },
        GUILD_DISCOVERY_CLEAR_SEARCH: function() {
            R = ""
        },
        GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: function(e) {
            var t, n = e.nbHits,
                r = e.facets,
                o = e.query,
                i = [];
            if (null != r) {
                var a, u = null !== (a = r["categories.id"]) && void 0 !== a ? a : {};
                delete u[y.DEFAULT_DISCOVERY_CATEGORY_ID], i = Object.entries(u).map(function(e) {
                    var t, n, r = (n = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(t = e) || function(e, t) {
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
                        }(t, n) || A(t, n) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        o = r[0],
                        i = r[1];
                    return [parseInt(o, 10), i]
                }).sort(function(e, t) {
                    return t[1] - e[1]
                }).slice(0, 7)
            }
            N = v(S({}, N), O({}, m.GuildDiscoverySections.SEARCH, v(S({}, N[m.GuildDiscoverySections.SEARCH]), O({}, o, v(S({}, N[m.GuildDiscoverySections.SEARCH][o]), {
                resultCounts: [
                    [(0, y.DISCOVERY_ALL_CATEGORIES_ID), Math.min(y.MAX_ALGOLIA_PAGINATOR_RESULTS, n)]
                ].concat(function(e) {
                    if (Array.isArray(e)) return I(e)
                }(t = i) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || A(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())
            })))))
        },
        GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function(e) {
            var t = e.query;
            N = v(S({}, N), O({}, m.GuildDiscoverySections.SEARCH, v(S({}, N[m.GuildDiscoverySections.SEARCH]), O({}, t, v(S({}, N[m.GuildDiscoverySections.SEARCH][t]), {
                resultCounts: null
            })))))
        },
        GUILD_DISCOVERY_GUILD_SEEN: function(e) {
            var t = e.guildId;
            !w.includes(t) && w.push(t)
        },
        GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: function() {
            w = []
        }
    })
}
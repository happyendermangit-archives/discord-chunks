function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMPTY_DISCOVERABLE_GUILDS_SECTION: function() {
            return m
        }
    }), n("47120"), n("653041");
    var i, r, s, a, o, l, u = n("512722"),
        d = n.n(u),
        _ = n("392711"),
        c = n.n(_),
        E = n("442837");
    n("902704");
    var I = n("570140"),
        T = n("117496"),
        f = n("314897"),
        S = n("230307"),
        h = n("981631"),
        A = n("731455");
    (s = i || (i = {})).UNSET = "unset", s.FETCHING = "fetching", s.FAILED = "failed", s.SUCCEEDED = "succeeded";
    let m = {
            guilds: [],
            total: 0,
            offset: 0,
            limit: 0,
            loading: !1,
            isFirstLoad: !0
        },
        N = {
            [h.GuildDiscoverySections.FEATURED]: {
                ...m
            },
            [h.GuildDiscoverySections.GAMES_YOU_PLAY]: {
                ...m
            },
            [h.GuildDiscoverySections.MISC]: {
                ...m
            },
            [h.GuildDiscoverySections.SEARCH]: {},
            [A.DISCOVERY_ALL_CATEGORIES_ID]: {
                ...m
            }
        },
        p = "",
        O = !1,
        R = "unset",
        C = null,
        g = A.DISCOVERY_ALL_CATEGORIES_ID,
        L = A.DISCOVERY_ALL_CATEGORIES_ID,
        v = null,
        D = [],
        M = (0, T.makeAnalyticsID)(),
        y = !1;

    function P(e) {
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
    class U extends(r = E.default.Store) {
        initialize() {
            this.waitFor(f.default)
        }
        isFetching() {
            return O || null == C || null == S.default.lastFetched
        }
        isFetchingSearch() {
            return "fetching" === R
        }
        hasSearchError() {
            return "failed" === R
        }
        getDiscoverableGuilds() {
            return N
        }
        getCurrentCategoryId() {
            return g
        }
        getCurrentHomepageCategoryId() {
            return L
        }
        getSearchIndex() {
            return v
        }
        getMostRecentQuery() {
            return p
        }
        getTopCategoryCounts(e) {
            var t;
            return null === (t = N[h.GuildDiscoverySections.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts
        }
        getSeenGuildIds() {
            return D
        }
        getLoadId() {
            return M
        }
        getIsReady() {
            return y
        }
    }
    l = "GuildDiscoveryStore", (o = "displayName") in(a = U) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new U(I.default, {
        GUILD_DISCOVERY_SEARCH_INIT: function(e) {
            let {
                index: t
            } = e;
            v = t
        },
        GUILD_DISCOVERY_FETCH_START: function(e) {
            let {
                section: t
            } = e;
            O = !0, N = {
                ...N,
                [t]: {
                    ...N[t],
                    loading: !0
                }
            }
        },
        GUILD_DISCOVERY_FETCH_SUCCESS: function(e) {
            let {
                guilds: t,
                section: n,
                total: i,
                offset: r,
                limit: s
            } = e;
            O = !1, C = Date.now(), M = (0, T.makeAnalyticsID)();
            let a = c().map(t, P);
            N = {
                ...N,
                [n]: {
                    guilds: a,
                    offset: r,
                    limit: s,
                    total: i,
                    loading: !1,
                    isFirstLoad: !1
                }
            }
        },
        GUILD_DISCOVERY_FETCH_FAILURE: function(e) {
            let {
                section: t
            } = e;
            O = !1, N = {
                ...N,
                [t]: {
                    ...m,
                    loading: !1
                }
            }
        },
        GUILD_DISCOVERY_POPULAR_FETCH_START: function(e) {
            let {
                categoryId: t
            } = e;
            O = !0, N = {
                ...N,
                [t]: {
                    ...m,
                    ...N[t],
                    loading: !0
                }
            }
        },
        GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function(e) {
            let {
                categoryId: t,
                guilds: n
            } = e;
            O = !1, C = Date.now();
            let i = c().map(n, P);
            N = {
                ...N,
                [t]: {
                    ...m,
                    guilds: i,
                    loading: !1,
                    isFirstLoad: !1
                }
            }
        },
        GUILD_DISCOVERY_POPULAR_FETCH_FAILURE: function(e) {
            let {
                categoryId: t
            } = e;
            O = !1, N = {
                ...N,
                [t]: {
                    ...m,
                    loading: !1
                }
            }
        },
        GUILD_DISCOVERY_SEARCH_FETCH_START: function(e) {
            var t;
            let {
                section: n,
                query: i,
                categoryId: r
            } = e;
            d()("search" === n, "This action only supports search it seems"), R = "fetching", N = {
                ...N,
                [n]: {
                    ...N[n],
                    [i]: {
                        ...N[n][i],
                        [r]: {
                            ...null === (t = N[n][i]) || void 0 === t ? void 0 : t[r],
                            loading: !0
                        }
                    }
                }
            }, p = i
        },
        GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function(e) {
            var t;
            let {
                section: n,
                guilds: i,
                total: r,
                offset: s,
                limit: a,
                query: o,
                categoryId: l
            } = e;
            d()("search" === n, "This action only supports search it seems");
            let u = i.map(P);
            N = {
                ...N,
                [n]: {
                    ...N[n],
                    [o]: {
                        ...N[n][o],
                        [l]: {
                            ...null === (t = N[n][o]) || void 0 === t ? void 0 : t[l],
                            guilds: u,
                            total: r,
                            offset: s,
                            limit: a,
                            loading: !1
                        }
                    }
                }
            }, p = o, R = "succeeded"
        },
        GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function(e) {
            var t;
            let {
                section: n,
                query: i,
                categoryId: r
            } = e;
            d()("search" === n, "This action only supports search it seems"), R = "failed", N = {
                ...N,
                [n]: {
                    ...N[n],
                    [i]: {
                        ...N[n][i],
                        [r]: {
                            ...null === (t = N[n][i]) || void 0 === t ? void 0 : t[r],
                            loading: !1
                        }
                    }
                }
            }
        },
        GUILD_DISCOVERY_SELECT_CATEGORY: function(e) {
            let {
                categoryId: t,
                isHomepage: n
            } = e;
            g = t, n && (L = t)
        },
        GUILD_DISCOVERY_CLEAR_SEARCH: function() {
            p = ""
        },
        GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: function(e) {
            let {
                nbHits: t,
                facets: n,
                query: i
            } = e, r = [];
            if (null != n) {
                var s;
                let e = null !== (s = n["categories.id"]) && void 0 !== s ? s : {};
                delete e[A.DEFAULT_DISCOVERY_CATEGORY_ID], r = Object.entries(e).map(e => {
                    let [t, n] = e;
                    return [parseInt(t, 10), n]
                }).sort((e, t) => t[1] - e[1]).slice(0, 7)
            }
            N = {
                ...N,
                [h.GuildDiscoverySections.SEARCH]: {
                    ...N[h.GuildDiscoverySections.SEARCH],
                    [i]: {
                        ...N[h.GuildDiscoverySections.SEARCH][i],
                        resultCounts: [
                            [A.DISCOVERY_ALL_CATEGORIES_ID, Math.min(A.MAX_ALGOLIA_PAGINATOR_RESULTS, t)], ...r
                        ]
                    }
                }
            }
        },
        GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function(e) {
            let {
                query: t
            } = e;
            N = {
                ...N,
                [h.GuildDiscoverySections.SEARCH]: {
                    ...N[h.GuildDiscoverySections.SEARCH],
                    [t]: {
                        ...N[h.GuildDiscoverySections.SEARCH][t],
                        resultCounts: null
                    }
                }
            }
        },
        GUILD_DISCOVERY_GUILD_SEEN: function(e) {
            let {
                guildId: t
            } = e;
            !D.includes(t) && D.push(t)
        },
        GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: function() {
            D = []
        },
        GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
            let {
                forClanDiscovery: t
            } = e;
            t && (g = A.CategoryId.Clans, L = A.CategoryId.Clans, y = !0)
        }
    })
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMPTY_DISCOVERABLE_GUILDS_SECTION: function() {
            return g
        },
        default: function() {
            return D
        }
    }), n("222007"), n("424973");
    var i, s, r = n("627445"),
        a = n.n(r),
        o = n("917351"),
        l = n.n(o),
        u = n("446674");
    n("233736");
    var d = n("913144"),
        c = n("197231"),
        f = n("271938"),
        _ = n("251013"),
        h = n("49111"),
        E = n("447621");
    (s = i || (i = {})).UNSET = "unset", s.FETCHING = "fetching", s.FAILED = "failed", s.SUCCEEDED = "succeeded";
    let g = {
            guilds: [],
            total: 0,
            offset: 0,
            limit: 0,
            loading: !1,
            isFirstLoad: !0
        },
        m = {
            [h.GuildDiscoverySections.FEATURED]: {
                ...g
            },
            [h.GuildDiscoverySections.GAMES_YOU_PLAY]: {
                ...g
            },
            [h.GuildDiscoverySections.MISC]: {
                ...g
            },
            [h.GuildDiscoverySections.SEARCH]: {},
            [E.DISCOVERY_ALL_CATEGORIES_ID]: {
                ...g
            }
        },
        p = "",
        S = !1,
        v = "unset",
        T = null,
        I = E.DISCOVERY_ALL_CATEGORIES_ID,
        C = E.DISCOVERY_ALL_CATEGORIES_ID,
        A = null,
        y = [],
        N = (0, c.makeAnalyticsID)();

    function R(e) {
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
    class O extends u.default.Store {
        initialize() {
            this.waitFor(f.default)
        }
        isFetching() {
            return S || null == T || null == _.default.lastFetched
        }
        isFetchingSearch() {
            return "fetching" === v
        }
        hasSearchError() {
            return "failed" === v
        }
        getDiscoverableGuilds() {
            return m
        }
        getCurrentCategoryId() {
            return I
        }
        getCurrentHomepageCategoryId() {
            return C
        }
        getSearchIndex() {
            return A
        }
        getMostRecentQuery() {
            return p
        }
        getTopCategoryCounts(e) {
            var t;
            return null === (t = m[h.GuildDiscoverySections.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts
        }
        getSeenGuildIds() {
            return y
        }
        getLoadId() {
            return N
        }
    }
    O.displayName = "GuildDiscoveryStore";
    var D = new O(d.default, {
        GUILD_DISCOVERY_SEARCH_INIT: function(e) {
            let {
                index: t
            } = e;
            A = t
        },
        GUILD_DISCOVERY_FETCH_START: function(e) {
            let {
                section: t
            } = e;
            S = !0, m = {
                ...m,
                [t]: {
                    ...m[t],
                    loading: !0
                }
            }
        },
        GUILD_DISCOVERY_FETCH_SUCCESS: function(e) {
            let {
                guilds: t,
                section: n,
                total: i,
                offset: s,
                limit: r
            } = e;
            S = !1, T = Date.now(), N = (0, c.makeAnalyticsID)();
            let a = l.map(t, R);
            m = {
                ...m,
                [n]: {
                    guilds: a,
                    offset: s,
                    limit: r,
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
            S = !1, m = {
                ...m,
                [t]: {
                    ...g,
                    loading: !1
                }
            }
        },
        GUILD_DISCOVERY_POPULAR_FETCH_START: function(e) {
            let {
                categoryId: t
            } = e;
            S = !0, m = {
                ...m,
                [t]: {
                    ...g,
                    ...m[t],
                    loading: !0
                }
            }
        },
        GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function(e) {
            let {
                categoryId: t,
                guilds: n
            } = e;
            S = !1, T = Date.now();
            let i = l.map(n, R);
            m = {
                ...m,
                [t]: {
                    ...g,
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
            S = !1, m = {
                ...m,
                [t]: {
                    ...g,
                    loading: !1
                }
            }
        },
        GUILD_DISCOVERY_SEARCH_FETCH_START: function(e) {
            var t;
            let {
                section: n,
                query: i,
                categoryId: s
            } = e;
            a("search" === n, "This action only supports search it seems"), v = "fetching", m = {
                ...m,
                [n]: {
                    ...m[n],
                    [i]: {
                        ...m[n][i],
                        [s]: {
                            ...null === (t = m[n][i]) || void 0 === t ? void 0 : t[s],
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
                total: s,
                offset: r,
                limit: o,
                query: l,
                categoryId: u
            } = e;
            a("search" === n, "This action only supports search it seems");
            let d = i.map(R);
            m = {
                ...m,
                [n]: {
                    ...m[n],
                    [l]: {
                        ...m[n][l],
                        [u]: {
                            ...null === (t = m[n][l]) || void 0 === t ? void 0 : t[u],
                            guilds: d,
                            total: s,
                            offset: r,
                            limit: o,
                            loading: !1
                        }
                    }
                }
            }, p = l, v = "succeeded"
        },
        GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function(e) {
            var t;
            let {
                section: n,
                query: i,
                categoryId: s
            } = e;
            a("search" === n, "This action only supports search it seems"), v = "failed", m = {
                ...m,
                [n]: {
                    ...m[n],
                    [i]: {
                        ...m[n][i],
                        [s]: {
                            ...null === (t = m[n][i]) || void 0 === t ? void 0 : t[s],
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
            I = t, n && (C = t)
        },
        GUILD_DISCOVERY_CLEAR_SEARCH: function() {
            p = ""
        },
        GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: function(e) {
            let {
                nbHits: t,
                facets: n,
                query: i
            } = e, s = [];
            if (null != n) {
                var r;
                let e = null !== (r = n["categories.id"]) && void 0 !== r ? r : {};
                delete e[E.DEFAULT_DISCOVERY_CATEGORY_ID], s = Object.entries(e).map(e => {
                    let [t, n] = e;
                    return [parseInt(t, 10), n]
                }).sort((e, t) => t[1] - e[1]).slice(0, 7)
            }
            m = {
                ...m,
                [h.GuildDiscoverySections.SEARCH]: {
                    ...m[h.GuildDiscoverySections.SEARCH],
                    [i]: {
                        ...m[h.GuildDiscoverySections.SEARCH][i],
                        resultCounts: [
                            [E.DISCOVERY_ALL_CATEGORIES_ID, Math.min(E.MAX_ALGOLIA_PAGINATOR_RESULTS, t)], ...s
                        ]
                    }
                }
            }
        },
        GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function(e) {
            let {
                query: t
            } = e;
            m = {
                ...m,
                [h.GuildDiscoverySections.SEARCH]: {
                    ...m[h.GuildDiscoverySections.SEARCH],
                    [t]: {
                        ...m[h.GuildDiscoverySections.SEARCH][t],
                        resultCounts: null
                    }
                }
            }
        },
        GUILD_DISCOVERY_GUILD_SEEN: function(e) {
            let {
                guildId: t
            } = e;
            !y.includes(t) && y.push(t)
        },
        GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: function() {
            y = []
        }
    })
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsContexts: function() {
            return i
        },
        MINIMUM_MEMBER_COUNT: function() {
            return T
        },
        getDiscoverableGuild: function() {
            return g
        },
        makeDiscoverableGuild: function() {
            return h
        },
        startLurking: function() {
            return f
        },
        trackDiscoveryExited: function() {
            return m
        },
        trackDiscoveryViewed: function() {
            return A
        },
        trackGuildJoinClicked: function() {
            return C
        },
        trackSearchClosed: function() {
            return N
        },
        trackSearchResultsViewed: function() {
            return R
        },
        trackSearchStarted: function() {
            return O
        },
        trackTagSearchStarted: function() {
            return p
        },
        viewGuild: function() {
            return S
        }
    }), n("47120");
    var i, r, s = n("664751"),
        a = n("544891"),
        o = n("749210"),
        l = n("41776"),
        u = n("703656"),
        d = n("920440"),
        _ = n("650774"),
        c = n("430824"),
        E = n("626135"),
        I = n("981631");
    (r = i || (i = {})).SEARCH = "Search", r.RECOMMENDED = "Recommended", r.POPULAR = "Popular", r.RECOMMENDED_E3 = "Recommended - E3", r.HEADER = "Header";
    let T = ">200";
    async function f(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                channelId: i,
                onSuccess: r,
                joinSource: s,
                loadId: a,
                setsHistorySnapshot: _ = !0
            } = n,
            E = (0, u.getHistory)();
        _ && l.default.setHistorySnapshot({
            ...E
        });
        let I = c.default.getGuild(e),
            T = {
                state: {
                    analyticsSource: t
                }
            };
        null != I && null != I.joinedAt ? (0, d.transitionToGuild)(e, T) : (await o.default.joinGuild(e, {
            lurker: !0,
            source: s,
            loadId: a,
            lurkLocation: null == t ? void 0 : t.page
        }), await o.default.transitionToGuildSync(e, {
            ...T,
            welcomeModalChannelId: i,
            search: E.location.search
        }, i)), null == r || r()
    }
    async function S(e) {
        let t, {
            loadId: n,
            guildId: r,
            index: s,
            analyticsContext: a,
            categoryId: o
        } = e;
        "string" == typeof a && a in i && (t = a);
        let l = {
            page: I.AnalyticsPages.GUILD_DISCOVERY,
            object: I.AnalyticsObjects.CARD,
            section: t
        };
        await f(r, l, {
                loadId: n
            }),
            function(e) {
                let {
                    loadId: t,
                    guildId: n,
                    index: i,
                    analyticsContext: r,
                    categoryId: s
                } = e, a = {
                    page: I.AnalyticsPages.GUILD_DISCOVERY,
                    section: r
                };
                "string" != typeof r && null != r.location && (a = r.location), E.default.track(I.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                    location: a,
                    guild_id: n,
                    load_id: t,
                    card_index: i,
                    location_object: I.AnalyticsObjects.CARD,
                    category_id: s
                })
            }({
                loadId: n,
                guildId: r,
                index: s,
                analyticsContext: a,
                categoryId: o
            })
    }

    function h(e) {
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
            stickers: e.stickers,
            stickerCount: e.sticker_count,
            keywords: e.keywords
        }
    }

    function A(e) {
        let {
            loadId: t,
            gamesYouPlayGuilds: n,
            allGuilds: i,
            categoryId: r,
            recommendationsSource: s = null
        } = e, a = n.length, o = i.length;
        E.default.track(I.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
            load_id: t,
            num_guilds: a + o,
            num_guilds_recommended: a,
            num_guilds_popular: o,
            recommended_guild_ids: n.map(e => e.id),
            category_id: r,
            recommendations_source: s
        })
    }

    function m(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        E.default.track(I.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
            load_id: e,
            guild_ids_viewed: t,
            recommendations_source: n
        })
    }

    function N(e) {
        E.default.track(I.AnalyticEvents.SEARCH_CLOSED, {
            load_id: e
        })
    }

    function O(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        E.default.track(I.AnalyticEvents.SEARCH_STARTED, {
            search_type: I.SearchTypes.GUILD_DISCOVERY,
            load_id: e,
            location: n.location,
            category_id: t
        })
    }

    function p(e, t, n, i) {
        E.default.track(I.AnalyticEvents.SEARCH_STARTED, {
            search_type: I.SearchTypes.GUILD_DISCOVERY_TAG,
            load_id: e,
            location: {
                page: I.AnalyticsPages.GUILD_DISCOVERY,
                section: n
            },
            category_id: t,
            guild_id: i
        })
    }

    function R(e) {
        let {
            loadId: t,
            searchId: n,
            query: i,
            guildResults: r,
            analyticsContext: s,
            categoryId: a,
            isTagSearch: o
        } = e;
        E.default.track(I.AnalyticEvents.SEARCH_RESULT_VIEWED, {
            search_type: o ? I.SearchTypes.GUILD_DISCOVERY_TAG : I.SearchTypes.GUILD_DISCOVERY,
            load_id: t,
            search_id: n,
            total_results: void 0 !== r ? r.length : null,
            guild_ids: void 0 !== r ? r.map(e => e.id) : null,
            query: i,
            location: s.location,
            category_id: a
        })
    }

    function C(e) {
        let t = l.default.getLoadId(e);
        E.default.track(I.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
            guild_id: e,
            load_id: t,
            guild_size: _.default.getMemberCount(e)
        })
    }
    async function g(e) {
        try {
            var t, n;
            let i = await a.HTTP.get({
                    url: I.Endpoints.GUILD_DISCOVERY,
                    query: s.stringify({
                        guild_ids: e
                    }),
                    oldFormErrors: !0
                }),
                r = null === (n = i.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
            if (null == r) return r;
            return h(r)
        } catch (e) {
            return null
        }
    }
}
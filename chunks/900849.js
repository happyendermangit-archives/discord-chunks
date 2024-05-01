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
            return p
        },
        trackTagSearchStarted: function() {
            return O
        },
        viewGuild: function() {
            return S
        }
    }), n("47120");
    var i, r, a = n("664751"),
        s = n("544891"),
        o = n("749210"),
        l = n("41776"),
        u = n("703656"),
        d = n("769654"),
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
                joinSource: a,
                loadId: s,
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
            source: a,
            loadId: s,
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
            index: a,
            analyticsContext: s,
            categoryId: o
        } = e;
        "string" == typeof s && s in i && (t = s);
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
                    categoryId: a
                } = e, s = {
                    page: I.AnalyticsPages.GUILD_DISCOVERY,
                    section: r
                };
                "string" != typeof r && null != r.location && (s = r.location), E.default.track(I.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                    location: s,
                    guild_id: n,
                    load_id: t,
                    card_index: i,
                    location_object: I.AnalyticsObjects.CARD,
                    category_id: a
                })
            }({
                loadId: n,
                guildId: r,
                index: a,
                analyticsContext: s,
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
            recommendationsSource: a = null
        } = e, s = n.length, o = i.length;
        E.default.track(I.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
            load_id: t,
            num_guilds: s + o,
            num_guilds_recommended: s,
            num_guilds_popular: o,
            recommended_guild_ids: n.map(e => e.id),
            category_id: r,
            recommendations_source: a
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

    function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        E.default.track(I.AnalyticEvents.SEARCH_STARTED, {
            search_type: I.SearchTypes.GUILD_DISCOVERY,
            load_id: e,
            location: n.location,
            category_id: t
        })
    }

    function O(e, t, n, i) {
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
            analyticsContext: a,
            categoryId: s,
            isTagSearch: o
        } = e;
        E.default.track(I.AnalyticEvents.SEARCH_RESULT_VIEWED, {
            search_type: o ? I.SearchTypes.GUILD_DISCOVERY_TAG : I.SearchTypes.GUILD_DISCOVERY,
            load_id: t,
            search_id: n,
            total_results: void 0 !== r ? r.length : null,
            guild_ids: void 0 !== r ? r.map(e => e.id) : null,
            query: i,
            location: a.location,
            category_id: s
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
            let i = await s.HTTP.get({
                    url: I.Endpoints.GUILD_DISCOVERY,
                    query: a.stringify({
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
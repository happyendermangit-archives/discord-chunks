function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsContexts: function() {
            return i
        },
        MINIMUM_MEMBER_COUNT: function() {
            return h
        },
        startLurking: function() {
            return x
        },
        viewGuild: function() {
            return E
        },
        makeDiscoverableGuild: function() {
            return y
        },
        trackDiscoveryViewed: function() {
            return g
        },
        trackDiscoveryExited: function() {
            return S
        },
        trackSearchClosed: function() {
            return C
        },
        trackSearchStarted: function() {
            return T
        },
        trackTagSearchStarted: function() {
            return _
        },
        trackSearchResultsViewed: function() {
            return I
        },
        trackGuildJoinClicked: function() {
            return v
        },
        getDiscoverableGuild: function() {
            return A
        }
    }), n("222007");
    var i, l, a = n("522632"),
        s = n("872717"),
        r = n("851387"),
        o = n("267567"),
        u = n("393414"),
        d = n("239380"),
        c = n("525065"),
        f = n("305961"),
        m = n("599110"),
        p = n("49111");
    (l = i || (i = {})).SEARCH = "Search", l.RECOMMENDED = "Recommended", l.POPULAR = "Popular", l.RECOMMENDED_E3 = "Recommended - E3", l.HEADER = "Header";
    let h = ">200";
    async function x(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                channelId: i,
                onSuccess: l,
                joinSource: a,
                loadId: s,
                setsHistorySnapshot: c = !0
            } = n,
            m = (0, u.getHistory)();
        c && o.default.setHistorySnapshot({
            ...m
        });
        let p = f.default.getGuild(e),
            h = {
                state: {
                    analyticsSource: t
                }
            };
        null != p && null != p.joinedAt ? (0, d.transitionToGuild)(e, h) : (await r.default.joinGuild(e, {
            lurker: !0,
            source: a,
            loadId: s,
            lurkLocation: null == t ? void 0 : t.page
        }), await r.default.transitionToGuildSync(e, {
            ...h,
            welcomeModalChannelId: i,
            search: m.location.search
        }, i)), null == l || l()
    }
    async function E(e) {
        let t, {
            loadId: n,
            guildId: l,
            index: a,
            analyticsContext: s,
            categoryId: r
        } = e;
        "string" == typeof s && s in i && (t = s);
        let o = {
            page: p.AnalyticsPages.GUILD_DISCOVERY,
            object: p.AnalyticsObjects.CARD,
            section: t
        };
        await x(l, o, {
                loadId: n
            }),
            function(e) {
                let {
                    loadId: t,
                    guildId: n,
                    index: i,
                    analyticsContext: l,
                    categoryId: a
                } = e, s = {
                    page: p.AnalyticsPages.GUILD_DISCOVERY,
                    section: l
                };
                "string" != typeof l && null != l.location && (s = l.location), m.default.track(p.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                    location: s,
                    guild_id: n,
                    load_id: t,
                    card_index: i,
                    location_object: p.AnalyticsObjects.CARD,
                    category_id: a
                })
            }({
                loadId: n,
                guildId: l,
                index: a,
                analyticsContext: s,
                categoryId: r
            })
    }

    function y(e) {
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

    function g(e) {
        let {
            loadId: t,
            gamesYouPlayGuilds: n,
            allGuilds: i,
            categoryId: l,
            recommendationsSource: a = null
        } = e, s = n.length, r = i.length;
        m.default.track(p.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
            load_id: t,
            num_guilds: s + r,
            num_guilds_recommended: s,
            num_guilds_popular: r,
            recommended_guild_ids: n.map(e => e.id),
            category_id: l,
            recommendations_source: a
        })
    }

    function S(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        m.default.track(p.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
            load_id: e,
            guild_ids_viewed: t,
            recommendations_source: n
        })
    }

    function C(e) {
        m.default.track(p.AnalyticEvents.SEARCH_CLOSED, {
            load_id: e
        })
    }

    function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        m.default.track(p.AnalyticEvents.SEARCH_STARTED, {
            search_type: p.SearchTypes.GUILD_DISCOVERY,
            load_id: e,
            location: n.location,
            category_id: t
        })
    }

    function _(e, t, n, i) {
        m.default.track(p.AnalyticEvents.SEARCH_STARTED, {
            search_type: p.SearchTypes.GUILD_DISCOVERY_TAG,
            load_id: e,
            location: {
                page: p.AnalyticsPages.GUILD_DISCOVERY,
                section: n
            },
            category_id: t,
            guild_id: i
        })
    }

    function I(e) {
        let {
            loadId: t,
            searchId: n,
            query: i,
            guildResults: l,
            analyticsContext: a,
            categoryId: s,
            isTagSearch: r
        } = e;
        m.default.track(p.AnalyticEvents.SEARCH_RESULT_VIEWED, {
            search_type: r ? p.SearchTypes.GUILD_DISCOVERY_TAG : p.SearchTypes.GUILD_DISCOVERY,
            load_id: t,
            search_id: n,
            total_results: void 0 !== l ? l.length : null,
            guild_ids: void 0 !== l ? l.map(e => e.id) : null,
            query: i,
            location: a.location,
            category_id: s
        })
    }

    function v(e) {
        let t = o.default.getLoadId(e);
        m.default.track(p.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
            guild_id: e,
            load_id: t,
            guild_size: c.default.getMemberCount(e)
        })
    }
    async function A(e) {
        try {
            var t, n;
            let i = await s.HTTP.get({
                    url: p.Endpoints.GUILD_DISCOVERY,
                    query: a.stringify({
                        guild_ids: e
                    }),
                    oldFormErrors: !0
                }),
                l = null === (n = i.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
            if (null == l) return l;
            return y(l)
        } catch (e) {
            return null
        }
    }
}
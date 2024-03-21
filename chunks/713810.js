function(e, t, d) {
    "use strict";
    d.r(t), d.d(t, {
        sendFeedShownAnalytics: function() {
            return A
        },
        fetchGuildFeed: function() {
            return G
        },
        markGuildFeedItemAsSeen: function() {
            return M
        },
        markGuildFeedItemAsUnseen: function() {
            return U
        },
        removeItemFromGuildFeed: function() {
            return R
        },
        hideItemFromGuildFeed: function() {
            return L
        },
        fetchGuildFeedFeaturedItems: function() {
            return H
        },
        featureGuildFeedItem: function() {
            return k
        },
        unfeatureGuildFeedItem: function() {
            return C
        },
        unhideItemFromGuildFeed: function() {
            return w
        },
        setFeedItemPreference: function() {
            return P
        },
        trackFeedItemInteracted: function() {
            return N
        }
    });
    var n = d("917351"),
        i = d.n(n),
        a = d("611221"),
        l = d("801110"),
        u = d("885167"),
        s = d("872717"),
        r = d("913144"),
        E = d("599417"),
        o = d("887446"),
        c = d("27618"),
        _ = d("938237"),
        f = d("395118"),
        I = d("599110"),
        F = d("449008"),
        h = d("350928"),
        m = d("185014"),
        p = d("60036"),
        D = d("145708"),
        T = d("2804"),
        S = d("515631"),
        y = d("49111");

    function g(e, t) {
        return t.map(t => m.default.getItem(e, t)).filter(e => {
            let t = null == e ? null : (0, p.default)(e);
            return null != t && !c.default.isBlocked(t.author.id)
        }).filter(F.isNotNullish).map(e => (0, T.default)(e))
    }

    function A(e) {
        I.default.track(y.AnalyticEvents.FEED_SHOWN, {
            guild_id: e,
            load_id: m.default.getLoadId(e),
            home_session_id: o.default.getHomeSessionId(e)
        })
    }
    async function G(e) {
        let {
            guildId: t,
            refresh: d,
            flushSeenItems: n,
            highlightedItemData: l,
            limit: u
        } = e, c = Date.now(), _ = d ? 0 : m.default.getPaginationStatus(t).offset, f = null == _ || 0 === _;
        r.default.dispatch({
            type: f ? "GUILD_FEED_FETCH_FRESH_START" : "GUILD_FEED_FETCH_PAGE_START",
            guildId: t
        });
        let F = o.default.getHomeSessionId(t);
        try {
            await (null == n ? void 0 : n());
            let e = {
                    limit: null != u ? u : m.GUILD_FEED_FETCH_LIMIT,
                    offset: f ? 0 : _,
                    load_id: f ? null : m.default.getLoadId(t),
                    ...null != l && f && {
                        highlight_channel_id: l.channelId,
                        highlight_message_id: l.messageId
                    }
                },
                d = await s.HTTP.get({
                    url: y.Endpoints.GUILD_FEED(t),
                    query: e
                }),
                E = d.body,
                h = m.default.getFeedItemSection(t, S.GuildFeedSectionTypes.READ).map(e => e.id),
                p = m.default.getFeedItemSection(t, S.GuildFeedSectionTypes.UNREAD).map(e => e.id),
                D = m.default.getFeedItemsForGuild(t).filter(e => e.featured).map(e => e.id);
            await r.default.dispatch({
                type: "GUILD_FEED_FETCH_SUCCESS",
                guildId: t,
                data: E,
                fresh: f
            });
            let T = m.default.getFeedItemSection(t, S.GuildFeedSectionTypes.READ).map(e => e.id),
                A = m.default.getFeedItemSection(t, S.GuildFeedSectionTypes.UNREAD).map(e => e.id),
                G = m.default.getFeedItemsForGuild(t).filter(e => e.featured).map(e => e.id),
                M = Date.now() - c,
                U = (null != _ ? _ : 0) / m.GUILD_FEED_FETCH_LIMIT;
            ! function(e) {
                let {
                    guildId: t,
                    loadTime: d,
                    startHomeSessionId: n,
                    page: i,
                    newUnreadFeedItemIds: a,
                    newReadFeedItemIds: l,
                    newFeaturedItemIds: u
                } = e;
                I.default.track(y.AnalyticEvents.FEED_LOADED, {
                    guild_id: t,
                    load_id: m.default.getLoadId(t),
                    unread_feed_item_ids: g(t, a),
                    read_feed_item_ids: g(t, l),
                    load_time_millis: d,
                    home_session_id: o.default.getHomeSessionId(t),
                    start_home_session_id: n,
                    featured_item_ids: g(t, u),
                    page: i
                })
            }({
                guildId: t,
                loadTime: M,
                startHomeSessionId: F,
                page: U,
                newReadFeedItemIds: i.difference(T, h),
                newUnreadFeedItemIds: i.difference(A, p),
                newFeaturedItemIds: i.difference(G, D)
            }), ! function(e, t) {
                let d = t.results.items.filter(e => e.type === a.GuildFeedItemTypes.FORUM_POST);
                d.length > 0 && r.default.dispatch({
                    type: "LOAD_THREADS_SUCCESS",
                    threads: d.map(e => e.thread),
                    firstMessages: d.map(e => e.message),
                    guildId: e
                })
            }(t, E)
        } catch (e) {
            throw r.default.dispatch({
                type: "GUILD_FEED_FETCH_FAILURE",
                guildId: t,
                error: new E.default(e)
            }), e
        }
    }

    function M(e, t, d) {
        (0, _.markAnalyticsFeedItemSeen)((0, h.getGuildFeedSeenManagerId)(e), t, d)
    }

    function U(e, t, d) {
        (0, _.markAnalyticsFeedItemUnseen)((0, h.getGuildFeedSeenManagerId)(e), t, d)
    }
    async function R(e) {
        let t = (0, p.default)(e),
            d = await s.HTTP.post({
                url: y.Endpoints.GUILD_FEED_MESSAGE_REMOVE(t.channel_id, t.id)
            });
        return r.default.dispatch({
            type: "GUILD_FEED_ITEM_REMOVE",
            item: e
        }), d
    }
    async function L(e, t) {
        let d = (0, p.default)(e),
            n = await s.HTTP.put({
                url: y.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(t),
                body: {
                    channel_id: d.channel_id,
                    message_id: d.id,
                    load_id: m.default.getLoadId(t),
                    preference: u.GuildFeedPreferenceOptions.HIDDEN,
                    entity_type: l.GuildFeedPreferenceEntityTypes.MESSAGE
                }
            });
        return r.default.dispatch({
            type: "GUILD_FEED_ITEM_HIDE",
            item: e
        }), n
    }
    async function H(e) {
        try {
            let t = await s.HTTP.get({
                    url: y.Endpoints.GUILD_FEED_FEATURE_ITEM(e)
                }),
                d = t.body;
            r.default.dispatch({
                type: "GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS",
                guildId: e,
                data: d
            })
        } catch (t) {
            throw r.default.dispatch({
                type: "GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE",
                guildId: e,
                error: new E.default(t)
            }), t
        }
    }
    async function k(e, t, d) {
        let {
            entityId: n,
            details: i,
            guildId: a,
            entityType: l
        } = (0, D.default)(e);
        try {
            let u = await s.HTTP.put({
                url: y.Endpoints.GUILD_FEED_FEATURE_ITEM(a),
                body: {
                    entity_id: n,
                    entity_type: l,
                    expires_at: t,
                    details: i
                }
            });
            return r.default.dispatch({
                type: "GUILD_FEED_FEATURE_ITEM",
                featureableItem: e,
                options: d
            }), u
        } catch (e) {
            throw e
        }
    }
    async function C(e) {
        let {
            entityId: t,
            guildId: d,
            entityType: n
        } = (0, D.default)(e);
        try {
            let i = await s.HTTP.del({
                url: y.Endpoints.GUILD_FEED_FEATURE_ITEM(d),
                body: {
                    entity_id: t,
                    entity_type: n
                }
            });
            return r.default.dispatch({
                type: "GUILD_FEED_UNFEATURE_ITEM",
                featureableItem: e
            }), i
        } catch (e) {
            throw e
        }
    }
    async function w(e, t) {
        let d = (0, p.default)(e),
            n = await s.HTTP.del({
                url: y.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(t),
                body: {
                    channel_id: d.channel_id,
                    message_id: d.id,
                    load_id: m.default.getLoadId(t),
                    entity_type: l.GuildFeedPreferenceEntityTypes.MESSAGE
                }
            });
        return r.default.dispatch({
            type: "GUILD_FEED_ITEM_UNHIDE",
            item: e
        }), n
    }
    async function P(e, t) {
        let d = await s.HTTP.put({
            url: y.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(e),
            body: {
                ...t,
                load_id: m.default.getLoadId(e),
                preference: u.GuildFeedPreferenceOptions.DEMOTED
            }
        });
        return d
    }

    function N(e) {
        let t = e.guild_id;
        null != t && ! function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
            (0, _.flushAnalyticsFeedItems)((0, h.getGuildFeedSeenManagerId)(e), t)
        }(t), I.default.track(y.AnalyticEvents.FEED_ITEM_INTERACTED, e)
    }
}
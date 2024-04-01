function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        featureGuildFeedItem: function() {
            return P
        },
        fetchGuildFeed: function() {
            return g
        },
        fetchGuildFeedFeaturedItems: function() {
            return y
        },
        hideItemFromGuildFeed: function() {
            return M
        },
        markGuildFeedItemAsSeen: function() {
            return L
        },
        markGuildFeedItemAsUnseen: function() {
            return D
        },
        removeItemFromGuildFeed: function() {
            return v
        },
        sendFeedShownAnalytics: function() {
            return C
        },
        setFeedItemPreference: function() {
            return G
        },
        trackFeedItemInteracted: function() {
            return w
        },
        unfeatureGuildFeedItem: function() {
            return U
        },
        unhideItemFromGuildFeed: function() {
            return b
        }
    });
    var i = n("392711"),
        r = n.n(i),
        s = n("536402"),
        a = n("974900"),
        o = n("106831"),
        l = n("544891"),
        u = n("570140"),
        d = n("479531"),
        _ = n("601410"),
        c = n("699516"),
        E = n("929991"),
        I = n("480739"),
        T = n("626135"),
        f = n("823379"),
        S = n("757235"),
        h = n("642101"),
        A = n("330249"),
        m = n("853147"),
        N = n("313531"),
        O = n("369701"),
        p = n("981631");

    function R(e, t) {
        return t.map(t => h.default.getItem(e, t)).filter(e => {
            let t = null == e ? null : (0, A.default)(e);
            return null != t && !c.default.isBlocked(t.author.id)
        }).filter(f.isNotNullish).map(e => (0, N.default)(e))
    }

    function C(e) {
        T.default.track(p.AnalyticEvents.FEED_SHOWN, {
            guild_id: e,
            load_id: h.default.getLoadId(e),
            home_session_id: _.default.getHomeSessionId(e)
        })
    }
    async function g(e) {
        let {
            guildId: t,
            refresh: n,
            flushSeenItems: i,
            highlightedItemData: a,
            limit: o
        } = e, c = Date.now(), E = n ? 0 : h.default.getPaginationStatus(t).offset, I = null == E || 0 === E;
        u.default.dispatch({
            type: I ? "GUILD_FEED_FETCH_FRESH_START" : "GUILD_FEED_FETCH_PAGE_START",
            guildId: t
        });
        let f = _.default.getHomeSessionId(t);
        try {
            await (null == i ? void 0 : i());
            let e = {
                    limit: null != o ? o : h.GUILD_FEED_FETCH_LIMIT,
                    offset: I ? 0 : E,
                    load_id: I ? null : h.default.getLoadId(t),
                    ...null != a && I && {
                        highlight_channel_id: a.channelId,
                        highlight_message_id: a.messageId
                    }
                },
                n = (await l.HTTP.get({
                    url: p.Endpoints.GUILD_FEED(t),
                    query: e
                })).body,
                d = h.default.getFeedItemSection(t, O.GuildFeedSectionTypes.READ).map(e => e.id),
                S = h.default.getFeedItemSection(t, O.GuildFeedSectionTypes.UNREAD).map(e => e.id),
                A = h.default.getFeedItemsForGuild(t).filter(e => e.featured).map(e => e.id);
            await u.default.dispatch({
                type: "GUILD_FEED_FETCH_SUCCESS",
                guildId: t,
                data: n,
                fresh: I
            });
            let m = h.default.getFeedItemSection(t, O.GuildFeedSectionTypes.READ).map(e => e.id),
                N = h.default.getFeedItemSection(t, O.GuildFeedSectionTypes.UNREAD).map(e => e.id),
                C = h.default.getFeedItemsForGuild(t).filter(e => e.featured).map(e => e.id),
                g = Date.now() - c,
                L = (null != E ? E : 0) / h.GUILD_FEED_FETCH_LIMIT;
            ! function(e) {
                let {
                    guildId: t,
                    loadTime: n,
                    startHomeSessionId: i,
                    page: r,
                    newUnreadFeedItemIds: s,
                    newReadFeedItemIds: a,
                    newFeaturedItemIds: o
                } = e;
                T.default.track(p.AnalyticEvents.FEED_LOADED, {
                    guild_id: t,
                    load_id: h.default.getLoadId(t),
                    unread_feed_item_ids: R(t, s),
                    read_feed_item_ids: R(t, a),
                    load_time_millis: n,
                    home_session_id: _.default.getHomeSessionId(t),
                    start_home_session_id: i,
                    featured_item_ids: R(t, o),
                    page: r
                })
            }({
                guildId: t,
                loadTime: g,
                startHomeSessionId: f,
                page: L,
                newReadFeedItemIds: r().difference(m, d),
                newUnreadFeedItemIds: r().difference(N, S),
                newFeaturedItemIds: r().difference(C, A)
            }), ! function(e, t) {
                let n = t.results.items.filter(e => e.type === s.GuildFeedItemTypes.FORUM_POST);
                n.length > 0 && u.default.dispatch({
                    type: "LOAD_THREADS_SUCCESS",
                    threads: n.map(e => e.thread),
                    firstMessages: n.map(e => e.message),
                    guildId: e
                })
            }(t, n)
        } catch (e) {
            throw u.default.dispatch({
                type: "GUILD_FEED_FETCH_FAILURE",
                guildId: t,
                error: new d.default(e)
            }), e
        }
    }

    function L(e, t, n) {
        (0, E.markAnalyticsFeedItemSeen)((0, S.getGuildFeedSeenManagerId)(e), t, n)
    }

    function D(e, t, n) {
        (0, E.markAnalyticsFeedItemUnseen)((0, S.getGuildFeedSeenManagerId)(e), t, n)
    }
    async function v(e) {
        let t = (0, A.default)(e),
            n = await l.HTTP.post({
                url: p.Endpoints.GUILD_FEED_MESSAGE_REMOVE(t.channel_id, t.id)
            });
        return u.default.dispatch({
            type: "GUILD_FEED_ITEM_REMOVE",
            item: e
        }), n
    }
    async function M(e, t) {
        let n = (0, A.default)(e),
            i = await l.HTTP.put({
                url: p.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(t),
                body: {
                    channel_id: n.channel_id,
                    message_id: n.id,
                    load_id: h.default.getLoadId(t),
                    preference: o.GuildFeedPreferenceOptions.HIDDEN,
                    entity_type: a.GuildFeedPreferenceEntityTypes.MESSAGE
                }
            });
        return u.default.dispatch({
            type: "GUILD_FEED_ITEM_HIDE",
            item: e
        }), i
    }
    async function y(e) {
        try {
            let t = (await l.HTTP.get({
                url: p.Endpoints.GUILD_FEED_FEATURE_ITEM(e)
            })).body;
            u.default.dispatch({
                type: "GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS",
                guildId: e,
                data: t
            })
        } catch (t) {
            throw u.default.dispatch({
                type: "GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE",
                guildId: e,
                error: new d.default(t)
            }), t
        }
    }
    async function P(e, t, n) {
        let {
            entityId: i,
            details: r,
            guildId: s,
            entityType: a
        } = (0, m.default)(e);
        try {
            let o = await l.HTTP.put({
                url: p.Endpoints.GUILD_FEED_FEATURE_ITEM(s),
                body: {
                    entity_id: i,
                    entity_type: a,
                    expires_at: t,
                    details: r
                }
            });
            return u.default.dispatch({
                type: "GUILD_FEED_FEATURE_ITEM",
                featureableItem: e,
                options: n
            }), o
        } catch (e) {
            throw e
        }
    }
    async function U(e) {
        let {
            entityId: t,
            guildId: n,
            entityType: i
        } = (0, m.default)(e);
        try {
            let r = await l.HTTP.del({
                url: p.Endpoints.GUILD_FEED_FEATURE_ITEM(n),
                body: {
                    entity_id: t,
                    entity_type: i
                }
            });
            return u.default.dispatch({
                type: "GUILD_FEED_UNFEATURE_ITEM",
                featureableItem: e
            }), r
        } catch (e) {
            throw e
        }
    }
    async function b(e, t) {
        let n = (0, A.default)(e),
            i = await l.HTTP.del({
                url: p.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(t),
                body: {
                    channel_id: n.channel_id,
                    message_id: n.id,
                    load_id: h.default.getLoadId(t),
                    entity_type: a.GuildFeedPreferenceEntityTypes.MESSAGE
                }
            });
        return u.default.dispatch({
            type: "GUILD_FEED_ITEM_UNHIDE",
            item: e
        }), i
    }
    async function G(e, t) {
        return await l.HTTP.put({
            url: p.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(e),
            body: {
                ...t,
                load_id: h.default.getLoadId(e),
                preference: o.GuildFeedPreferenceOptions.DEMOTED
            }
        })
    }

    function w(e) {
        let t = e.guild_id;
        null != t && ! function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
            (0, E.flushAnalyticsFeedItems)((0, S.getGuildFeedSeenManagerId)(e), t)
        }(t), T.default.track(p.AnalyticEvents.FEED_ITEM_INTERACTED, e)
    }
}
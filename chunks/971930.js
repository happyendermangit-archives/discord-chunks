function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FEATURE_EXPIRES_SECONDS: function() {
            return I
        },
        createFeatureItemsTimeLabel: function() {
            return N
        },
        createGuildFeedItemFromServer: function() {
            return A
        },
        getChannelIdForItem: function() {
            return R
        },
        getFeatureItemsTimes: function() {
            return O
        },
        getSidebarMessageId: function() {
            return p
        },
        isChannelAvailableInGuildFeed: function() {
            return h
        },
        isGuildFeedFeaturedItem: function() {
            return S
        },
        isMessageAvailableInGuildFeed: function() {
            return m
        }
    });
    var i = n("392711"),
        r = n.n(i),
        s = n("536402"),
        a = n("275726"),
        o = n("786761"),
        l = n("131704"),
        u = n("823379"),
        d = n("709054"),
        _ = n("313531"),
        c = n("176505"),
        E = n("689938");
    let I = {
        ONE_DAY: 86400,
        THREE_DAYS: 259200,
        SEVEN_DAYS: 604800
    };

    function T(e) {
        return {
            entityId: e.entity_id,
            entityType: e.entity_type,
            guildId: e.guild_id,
            details: {
                actorUserId: e.details.actor_user_id,
                expiresAt: new Date(e.details.expires_at)
            }
        }
    }

    function f(e) {
        return null != e.featured_item || !1
    }

    function S(e) {
        return null != e.featuredItem || !1
    }

    function A(e, t) {
        var n, i, a, u, d, c, E;
        switch (e.type) {
            case s.GuildFeedItemTypes.FORUM_POST: {
                let r = (0, o.createMessageRecord)(e.message),
                    a = (0, l.createChannelRecordFromServer)(e.thread),
                    u = {
                        type: s.GuildFeedItemTypes.FORUM_POST,
                        id: (0, _.default)(e),
                        sortIndex: t,
                        message: r,
                        thread: a,
                        featured: null !== (n = e.featured) && void 0 !== n && n,
                        highlighted: null !== (i = e.highlighted) && void 0 !== i && i,
                        seen: e.seen,
                        unreadMention: !1
                    };
                return f(e) && (u = {
                    ...u,
                    featuredItem: T(e.featured_item)
                }), u
            }
            case s.GuildFeedItemTypes.MESSAGE:
                let I = (0, o.createMessageRecord)(e.message),
                    S = r().map(e.reference_messages, e => (0, o.createMessageRecord)(e)),
                    A = {
                        type: s.GuildFeedItemTypes.MESSAGE,
                        id: (0, _.default)(e),
                        sortIndex: t,
                        message: I,
                        referenceMessages: S,
                        featured: null !== (a = e.featured) && void 0 !== a && a,
                        highlighted: null !== (u = e.highlighted) && void 0 !== u && u,
                        unreadMention: null !== (d = e.unread_mention) && void 0 !== d && d,
                        seen: e.seen
                    };
                return f(e) && (A = {
                    ...A,
                    featuredItem: T(e.featured_item)
                }), A;
            case s.GuildFeedItemTypes.MESSAGE_BUNDLE:
                let h = e.messages.map(e => ({
                    message: (0, o.createMessageRecord)(e.message),
                    referenceMessages: e.reference_messages.map(e => (0, o.createMessageRecord)(e))
                }));
                return {
                    type: s.GuildFeedItemTypes.MESSAGE_BUNDLE, id: e.id, sortIndex: t, messages: h, featured: !1, highlighted: !1, unreadMention: null !== (c = e.unread_mention) && void 0 !== c && c, seen: e.seen
                };
            case s.GuildFeedItemTypes.CONVERSATION:
                let m = function e(t) {
                    let n = t.messages.map(e => (0, o.createMessageRecord)(e.message));
                    return {
                        id: t.id,
                        type: t.type,
                        messages: n,
                        children: t.children.map(t => e(t))
                    }
                }(e.root);
                return {
                    type: s.GuildFeedItemTypes.CONVERSATION, id: e.id, sortIndex: t, root: m, featured: !1, highlighted: !1, unreadMention: null !== (E = e.unread_mention) && void 0 !== E && E, seen: e.seen
                };
            default:
                return null
        }
    }

    function h(e) {
        return !(e.hasFlag(c.ChannelFlags.GUILD_FEED_REMOVED) || e.isNSFW()) && !0
    }

    function m(e) {
        return !!a.MessageTypesSets.AVAILABLE_IN_GUILD_FEED.has(e.type) || !1
    }
    let N = e => E.default.Messages.GUILD_FEED_FEATURE_ITEM_MENU_ITEM_TEXT.format({
            timePeriod: e
        }),
        O = () => [{
            value: I.ONE_DAY,
            timePeriod: E.default.Messages.GUILD_FEED_FEATURE_ITEM_24_HOURS
        }, {
            value: I.THREE_DAYS,
            timePeriod: E.default.Messages.GUILD_FEED_FEATURE_ITEM_THREE_DAYS
        }, {
            value: I.SEVEN_DAYS,
            timePeriod: E.default.Messages.GUILD_FEED_FEATURE_ITEM_SEVEN_DAYS
        }],
        p = (e, t) => null != t && t.isThread() ? d.default.castChannelIdAsMessageId(t.id) : null != e && "details" in e && null != e.details && "initialMessageId" in e.details ? e.details.initialMessageId : null;

    function R(e) {
        switch (e.type) {
            case s.GuildFeedItemTypes.MESSAGE:
            case s.GuildFeedItemTypes.FORUM_POST:
                return e.message.channel_id;
            case s.GuildFeedItemTypes.MESSAGE_BUNDLE:
                return e.messages[0].message.channel_id;
            case s.GuildFeedItemTypes.CONVERSATION:
                return e.root.messages[0].channel_id;
            default:
                (0, u.assertNever)(e)
        }
    }
}
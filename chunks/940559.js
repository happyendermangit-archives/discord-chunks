function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FEATURE_EXPIRES_SECONDS: function() {
            return m
        },
        createFeatureItemsTimeLabel: function() {
            return v
        },
        createGuildFeedItemFromServer: function() {
            return O
        },
        getChannelIdForItem: function() {
            return b
        },
        getFeatureItemsTimes: function() {
            return g
        },
        getSidebarMessageId: function() {
            return A
        },
        isChannelAvailableInGuildFeed: function() {
            return T
        },
        isGuildFeedFeaturedItem: function() {
            return h
        },
        isMessageAvailableInGuildFeed: function() {
            return S
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("193695"),
        a = n("746762"),
        u = n("273829"),
        s = n("569492"),
        l = n("162677"),
        c = n("523018"),
        f = n("159109"),
        d = n("928204"),
        _ = n("941504");

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function p(e, t) {
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
    var m = {
        ONE_DAY: 86400,
        THREE_DAYS: 259200,
        SEVEN_DAYS: 604800
    };

    function y(e) {
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

    function I(e) {
        return null != e.featured_item || !1
    }

    function h(e) {
        return null != e.featuredItem || !1
    }

    function O(e, t) {
        switch (e.type) {
            case i.GuildFeedItemTypes.FORUM_POST:
                var n, r, a = (0, u.createMessageRecord)(e.message),
                    l = (0, s.createChannelRecordFromServer)(e.thread),
                    c = {
                        type: i.GuildFeedItemTypes.FORUM_POST,
                        id: (0, f.default)(e),
                        sortIndex: t,
                        message: a,
                        thread: l,
                        featured: null !== (n = e.featured) && void 0 !== n && n,
                        highlighted: null !== (r = e.highlighted) && void 0 !== r && r,
                        seen: e.seen,
                        unreadMention: !1
                    };
                return I(e) && (c = p(E({}, c), {
                    featuredItem: y(e.featured_item)
                })), c;
            case i.GuildFeedItemTypes.MESSAGE:
                var d, _, m, h = (0, u.createMessageRecord)(e.message),
                    O = o().map(e.reference_messages, function(e) {
                        return (0, u.createMessageRecord)(e)
                    }),
                    T = {
                        type: i.GuildFeedItemTypes.MESSAGE,
                        id: (0, f.default)(e),
                        sortIndex: t,
                        message: h,
                        referenceMessages: O,
                        featured: null !== (d = e.featured) && void 0 !== d && d,
                        highlighted: null !== (_ = e.highlighted) && void 0 !== _ && _,
                        unreadMention: null !== (m = e.unread_mention) && void 0 !== m && m,
                        seen: e.seen
                    };
                return I(e) && (T = p(E({}, T), {
                    featuredItem: y(e.featured_item)
                })), T;
            case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                var S, v = e.messages.map(function(e) {
                    return {
                        message: (0, u.createMessageRecord)(e.message),
                        referenceMessages: e.reference_messages.map(function(e) {
                            return (0, u.createMessageRecord)(e)
                        })
                    }
                });
                return {
                    type: i.GuildFeedItemTypes.MESSAGE_BUNDLE, id: e.id, sortIndex: t, messages: v, featured: !1, highlighted: !1, unreadMention: null !== (S = e.unread_mention) && void 0 !== S && S, seen: e.seen
                };
            case i.GuildFeedItemTypes.CONVERSATION:
                var g, A = function e(t) {
                    var n = t.messages.map(function(e) {
                        return (0, u.createMessageRecord)(e.message)
                    });
                    return {
                        id: t.id,
                        type: t.type,
                        messages: n,
                        children: t.children.map(function(t) {
                            return e(t)
                        })
                    }
                }(e.root);
                return {
                    type: i.GuildFeedItemTypes.CONVERSATION, id: e.id, sortIndex: t, root: A, featured: !1, highlighted: !1, unreadMention: null !== (g = e.unread_mention) && void 0 !== g && g, seen: e.seen
                };
            default:
                return null
        }
    }

    function T(e) {
        return !(e.hasFlag(d.ChannelFlags.GUILD_FEED_REMOVED) || e.isNSFW()) && !0
    }

    function S(e) {
        return !!a.MessageTypesSets.AVAILABLE_IN_GUILD_FEED.has(e.type) || !1
    }
    var v = function(e) {
            return _.default.Messages.GUILD_FEED_FEATURE_ITEM_MENU_ITEM_TEXT.format({
                timePeriod: e
            })
        },
        g = function() {
            return [{
                value: m.ONE_DAY,
                timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_24_HOURS
            }, {
                value: m.THREE_DAYS,
                timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_THREE_DAYS
            }, {
                value: m.SEVEN_DAYS,
                timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_SEVEN_DAYS
            }]
        },
        A = function(e, t) {
            return null != t && t.isThread() ? c.default.castChannelIdAsMessageId(t.id) : null != e && "details" in e && null != e.details && "initialMessageId" in e.details ? e.details.initialMessageId : null
        };

    function b(e) {
        switch (e.type) {
            case i.GuildFeedItemTypes.MESSAGE:
            case i.GuildFeedItemTypes.FORUM_POST:
                return e.message.channel_id;
            case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                return e.messages[0].message.channel_id;
            case i.GuildFeedItemTypes.CONVERSATION:
                return e.root.messages[0].channel_id;
            default:
                (0, l.assertNever)(e)
        }
    }
}
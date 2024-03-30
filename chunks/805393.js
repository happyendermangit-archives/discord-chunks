function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectForumAnalyticsMetadata: function() {
            return b
        },
        collectForumPostAnalyticsMetadata: function() {
            return N
        },
        convertSortOrderToReadableString: function() {
            return T
        },
        getForumChannelSessionId: function() {
            return O
        },
        getForumPostDraftAppliedTagIds: function() {
            return v
        },
        getForumPostDraftNumAttachments: function() {
            return S
        },
        getNumActiveThreads: function() {
            return g
        }
    });
    var r = n("983396"),
        o = n("147071"),
        i = n("956774"),
        a = n("128181"),
        u = n("271408"),
        s = n("935741"),
        l = n("309944"),
        c = n("29884"),
        f = n("158201"),
        d = n("523018"),
        _ = n("566600"),
        E = n("759650"),
        p = n("807074"),
        m = n("85193"),
        y = n("281767"),
        I = n("928204"),
        h = n("73587");

    function O(e) {
        return m.default.getForumChannelSessionId(e)
    }

    function T(e) {
        switch (e) {
            case r.ThreadSortOrder.CREATION_DATE:
                return h.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
            case r.ThreadSortOrder.LATEST_ACTIVITY:
                return h.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
            default:
                throw Error("Unexpected sort order ".concat(e))
        }
    }

    function S(e) {
        return f.default.getUploads(e, l.DraftType.FirstThreadMessage).length
    }

    function v(e) {
        var t, n, r = s.default.getChannel(e);
        if (null == r) return [];
        var o = s.default.getChannel(r.parent_id),
            i = null == o ? void 0 : o.availableTags;
        if (null == o || null == i) return [];
        var a = null !== (n = null === (t = l.default.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
            u = new Set(i.map(function(e) {
                return e.id
            }));
        return Array.from(a).filter(function(e) {
            return u.has(e)
        })
    }

    function g(e, t) {
        return Object.keys(o.default.getThreadsForParent(e, t)).length
    }

    function A(e) {
        var t = _.default.getMessage(e),
            n = t.loaded,
            r = t.firstMessage;
        return n ? r : null
    }

    function b(e) {
        var t, n, r, o, i = e.channelId,
            a = e.sessionId,
            u = s.default.getChannel(i);
        return null != u && u.isForumLikeChannel() ? {
            forum_channel_has_guidelines: null != u.topic && u.topic.trim().length > 0,
            forum_channel_default_emoji_reaction_id: null === (t = u.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
            forum_channel_default_emoji_reaction_name: null === (n = u.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
            forum_channel_available_tag_ids: null !== (o = null === (r = u.availableTags) || void 0 === r ? void 0 : r.map(function(e) {
                return e.id
            })) && void 0 !== o ? o : [],
            forum_channel_tag_required: u.hasFlag(I.ChannelFlags.REQUIRE_TAG),
            forum_channel_can_create_post: c.default.can(y.Permissions.SEND_MESSAGES, u),
            forum_channel_filter_tag_ids: E.default.getFilterTagIdsAnalytics(),
            forum_channel_sort_order: E.default.getSortOrderAnalytics(u.id),
            forum_channel_session_id: null != a ? a : O(u.id),
            forum_channel_layout: E.default.getLayoutAnalytics(u.id),
            forum_channel_default_sort_order: u.defaultSortOrder,
            forum_channel_default_layout: u.defaultForumLayout
        } : null
    }

    function N(e) {
        var t, n, r, o, l, c, f, _, E, m, y, h, O = e.channelId,
            T = e.sessionId,
            S = s.default.getChannel(O);
        if (null == S || !S.isForumPost()) return null;
        var v = s.default.getChannel(S.parent_id);
        if (null == v || !v.isForumLikeChannel()) return null;
        return o = function(e) {
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
        }({}, b({
            channelId: v.id,
            sessionId: T
        })), l = (l = {
            thread_approximate_member_count: a.default.getMemberCount(O),
            thread_approximate_message_count: u.default.getCount(O),
            thread_archived: (null === (c = S.threadMetadata) || void 0 === c ? void 0 : c.archived) === !0,
            thread_locked: null !== (y = null === (f = S.threadMetadata) || void 0 === f ? void 0 : f.locked) && void 0 !== y && y,
            thread_auto_archive_duration_minutes: null !== (h = null === (_ = S.threadMetadata) || void 0 === _ ? void 0 : _.autoArchiveDuration) && void 0 !== h ? h : 0,
            thread_approximate_creation_date: d.default.extractTimestamp(O),
            forum_post_id: S.id,
            forum_post_first_message_id: d.default.castChannelIdAsMessageId(S.id),
            forum_post_num_reactions: null == (t = A(S.id)) ? 0 : t.reactions.reduce(function(e, t) {
                return e + t.count
            }, 0),
            forum_post_num_unique_reactions: null == (n = A(S.id)) ? 0 : n.reactions.length,
            forum_post_applied_tag_ids: function(e) {
                var t, n, r = s.default.getChannel(e);
                if (null == r) return [];
                var o = s.default.getChannel(r.parent_id),
                    i = null == o ? void 0 : o.availableTags;
                if (null == o || null == i) return [];
                var a = new Set(i.map(function(e) {
                    return e.id
                }));
                return null !== (n = null === (t = r.appliedTags) || void 0 === t ? void 0 : t.filter(function(e) {
                    return a.has(e)
                })) && void 0 !== n ? n : []
            }(S.id),
            forum_post_is_pinned: S.hasFlag(I.ChannelFlags.PINNED),
            forum_post_is_new: null === (E = p.default.getReadStateSnapshotAnalytics(S.id)) || void 0 === E ? void 0 : E.isNew,
            forum_post_is_unread: null === (m = p.default.getReadStateSnapshotAnalytics(S.id)) || void 0 === m ? void 0 : m.hasUnreads,
            forum_post_is_following: i.default.hasJoined(S.id),
            forum_post_attachment_mimetypes: null == (r = A(S.id)) ? [] : r.attachments.map(function(e) {
                var t;
                return null !== (t = e.content_type) && void 0 !== t ? t : "unknown"
            })
        }, l), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(l)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e))
        }), o
    }
}
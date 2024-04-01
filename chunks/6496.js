function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectForumAnalyticsMetadata: function() {
            return g
        },
        collectForumPostAnalyticsMetadata: function() {
            return L
        },
        convertSortOrderToReadableString: function() {
            return N
        },
        getForumChannelSessionId: function() {
            return m
        },
        getForumPostDraftAppliedTagIds: function() {
            return p
        },
        getForumPostDraftNumAttachments: function() {
            return O
        },
        getNumActiveThreads: function() {
            return R
        }
    }), n("411104"), n("47120"), n("724458");
    var i = n("683860"),
        r = n("344185"),
        s = n("569471"),
        a = n("260483"),
        o = n("144140"),
        l = n("592125"),
        u = n("703558"),
        d = n("496675"),
        _ = n("117530"),
        c = n("709054"),
        E = n("660189"),
        I = n("559241"),
        T = n("474387"),
        f = n("702225"),
        S = n("981631"),
        A = n("176505"),
        h = n("124368");

    function m(e) {
        return f.default.getForumChannelSessionId(e)
    }

    function N(e) {
        switch (e) {
            case i.ThreadSortOrder.CREATION_DATE:
                return h.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
            case i.ThreadSortOrder.LATEST_ACTIVITY:
                return h.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
            default:
                throw Error("Unexpected sort order ".concat(e))
        }
    }

    function O(e) {
        return _.default.getUploads(e, u.DraftType.FirstThreadMessage).length
    }

    function p(e) {
        var t, n;
        let i = l.default.getChannel(e);
        if (null == i) return [];
        let r = l.default.getChannel(i.parent_id),
            s = null == r ? void 0 : r.availableTags;
        if (null == r || null == s) return [];
        let a = null !== (n = null === (t = u.default.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
            o = new Set(s.map(e => e.id));
        return Array.from(a).filter(e => o.has(e))
    }

    function R(e, t) {
        return Object.keys(r.default.getThreadsForParent(e, t)).length
    }

    function C(e) {
        let {
            loaded: t,
            firstMessage: n
        } = E.default.getMessage(e);
        return t ? n : null
    }

    function g(e) {
        var t, n, i, r;
        let {
            channelId: s,
            sessionId: a
        } = e, o = l.default.getChannel(s);
        return null != o && o.isForumLikeChannel() ? {
            forum_channel_has_guidelines: null != o.topic && o.topic.trim().length > 0,
            forum_channel_default_emoji_reaction_id: null === (t = o.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
            forum_channel_default_emoji_reaction_name: null === (n = o.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
            forum_channel_available_tag_ids: null !== (r = null === (i = o.availableTags) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== r ? r : [],
            forum_channel_tag_required: o.hasFlag(A.ChannelFlags.REQUIRE_TAG),
            forum_channel_can_create_post: d.default.can(S.Permissions.SEND_MESSAGES, o),
            forum_channel_filter_tag_ids: I.default.getFilterTagIdsAnalytics(),
            forum_channel_sort_order: I.default.getSortOrderAnalytics(o.id),
            forum_channel_session_id: null != a ? a : m(o.id),
            forum_channel_layout: I.default.getLayoutAnalytics(o.id),
            forum_channel_default_sort_order: o.defaultSortOrder,
            forum_channel_default_layout: o.defaultForumLayout
        } : null
    }

    function L(e) {
        var t, n, i, r, u, d, _;
        let {
            channelId: E,
            sessionId: I
        } = e, f = l.default.getChannel(E);
        if (null == f || !f.isForumPost()) return null;
        let S = l.default.getChannel(f.parent_id);
        return null != S && S.isForumLikeChannel() ? {
            ...g({
                channelId: S.id,
                sessionId: I
            }),
            thread_approximate_member_count: a.default.getMemberCount(E),
            thread_approximate_message_count: o.default.getCount(E),
            thread_archived: (null === (t = f.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
            thread_locked: null !== (d = null === (n = f.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== d && d,
            thread_auto_archive_duration_minutes: null !== (_ = null === (i = f.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== _ ? _ : 0,
            thread_approximate_creation_date: c.default.extractTimestamp(E),
            forum_post_id: f.id,
            forum_post_first_message_id: c.default.castChannelIdAsMessageId(f.id),
            forum_post_num_reactions: function(e) {
                let t = C(e);
                return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
            }(f.id),
            forum_post_num_unique_reactions: function(e) {
                let t = C(e);
                return null == t ? 0 : t.reactions.length
            }(f.id),
            forum_post_applied_tag_ids: function(e) {
                var t, n;
                let i = l.default.getChannel(e);
                if (null == i) return [];
                let r = l.default.getChannel(i.parent_id),
                    s = null == r ? void 0 : r.availableTags;
                if (null == r || null == s) return [];
                let a = new Set(s.map(e => e.id));
                return null !== (n = null === (t = i.appliedTags) || void 0 === t ? void 0 : t.filter(e => a.has(e))) && void 0 !== n ? n : []
            }(f.id),
            forum_post_is_pinned: f.hasFlag(A.ChannelFlags.PINNED),
            forum_post_is_new: null === (r = T.default.getReadStateSnapshotAnalytics(f.id)) || void 0 === r ? void 0 : r.isNew,
            forum_post_is_unread: null === (u = T.default.getReadStateSnapshotAnalytics(f.id)) || void 0 === u ? void 0 : u.hasUnreads,
            forum_post_is_following: s.default.hasJoined(f.id),
            forum_post_attachment_mimetypes: function(e) {
                let t = C(e);
                return null == t ? [] : t.attachments.map(e => {
                    var t;
                    return null !== (t = e.content_type) && void 0 !== t ? t : "unknown"
                })
            }(f.id)
        } : null
    }
}
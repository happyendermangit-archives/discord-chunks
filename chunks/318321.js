function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getForumChannelSessionId: function() {
            return v
        },
        convertSortOrderToReadableString: function() {
            return T
        },
        getForumPostDraftNumAttachments: function() {
            return I
        },
        getForumPostDraftAppliedTagIds: function() {
            return A
        },
        getNumActiveThreads: function() {
            return C
        },
        collectForumAnalyticsMetadata: function() {
            return N
        },
        collectForumPostAnalyticsMetadata: function() {
            return R
        }
    }), n("70102"), n("222007"), n("808653");
    var i = n("335710"),
        s = n("689275"),
        r = n("755624"),
        a = n("800843"),
        o = n("610730"),
        l = n("42203"),
        u = n("474643"),
        d = n("957255"),
        c = n("585722"),
        _ = n("299039"),
        f = n("430475"),
        E = n("446480"),
        h = n("589641"),
        g = n("369814"),
        m = n("49111"),
        p = n("724210"),
        S = n("648564");

    function v(e) {
        return g.default.getForumChannelSessionId(e)
    }

    function T(e) {
        switch (e) {
            case i.ThreadSortOrder.CREATION_DATE:
                return S.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
            case i.ThreadSortOrder.LATEST_ACTIVITY:
                return S.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
            default:
                throw Error("Unexpected sort order ".concat(e))
        }
    }

    function I(e) {
        return c.default.getUploads(e, u.DraftType.FirstThreadMessage).length
    }

    function A(e) {
        var t, n;
        let i = l.default.getChannel(e);
        if (null == i) return [];
        let s = l.default.getChannel(i.parent_id),
            r = null == s ? void 0 : s.availableTags;
        if (null == s || null == r) return [];
        let a = null !== (n = null === (t = u.default.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
            o = new Set(r.map(e => e.id));
        return Array.from(a).filter(e => o.has(e))
    }

    function C(e, t) {
        return Object.keys(s.default.getThreadsForParent(e, t)).length
    }

    function y(e) {
        let {
            loaded: t,
            firstMessage: n
        } = f.default.getMessage(e);
        return t ? n : null
    }

    function N(e) {
        var t, n, i, s;
        let {
            channelId: r,
            sessionId: a
        } = e, o = l.default.getChannel(r);
        return null != o && o.isForumLikeChannel() ? {
            forum_channel_has_guidelines: null != o.topic && o.topic.trim().length > 0,
            forum_channel_default_emoji_reaction_id: null === (t = o.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
            forum_channel_default_emoji_reaction_name: null === (n = o.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
            forum_channel_available_tag_ids: null !== (s = null === (i = o.availableTags) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== s ? s : [],
            forum_channel_tag_required: o.hasFlag(p.ChannelFlags.REQUIRE_TAG),
            forum_channel_can_create_post: d.default.can(m.Permissions.SEND_MESSAGES, o),
            forum_channel_filter_tag_ids: E.default.getFilterTagIdsAnalytics(),
            forum_channel_sort_order: E.default.getSortOrderAnalytics(o.id),
            forum_channel_session_id: null != a ? a : v(o.id),
            forum_channel_layout: E.default.getLayoutAnalytics(o.id),
            forum_channel_default_sort_order: o.defaultSortOrder,
            forum_channel_default_layout: o.defaultForumLayout
        } : null
    }

    function R(e) {
        var t, n, i, s, u, d, c;
        let {
            channelId: f,
            sessionId: E
        } = e, g = l.default.getChannel(f);
        if (null == g || !g.isForumPost()) return null;
        let m = l.default.getChannel(g.parent_id);
        return null != m && m.isForumLikeChannel() ? {
            ...N({
                channelId: m.id,
                sessionId: E
            }),
            thread_approximate_member_count: a.default.getMemberCount(f),
            thread_approximate_message_count: o.default.getCount(f),
            thread_archived: (null === (t = g.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
            thread_locked: null !== (d = null === (n = g.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== d && d,
            thread_auto_archive_duration_minutes: null !== (c = null === (i = g.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== c ? c : 0,
            thread_approximate_creation_date: _.default.extractTimestamp(f),
            forum_post_id: g.id,
            forum_post_first_message_id: _.default.castChannelIdAsMessageId(g.id),
            forum_post_num_reactions: function(e) {
                let t = y(e);
                return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
            }(g.id),
            forum_post_num_unique_reactions: function(e) {
                let t = y(e);
                return null == t ? 0 : t.reactions.length
            }(g.id),
            forum_post_applied_tag_ids: function(e) {
                var t, n;
                let i = l.default.getChannel(e);
                if (null == i) return [];
                let s = l.default.getChannel(i.parent_id),
                    r = null == s ? void 0 : s.availableTags;
                if (null == s || null == r) return [];
                let a = new Set(r.map(e => e.id));
                return null !== (n = null === (t = i.appliedTags) || void 0 === t ? void 0 : t.filter(e => a.has(e))) && void 0 !== n ? n : []
            }(g.id),
            forum_post_is_pinned: g.hasFlag(p.ChannelFlags.PINNED),
            forum_post_is_new: null === (s = h.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === s ? void 0 : s.isNew,
            forum_post_is_unread: null === (u = h.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === u ? void 0 : u.hasUnreads,
            forum_post_is_following: r.default.hasJoined(g.id),
            forum_post_attachment_mimetypes: function(e) {
                let t = y(e);
                return null == t ? [] : t.attachments.map(e => {
                    var t;
                    return null !== (t = e.content_type) && void 0 !== t ? t : "unknown"
                })
            }(g.id)
        } : null
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getForumPostReadStates: function() {
            return o
        },
        getForumPostReadStatesById: function() {
            return c
        },
        getForumTimestampFormatter: function() {
            return f
        },
        canDisplayPostUnreadMessageCount: function() {
            return h
        },
        isForumPostPinned: function() {
            return E
        }
    }), n("222007");
    var i = n("335710"),
        a = n("42203"),
        l = n("305961"),
        s = n("660478"),
        r = n("953371"),
        u = n("724210"),
        d = n("782340");

    function o(e, t) {
        let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
        return {
            isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
            hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
        }
    }

    function c(e) {
        let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, l.default, s.default], r = t.getChannel(e);
        if (null == r) return null;
        let u = n.getGuild(r.guild_id);
        return null == u ? null : o(r, u, [i])
    }
    let _ = () => ({
        minutes: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
        hours: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
        days: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
        month: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
    });

    function f(e, t) {
        if (t === r.ForumTimestampFormats.POSTED_DURATION_AGO && e === i.ThreadSortOrder.CREATION_DATE) return _
    }

    function h(e, t) {
        let [n] = t, i = n.hasTrackedUnread(e), a = n.hasOpenedThread(e), l = null != n.getTrackedAckMessageId(e);
        return i && a && l
    }

    function E(e) {
        var t;
        return (null === (t = a.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(u.ChannelFlags.PINNED)) === !0
    }
}
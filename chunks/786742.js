function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getForumPostReadStates: function() {
            return d
        },
        getForumPostReadStatesById: function() {
            return c
        },
        getForumTimestampFormatter: function() {
            return f
        },
        canDisplayPostUnreadMessageCount: function() {
            return E
        },
        isForumPostPinned: function() {
            return h
        }
    }), n("222007");
    var i = n("335710"),
        s = n("42203"),
        r = n("305961"),
        a = n("660478"),
        o = n("953371"),
        l = n("724210"),
        u = n("782340");

    function d(e, t) {
        let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default];
        return {
            isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
            hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
        }
    }

    function c(e) {
        let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, r.default, a.default], o = t.getChannel(e);
        if (null == o) return null;
        let l = n.getGuild(o.guild_id);
        return null == l ? null : d(o, l, [i])
    }
    let _ = () => ({
        minutes: u.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
        hours: u.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
        days: u.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
        month: u.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
    });

    function f(e, t) {
        if (t === o.ForumTimestampFormats.POSTED_DURATION_AGO && e === i.ThreadSortOrder.CREATION_DATE) return _
    }

    function E(e, t) {
        let [n] = t, i = n.hasTrackedUnread(e), s = n.hasOpenedThread(e), r = null != n.getTrackedAckMessageId(e);
        return i && s && r
    }

    function h(e) {
        var t;
        return (null === (t = s.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(l.ChannelFlags.PINNED)) === !0
    }
}
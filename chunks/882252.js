function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canDisplayPostUnreadMessageCount: function() {
            return I
        },
        getForumPostReadStates: function() {
            return d
        },
        getForumPostReadStatesById: function() {
            return _
        },
        getForumTimestampFormatter: function() {
            return E
        },
        isForumPostPinned: function() {
            return T
        }
    }), n("47120");
    var i = n("683860"),
        r = n("592125"),
        a = n("430824"),
        s = n("306680"),
        o = n("710352"),
        l = n("176505"),
        u = n("689938");

    function d(e, t) {
        let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
        return {
            isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
            hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
        }
    }

    function _(e) {
        let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, a.default, s.default], o = t.getChannel(e);
        if (null == o) return null;
        let l = n.getGuild(o.guild_id);
        return null == l ? null : d(o, l, [i])
    }
    let c = () => ({
        minutes: u.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
        hours: u.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
        days: u.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
        month: u.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
    });

    function E(e, t) {
        if (t === o.ForumTimestampFormats.POSTED_DURATION_AGO && e === i.ThreadSortOrder.CREATION_DATE) return c
    }

    function I(e, t) {
        let [n] = t, i = n.hasTrackedUnread(e), r = n.hasOpenedThread(e), a = null != n.getTrackedAckMessageId(e);
        return i && r && a
    }

    function T(e) {
        var t;
        return (null === (t = r.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(l.ChannelFlags.PINNED)) === !0
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectThreadMetadata: function() {
            return c
        }
    });
    var r = n("163291"),
        o = n("128181"),
        i = n("271408"),
        a = n("569492"),
        u = n("29884"),
        s = n("523018"),
        l = n("281767");

    function c(e) {
        var t, n, c, f, d, _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && a.THREAD_CHANNEL_TYPES.has(e.type) ? {
            location: _ ? (0, r.getLastRouteChangeSource)() : void 0,
            thread_approximate_member_count: o.default.getMemberCount(e.id),
            thread_approximate_message_count: i.default.getCount(e.id),
            thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
            thread_locked: null !== (f = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== f && f,
            thread_auto_archive_duration_minutes: null !== (d = null === (c = e.threadMetadata) || void 0 === c ? void 0 : c.autoArchiveDuration) && void 0 !== d ? d : 0,
            thread_approximate_creation_date: s.default.extractTimestamp(e.id),
            can_send_message: u.default.can(l.Permissions.SEND_MESSAGES, e),
            parent_channel_type: e.parentChannelThreadType
        } : null
    }
}
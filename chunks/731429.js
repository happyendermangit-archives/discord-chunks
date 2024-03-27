function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectThreadMetadata: function() {
            return d
        }
    });
    var i = n("703656"),
        r = n("260483"),
        s = n("144140"),
        a = n("131704"),
        o = n("496675"),
        l = n("709054"),
        u = n("981631");

    function d(e) {
        var t, n, d, _, c;
        let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && a.THREAD_CHANNEL_TYPES.has(e.type) ? {
            location: E ? (0, i.getLastRouteChangeSource)() : void 0,
            thread_approximate_member_count: r.default.getMemberCount(e.id),
            thread_approximate_message_count: s.default.getCount(e.id),
            thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
            thread_locked: null !== (_ = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== _ && _,
            thread_auto_archive_duration_minutes: null !== (c = null === (d = e.threadMetadata) || void 0 === d ? void 0 : d.autoArchiveDuration) && void 0 !== c ? c : 0,
            thread_approximate_creation_date: l.default.extractTimestamp(e.id),
            can_send_message: o.default.can(u.Permissions.SEND_MESSAGES, e),
            parent_channel_type: e.parentChannelThreadType
        } : null
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectThreadMetadata: function() {
            return d
        }
    });
    var i = n("393414"),
        s = n("800843"),
        r = n("610730"),
        a = n("233069"),
        o = n("957255"),
        l = n("299039"),
        u = n("49111");

    function d(e) {
        var t, n, d, c, _;
        let f = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e || !a.THREAD_CHANNEL_TYPES.has(e.type)) return null;
        let E = f ? (0, i.getLastRouteChangeSource)() : void 0;
        return {
            location: E,
            thread_approximate_member_count: s.default.getMemberCount(e.id),
            thread_approximate_message_count: r.default.getCount(e.id),
            thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
            thread_locked: null !== (c = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
            thread_auto_archive_duration_minutes: null !== (_ = null === (d = e.threadMetadata) || void 0 === d ? void 0 : d.autoArchiveDuration) && void 0 !== _ ? _ : 0,
            thread_approximate_creation_date: l.default.extractTimestamp(e.id),
            can_send_message: o.default.can(u.Permissions.SEND_MESSAGES, e),
            parent_channel_type: e.parentChannelThreadType
        }
    }
}
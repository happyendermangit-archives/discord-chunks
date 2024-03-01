function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectThreadMetadata: function() {
            return o
        }
    });
    var i = n("393414"),
        a = n("800843"),
        l = n("610730"),
        s = n("233069"),
        r = n("957255"),
        u = n("299039"),
        d = n("49111");

    function o(e) {
        var t, n, o, c, _;
        let f = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e || !s.THREAD_CHANNEL_TYPES.has(e.type)) return null;
        let h = f ? (0, i.getLastRouteChangeSource)() : void 0;
        return {
            location: h,
            thread_approximate_member_count: a.default.getMemberCount(e.id),
            thread_approximate_message_count: l.default.getCount(e.id),
            thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
            thread_locked: null !== (c = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
            thread_auto_archive_duration_minutes: null !== (_ = null === (o = e.threadMetadata) || void 0 === o ? void 0 : o.autoArchiveDuration) && void 0 !== _ ? _ : 0,
            thread_approximate_creation_date: u.default.extractTimestamp(e.id),
            can_send_message: r.default.can(d.Permissions.SEND_MESSAGES, e),
            parent_channel_type: e.parentChannelThreadType
        }
    }
}
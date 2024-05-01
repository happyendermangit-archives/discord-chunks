function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("481060"),
        s = n("569545"),
        o = n("687516"),
        l = n("314897"),
        u = n("959457"),
        d = n("689938");

    function _(e, t, _) {
        var c;
        let E = (0, o.useGetStreamApplication)(e),
            I = (0, r.useStateFromStores)([l.default], () => l.default.getId()),
            T = null != e ? (0, s.encodeStreamKey)(e) : u.default.getActiveStreamKey(),
            f = null !== (c = u.default.getVideoStats(T)) && void 0 !== c ? c : {},
            S = {
                media_session_id: u.default.getMediaSessionId(T),
                rtc_connection_id: u.default.getRtcConnectionId(T),
                stream_region: u.default.getRegion(T),
                max_viewers: u.default.getMaxViewers(T),
                ...f
            };
        return null == e ? null : (0, i.jsx)(a.MenuItem, {
            id: "report-stream-problem",
            label: d.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
            action: () => {
                null == _ || _(), null != e && (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("99387"), n.e("75994")]).then(n.bind(n, "340140"));
                    return n => (0, i.jsx)(t, {
                        stream: e,
                        streamApplication: E,
                        isStreamer: I === (null == e ? void 0 : e.ownerId),
                        analyticsData: S,
                        ...n
                    })
                })
            }
        })
    }
}
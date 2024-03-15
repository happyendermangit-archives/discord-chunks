function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("446674"),
        s = n("77078"),
        i = n("374014"),
        l = n("582415"),
        u = n("271938"),
        o = n("205817"),
        d = n("782340");

    function c(e, t, c) {
        var f;
        let h = (0, l.useGetStreamApplication)(e),
            E = (0, r.useStateFromStores)([u.default], () => u.default.getId()),
            p = null != e ? (0, i.encodeStreamKey)(e) : o.default.getActiveStreamKey(),
            m = null !== (f = o.default.getVideoStats(p)) && void 0 !== f ? f : {},
            C = {
                media_session_id: o.default.getMediaSessionId(p),
                rtc_connection_id: o.default.getRtcConnectionId(p),
                stream_region: o.default.getRegion(p),
                max_viewers: o.default.getMaxViewers(p),
                ...m
            };
        return null == e ? null : (0, a.jsx)(s.MenuItem, {
            id: "report-stream-problem",
            label: d.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
            action: () => {
                null == c || c(), null != e && (0, s.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("485857").then(n.bind(n, "485857"));
                    return n => (0, a.jsx)(t, {
                        stream: e,
                        streamApplication: h,
                        isStreamer: E === (null == e ? void 0 : e.ownerId),
                        analyticsData: C,
                        ...n
                    })
                })
            }
        })
    }
}
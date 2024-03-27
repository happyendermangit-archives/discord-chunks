function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("990547"),
        r = n("570140"),
        s = n("844889"),
        a = n("314897"),
        o = n("981631");
    (0, i.analyticsTrackingStoreMaker)({
        dispatcher: r.default,
        actionHandler: {
            CONNECTION_OPEN: e => i.AnalyticsActionHandlers.handleConnectionOpen(e),
            OVERLAY_INITIALIZE: e => i.AnalyticsActionHandlers.handleConnectionOpen(e),
            CURRENT_USER_UPDATE: e => i.AnalyticsActionHandlers.handleConnectionOpen(e),
            CONNECTION_CLOSED: () => i.AnalyticsActionHandlers.handleConnectionClosed(),
            FINGERPRINT: () => i.AnalyticsActionHandlers.handleFingerprint(),
            TRACK: e => i.AnalyticsActionHandlers.handleTrack(e)
        },
        TRACKING_URL: o.Endpoints.TRACK,
        waitFor: [a.default],
        getFingerprint: a.default.getFingerprint,
        getSessionId: () => (0, s.getSession)().then(e => ({
            sessionId: null == e ? void 0 : e.uuid
        }))
    })
}
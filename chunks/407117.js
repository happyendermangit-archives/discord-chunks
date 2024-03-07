function(e, _, E) {
    "use strict";
    E.r(_);
    var t = E("759843"),
        o = E("913144"),
        n = E("371160"),
        r = E("271938"),
        a = E("49111");
    (0, t.analyticsTrackingStoreMaker)({
        dispatcher: o.default,
        actionHandler: {
            CONNECTION_OPEN: e => t.AnalyticsActionHandlers.handleConnectionOpen(e),
            OVERLAY_INITIALIZE: e => t.AnalyticsActionHandlers.handleConnectionOpen(e),
            CURRENT_USER_UPDATE: e => t.AnalyticsActionHandlers.handleConnectionOpen(e),
            CONNECTION_CLOSED: () => t.AnalyticsActionHandlers.handleConnectionClosed(),
            FINGERPRINT: () => t.AnalyticsActionHandlers.handleFingerprint(),
            TRACK: e => t.AnalyticsActionHandlers.handleTrack(e)
        },
        TRACKING_URL: a.Endpoints.TRACK,
        waitFor: [r.default],
        getFingerprint: r.default.getFingerprint,
        getSessionId: () => (0, n.getSession)().then(e => ({
            sessionId: null == e ? void 0 : e.uuid
        }))
    })
}
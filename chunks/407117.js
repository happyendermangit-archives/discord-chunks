function(e, _, E) {
    "use strict";
    E.r(_);
    var t = E("759843"),
        o = E("913144"),
        n = E("271938"),
        r = E("49111");
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
        TRACKING_URL: r.Endpoints.TRACK,
        waitFor: [n.default],
        getFingerprint: n.default.getFingerprint
    })
}
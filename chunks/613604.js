function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("383959"),
        o = n("629815"),
        i = n("555588"),
        a = n("217014"),
        u = n("281767");
    (0, r.analyticsTrackingStoreMaker)({
        dispatcher: o.default,
        actionHandler: {
            CONNECTION_OPEN: function(e) {
                return r.AnalyticsActionHandlers.handleConnectionOpen(e)
            },
            OVERLAY_INITIALIZE: function(e) {
                return r.AnalyticsActionHandlers.handleConnectionOpen(e)
            },
            CURRENT_USER_UPDATE: function(e) {
                return r.AnalyticsActionHandlers.handleConnectionOpen(e)
            },
            CONNECTION_CLOSED: function() {
                return r.AnalyticsActionHandlers.handleConnectionClosed()
            },
            FINGERPRINT: function() {
                return r.AnalyticsActionHandlers.handleFingerprint()
            },
            TRACK: function(e) {
                return r.AnalyticsActionHandlers.handleTrack(e)
            }
        },
        TRACKING_URL: u.Endpoints.TRACK,
        waitFor: [a.default],
        getFingerprint: a.default.getFingerprint,
        getSessionId: function() {
            return (0, i.getSession)().then(function(e) {
                return {
                    sessionId: null == e ? void 0 : e.uuid
                }
            })
        }
    })
}
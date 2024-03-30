function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("870331"),
        o = n("281767");

    function i(e) {
        var t = e.type,
            n = e.source,
            i = e.userId,
            a = e.applicationId,
            u = e.partyId,
            s = e.messageId,
            l = e.locationObject,
            c = e.analyticsLocations;
        r.default.track(o.AnalyticEvents.APPLICATION_OPENED, {
            type: t,
            source: n,
            application_id: a,
            party_id: null != u ? u : void 0,
            other_user_id: i,
            message_id: s,
            location: l,
            location_stack: c
        })
    }
}
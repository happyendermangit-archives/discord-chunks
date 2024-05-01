function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("626135"),
        r = n("981631");

    function a(e) {
        let {
            type: t,
            source: n,
            userId: a,
            applicationId: s,
            partyId: o,
            messageId: l,
            locationObject: u,
            analyticsLocations: d
        } = e;
        i.default.track(r.AnalyticEvents.APPLICATION_OPENED, {
            type: t,
            source: n,
            application_id: s,
            party_id: null != o ? o : void 0,
            other_user_id: a,
            message_id: l,
            location: u,
            location_stack: d
        })
    }
}
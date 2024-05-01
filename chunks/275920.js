function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("626135"),
        r = n("981631");

    function s(e) {
        let {
            type: t,
            source: n,
            userId: s,
            applicationId: a,
            partyId: o,
            messageId: l,
            locationObject: u,
            analyticsLocations: d
        } = e;
        i.default.track(r.AnalyticEvents.APPLICATION_OPENED, {
            type: t,
            source: n,
            application_id: a,
            party_id: null != o ? o : void 0,
            other_user_id: s,
            message_id: l,
            location: u,
            location_stack: d
        })
    }
}
function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return a
        }
    });
    var n = i("599110"),
        l = i("49111");

    function a(t) {
        let {
            type: e,
            source: i,
            userId: a,
            applicationId: u,
            partyId: r,
            messageId: d,
            locationObject: s,
            analyticsLocations: o
        } = t;
        n.default.track(l.AnalyticEvents.APPLICATION_OPENED, {
            type: e,
            source: i,
            application_id: u,
            party_id: null != r ? r : void 0,
            other_user_id: a,
            message_id: d,
            location: s,
            location_stack: o
        })
    }
}
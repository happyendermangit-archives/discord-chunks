function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActionedApplicationStatus: function() {
            return s
        },
        isSubmittedApplicationStatus: function() {
            return r
        },
        isApprovedAndAcked: function() {
            return a
        },
        isActionedAndNotAcked: function() {
            return o
        }
    });
    var i = n("567054");

    function s(e) {
        return e === i.GuildJoinRequestApplicationStatuses.APPROVED || e === i.GuildJoinRequestApplicationStatuses.REJECTED
    }

    function r(e) {
        return e === i.GuildJoinRequestApplicationStatuses.SUBMITTED
    }

    function a(e) {
        return e.applicationStatus === i.GuildJoinRequestApplicationStatuses.APPROVED && null != e.lastSeen
    }

    function o(e) {
        return s(e.applicationStatus) && null == e.lastSeen
    }
}
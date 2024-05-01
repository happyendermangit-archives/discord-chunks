function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getClipCreatedAt: function() {
            return a
        },
        getClipParticipantIds: function() {
            return s
        }
    });
    var i = n("709054"),
        r = n("356659");

    function a(e) {
        return new Date(i.default.extractTimestamp(e)).toISOString()
    }

    function s(e) {
        return e.slice(0, r.CLIPS_MAX_PARTICIPANTS)
    }
}
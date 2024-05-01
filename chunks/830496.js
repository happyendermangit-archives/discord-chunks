function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getClipCreatedAt: function() {
            return s
        },
        getClipParticipantIds: function() {
            return a
        }
    });
    var i = n("709054"),
        r = n("356659");

    function s(e) {
        return new Date(i.default.extractTimestamp(e)).toISOString()
    }

    function a(e) {
        return e.slice(0, r.CLIPS_MAX_PARTICIPANTS)
    }
}
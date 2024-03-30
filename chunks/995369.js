function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getClipCreatedAt: function() {
            return i
        },
        getClipParticipantIds: function() {
            return a
        }
    });
    var r = n("523018"),
        o = n("945986");

    function i(e) {
        return new Date(r.default.extractTimestamp(e)).toISOString()
    }

    function a(e) {
        return e.slice(0, o.CLIPS_MAX_PARTICIPANTS)
    }
}
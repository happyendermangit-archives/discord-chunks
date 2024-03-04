function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getClipCreatedAt: function() {
            return r
        },
        getClipParticipantIds: function() {
            return a
        }
    });
    var i = n("299039"),
        s = n("80028");

    function r(e) {
        return new Date(i.default.extractTimestamp(e)).toISOString()
    }

    function a(e) {
        return e.slice(0, s.CLIPS_MAX_PARTICIPANTS)
    }
}
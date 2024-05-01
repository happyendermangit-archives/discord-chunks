function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("354459"),
        r = n("65154");
    let a = Object.freeze({
        [i.ParticipantTypes.STREAM]: r.MediaEngineContextTypes.STREAM,
        [i.ParticipantTypes.HIDDEN_STREAM]: r.MediaEngineContextTypes.STREAM,
        [i.ParticipantTypes.USER]: r.MediaEngineContextTypes.DEFAULT,
        [i.ParticipantTypes.ACTIVITY]: r.MediaEngineContextTypes.DEFAULT
    });

    function s(e) {
        return a[e]
    }
}
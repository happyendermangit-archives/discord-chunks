function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RequestToSpeakStates: function() {
            return o
        },
        default: function() {
            return s
        },
        getAudienceRequestToSpeakState: function() {
            return u
        }
    });
    var r, o, i = n("898511"),
        a = n("665863");

    function u(e) {
        if (null == e) return 0;
        if (e.suppress && null != e.requestToSpeakTimestamp) return 1;
        if (!e.suppress && null != e.requestToSpeakTimestamp) return 2;
        if (!e.suppress && null == e.requestToSpeakTimestamp) return 3;
        return 0
    }

    function s(e, t) {
        return (0, i.useStateFromStores)([a.default], function() {
            return null == e || null == t ? 0 : u(a.default.getVoiceStateForChannel(t, e))
        }, [e, t])
    }(r = o || (o = {}))[r.NONE = 0] = "NONE", r[r.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", r[r.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", r[r.ON_STAGE = 3] = "ON_STAGE"
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RequestToSpeakStates: function() {
            return s
        },
        getAudienceRequestToSpeakState: function() {
            return o
        },
        default: function() {
            return l
        }
    });
    var i, s, r = n("446674"),
        a = n("800762");

    function o(e) {
        if (null == e) return 0;
        if (e.suppress && null != e.requestToSpeakTimestamp) return 1;
        if (!e.suppress && null != e.requestToSpeakTimestamp) return 2;
        if (!e.suppress && null == e.requestToSpeakTimestamp) return 3;
        return 0
    }

    function l(e, t) {
        return (0, r.useStateFromStores)([a.default], () => {
            if (null == e || null == t) return 0;
            let n = a.default.getVoiceStateForChannel(t, e);
            return o(n)
        }, [e, t])
    }(i = s || (s = {}))[i.NONE = 0] = "NONE", i[i.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", i[i.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", i[i.ON_STAGE = 3] = "ON_STAGE"
}
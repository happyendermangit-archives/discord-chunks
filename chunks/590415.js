function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RequestToSpeakStates: function() {
            return r
        },
        default: function() {
            return l
        },
        getAudienceRequestToSpeakState: function() {
            return o
        }
    });
    var i, r, a = n("442837"),
        s = n("979651");

    function o(e) {
        if (null == e) return 0;
        if (e.suppress && null != e.requestToSpeakTimestamp) return 1;
        if (!e.suppress && null != e.requestToSpeakTimestamp) return 2;
        if (!e.suppress && null == e.requestToSpeakTimestamp) return 3;
        return 0
    }

    function l(e, t) {
        return (0, a.useStateFromStores)([s.default], () => null == e || null == t ? 0 : o(s.default.getVoiceStateForChannel(t, e)), [e, t])
    }(i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", i[i.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", i[i.ON_STAGE = 3] = "ON_STAGE"
}
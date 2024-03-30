function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("264344"),
        i = n.n(o),
        a = n("937089");
    window.AudioContext = null !== (r = window.AudioContext) && void 0 !== r ? r : window.webkitAudioContext, null != window.RTCPeerConnection && "Chrome" === i().name && 52 > (0, a.platformVersion)() && ["createOffer", "createAnswer"].forEach(function(e) {
        var t = RTCPeerConnection.prototype[e];
        RTCPeerConnection.prototype[e] = function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            var o = this;
            if (n.length < 1 || 1 === n.length && "object" == typeof n[0]) {
                var i = 1 === n.length ? n[0] : void 0;
                return null != i && (i = {
                    mandatory: {
                        OfferToReceiveAudio: i.offerToReceiveAudio || !1,
                        OfferToReceiveVideo: i.offerToReceiveVideo || !1
                    },
                    optional: [{
                        VoiceActivityDetection: i.voiceActivityDetection || !1
                    }, {
                        IceRestart: i.iceRestart || !1
                    }]
                }), new Promise(function(e, n) {
                    return t.apply(o, [e, n, i])
                })
            }
            return t.apply(this, n)
        }
    })
}
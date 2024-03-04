function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("446674"),
        s = n("913144");
    let r = n("353927").DEFAULT_VOICE_BITRATE;
    class a extends i.default.Store {
        get bitrate() {
            return r
        }
    }
    a.displayName = "BitRateStore";
    var o = new a(s.default, {
        SET_CHANNEL_BITRATE: function(e) {
            r = e.bitrate
        }
    })
}
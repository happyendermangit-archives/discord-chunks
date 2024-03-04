function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("446674"),
        s = n("913144");
    let r = !1;
    class a extends i.default.Store {
        isProtocolRegistered() {
            return r
        }
    }
    a.displayName = "SpotifyProtocolStore";
    var o = new a(s.default, {
        SPOTIFY_SET_PROTOCOL_REGISTERED: function(e) {
            let {
                isRegistered: t
            } = e;
            r = t
        }
    })
}
function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = !1;
    class d extends(a = o.default.Store) {
        isProtocolRegistered() {
            return u
        }
    }
    s = "SpotifyProtocolStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new d(l.default, {
        SPOTIFY_SET_PROTOCOL_REGISTERED: function(e) {
            let {
                isRegistered: t
            } = e;
            u = t
        }
    })
}
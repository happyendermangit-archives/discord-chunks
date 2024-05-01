function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("65154");
    let d = u.DEFAULT_VOICE_BITRATE;
    class _ extends(s = o.default.Store) {
        get bitrate() {
            return d
        }
    }
    a = "BitRateStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new _(l.default, {
        SET_CHANNEL_BITRATE: function(e) {
            d = e.bitrate
        }
    })
}
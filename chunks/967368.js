function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("65154");
    let d = u.DEFAULT_VOICE_BITRATE;
    class _ extends(a = o.default.Store) {
        get bitrate() {
            return d
        }
    }
    s = "BitRateStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new _(l.default, {
        SET_CHANNEL_BITRATE: function(e) {
            d = e.bitrate
        }
    })
}
function(e) {
    "use strict";
    var t = function() {
        for (var e, t = [], n = 0; n < 256; n++) {
            e = n;
            for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
            t[n] = e
        }
        return t
    }();
    e.exports = function(e, n, r, i) {
        var a = i + r;
        e ^= -1;
        for (var o = i; o < a; o++) e = e >>> 8 ^ t[(e ^ n[o]) & 255];
        return -1 ^ e
    }
}
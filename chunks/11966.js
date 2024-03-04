function(e, t, n) {
    "use strict";
    var r = function() {
        for (var e, t = [], n = 0; n < 256; n++) {
            e = n;
            for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
            t[n] = e
        }
        return t
    }();
    e.exports = function(e, t, n, i) {
        var o = i + n;
        e ^= -1;
        for (var s = i; s < o; s++) e = e >>> 8 ^ r[(e ^ t[s]) & 255];
        return -1 ^ e
    }
}
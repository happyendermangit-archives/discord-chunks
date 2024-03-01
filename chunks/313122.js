function(t, e, s) {
    "use strict";
    t.exports = function(t, e, s, r) {
        for (var i = 65535 & t | 0, n = t >>> 16 & 65535 | 0, c = 0; 0 !== s;) {
            c = s > 2e3 ? 2e3 : s, s -= c;
            do n = n + (i = i + e[r++] | 0) | 0; while (--c);
            i %= 65521, n %= 65521
        }
        return i | n << 16 | 0
    }
}
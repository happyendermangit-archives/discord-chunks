function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r) {
        for (var i = 65535 & e | 0, o = e >>> 16 & 65535 | 0, s = 0; 0 !== n;) {
            s = n > 2e3 ? 2e3 : n, n -= s;
            do o = o + (i = i + t[r++] | 0) | 0; while (--s);
            i %= 65521, o %= 65521
        }
        return i | o << 16 | 0
    }
}
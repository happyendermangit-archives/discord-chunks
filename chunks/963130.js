function(t, e, s) {
    t.exports = function(t, e) {
        for (var s = t.length, r = -1; ++r < s;) t[r] ^= e[r];
        return t
    }
}
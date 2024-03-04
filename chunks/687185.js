function(e, t, n) {
    var r = n("446825").Buffer;
    e.exports = function(e, t) {
        for (var n = Math.min(e.length, t.length), i = new r(n), o = 0; o < n; ++o) i[o] = e[o] ^ t[o];
        return i
    }
}
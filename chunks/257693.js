function(e, t, n) {
    var r = n("413135").Buffer;
    e.exports = function(e, t) {
        for (var n = Math.min(e.length, t.length), i = new r(n), a = 0; a < n; ++a) i[a] = e[a] ^ t[a];
        return i
    }
}
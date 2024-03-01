function(t, r, n) {
    var e = n("561662");
    t.exports = function(t, r) {
        for (var n = t.length; n--;)
            if (e(t[n][0], r)) return n;
        return -1
    }
}
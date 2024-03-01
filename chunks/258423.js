function(t, r, n) {
    var e = n("888633"),
        o = n("466731");
    t.exports = function(t) {
        for (var r = o(t), n = r.length; n--;) {
            var i = r[n],
                u = t[i];
            r[n] = [i, u, e(u)]
        }
        return r
    }
}
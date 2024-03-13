function(t, r, e) {
    t.exports = function(t, r) {
        for (var e = -1, n = Array(t); ++e < t;) n[e] = r(e);
        return n
    }
}
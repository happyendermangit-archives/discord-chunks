function(t, r, e) {
    t.exports = function(t) {
        var r = -1,
            e = Array(t.size);
        return t.forEach(function(t, n) {
            e[++r] = [n, t]
        }), e
    }
}
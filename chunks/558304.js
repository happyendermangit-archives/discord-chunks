function(e, t, n) {
    var r = n("126580");
    e.exports = function(e, t, n) {
        for (var i = -1, o = e.criteria, s = t.criteria, a = o.length, c = n.length; ++i < a;) {
            var u = r(o[i], s[i]);
            if (u) {
                if (i >= c) return u;
                return u * ("desc" == n[i] ? -1 : 1)
            }
        }
        return e.index - t.index
    }
}
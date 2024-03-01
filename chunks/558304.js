function(t, e, s) {
    var r = s("126580");
    t.exports = function(t, e, s) {
        for (var i = -1, n = t.criteria, c = e.criteria, o = n.length, f = s.length; ++i < o;) {
            var u = r(n[i], c[i]);
            if (u) {
                if (i >= f) return u;
                return u * ("desc" == s[i] ? -1 : 1)
            }
        }
        return t.index - e.index
    }
}
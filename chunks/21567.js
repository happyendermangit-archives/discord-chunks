function(t, e, s) {
    var r = s("785225"),
        i = Math.max;
    t.exports = function(t, e, s) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, c = -1, o = i(n.length - e, 0), f = Array(o); ++c < o;) f[c] = n[e + c];
                c = -1;
                for (var u = Array(e + 1); ++c < e;) u[c] = n[c];
                return u[e] = s(f), r(t, this, u)
            }
    }
}
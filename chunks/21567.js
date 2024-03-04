function(e, t, n) {
    var r = n("785225"),
        i = Math.max;
    e.exports = function(e, t, n) {
        return t = i(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var o = arguments, s = -1, a = i(o.length - t, 0), c = Array(a); ++s < a;) c[s] = o[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = o[s];
                return u[t] = n(c), r(e, this, u)
            }
    }
}
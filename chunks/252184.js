function(e, t, n) {
    var r = n("603108");
    e.exports = function(e, t) {
        return function(n, i) {
            if (null == n) return n;
            if (!r(n)) return e(n, i);
            for (var o = n.length, s = t ? o : -1, a = Object(n);
                (t ? s-- : ++s < o) && !1 !== i(a[s], s, a););
            return n
        }
    }
}
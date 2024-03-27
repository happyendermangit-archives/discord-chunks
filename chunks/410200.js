function(e, t, n) {
    var r = n("11537"),
        i = n("685347");
    e.exports = function(e, t, n, a) {
        var o = !n;
        n || (n = {});
        for (var s = -1, u = t.length; ++s < u;) {
            var c = t[s],
                l = a ? a(n[c], e[c], c, n, e) : void 0;
            void 0 === l && (l = e[c]), o ? i(n, c, l) : r(n, c, l)
        }
        return n
    }
}
function(e, t, n) {
    var r = n("931492"),
        i = n("85762");
    e.exports = function(e, t, n, o) {
        var s = !n;
        n || (n = {});
        for (var a = -1, c = t.length; ++a < c;) {
            var u = t[a],
                d = o ? o(n[u], e[u], u, n, e) : void 0;
            void 0 === d && (d = e[u]), s ? i(n, u, d) : r(n, u, d)
        }
        return n
    }
}
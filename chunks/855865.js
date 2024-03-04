function(e, t, n) {
    var r = n("146007"),
        i = n("354069");
    e.exports = function(e, t, n, o) {
        var s = n.length,
            a = s,
            c = !o;
        if (null == e) return !a;
        for (e = Object(e); s--;) {
            var u = n[s];
            if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
        }
        for (; ++s < a;) {
            var d = (u = n[s])[0],
                l = e[d],
                f = u[1];
            if (c && u[2]) {
                if (void 0 === l && !(d in e)) return !1
            } else {
                var p = new r;
                if (o) var h = o(l, f, d, e, t, p);
                if (!(void 0 === h ? i(f, l, 3, o, p) : h)) return !1
            }
        }
        return !0
    }
}
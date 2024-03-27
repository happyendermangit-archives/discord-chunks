function(e, t, n) {
    var r = n("762378"),
        i = n("481062"),
        a = n("34775"),
        o = n("79568"),
        s = n("221286"),
        u = n("903425"),
        c = n("785775"),
        l = "[object Map]",
        d = "[object Promise]",
        f = "[object Set]",
        p = "[object WeakMap]",
        h = "[object DataView]",
        m = c(r),
        g = c(i),
        _ = c(a),
        b = c(o),
        v = c(s),
        y = u;
    (r && y(new r(new ArrayBuffer(1))) != h || i && y(new i) != l || a && y(a.resolve()) != d || o && y(new o) != f || s && y(new s) != p) && (y = function(e) {
        var t = u(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? c(n) : "";
        if (r) switch (r) {
            case m:
                return h;
            case g:
                return l;
            case _:
                return d;
            case b:
                return f;
            case v:
                return p
        }
        return t
    }), e.exports = y
}
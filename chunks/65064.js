function(t, e, n) {
    var r = n("135839"),
        i = n("117973"),
        a = n("780712"),
        o = n("400353"),
        s = n("653180"),
        u = n("657398"),
        c = n("19235"),
        l = "[object Map]",
        d = "[object Promise]",
        f = "[object Set]",
        p = "[object WeakMap]",
        h = "[object DataView]",
        _ = c(r),
        g = c(i),
        m = c(a),
        y = c(o),
        v = c(s),
        b = u;
    (r && b(new r(new ArrayBuffer(1))) != h || i && b(new i) != l || a && b(a.resolve()) != d || o && b(new o) != f || s && b(new s) != p) && (b = function(t) {
        var e = u(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? c(n) : "";
        if (r) switch (r) {
            case _:
                return h;
            case g:
                return l;
            case m:
                return d;
            case y:
                return f;
            case v:
                return p
        }
        return e
    }), t.exports = b
}
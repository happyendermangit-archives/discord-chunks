function(e, t, n) {
    var r = n("223428"),
        i = n("706178"),
        a = n("108381"),
        o = n("855467"),
        s = n("972566"),
        u = n("814033"),
        c = n("895598"),
        l = n("530917"),
        d = n("957578").Buffer;
    e.exports = function(e, t, n) {
        f = e.padding ? e.padding : n ? 1 : 4;
        var f, p, h = r(e);
        if (4 === f) p = function(e, t) {
            var n = e.modulus.byteLength(),
                r = t.length,
                c = a("sha1").update(d.alloc(0)).digest(),
                l = c.length,
                f = 2 * l;
            if (r > n - f - 2) throw Error("message too long");
            var p = d.alloc(n - r - f - 2),
                h = n - l - 1,
                m = i(l),
                g = s(d.concat([c, p, d.alloc(1, 1), t], h), o(m, h)),
                _ = s(m, o(g, l));
            return new u(d.concat([d.alloc(1), _, g], n))
        }(h, t);
        else if (1 === f) p = function(e, t, n) {
            var r, a = t.length,
                o = e.modulus.byteLength();
            if (a > o - 11) throw Error("message too long");
            return r = n ? d.alloc(o - a - 3, 255) : function(e) {
                for (var t, n = d.allocUnsafe(e), r = 0, a = i(2 * e), o = 0; r < e;) o === a.length && (a = i(2 * e), o = 0), (t = a[o++]) && (n[r++] = t);
                return n
            }(o - a - 3), new u(d.concat([d.from([0, n ? 1 : 2]), r, d.alloc(1), t], o))
        }(h, t, n);
        else if (3 === f) {
            if ((p = new u(t)).cmp(h.modulus) >= 0) throw Error("data too long for modulus")
        } else throw Error("unknown padding");
        return n ? l(p, h) : c(p, h)
    }
}
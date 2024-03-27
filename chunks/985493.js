function(e, t, n) {
    var r = n("413135").Buffer,
        i = n("988608"),
        a = n("35609"),
        o = n("168725"),
        s = {
            binary: !0,
            hex: !0,
            base64: !0
        };
    t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function(e) {
        return new o(new r(a[e].prime, "hex"), new r(a[e].gen, "hex"))
    }, t.createDiffieHellman = t.DiffieHellman = function e(t, n, a, u) {
        return r.isBuffer(n) || void 0 === s[n] ? e(t, "binary", n, a) : (n = n || "binary", u = u || "binary", a = a || new r([2]), !r.isBuffer(a) && (a = new r(a, u)), "number" == typeof t) ? new o(i(t, a), a, !0) : (!r.isBuffer(t) && (t = new r(t, n)), new o(t, a, !0))
    }
}
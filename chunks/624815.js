function(t, e, s) {
    var r = s("446825").Buffer,
        i = s("240163"),
        n = s("83737"),
        c = s("958604"),
        o = {
            binary: !0,
            hex: !0,
            base64: !0
        };
    e.DiffieHellmanGroup = e.createDiffieHellmanGroup = e.getDiffieHellman = function(t) {
        return new c(new r(n[t].prime, "hex"), new r(n[t].gen, "hex"))
    }, e.createDiffieHellman = e.DiffieHellman = function t(e, s, n, f) {
        return r.isBuffer(s) || void 0 === o[s] ? t(e, "binary", s, n) : (s = s || "binary", f = f || "binary", n = n || new r([2]), !r.isBuffer(n) && (n = new r(n, f)), "number" == typeof e) ? new c(i(e, n), n, !0) : (!r.isBuffer(e) && (e = new r(e, s)), new c(e, n, !0))
    }
}
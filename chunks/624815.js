function(e, t, n) {
    var r = n("446825").Buffer,
        i = n("240163"),
        o = n("83737"),
        s = n("958604"),
        a = {
            binary: !0,
            hex: !0,
            base64: !0
        };
    t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function(e) {
        return new s(new r(o[e].prime, "hex"), new r(o[e].gen, "hex"))
    }, t.createDiffieHellman = t.DiffieHellman = function e(t, n, o, c) {
        return r.isBuffer(n) || void 0 === a[n] ? e(t, "binary", n, o) : (n = n || "binary", c = c || "binary", o = o || new r([2]), !r.isBuffer(o) && (o = new r(o, c)), "number" == typeof t) ? new s(i(t, o), o, !0) : (!r.isBuffer(t) && (t = new r(t, n)), new s(t, o, !0))
    }
}
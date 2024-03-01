function(t, e, s) {
    var r = s("785060"),
        i = s("291954"),
        n = s("622107"),
        c = s("912065").Buffer,
        o = s("463316"),
        f = s("408475"),
        u = s("127368"),
        a = c.alloc(128),
        d = {
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            rmd160: 20,
            ripemd160: 20
        };

    function p(t, e, s) {
        var o = function(t) {
                return "rmd160" === t || "ripemd160" === t ? function(t) {
                    return new i().update(t).digest()
                } : "md5" === t ? r : function(e) {
                    return n(t).update(e).digest()
                }
            }(t),
            f = "sha512" === t || "sha384" === t ? 128 : 64;
        e.length > f ? e = o(e) : e.length < f && (e = c.concat([e, a], f));
        for (var u = c.allocUnsafe(f + d[t]), p = c.allocUnsafe(f + d[t]), b = 0; b < f; b++) u[b] = 54 ^ e[b], p[b] = 92 ^ e[b];
        var h = c.allocUnsafe(f + s + 4);
        u.copy(h, 0, 0, f), this.ipad1 = h, this.ipad2 = u, this.opad = p, this.alg = t, this.blocksize = f, this.hash = o, this.size = d[t]
    }
    p.prototype.run = function(t, e) {
        return t.copy(e, this.blocksize), this.hash(e).copy(this.opad, this.blocksize), this.hash(this.opad)
    };
    t.exports = function(t, e, s, r, i) {
        o(s, r), t = u(t, f, "Password"), e = u(e, f, "Salt");
        var n = new p(i = i || "sha1", t, e.length),
            a = c.allocUnsafe(r),
            b = c.allocUnsafe(e.length + 4);
        e.copy(b, 0, 0, e.length);
        for (var h = 0, l = d[i], g = Math.ceil(r / l), v = 1; v <= g; v++) {
            b.writeUInt32BE(v, e.length);
            for (var x = n.run(b, n.ipad1), m = x, y = 1; y < s; y++) {
                m = n.run(m, n.ipad2);
                for (var _ = 0; _ < l; _++) x[_] ^= m[_]
            }
            x.copy(a, h), h += l
        }
        return a
    }
}
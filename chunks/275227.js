function(e, t, n) {
    var r = n("877024"),
        i = n("335613"),
        a = n("315893"),
        o = n("957578").Buffer,
        s = n("180756"),
        u = n("138031"),
        c = n("871230"),
        l = o.alloc(128),
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

    function f(e, t, n) {
        var s = function(e) {
                return "rmd160" === e || "ripemd160" === e ? function(e) {
                    return new i().update(e).digest()
                } : "md5" === e ? r : function(t) {
                    return a(e).update(t).digest()
                }
            }(e),
            u = "sha512" === e || "sha384" === e ? 128 : 64;
        t.length > u ? t = s(t) : t.length < u && (t = o.concat([t, l], u));
        for (var c = o.allocUnsafe(u + d[e]), f = o.allocUnsafe(u + d[e]), p = 0; p < u; p++) c[p] = 54 ^ t[p], f[p] = 92 ^ t[p];
        var h = o.allocUnsafe(u + n + 4);
        c.copy(h, 0, 0, u), this.ipad1 = h, this.ipad2 = c, this.opad = f, this.alg = e, this.blocksize = u, this.hash = s, this.size = d[e]
    }
    f.prototype.run = function(e, t) {
        return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad)
    };
    e.exports = function(e, t, n, r, i) {
        s(n, r), e = c(e, u, "Password"), t = c(t, u, "Salt");
        var a = new f(i = i || "sha1", e, t.length),
            l = o.allocUnsafe(r),
            p = o.allocUnsafe(t.length + 4);
        t.copy(p, 0, 0, t.length);
        for (var h = 0, m = d[i], g = Math.ceil(r / m), _ = 1; _ <= g; _++) {
            p.writeUInt32BE(_, t.length);
            for (var b = a.run(p, a.ipad1), v = b, y = 1; y < n; y++) {
                v = a.run(v, a.ipad2);
                for (var E = 0; E < m; E++) b[E] ^= v[E]
            }
            b.copy(l, h), h += m
        }
        return l
    }
}
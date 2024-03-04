function(e, t, n) {
    var r = n("785060"),
        i = n("291954"),
        o = n("622107"),
        s = n("912065").Buffer,
        a = n("463316"),
        c = n("408475"),
        u = n("127368"),
        d = s.alloc(128),
        l = {
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
        var a = function(e) {
                return "rmd160" === e || "ripemd160" === e ? function(e) {
                    return new i().update(e).digest()
                } : "md5" === e ? r : function(t) {
                    return o(e).update(t).digest()
                }
            }(e),
            c = "sha512" === e || "sha384" === e ? 128 : 64;
        t.length > c ? t = a(t) : t.length < c && (t = s.concat([t, d], c));
        for (var u = s.allocUnsafe(c + l[e]), f = s.allocUnsafe(c + l[e]), p = 0; p < c; p++) u[p] = 54 ^ t[p], f[p] = 92 ^ t[p];
        var h = s.allocUnsafe(c + n + 4);
        u.copy(h, 0, 0, c), this.ipad1 = h, this.ipad2 = u, this.opad = f, this.alg = e, this.blocksize = c, this.hash = a, this.size = l[e]
    }
    f.prototype.run = function(e, t) {
        return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad)
    };
    e.exports = function(e, t, n, r, i) {
        a(n, r), e = u(e, c, "Password"), t = u(t, c, "Salt");
        var o = new f(i = i || "sha1", e, t.length),
            d = s.allocUnsafe(r),
            p = s.allocUnsafe(t.length + 4);
        t.copy(p, 0, 0, t.length);
        for (var h = 0, v = l[i], g = Math.ceil(r / v), b = 1; b <= g; b++) {
            p.writeUInt32BE(b, t.length);
            for (var m = o.run(p, o.ipad1), y = m, x = 1; x < n; x++) {
                y = o.run(y, o.ipad2);
                for (var w = 0; w < v; w++) m[w] ^= y[w]
            }
            m.copy(d, h), h += v
        }
        return d
    }
}
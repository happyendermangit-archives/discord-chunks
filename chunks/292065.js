function(e, t, n) {
    n("854508");
    var r = n("912065").Buffer;
    t.encrypt = function(e, t, n) {
        for (var i = t.length, o = r.allocUnsafe(i), s = -1; ++s < i;) o[s] = function(e, t, n) {
            for (var i, o, s, a = -1, c = 0; ++a < 8;) i = e._cipher.encryptBlock(e._prev), o = t & 1 << 7 - a ? 128 : 0, c += (128 & (s = i[0] ^ o)) >> a % 8, e._prev = function(e, t) {
                var n = e.length,
                    i = -1,
                    o = r.allocUnsafe(e.length);
                for (e = r.concat([e, r.from([t])]); ++i < n;) o[i] = e[i] << 1 | e[i + 1] >> 7;
                return o
            }(e._prev, n ? o : s);
            return c
        }(e, t[s], n);
        return o
    }
}
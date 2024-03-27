function(e, t, n) {
    var r = n("957578").Buffer;
    t.encrypt = function(e, t, n) {
        for (var i = t.length, a = r.allocUnsafe(i), o = -1; ++o < i;) a[o] = function(e, t, n) {
            for (var i, a, o, s = -1, u = 0; ++s < 8;) i = e._cipher.encryptBlock(e._prev), a = t & 1 << 7 - s ? 128 : 0, u += (128 & (o = i[0] ^ a)) >> s % 8, e._prev = function(e, t) {
                var n = e.length,
                    i = -1,
                    a = r.allocUnsafe(e.length);
                for (e = r.concat([e, r.from([t])]); ++i < n;) a[i] = e[i] << 1 | e[i + 1] >> 7;
                return a
            }(e._prev, n ? a : o);
            return u
        }(e, t[o], n);
        return a
    }
}
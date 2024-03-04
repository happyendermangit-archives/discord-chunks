function(e, t, n) {
    n("854508");
    var r = n("687185"),
        i = n("912065").Buffer,
        o = n("135042");
    t.encrypt = function(e, t) {
        var n = Math.ceil(t.length / 16),
            s = e._cache.length;
        e._cache = i.concat([e._cache, i.allocUnsafe(16 * n)]);
        for (var a = 0; a < n; a++) {
            var c = function(e) {
                    var t = e._cipher.encryptBlockRaw(e._prev);
                    return o(e._prev), t
                }(e),
                u = s + 16 * a;
            e._cache.writeUInt32BE(c[0], u + 0), e._cache.writeUInt32BE(c[1], u + 4), e._cache.writeUInt32BE(c[2], u + 8), e._cache.writeUInt32BE(c[3], u + 12)
        }
        var d = e._cache.slice(0, t.length);
        return e._cache = e._cache.slice(t.length), r(t, d)
    }
}
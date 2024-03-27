function(e, t, n) {
    var r = n("257693"),
        i = n("957578").Buffer,
        a = n("875115");
    t.encrypt = function(e, t) {
        var n = Math.ceil(t.length / 16),
            o = e._cache.length;
        e._cache = i.concat([e._cache, i.allocUnsafe(16 * n)]);
        for (var s = 0; s < n; s++) {
            var u = function(e) {
                    var t = e._cipher.encryptBlockRaw(e._prev);
                    return a(e._prev), t
                }(e),
                c = o + 16 * s;
            e._cache.writeUInt32BE(u[0], c + 0), e._cache.writeUInt32BE(u[1], c + 4), e._cache.writeUInt32BE(u[2], c + 8), e._cache.writeUInt32BE(u[3], c + 12)
        }
        var l = e._cache.slice(0, t.length);
        return e._cache = e._cache.slice(t.length), r(t, l)
    }
}
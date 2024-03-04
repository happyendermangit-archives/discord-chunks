function(e, t, n) {
    n("854508");
    var r = n("912065").Buffer,
        i = n("687185");

    function o(e, t, n) {
        var o = t.length,
            s = i(t, e._cache);
        return e._cache = e._cache.slice(o), e._prev = r.concat([e._prev, n ? t : s]), s
    }
    t.encrypt = function(e, t, n) {
        for (var i, s = r.allocUnsafe(0); t.length;)
            if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = r.allocUnsafe(0)), e._cache.length <= t.length) i = e._cache.length, s = r.concat([s, o(e, t.slice(0, i), n)]), t = t.slice(i);
            else {
                s = r.concat([s, o(e, t, n)]);
                break
            } return s
    }
}
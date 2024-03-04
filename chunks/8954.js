function(e, t, n) {
    var r = n("446825").Buffer;
    n("854508");
    var i = n("687185");
    t.encrypt = function(e, t) {
        for (; e._cache.length < t.length;) {
            var n;
            e._cache = r.concat([e._cache, ((n = e)._prev = n._cipher.encryptBlock(n._prev), n._prev)])
        }
        var o = e._cache.slice(0, t.length);
        return e._cache = e._cache.slice(t.length), i(t, o)
    }
}
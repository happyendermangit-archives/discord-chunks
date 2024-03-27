function(e, t, n) {
    var r = n("413135").Buffer,
        i = n("257693");
    t.encrypt = function(e, t) {
        for (; e._cache.length < t.length;) {
            var n;
            e._cache = r.concat([e._cache, ((n = e)._prev = n._cipher.encryptBlock(n._prev), n._prev)])
        }
        var a = e._cache.slice(0, t.length);
        return e._cache = e._cache.slice(t.length), i(t, a)
    }
}
function(t, e, s) {
    var r = s("446825").Buffer;
    s("854508");
    var i = s("687185");
    e.encrypt = function(t, e) {
        for (; t._cache.length < e.length;) {
            var s;
            t._cache = r.concat([t._cache, ((s = t)._prev = s._cipher.encryptBlock(s._prev), s._prev)])
        }
        var n = t._cache.slice(0, e.length);
        return t._cache = t._cache.slice(e.length), i(e, n)
    }
}
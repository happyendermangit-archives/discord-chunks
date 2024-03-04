function(e, t, n) {
    n("854508");
    var r = n("912065").Buffer;
    t.encrypt = function(e, t, n) {
        for (var i = t.length, o = r.allocUnsafe(i), s = -1; ++s < i;) o[s] = function(e, t, n) {
            var i = e._cipher.encryptBlock(e._prev)[0] ^ t;
            return e._prev = r.concat([e._prev.slice(1), r.from([n ? t : i])]), i
        }(e, t[s], n);
        return o
    }
}
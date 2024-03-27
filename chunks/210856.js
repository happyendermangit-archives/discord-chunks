function(e, t, n) {
    var r = n("957578").Buffer;
    t.encrypt = function(e, t, n) {
        for (var i = t.length, a = r.allocUnsafe(i), o = -1; ++o < i;) a[o] = function(e, t, n) {
            var i = e._cipher.encryptBlock(e._prev)[0] ^ t;
            return e._prev = r.concat([e._prev.slice(1), r.from([n ? t : i])]), i
        }(e, t[o], n);
        return a
    }
}
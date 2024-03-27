function(e, t, n) {
    var r = n("108381"),
        i = n("957578").Buffer;
    e.exports = function(e, t) {
        for (var n, a = i.alloc(0), o = 0; a.length < t;) n = function(e) {
            var t = i.allocUnsafe(4);
            return t.writeUInt32BE(e, 0), t
        }(o++), a = i.concat([a, r("sha1").update(e).update(n).digest()]);
        return a.slice(0, t)
    }
}
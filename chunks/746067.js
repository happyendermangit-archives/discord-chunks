function(e, t, n) {
    var r = n("488274"),
        i = n("912065").Buffer;
    e.exports = function(e, t) {
        for (var n, o = i.alloc(0), s = 0; o.length < t;) n = function(e) {
            var t = i.allocUnsafe(4);
            return t.writeUInt32BE(e, 0), t
        }(s++), o = i.concat([o, r("sha1").update(e).update(n).digest()]);
        return o.slice(0, t)
    }
}
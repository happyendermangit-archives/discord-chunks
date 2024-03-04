function(e, t, n) {
    n("70102");
    var r = n("912065").Buffer,
        i = n("708893");
    e.exports = function(e, t, n, o) {
        if (!r.isBuffer(e) && (e = r.from(e, "binary")), t && (!r.isBuffer(t) && (t = r.from(t, "binary")), 8 !== t.length)) throw RangeError("salt should be Buffer with 8 byte length");
        for (var s = n / 8, a = r.alloc(s), c = r.alloc(o || 0), u = r.alloc(0); s > 0 || o > 0;) {
            var d = new i;
            d.update(u), d.update(e), t && d.update(t), u = d.digest();
            var l = 0;
            if (s > 0) {
                var f = a.length - s;
                l = Math.min(s, u.length), u.copy(a, f, 0, l), s -= l
            }
            if (l < u.length && o > 0) {
                var p = c.length - o,
                    h = Math.min(o, u.length - l);
                u.copy(c, p, l, l + h), o -= h
            }
        }
        return u.fill(0), {
            key: a,
            iv: c
        }
    }
}
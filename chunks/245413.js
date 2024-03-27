function(e, t, n) {
    var r = n("957578").Buffer,
        i = n("292735");
    e.exports = function(e, t, n, a) {
        if (!r.isBuffer(e) && (e = r.from(e, "binary")), t && (!r.isBuffer(t) && (t = r.from(t, "binary")), 8 !== t.length)) throw RangeError("salt should be Buffer with 8 byte length");
        for (var o = n / 8, s = r.alloc(o), u = r.alloc(a || 0), c = r.alloc(0); o > 0 || a > 0;) {
            var l = new i;
            l.update(c), l.update(e), t && l.update(t), c = l.digest();
            var d = 0;
            if (o > 0) {
                var f = s.length - o;
                d = Math.min(o, c.length), c.copy(s, f, 0, d), o -= d
            }
            if (d < c.length && a > 0) {
                var p = u.length - a,
                    h = Math.min(a, c.length - d);
                c.copy(u, p, d, d + h), a -= h
            }
        }
        return c.fill(0), {
            key: s,
            iv: u
        }
    }
}
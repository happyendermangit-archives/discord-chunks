function(e, t, n) {
    var r = n("56135"),
        i = n("888968"),
        a = n("649786"),
        o = n("718332"),
        s = n("320114"),
        u = n("82075"),
        c = r ? r.prototype : void 0,
        l = c ? c.valueOf : void 0;
    e.exports = function(e, t, n, r, c, d, f) {
        switch (n) {
            case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                e = e.buffer, t = t.buffer;
            case "[object ArrayBuffer]":
                if (e.byteLength != t.byteLength || !d(new i(e), new i(t))) break;
                return !0;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return a(+e, +t);
            case "[object Error]":
                return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
                return e == t + "";
            case "[object Map]":
                var p = s;
            case "[object Set]":
                var h = 1 & r;
                if (p || (p = u), e.size != t.size && !h) break;
                var m = f.get(e);
                if (m) return m == t;
                r |= 2, f.set(e, t);
                var g = o(p(e), p(t), r, c, d, f);
                return f.delete(e), g;
            case "[object Symbol]":
                if (l) return l.call(e) == l.call(t)
        }
        return !1
    }
}
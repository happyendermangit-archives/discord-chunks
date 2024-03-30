function(t, e, n) {
    var r = n("466293"),
        i = n("139069"),
        a = n("703284"),
        o = n("501979"),
        s = n("98368"),
        u = n("433005"),
        l = r ? r.prototype : void 0,
        c = l ? l.valueOf : void 0;
    t.exports = function(t, e, n, r, l, d, f) {
        switch (n) {
            case "[object DataView]":
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
                t = t.buffer, e = e.buffer;
            case "[object ArrayBuffer]":
                if (t.byteLength != e.byteLength || !d(new i(t), new i(e))) break;
                return !0;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return a(+t, +e);
            case "[object Error]":
                return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
                return t == e + "";
            case "[object Map]":
                var p = s;
            case "[object Set]":
                var h = 1 & r;
                if (p || (p = u), t.size != e.size && !h) break;
                var _ = f.get(t);
                if (_) return _ == e;
                r |= 2, f.set(t, e);
                var g = o(p(t), p(e), r, l, d, f);
                return f.delete(t), g;
            case "[object Symbol]":
                if (c) return c.call(t) == c.call(e)
        }
        return !1
    }
}
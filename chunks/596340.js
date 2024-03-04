function(e, t, n) {
    n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var Symbol = n("330206"),
        Uint8Array = n("474211"),
        r = n("561662"),
        i = n("556459"),
        o = n("218282"),
        s = n("531217"),
        a = Symbol ? Symbol.prototype : void 0,
        c = a ? a.valueOf : void 0;
    e.exports = function(e, t, n, a, u, d, l) {
        switch (n) {
            case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                e = e.buffer, t = t.buffer;
            case "[object ArrayBuffer]":
                if (e.byteLength != t.byteLength || !d(new Uint8Array(e), new Uint8Array(t))) break;
                return !0;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return r(+e, +t);
            case "[object Error]":
                return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
                return e == t + "";
            case "[object Map]":
                var f = o;
            case "[object Set]":
                var p = 1 & a;
                if (f || (f = s), e.size != t.size && !p) break;
                var h = l.get(e);
                if (h) return h == t;
                a |= 2, l.set(e, t);
                var v = i(f(e), f(t), a, u, d, l);
                return l.delete(e), v;
            case "[object Symbol]":
                if (c) return c.call(e) == c.call(t)
        }
        return !1
    }
}
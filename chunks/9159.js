function(t, r, e) {
    e("311790"), e("477657"), e("811875"), e("90301"), e("652153"), e("28797"), e("817884"), e("597349"), e("667536"), e("690341");
    var Symbol = e("506264"),
        Uint8Array = e("619462"),
        n = e("921563"),
        o = e("106985"),
        i = e("678531"),
        a = e("418578"),
        u = Symbol ? Symbol.prototype : void 0,
        s = u ? u.valueOf : void 0;
    t.exports = function(t, r, e, u, f, c, l) {
        switch (e) {
            case "[object DataView]":
                if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) break;
                t = t.buffer, r = r.buffer;
            case "[object ArrayBuffer]":
                if (t.byteLength != r.byteLength || !c(new Uint8Array(t), new Uint8Array(r))) break;
                return !0;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return n(+t, +r);
            case "[object Error]":
                return t.name == r.name && t.message == r.message;
            case "[object RegExp]":
            case "[object String]":
                return t == r + "";
            case "[object Map]":
                var h = i;
            case "[object Set]":
                var p = 1 & u;
                if (h || (h = a), t.size != r.size && !p) break;
                var v = l.get(t);
                if (v) return v == r;
                u |= 2, l.set(t, r);
                var d = o(h(t), h(r), u, f, c, l);
                return l.delete(t), d;
            case "[object Symbol]":
                if (s) return s.call(t) == s.call(r)
        }
        return !1
    }
}
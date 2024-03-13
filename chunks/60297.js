function(t, r, e) {
    var Symbol = e("506264"),
        n = e("754892"),
        o = e("19797"),
        i = Symbol ? Symbol.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : i && i in Object(t) ? n(t) : o(t)
    }
}
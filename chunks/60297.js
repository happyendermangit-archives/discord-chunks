function(e, t, r) {
    var Symbol = r("506264"),
        n = r("754892"),
        u = r("19797"),
        a = Symbol ? Symbol.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? n(e) : u(e)
    }
}
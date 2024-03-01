function(t, e, n) {
    var Symbol = n("330206"),
        r = n("447245"),
        i = n("677201"),
        o = Symbol ? Symbol.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? r(t) : i(t)
    }
}
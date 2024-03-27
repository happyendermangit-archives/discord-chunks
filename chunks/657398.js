function(t, e, n) {
    var r = n("466293"),
        i = n("146945"),
        a = n("251584"),
        o = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? i(t) : a(t)
    }
}
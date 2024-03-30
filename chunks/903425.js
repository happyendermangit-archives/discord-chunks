function(e, t, n) {
    var r = n("56135"),
        i = n("440693"),
        a = n("766598"),
        o = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? i(e) : a(e)
    }
}
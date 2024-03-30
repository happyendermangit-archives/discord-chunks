function(t, e, r) {
    var n = r("56135"),
        i = r("440693"),
        o = r("766598"),
        u = n ? n.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : u && u in Object(t) ? i(t) : o(t)
    }
}
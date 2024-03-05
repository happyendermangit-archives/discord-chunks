function(e, t, r) {
    e = r.nmd(e);
    var n = r("690516"),
        u = "object" == typeof t && t && !t.nodeType && t,
        a = u && "object" == typeof e && e && !e.nodeType && e,
        o = a && a.exports === u ? n.Buffer : void 0,
        i = o ? o.allocUnsafe : void 0;
    e.exports = function(e, t) {
        if (t) return e.slice();
        var r = e.length,
            n = i ? i(r) : new e.constructor(r);
        return e.copy(n), n
    }
}
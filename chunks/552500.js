function(e, t, r) {
    e = r.nmd(e);
    var n = r("690516"),
        i = "object" == typeof t && t && !t.nodeType && t,
        o = i && "object" == typeof e && e && !e.nodeType && e,
        a = o && o.exports === i ? n.Buffer : void 0,
        u = a ? a.allocUnsafe : void 0;
    e.exports = function(e, t) {
        if (t) return e.slice();
        var r = e.length,
            n = u ? u(r) : new e.constructor(r);
        return e.copy(n), n
    }
}
function(e, t, n) {
    e = n.nmd(e);
    var r = n("626849"),
        i = "object" == typeof t && t && !t.nodeType && t,
        o = i && "object" == typeof e && e && !e.nodeType && e,
        s = o && o.exports === i ? r.Buffer : void 0,
        a = s ? s.allocUnsafe : void 0;
    e.exports = function(e, t) {
        if (t) return e.slice();
        var n = e.length,
            r = a ? a(n) : new e.constructor(n);
        return e.copy(r), r
    }
}
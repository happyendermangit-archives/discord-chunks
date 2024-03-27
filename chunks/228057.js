function(e, t, n) {
    e = n.nmd(e);
    var r = n("573401"),
        i = "object" == typeof t && t && !t.nodeType && t,
        a = i && e && !e.nodeType && e,
        o = a && a.exports === i ? r.Buffer : void 0,
        s = o ? o.allocUnsafe : void 0;
    e.exports = function(e, t) {
        if (t) return e.slice();
        var n = e.length,
            r = s ? s(n) : new e.constructor(n);
        return e.copy(r), r
    }
}
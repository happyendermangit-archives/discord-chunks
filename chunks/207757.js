function(t, e, n) {
    t = n.nmd(t);
    var r = n("573401"),
        i = n("88553"),
        a = "object" == typeof e && e && !e.nodeType && e,
        o = a && t && !t.nodeType && t,
        s = o && o.exports === a ? r.Buffer : void 0,
        u = s ? s.isBuffer : void 0;
    t.exports = u || i
}
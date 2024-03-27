function(e, t, n) {
    e = n.nmd(e);
    var r = n("325237"),
        i = n("218466"),
        a = "object" == typeof t && t && !t.nodeType && t,
        o = a && e && !e.nodeType && e,
        s = o && o.exports === a ? r.Buffer : void 0,
        u = s ? s.isBuffer : void 0;
    e.exports = u || i
}
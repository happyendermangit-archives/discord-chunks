function(e, t, n) {
    e = n.nmd(e);
    var r = n("690516"),
        i = n("221386"),
        o = "object" == typeof t && t && !t.nodeType && t,
        s = o && "object" == typeof e && e && !e.nodeType && e,
        a = s && s.exports === o ? r.Buffer : void 0,
        c = a ? a.isBuffer : void 0;
    e.exports = c || i
}
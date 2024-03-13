function(t, r, e) {
    t = e.nmd(t);
    var n = e("626849"),
        o = e("406712"),
        i = "object" == typeof r && r && !r.nodeType && r,
        a = i && "object" == typeof t && t && !t.nodeType && t,
        u = a && a.exports === i ? n.Buffer : void 0,
        s = u ? u.isBuffer : void 0;
    t.exports = s || o
}
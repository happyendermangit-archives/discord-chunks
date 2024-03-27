function(t, e, n) {
    var r = n("497549"),
        i = n("700728"),
        a = n("98958"),
        o = n("402428"),
        s = n("691363");
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? o(t) ? i(t[0], t[1]) : r(t) : s(t)
    }
}
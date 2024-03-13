function(t, r, e) {
    var n = e("210458"),
        o = e("720269"),
        i = e("67034"),
        a = e("486036"),
        u = e("161456");
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? a(t) ? o(t[0], t[1]) : n(t) : u(t)
    }
}
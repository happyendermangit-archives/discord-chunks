function(e, t, n) {
    var r = n("345983"),
        i = n("392147"),
        o = n("540893"),
        s = n("725502"),
        a = n("451351");
    e.exports = function(e) {
        return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? s(e) ? i(e[0], e[1]) : r(e) : a(e)
    }
}
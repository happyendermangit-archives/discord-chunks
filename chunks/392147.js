function(e, t, n) {
    var r = n("354069"),
        i = n("990873"),
        o = n("148946"),
        s = n("812411"),
        a = n("888633"),
        c = n("260739"),
        u = n("754076");
    e.exports = function(e, t) {
        return s(e) && a(t) ? c(u(e), t) : function(n) {
            var s = i(n, e);
            return void 0 === s && s === t ? o(n, e) : r(t, s, 3)
        }
    }
}
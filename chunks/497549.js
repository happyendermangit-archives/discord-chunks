function(t, e, n) {
    var r = n("46166"),
        i = n("107378"),
        a = n("849513");
    t.exports = function(t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function(n) {
            return n === t || r(n, t, e)
        }
    }
}
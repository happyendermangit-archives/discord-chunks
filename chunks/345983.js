function(e, t, n) {
    var r = n("855865"),
        i = n("258423"),
        o = n("260739");
    e.exports = function(e) {
        var t = i(e);
        return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(n) {
            return n === e || r(n, e, t)
        }
    }
}
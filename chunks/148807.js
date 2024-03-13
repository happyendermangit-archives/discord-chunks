function(t, r, e) {
    var n = e("501870"),
        o = 1 / 0;
    t.exports = function(t) {
        if ("string" == typeof t || n(t)) return t;
        var r = t + "";
        return "0" == r && 1 / t == -o ? "-0" : r
    }
}
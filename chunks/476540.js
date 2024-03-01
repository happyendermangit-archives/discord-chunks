function(e, t, n) {
    var r = /^(?:0|[1-9]\d*)$/;
    e.exports = function(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}
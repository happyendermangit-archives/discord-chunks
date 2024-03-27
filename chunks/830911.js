function(t) {
    var e = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, n) {
        var r = typeof t;
        return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && e.test(t)) && t > -1 && t % 1 == 0 && t < n
    }
}
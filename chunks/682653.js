function(e) {
    var t = /^(?:0|[1-9]\d*)$/;
    e.exports = function(e, n) {
        var r = typeof e;
        return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && t.test(e)) && e > -1 && e % 1 == 0 && e < n
    }
}
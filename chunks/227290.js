function(t, r, e) {
    var n = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, r) {
        var e = typeof t;
        return !!(r = null == r ? 9007199254740991 : r) && ("number" == e || "symbol" != e && n.test(t)) && t > -1 && t % 1 == 0 && t < r
    }
}
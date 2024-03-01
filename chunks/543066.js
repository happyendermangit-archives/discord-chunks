function(e, t, r) {
    var n = r("60297"),
        i = r("346173");
    e.exports = function(e) {
        return "symbol" == typeof e || i(e) && "[object Symbol]" == n(e)
    }
}
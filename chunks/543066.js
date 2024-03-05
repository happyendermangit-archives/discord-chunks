function(e, t, r) {
    var n = r("60297"),
        u = r("346173");
    e.exports = function(e) {
        return "symbol" == typeof e || u(e) && "[object Symbol]" == n(e)
    }
}
function(t, e, r) {
    var n = r("903425"),
        i = r("533206");
    t.exports = function(t) {
        return "symbol" == typeof t || i(t) && "[object Symbol]" == n(t)
    }
}
function(e, t, n) {
    var r = n("903425"),
        i = n("533206");
    e.exports = function(e) {
        return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e)
    }
}
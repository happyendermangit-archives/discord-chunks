function(t, r, e) {
    var n = e("60297"),
        o = e("346173");
    t.exports = function(t) {
        return "symbol" == typeof t || o(t) && "[object Symbol]" == n(t)
    }
}
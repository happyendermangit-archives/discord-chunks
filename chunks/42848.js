function(t, e, n) {
    var r = n("657398"),
        i = n("389109");
    t.exports = function(t) {
        return "symbol" == typeof t || i(t) && "[object Symbol]" == r(t)
    }
}
function(e, t, n) {
    e.exports = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
}
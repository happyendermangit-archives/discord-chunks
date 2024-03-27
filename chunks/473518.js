function(t) {
    t.exports = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}
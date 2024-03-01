function(t, r, n) {
    t.exports = function(t) {
        return function(r) {
            return t(r)
        }
    }
}
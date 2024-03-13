function(t, r, e) {
    t.exports = function(t, r) {
        return function(e) {
            return t(r(e))
        }
    }
}
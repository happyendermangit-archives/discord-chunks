function(t, r, n) {
    t.exports = function(t) {
        return function(r) {
            return null == r ? void 0 : r[t]
        }
    }
}
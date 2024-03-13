function(t, r, e) {
    t.exports = function(t, r) {
        return function(e) {
            return null != e && e[t] === r && (void 0 !== r || t in Object(e))
        }
    }
}
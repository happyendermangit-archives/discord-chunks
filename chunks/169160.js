function(t, r, n) {
    t.exports = function(t) {
        var r = this.has(t) && delete this.__data__[t];
        return this.size -= r ? 1 : 0, r
    }
}
function(t, r, e) {
    t.exports = function(t) {
        var r = this.__data__,
            e = r.delete(t);
        return this.size = r.size, e
    }
}
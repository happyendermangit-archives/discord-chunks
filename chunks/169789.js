function(t, r, n) {
    var e = n("74590");
    t.exports = function(t) {
        var r = e(this, t).delete(t);
        return this.size -= r ? 1 : 0, r
    }
}
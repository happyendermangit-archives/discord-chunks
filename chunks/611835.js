function(t, r, e) {
    var n = e("19572");
    t.exports = function(t) {
        var r = n(this, t).delete(t);
        return this.size -= r ? 1 : 0, r
    }
}
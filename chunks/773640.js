function(t, r, e) {
    var n = e("19572");
    t.exports = function(t, r) {
        var e = n(this, t),
            o = e.size;
        return e.set(t, r), this.size += e.size == o ? 0 : 1, this
    }
}
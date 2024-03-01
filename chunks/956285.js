function(t, r, n) {
    n("424973");
    var e = n("523119");
    t.exports = function(t, r) {
        var n = this.__data__,
            o = e(n, t);
        return o < 0 ? (++this.size, n.push([t, r])) : n[o][1] = r, this
    }
}
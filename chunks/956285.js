function(e, t, n) {
    n("424973");
    var r = n("523119");
    e.exports = function(e, t) {
        var n = this.__data__,
            i = r(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
    }
}
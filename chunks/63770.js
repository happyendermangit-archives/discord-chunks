function(t, r, e) {
    e("424973");
    var n = e("637613");
    t.exports = function(t, r) {
        var e = this.__data__,
            o = n(e, t);
        return o < 0 ? (++this.size, e.push([t, r])) : e[o][1] = r, this
    }
}
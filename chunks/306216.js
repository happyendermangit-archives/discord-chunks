function(e, t, n) {
    var r = n("346391");
    e.exports = function(e, t) {
        var n = r(this, e),
            i = n.size;
        return n.set(e, t), this.size += n.size == i ? 0 : 1, this
    }
}
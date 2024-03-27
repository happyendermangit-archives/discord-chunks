function(t, e, n) {
    var r = n("815869"),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, !0)
    }
}
function(t, r, n) {
    var e = n("523119"),
        o = Array.prototype.splice;
    t.exports = function(t) {
        var r = this.__data__,
            n = e(r, t);
        return !(n < 0) && (n == r.length - 1 ? r.pop() : o.call(r, n, 1), --this.size, !0)
    }
}
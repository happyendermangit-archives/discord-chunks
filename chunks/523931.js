function(t, r, e) {
    var n = e("637613"),
        o = Array.prototype.splice;
    t.exports = function(t) {
        var r = this.__data__,
            e = n(r, t);
        return !(e < 0) && (e == r.length - 1 ? r.pop() : o.call(r, e, 1), --this.size, !0)
    }
}
function(t, e, n) {
    var r = n("900624"),
        i = n("117973"),
        a = n("302767");
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var o = n.__data__;
            if (!i || o.length < 199) return o.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new a(o)
        }
        return n.set(t, e), this.size = n.size, this
    }
}
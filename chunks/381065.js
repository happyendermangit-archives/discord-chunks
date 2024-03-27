function(e, t, n) {
    var r = n("710170"),
        i = n("481062"),
        a = n("660326");
    e.exports = function(e, t) {
        var n = this.__data__;
        if (n instanceof r) {
            var o = n.__data__;
            if (!i || o.length < 199) return o.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new a(o)
        }
        return n.set(e, t), this.size = n.size, this
    }
}
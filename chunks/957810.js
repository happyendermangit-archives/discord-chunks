function(e, t, n) {
    n("222007"), n("424973");
    var r = n("263470"),
        Map = n("516863"),
        i = n("664007");
    e.exports = function(e, t) {
        var n = this.__data__;
        if (n instanceof r) {
            var o = n.__data__;
            if (!Map || o.length < 199) return o.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new i(o)
        }
        return n.set(e, t), this.size = n.size, this
    }
}
function(t, r, e) {
    e("222007"), e("424973");
    var n = e("927126"),
        Map = e("316923"),
        o = e("933625");
    t.exports = function(t, r) {
        var e = this.__data__;
        if (e instanceof n) {
            var i = e.__data__;
            if (!Map || i.length < 199) return i.push([t, r]), this.size = ++e.size, this;
            e = this.__data__ = new o(i)
        }
        return e.set(t, r), this.size = e.size, this
    }
}
function(t, r, e) {
    var n = e("672197"),
        o = e("523931"),
        i = e("123130"),
        a = e("561583"),
        u = e("63770");

    function s(t) {
        var r = -1,
            e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
            var n = t[r];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = u, t.exports = s
}
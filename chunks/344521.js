function(t, r, e) {
    e("424973");
    var n = e("772205"),
        o = e("971433"),
        i = e("486036"),
        a = e("474710"),
        u = e("227290"),
        s = e("965779"),
        f = Object.prototype.hasOwnProperty;
    t.exports = function(t, r) {
        var e = i(t),
            c = !e && o(t),
            l = !e && !c && a(t),
            h = !e && !c && !l && s(t),
            p = e || c || l || h,
            v = p ? n(t.length, String) : [],
            d = v.length;
        for (var g in t)(r || f.call(t, g)) && !(p && ("length" == g || l && ("offset" == g || "parent" == g) || h && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, d))) && v.push(g);
        return v
    }
}
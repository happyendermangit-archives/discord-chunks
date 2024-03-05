function(e, t, r) {
    var n = r("253792"),
        u = r("766665");
    e.exports = function(e, t, r, a) {
        var o = !r;
        r || (r = {});
        for (var i = -1, s = t.length; ++i < s;) {
            var l = t[i],
                c = a ? a(r[l], e[l], l, r, e) : void 0;
            void 0 === c && (c = e[l]), o ? u(r, l, c) : n(r, l, c)
        }
        return r
    }
}
function(e, t, r) {
    var n = r("253792"),
        i = r("766665");
    e.exports = function(e, t, r, o) {
        var a = !r;
        r || (r = {});
        for (var u = -1, s = t.length; ++u < s;) {
            var l = t[u],
                c = o ? o(r[l], e[l], l, r, e) : void 0;
            void 0 === c && (c = e[l]), a ? i(r, l, c) : n(r, l, c)
        }
        return r
    }
}
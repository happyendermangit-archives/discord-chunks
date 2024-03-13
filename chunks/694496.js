function(t, r, e) {
    var n = e("856421"),
        o = e("436335");
    t.exports = function(t) {
        for (var r = o(t), e = r.length; e--;) {
            var i = r[e],
                a = t[i];
            r[e] = [i, a, n(a)]
        }
        return r
    }
}
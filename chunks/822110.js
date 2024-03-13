function(t, r, e) {
    t.exports = function(t) {
        return function(r, e, n) {
            for (var o = -1, i = Object(r), a = n(r), u = a.length; u--;) {
                var s = a[t ? u : ++o];
                if (!1 === e(i[s], s, i)) break
            }
            return r
        }
    }
}
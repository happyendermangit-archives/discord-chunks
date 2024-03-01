function(t, r, n) {
    t.exports = function(t) {
        return function(r, n, e) {
            for (var o = -1, i = Object(r), u = e(r), c = u.length; c--;) {
                var a = u[t ? c : ++o];
                if (!1 === n(i[a], a, i)) break
            }
            return r
        }
    }
}
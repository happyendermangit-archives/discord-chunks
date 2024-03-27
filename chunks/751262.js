function(e) {
    e.exports = function(e) {
        return function(t, n, r) {
            for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
                var u = o[e ? s : ++i];
                if (!1 === n(a[u], u, a)) break
            }
            return t
        }
    }
}
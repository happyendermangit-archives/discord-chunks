function(t) {
    t.exports = function(t) {
        return function(e, n, r) {
            for (var i = -1, a = Object(e), o = r(e), s = o.length; s--;) {
                var u = o[t ? s : ++i];
                if (!1 === n(a[u], u, a)) break
            }
            return e
        }
    }
}
function(e, t, n) {
    e.exports = function(e) {
        return function(t, n, r) {
            for (var i = -1, o = Object(t), s = r(t), a = s.length; a--;) {
                var c = s[e ? a : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return t
        }
    }
}
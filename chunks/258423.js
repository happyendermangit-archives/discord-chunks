function(e, t, n) {
    var r = n("888633"),
        i = n("466731");
    e.exports = function(e) {
        for (var t = i(e), n = t.length; n--;) {
            var o = t[n],
                s = e[o];
            t[n] = [o, s, r(s)]
        }
        return t
    }
}
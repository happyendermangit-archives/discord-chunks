function(t, e, n) {
    var r = n("92801"),
        i = n("58834");
    t.exports = function(t) {
        for (var e = i(t), n = e.length; n--;) {
            var a = e[n],
                o = t[a];
            e[n] = [a, o, r(o)]
        }
        return e
    }
}
function(e, t, n) {
    var r = n("626785"),
        i = n("698273"),
        o = n("583048"),
        s = n("854060"),
        a = n("492692"),
        c = n("558304"),
        u = n("540893");
    e.exports = function(e, t, n) {
        var d = -1;
        return t = r(t.length ? t : [u], a(i)), s(o(e, function(e, n, i) {
            return {
                criteria: r(t, function(t) {
                    return t(e)
                }),
                index: ++d,
                value: e
            }
        }), function(e, t) {
            return c(e, t, n)
        })
    }
}
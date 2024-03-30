function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("512722"),
        o = n.n(r);

    function i(e, t) {
        if (o()(e.length >= t, "Waveform smaller than samples"), e.length === t) return e;
        for (var n = e.length / t, r = [], i = 0; r.length < t;) {
            for (var a = Math.round((r.length + 1) * n), u = 0, s = 0, l = i; l < a && l < e.length; l++) u += e[l], s++;
            r[r.length] = u / s, i = a
        }
        return r
    }
}
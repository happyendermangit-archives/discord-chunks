function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("627445"),
        i = n.n(l);

    function a(e, t) {
        if (i(e.length >= t, "Waveform smaller than samples"), e.length === t) return e;
        let n = e.length / t,
            l = [],
            a = 0;
        for (; l.length < t;) {
            let t = Math.round((l.length + 1) * n),
                i = 0,
                s = 0;
            for (let n = a; n < t && n < e.length; n++) i += e[n], s++;
            l[l.length] = i / s, a = t
        }
        return l
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("512722"),
        r = n.n(i);

    function s(e, t) {
        if (r()(e.length >= t, "Waveform smaller than samples"), e.length === t) return e;
        let n = e.length / t,
            i = [],
            s = 0;
        for (; i.length < t;) {
            let t = Math.round((i.length + 1) * n),
                r = 0,
                a = 0;
            for (let n = s; n < t && n < e.length; n++) r += e[n], a++;
            i[i.length] = r / a, s = t
        }
        return i
    }
}
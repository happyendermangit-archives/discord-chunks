function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("627445"),
        l = n.n(i);

    function a(e, t) {
        if (l(e.length >= t, "Waveform smaller than samples"), e.length === t) return e;
        let n = e.length / t,
            i = [],
            a = 0;
        for (; i.length < t;) {
            let t = Math.round((i.length + 1) * n),
                l = 0,
                s = 0;
            for (let n = a; n < t && n < e.length; n++) l += e[n], s++;
            i[i.length] = l / s, a = t
        }
        return i
    }
}
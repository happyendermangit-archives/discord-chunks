function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, {
        rebuildMonth: function() {
            return a
        }
    }), r("424973");
    var n = r("191899"),
        i = r("871111");

    function a(t, e, r, a, o, s) {
        var u = {
                lastyear: t,
                lastmonth: e,
                nwdaymask: []
            },
            d = [];
        if (s.freq === n.RRule.YEARLY) {
            if ((0, i.empty)(s.bymonth)) d = [
                [0, r]
            ];
            else
                for (var y = 0; y < s.bymonth.length; y++) e = s.bymonth[y], d.push(a.slice(e - 1, e + 1))
        } else s.freq === n.RRule.MONTHLY && (d = [a.slice(e - 1, e + 1)]);
        if ((0, i.empty)(d)) return u;
        u.nwdaymask = (0, i.repeat)(0, r);
        for (var y = 0; y < d.length; y++) {
            for (var c = d[y], h = c[0], l = c[1] - 1, f = 0; f < s.bynweekday.length; f++) {
                var p = void 0,
                    m = s.bynweekday[f],
                    b = m[0],
                    v = m[1];
                v < 0 ? (p = l + (v + 1) * 7, p -= (0, i.pymod)(o[p] - b, 7)) : (p = h + (v - 1) * 7, p += (0, i.pymod)(7 - o[p] + b, 7)), h <= p && p <= l && (u.nwdaymask[p] = 1)
            }
        }
        return u
    }
}
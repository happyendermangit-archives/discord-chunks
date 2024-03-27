function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        rebuildMonth: function() {
            return a
        }
    });
    var r = n("812975"),
        i = n("686942");

    function a(e, t, n, a, o, s) {
        var u = {
                lastyear: e,
                lastmonth: t,
                nwdaymask: []
            },
            c = [];
        if (s.freq === r.RRule.YEARLY) {
            if ((0, i.empty)(s.bymonth)) c = [
                [0, n]
            ];
            else
                for (var l = 0; l < s.bymonth.length; l++) t = s.bymonth[l], c.push(a.slice(t - 1, t + 1))
        } else s.freq === r.RRule.MONTHLY && (c = [a.slice(t - 1, t + 1)]);
        if ((0, i.empty)(c)) return u;
        u.nwdaymask = (0, i.repeat)(0, n);
        for (var l = 0; l < c.length; l++) {
            for (var d = c[l], f = d[0], p = d[1] - 1, h = 0; h < s.bynweekday.length; h++) {
                var m = void 0,
                    g = s.bynweekday[h],
                    _ = g[0],
                    b = g[1];
                b < 0 ? (m = p + (b + 1) * 7, m -= (0, i.pymod)(o[m] - _, 7)) : (m = f + (b - 1) * 7, m += (0, i.pymod)(7 - o[m] + _, 7)), f <= m && m <= p && (u.nwdaymask[m] = 1)
            }
        }
        return u
    }
}
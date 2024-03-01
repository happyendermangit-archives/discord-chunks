function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, {
        rebuildYear: function() {
            return s
        }
    });
    var n = r("676730"),
        i = r("737912"),
        a = r("871111"),
        o = r("636277");

    function s(t, e) {
        var r, s, u = (0, i.datetime)(t, 1, 1),
            d = (0, i.isLeapYear)(t) ? 366 : 365,
            y = (0, i.isLeapYear)(t + 1) ? 366 : 365,
            c = (0, i.toOrdinal)(u),
            h = (0, i.getWeekday)(u),
            l = (0, n.__assign)((0, n.__assign)({
                yearlen: d,
                nextyearlen: y,
                yearordinal: c,
                yearweekday: h
            }, function(t) {
                var e = (0, i.isLeapYear)(t) ? 366 : 365,
                    r = (0, i.datetime)(t, 1, 1),
                    n = (0, i.getWeekday)(r);
                return 365 === e ? {
                    mmask: o.M365MASK,
                    mdaymask: o.MDAY365MASK,
                    nmdaymask: o.NMDAY365MASK,
                    wdaymask: o.WDAYMASK.slice(n),
                    mrange: o.M365RANGE
                } : {
                    mmask: o.M366MASK,
                    mdaymask: o.MDAY366MASK,
                    nmdaymask: o.NMDAY366MASK,
                    wdaymask: o.WDAYMASK.slice(n),
                    mrange: o.M366RANGE
                }
            }(t)), {
                wnomask: null
            });
        if ((0, a.empty)(e.byweekno)) return l;
        l.wnomask = (0, a.repeat)(0, d + 7);
        var f = r = (0, a.pymod)(7 - h + e.wkst, 7);
        f >= 4 ? (f = 0, s = l.yearlen + (0, a.pymod)(h - e.wkst, 7)) : s = d - f;
        for (var p = Math.floor(Math.floor(s / 7) + (0, a.pymod)(s, 7) / 4), m = 0; m < e.byweekno.length; m++) {
            var b = e.byweekno[m];
            if (b < 0 && (b += p + 1), b > 0 && b <= p) {
                var v = void 0;
                b > 1 ? (v = f + (b - 1) * 7, f !== r && (v -= 7 - r)) : v = f;
                for (var w = 0; w < 7 && (l.wnomask[v] = 1, v++, l.wdaymask[v] !== e.wkst); w++);
            }
        }
        if ((0, a.includes)(e.byweekno, 1)) {
            var v = f + 7 * p;
            if (f !== r && (v -= 7 - r), v < d)
                for (var m = 0; m < 7 && (l.wnomask[v] = 1, v += 1, l.wdaymask[v] !== e.wkst); m++);
        }
        if (f) {
            var g = void 0;
            if ((0, a.includes)(e.byweekno, -1)) g = -1;
            else {
                var k = (0, i.getWeekday)((0, i.datetime)(t - 1, 1, 1)),
                    _ = (0, a.pymod)(7 - k.valueOf() + e.wkst, 7),
                    E = (0, i.isLeapYear)(t - 1) ? 366 : 365,
                    T = void 0;
                _ >= 4 ? (_ = 0, T = E + (0, a.pymod)(k - e.wkst, 7)) : T = d - f, g = Math.floor(52 + (0, a.pymod)(T, 7) / 4)
            }
            if ((0, a.includes)(e.byweekno, g))
                for (var v = 0; v < f; v++) l.wnomask[v] = 1
        }
        return l
    }
}
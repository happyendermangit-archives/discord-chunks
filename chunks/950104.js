function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        WCAGContrastRatios: function() {
            return s
        },
        getContrastingColor: function() {
            return a
        }
    }), n("47120"), n("411104");
    var i = n("688619"),
        r = n.n(i);
    let s = {
        NonText: 3,
        Text: 4.5,
        HighContrastText: 7
    };

    function a(e) {
        var t, n, i;
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = null !== (t = a.contrastRatio) && void 0 !== t ? t : s.NonText,
            l = null !== (n = a.tolerance) && void 0 !== n ? n : 3,
            u = r()(null !== (i = a.base) && void 0 !== i ? i : e),
            d = r()(e),
            _ = u.luminance(),
            c = d,
            E = o + l,
            I = r().contrast(u, d),
            T = 100;
        for (; T-- > 0;) {
            let e = I < o,
                t = I > E;
            if (!e && !t) break;
            let n = c.luminance() > _;
            c = t && n || e && !n ? c.darken() : c.brighten(), I = r().contrast(u, c)
        }
        return function(e) {
            let [t, n, i, r] = e.rgba();
            return "rgba(".concat(t, ", ").concat(n, ", ").concat(i, ", ").concat(r, ")")
        }(c)
    }
}
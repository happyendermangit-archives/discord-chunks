function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        WCAGContrastRatios: function() {
            return a
        },
        darkenColor: function() {
            return l
        },
        getContrastingColor: function() {
            return o
        }
    }), n("47120"), n("411104");
    var i = n("688619"),
        r = n.n(i);
    let a = {
        NonText: 3,
        Text: 4.5,
        HighContrastText: 7
    };

    function s(e) {
        let [t, n, i, r] = e.rgba();
        return "rgba(".concat(t, ", ").concat(n, ", ").concat(i, ", ").concat(r, ")")
    }

    function o(e) {
        var t, n, i;
        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = null !== (t = o.contrastRatio) && void 0 !== t ? t : a.NonText,
            u = null !== (n = o.tolerance) && void 0 !== n ? n : 3,
            d = r()(null !== (i = o.base) && void 0 !== i ? i : e),
            _ = r()(e),
            c = d.luminance(),
            E = _,
            I = l + u,
            T = r().contrast(d, _),
            f = 100;
        for (; f-- > 0;) {
            let e = T < l,
                t = T > I;
            if (!e && !t) break;
            let n = E.luminance() > c;
            E = t && n || e && !n ? E.darken() : E.brighten(), T = r().contrast(d, E)
        }
        return s(E)
    }

    function l(e, t) {
        return s(r()(e).darken(t))
    }
}
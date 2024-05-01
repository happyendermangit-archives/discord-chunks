function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getTransformedBadgeColors: function() {
            return s
        }
    });
    var i = n("688619"),
        r = n.n(i);

    function a(e, t, n) {
        if (!r().valid(t)) return e.map(() => "#000000");
        let i = r()(t),
            a = i.luminance();
        return e.map((e, t) => i.luminance((e * n[t].base + a * n[t].tint) / (n[t].base + n[t].tint)).hex())
    }

    function s(e) {
        let {
            primaryBaseColors: t,
            primaryTintColor: n,
            primaryTintLuminances: i,
            primaryLuminanceWeights: r,
            secondaryBaseColors: s,
            secondaryTintColor: o,
            secondaryTintLuminances: l,
            secondaryLuminanceWeights: u
        } = e, d = null != n ? a(i, n, r) : t, _ = [];
        return null != s && null != l && null != u && (_ = null != o ? a(l, o, u) : s), {
            primaryColorsTransformed: d,
            secondaryColorsTransformed: _
        }
    }
}
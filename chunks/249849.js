function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getTransformedBadgeColors: function() {
            return a
        }
    }), n("411104");
    var i = n("688619"),
        r = n.n(i);

    function s(e, t, n) {
        if (!r().valid(t)) throw Error("Invalid badge tint color ".concat(t));
        let i = r()(t),
            s = i.luminance();
        return e.map((e, t) => i.luminance((e * n[t].base + s * n[t].tint) / (n[t].base + n[t].tint)).hex())
    }

    function a(e) {
        let {
            primaryBaseColors: t,
            primaryTintColor: n,
            primaryTintLuminances: i,
            primaryLuminanceWeights: r,
            secondaryBaseColors: a,
            secondaryTintColor: o,
            secondaryTintLuminances: l,
            secondaryLuminanceWeights: u
        } = e, d = null != n ? s(i, n, r) : t, _ = [];
        return null != a && null != l && null != u && (_ = null != o ? s(l, o, u) : a), {
            primaryColorsTransformed: d,
            secondaryColorsTransformed: _
        }
    }
}
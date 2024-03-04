function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLinearGradientForBackgroundGradient: function() {
            return r
        },
        areThemesEqualForGradientThemes: function() {
            return a
        }
    }), n("222007");
    var i = n("449918");
    n("941719");
    var s = n("843455");

    function r(e) {
        let {
            angle: t,
            colors: n
        } = e;
        return "linear-gradient(".concat(t, "deg, ").concat(n.map(e => {
            let {
                token: t,
                stop: n
            } = e;
            return "".concat((0, i.getColor)(t), " ").concat(n, "%")
        }).join(", "), ")")
    }

    function a(e, t) {
        return e === t || e === s.ThemeTypes.DARK && t === s.ThemeTypes.DARKER || e === s.ThemeTypes.DARKER && t === s.ThemeTypes.DARK || !1
    }
}
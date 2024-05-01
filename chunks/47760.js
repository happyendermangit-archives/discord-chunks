function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        areThemesEqualForGradientThemes: function() {
            return a
        },
        getLinearGradientForBackgroundGradient: function() {
            return s
        }
    }), n("47120");
    var i = n("44315");
    n("469115");
    var r = n("231338");

    function s(e) {
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
        return e === t || e === r.ThemeTypes.DARK && t === r.ThemeTypes.DARKER || e === r.ThemeTypes.DARKER && t === r.ThemeTypes.DARK || !1
    }
}
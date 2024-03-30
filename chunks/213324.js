function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        areThemesEqualForGradientThemes: function() {
            return a
        },
        getLinearGradientForBackgroundGradient: function() {
            return i
        }
    });
    var r = n("405502");
    n("953844");
    var o = n("563090");

    function i(e) {
        var t = e.angle,
            n = e.colors;
        return "linear-gradient(".concat(t, "deg, ").concat(n.map(function(e) {
            var t = e.token,
                n = e.stop;
            return "".concat((0, r.getColor)(t), " ").concat(n, "%")
        }).join(", "), ")")
    }

    function a(e, t) {
        return e === t || e === o.ThemeTypes.DARK && t === o.ThemeTypes.DARKER || e === o.ThemeTypes.DARKER && t === o.ThemeTypes.DARK || !1
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useColorIsLowContrastAgainstClientBackground: function() {
            return s
        }
    });
    var i = n("780384"),
        r = n("866442"),
        a = n("410030");

    function s(e) {
        let t = (0, a.default)();
        if (null == e || !(0, r.isValidHex)(e)) return !0;
        let {
            l: n
        } = (0, r.isValidHex)(e) ? (0, r.int2hslRaw)((0, r.hex2int)(e)) : {
            l: 0
        };
        return (0, i.isThemeDark)(t) && n < 30 || !(0, i.isThemeDark)(t) && n > 65
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        colorToRgba: function() {
            return i
        }
    });
    var r = n("753647");

    function i(e) {
        var t = (0, r.normalizeColor)(e);
        return null === t ? e : "rgba(" + ((4278190080 & (t = t || 0)) >>> 24) + ", " + ((16711680 & t) >>> 16) + ", " + ((65280 & t) >>> 8) + ", " + (255 & t) / 255 + ")"
    }
}
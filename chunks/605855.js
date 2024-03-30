function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        amplitudeToPerceptual: function() {
            return o
        },
        perceptualToAmplitude: function() {
            return r
        }
    });

    function r(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
    }

    function o(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        if (0 === e) return 0;
        var r = 20 * Math.log10(e / n);
        return n * (t = r > 0 ? r / 6 + 1 : (50 + r) / 50)
    }
}
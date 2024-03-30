function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        amplitudeToPerceptual: function() {
            return r
        },
        perceptualToAmplitude: function() {
            return i
        }
    });

    function i(e) {
        let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
    }

    function r(e) {
        let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        if (0 === e) return 0;
        let i = 20 * Math.log10(e / n);
        return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
    }
}
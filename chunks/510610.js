function(e) {
    "use strict";

    function t(e) {
        return (e - 30) * 3.62 + 194
    }

    function n(e) {
        return (e - 8) * 3 + 25
    }
    e.exports = {
        fromOrigamiTensionAndFriction: function(e, n) {
            return {
                tension: t(e),
                friction: (n - 8) * 3 + 25
            }
        },
        fromBouncinessAndSpeed: function(e, n) {
            function r(e, t, n) {
                return (e - t) / (n - t)
            }

            function i(e, t, n) {
                return t + e * (n - t)
            }
            var a, o, s, u, c, l, d, f, p = (e / 1.7 - (a = 0)) / (20 - a);
            var h = (u = .5) + (n / 1.7 - (s = 0)) / (20 - s) * (200 - u);
            var m = (c = p = (o = 0) + p * (.8 - o), l = function(e) {
                var t, n, r;
                if (e <= 18) {
                    ;
                    return 7e-4 * Math.pow(t = e, 3) - .031 * Math.pow(t, 2) + .64 * t + 1.28
                }
                if (e > 18 && e <= 44) {
                    ;
                    return 44e-6 * Math.pow(n = e, 3) - .006 * Math.pow(n, 2) + .36 * n + 2
                }
                return 45e-8 * Math.pow(r = e, 3) - 332e-6 * Math.pow(r, 2) + .1078 * r + 5.84
            }(h), d = .01, .01 * (f = 2 * c - c * c) + (1 - f) * l);
            return {
                tension: t(h),
                friction: (m - 8) * 3 + 25
            }
        }
    }
}
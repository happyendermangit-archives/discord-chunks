function(e, t, r) {
    "use strict";
    var n = {
        linear: function(e, t, r, n) {
            return (r - t) * e / n + t
        },
        easeInQuad: function(e, t, r, n) {
            return (r - t) * (e /= n) * e + t
        },
        easeOutQuad: function(e, t, r, n) {
            return -(r - t) * (e /= n) * (e - 2) + t
        },
        easeInOutQuad: function(e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
        },
        easeInCubic: function(e, t, r, n) {
            return (r - t) * (e /= n) * e * e + t
        },
        easeOutCubic: function(e, t, r, n) {
            return (r - t) * ((e = e / n - 1) * e * e + 1) + t
        },
        easeInOutCubic: function(e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
        },
        easeInQuart: function(e, t, r, n) {
            return (r - t) * (e /= n) * e * e * e + t
        },
        easeOutQuart: function(e, t, r, n) {
            return -(r - t) * ((e = e / n - 1) * e * e * e - 1) + t
        },
        easeInOutQuart: function(e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? i / 2 * e * e * e * e + t : -i / 2 * ((e -= 2) * e * e * e - 2) + t
        },
        easeInQuint: function(e, t, r, n) {
            return (r - t) * (e /= n) * e * e * e * e + t
        },
        easeOutQuint: function(e, t, r, n) {
            return (r - t) * ((e = e / n - 1) * e * e * e * e + 1) + t
        },
        easeInOutQuint: function(e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? i / 2 * e * e * e * e * e + t : i / 2 * ((e -= 2) * e * e * e * e + 2) + t
        },
        easeInSine: function(e, t, r, n) {
            var i = r - t;
            return -i * Math.cos(e / n * (Math.PI / 2)) + i + t
        },
        easeOutSine: function(e, t, r, n) {
            return (r - t) * Math.sin(e / n * (Math.PI / 2)) + t
        },
        easeInOutSine: function(e, t, r, n) {
            return -(r - t) / 2 * (Math.cos(Math.PI * e / n) - 1) + t
        },
        easeInExpo: function(e, t, r, n) {
            return 0 == e ? t : (r - t) * Math.pow(2, 10 * (e / n - 1)) + t
        },
        easeOutExpo: function(e, t, r, n) {
            var i = r - t;
            return e == n ? t + i : i * (-Math.pow(2, -10 * e / n) + 1) + t
        },
        easeInOutExpo: function(e, t, r, n) {
            var i = r - t;
            return 0 === e ? t : e === n ? t + i : (e /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : i / 2 * (-Math.pow(2, -10 * --e) + 2) + t
        },
        easeInCirc: function(e, t, r, n) {
            return -(r - t) * (Math.sqrt(1 - (e /= n) * e) - 1) + t
        },
        easeOutCirc: function(e, t, r, n) {
            return (r - t) * Math.sqrt(1 - (e = e / n - 1) * e) + t
        },
        easeInOutCirc: function(e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + t : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        },
        easeInElastic: function(e, t, r, n) {
            var i, o, a, u = r - t;
            return (a = 1.70158, o = 0, i = u, 0 === e) ? t : 1 == (e /= n) ? t + u : (!o && (o = .3 * n), i < Math.abs(u) ? (i = u, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(u / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - a) * (2 * Math.PI) / o)) + t)
        },
        easeOutElastic: function(e, t, r, n) {
            var i, o, a, u = r - t;
            return (a = 1.70158, o = 0, i = u, 0 === e) ? t : 1 == (e /= n) ? t + u : (!o && (o = .3 * n), i < Math.abs(u) ? (i = u, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(u / i), i * Math.pow(2, -10 * e) * Math.sin((e * n - a) * (2 * Math.PI) / o) + u + t)
        },
        easeInOutElastic: function(e, t, r, n) {
            var i, o, a, u = r - t;
            return (a = 1.70158, o = 0, i = u, 0 === e) ? t : 2 == (e /= n / 2) ? t + u : (!o && (o = n * (.3 * 1.5)), i < Math.abs(u) ? (i = u, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(u / i), e < 1) ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - a) * (2 * Math.PI) / o)) + t : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - a) * (2 * Math.PI) / o) * .5 + u + t
        },
        easeInBack: function(e, t, r, n, i) {
            return void 0 === i && (i = 1.70158), (r - t) * (e /= n) * e * ((i + 1) * e - i) + t
        },
        easeOutBack: function(e, t, r, n, i) {
            return void 0 === i && (i = 1.70158), (r - t) * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
        },
        easeInOutBack: function(e, t, r, n, i) {
            var o = r - t;
            return (void 0 === i && (i = 1.70158), (e /= n / 2) < 1) ? o / 2 * (e * e * (((i *= 1.525) + 1) * e - i)) + t : o / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
        },
        easeInBounce: function(e, t, r, i) {
            var o, a = r - t;
            return o = n.easeOutBounce(i - e, 0, a, i), a - o + t
        },
        easeOutBounce: function(e, t, r, n) {
            var i = r - t;
            if ((e /= n) < 1 / 2.75) return i * (7.5625 * e * e) + t;
            if (e < 2 / 2.75) return i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t;
            if (e < 2.5 / 2.75) return i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t;
            else return i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOutBounce: function(e, t, r, i) {
            var o, a = r - t;
            return e < i / 2 ? .5 * (o = n.easeInBounce(2 * e, 0, a, i)) + t : .5 * (o = n.easeOutBounce(2 * e - i, 0, a, i)) + .5 * a + t
        }
    };
    e.exports = n
}
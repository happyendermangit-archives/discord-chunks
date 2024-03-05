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
            var u = r - t;
            return (e /= n / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
        },
        easeInCubic: function(e, t, r, n) {
            return (r - t) * (e /= n) * e * e + t
        },
        easeOutCubic: function(e, t, r, n) {
            return (r - t) * ((e = e / n - 1) * e * e + 1) + t
        },
        easeInOutCubic: function(e, t, r, n) {
            var u = r - t;
            return (e /= n / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
        },
        easeInQuart: function(e, t, r, n) {
            return (r - t) * (e /= n) * e * e * e + t
        },
        easeOutQuart: function(e, t, r, n) {
            return -(r - t) * ((e = e / n - 1) * e * e * e - 1) + t
        },
        easeInOutQuart: function(e, t, r, n) {
            var u = r - t;
            return (e /= n / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
        },
        easeInQuint: function(e, t, r, n) {
            return (r - t) * (e /= n) * e * e * e * e + t
        },
        easeOutQuint: function(e, t, r, n) {
            return (r - t) * ((e = e / n - 1) * e * e * e * e + 1) + t
        },
        easeInOutQuint: function(e, t, r, n) {
            var u = r - t;
            return (e /= n / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
        },
        easeInSine: function(e, t, r, n) {
            var u = r - t;
            return -u * Math.cos(e / n * (Math.PI / 2)) + u + t
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
            var u = r - t;
            return e == n ? t + u : u * (-Math.pow(2, -10 * e / n) + 1) + t
        },
        easeInOutExpo: function(e, t, r, n) {
            var u = r - t;
            return 0 === e ? t : e === n ? t + u : (e /= n / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
        },
        easeInCirc: function(e, t, r, n) {
            return -(r - t) * (Math.sqrt(1 - (e /= n) * e) - 1) + t
        },
        easeOutCirc: function(e, t, r, n) {
            return (r - t) * Math.sqrt(1 - (e = e / n - 1) * e) + t
        },
        easeInOutCirc: function(e, t, r, n) {
            var u = r - t;
            return (e /= n / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        },
        easeInElastic: function(e, t, r, n) {
            var u, a, o, i = r - t;
            return (o = 1.70158, a = 0, u = i, 0 === e) ? t : 1 == (e /= n) ? t + i : (!a && (a = .3 * n), u < Math.abs(i) ? (u = i, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(i / u), -(u * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * (2 * Math.PI) / a)) + t)
        },
        easeOutElastic: function(e, t, r, n) {
            var u, a, o, i = r - t;
            return (o = 1.70158, a = 0, u = i, 0 === e) ? t : 1 == (e /= n) ? t + i : (!a && (a = .3 * n), u < Math.abs(i) ? (u = i, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(i / u), u * Math.pow(2, -10 * e) * Math.sin((e * n - o) * (2 * Math.PI) / a) + i + t)
        },
        easeInOutElastic: function(e, t, r, n) {
            var u, a, o, i = r - t;
            return (o = 1.70158, a = 0, u = i, 0 === e) ? t : 2 == (e /= n / 2) ? t + i : (!a && (a = n * (.3 * 1.5)), u < Math.abs(i) ? (u = i, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(i / u), e < 1) ? -.5 * (u * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * (2 * Math.PI) / a)) + t : u * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - o) * (2 * Math.PI) / a) * .5 + i + t
        },
        easeInBack: function(e, t, r, n, u) {
            return void 0 === u && (u = 1.70158), (r - t) * (e /= n) * e * ((u + 1) * e - u) + t
        },
        easeOutBack: function(e, t, r, n, u) {
            return void 0 === u && (u = 1.70158), (r - t) * ((e = e / n - 1) * e * ((u + 1) * e + u) + 1) + t
        },
        easeInOutBack: function(e, t, r, n, u) {
            var a = r - t;
            return (void 0 === u && (u = 1.70158), (e /= n / 2) < 1) ? a / 2 * (e * e * (((u *= 1.525) + 1) * e - u)) + t : a / 2 * ((e -= 2) * e * (((u *= 1.525) + 1) * e + u) + 2) + t
        },
        easeInBounce: function(e, t, r, u) {
            var a, o = r - t;
            return a = n.easeOutBounce(u - e, 0, o, u), o - a + t
        },
        easeOutBounce: function(e, t, r, n) {
            var u = r - t;
            if ((e /= n) < 1 / 2.75) return u * (7.5625 * e * e) + t;
            if (e < 2 / 2.75) return u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t;
            if (e < 2.5 / 2.75) return u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t;
            else return u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOutBounce: function(e, t, r, u) {
            var a, o = r - t;
            return e < u / 2 ? .5 * (a = n.easeInBounce(2 * e, 0, o, u)) + t : .5 * (a = n.easeOutBounce(2 * e - u, 0, o, u)) + .5 * o + t
        }
    };
    e.exports = n
}
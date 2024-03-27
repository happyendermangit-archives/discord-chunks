function(e) {
    "use strict";
    var t = {
        linear: function(e, t, n, r) {
            return (n - t) * e / r + t
        },
        easeInQuad: function(e, t, n, r) {
            return (n - t) * (e /= r) * e + t
        },
        easeOutQuad: function(e, t, n, r) {
            return -(n - t) * (e /= r) * (e - 2) + t
        },
        easeInOutQuad: function(e, t, n, r) {
            var i = n - t;
            return (e /= r / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
        },
        easeInCubic: function(e, t, n, r) {
            return (n - t) * (e /= r) * e * e + t
        },
        easeOutCubic: function(e, t, n, r) {
            return (n - t) * ((e = e / r - 1) * e * e + 1) + t
        },
        easeInOutCubic: function(e, t, n, r) {
            var i = n - t;
            return (e /= r / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
        },
        easeInQuart: function(e, t, n, r) {
            return (n - t) * (e /= r) * e * e * e + t
        },
        easeOutQuart: function(e, t, n, r) {
            return -(n - t) * ((e = e / r - 1) * e * e * e - 1) + t
        },
        easeInOutQuart: function(e, t, n, r) {
            var i = n - t;
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + t : -i / 2 * ((e -= 2) * e * e * e - 2) + t
        },
        easeInQuint: function(e, t, n, r) {
            return (n - t) * (e /= r) * e * e * e * e + t
        },
        easeOutQuint: function(e, t, n, r) {
            return (n - t) * ((e = e / r - 1) * e * e * e * e + 1) + t
        },
        easeInOutQuint: function(e, t, n, r) {
            var i = n - t;
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + t : i / 2 * ((e -= 2) * e * e * e * e + 2) + t
        },
        easeInSine: function(e, t, n, r) {
            var i = n - t;
            return -i * Math.cos(e / r * (Math.PI / 2)) + i + t
        },
        easeOutSine: function(e, t, n, r) {
            return (n - t) * Math.sin(e / r * (Math.PI / 2)) + t
        },
        easeInOutSine: function(e, t, n, r) {
            return -(n - t) / 2 * (Math.cos(Math.PI * e / r) - 1) + t
        },
        easeInExpo: function(e, t, n, r) {
            return 0 == e ? t : (n - t) * Math.pow(2, 10 * (e / r - 1)) + t
        },
        easeOutExpo: function(e, t, n, r) {
            var i = n - t;
            return e == r ? t + i : i * (-Math.pow(2, -10 * e / r) + 1) + t
        },
        easeInOutExpo: function(e, t, n, r) {
            var i = n - t;
            return 0 === e ? t : e === r ? t + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : i / 2 * (-Math.pow(2, -10 * --e) + 2) + t
        },
        easeInCirc: function(e, t, n, r) {
            return -(n - t) * (Math.sqrt(1 - (e /= r) * e) - 1) + t
        },
        easeOutCirc: function(e, t, n, r) {
            return (n - t) * Math.sqrt(1 - (e = e / r - 1) * e) + t
        },
        easeInOutCirc: function(e, t, n, r) {
            var i = n - t;
            return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + t : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        },
        easeInElastic: function(e, t, n, r) {
            var i, a, o, s = n - t;
            return (o = 1.70158, a = 0, i = s, 0 === e) ? t : 1 == (e /= r) ? t + s : (!a && (a = .3 * r), i < Math.abs(s) ? (i = s, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(s / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e * r - o) / a)) + t)
        },
        easeOutElastic: function(e, t, n, r) {
            var i, a, o, s = n - t;
            return (o = 1.70158, a = 0, i = s, 0 === e) ? t : 1 == (e /= r) ? t + s : (!a && (a = .3 * r), i < Math.abs(s) ? (i = s, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(s / i), i * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e * r - o) / a) + s + t)
        },
        easeInOutElastic: function(e, t, n, r) {
            var i, a, o, s = n - t;
            return (o = 1.70158, a = 0, i = s, 0 === e) ? t : 2 == (e /= r / 2) ? t + s : (!a && (a = .3 * 1.5 * r), i < Math.abs(s) ? (i = s, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(s / i), e < 1) ? -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e * r - o) / a) * .5) + t : i * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e * r - o) / a) * .5 + s + t
        },
        easeInBack: function(e, t, n, r, i) {
            return void 0 === i && (i = 1.70158), (n - t) * (e /= r) * e * ((i + 1) * e - i) + t
        },
        easeOutBack: function(e, t, n, r, i) {
            return void 0 === i && (i = 1.70158), (n - t) * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
        },
        easeInOutBack: function(e, t, n, r, i) {
            var a = n - t;
            return (void 0 === i && (i = 1.70158), (e /= r / 2) < 1) ? a / 2 * (e * e * (((i *= 1.525) + 1) * e - i)) + t : a / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
        },
        easeInBounce: function(e, n, r, i) {
            var a, o = r - n;
            return a = t.easeOutBounce(i - e, 0, o, i), o - a + n
        },
        easeOutBounce: function(e, t, n, r) {
            var i = n - t;
            if ((e /= r) < 1 / 2.75) return 7.5625 * e * e * i + t;
            if (e < 2 / 2.75) return i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t;
            if (e < 2.5 / 2.75) return i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t;
            else return i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOutBounce: function(e, n, r, i) {
            var a, o = r - n;
            return e < i / 2 ? .5 * (a = t.easeInBounce(2 * e, 0, o, i)) + n : .5 * (a = t.easeOutBounce(2 * e - i, 0, o, i)) + .5 * o + n
        }
    };
    e.exports = t
}
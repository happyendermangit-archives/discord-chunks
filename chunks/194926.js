function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        getDarkness: function() {
            return i
        },
        hex2int: function() {
            return r
        },
        hex2rgb: function() {
            return T
        },
        int2hex: function() {
            return R
        },
        int2hsl: function() {
            return A
        },
        int2rgbArray: function() {
            return O
        },
        int2rgba: function() {
            return n
        },
        isValidHex: function() {
            return c
        },
        rgb2int: function() {
            return N
        }
    });
    var o = e("688619"),
        t = e.n(o),
        I = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;

    function a(_) {
        return 1 === _.length ? "0".concat(_) : _
    }

    function r(_) {
        return t()(_).num()
    }

    function R(_) {
        return _ <= 16777215 ? "#".concat(a((_ >> 16 & 255).toString(16))).concat(a((_ >> 8 & 255).toString(16))).concat(a((255 & _).toString(16))) : "#".concat(a((_ >> 24 & 255).toString(16))).concat(a((_ >> 16 & 255).toString(16))).concat(a((_ >> 8 & 255).toString(16)))
    }

    function A(_) {
        var E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            t = _ >> 16 & 255,
            I = _ >> 8 & 255,
            a = 255 & _,
            r = Math.min(t /= 255, I /= 255, a /= 255),
            R = Math.max(t, I, a),
            A = R - r,
            T = 0,
            n = 0,
            N = 0;
        return ((T = Math.round(60 * (T = 0 === A ? 0 : R === t ? (I - a) / A % 6 : R === I ? (a - t) / A + 2 : (t - I) / A + 4))) < 0 && (T += 360), N = (R + r) / 2, n = +(100 * (n = 0 === A ? 0 : A / (1 - Math.abs(2 * N - 1)))).toFixed(1), N = +(100 * N).toFixed(1), E) ? "hsla(".concat(T, ", calc(var(--saturation-factor, 1) * ").concat(n, "%), ").concat(N, "%, ").concat(o, ")") : null != e ? "hsla(".concat(T, ", ").concat(e * n, "%, ").concat(N, "%, ").concat(o, ")") : "hsla(".concat(T, ", ").concat(n, "%, ").concat(N, "%, ").concat(o, ")")
    }

    function T(_) {
        var E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!t().valid(_)) return null;
        var e = t()(_);
        return e.alpha(null != E ? E : e.alpha()).css()
    }

    function n(_, E) {
        return null == E && (E = (_ >> 24 & 255) / 255), "rgba(".concat(_ >> 16 & 255, ", ").concat(_ >> 8 & 255, ", ").concat(255 & _, ", ").concat(E, ")")
    }

    function N(_) {
        var E = _.match(I),
            e = null != E ? {
                red: parseInt(E[1]),
                green: parseInt(E[2]),
                blue: parseInt(E[3])
            } : {
                red: 0,
                green: 0,
                blue: 0
            };
        return (e.red << 16) + (e.green << 8) + e.blue
    }

    function i(_) {
        return 1 - (.299 * (_ >> 16 & 255) + .587 * (_ >> 8 & 255) + .114 * (255 & _)) / 255
    }

    function c(_) {
        return t().valid(_)
    }

    function O(_) {
        return [_ >> 16 & 255, _ >> 8 & 255, 255 & _]
    }
}
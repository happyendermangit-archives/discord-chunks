function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        getDarkness: function() {
            return O
        },
        hex2int: function() {
            return t
        },
        hex2rgb: function() {
            return N
        },
        int2hex: function() {
            return A
        },
        int2hsl: function() {
            return r
        },
        int2hslRaw: function() {
            return T
        },
        int2rgbArray: function() {
            return L
        },
        int2rgba: function() {
            return i
        },
        isValidHex: function() {
            return n
        },
        rgb2int: function() {
            return c
        }
    });
    var I = e("688619"),
        o = e.n(I);
    let a = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;

    function R(_) {
        return 1 === _.length ? "0".concat(_) : _
    }

    function t(_) {
        return o()(_).num()
    }

    function A(_) {
        return _ <= 16777215 ? "#".concat(R((_ >> 16 & 255).toString(16))).concat(R((_ >> 8 & 255).toString(16))).concat(R((255 & _).toString(16))) : "#".concat(R((_ >> 24 & 255).toString(16))).concat(R((_ >> 16 & 255).toString(16))).concat(R((_ >> 8 & 255).toString(16)))
    }

    function T(_) {
        let E = _ >> 16 & 255,
            e = _ >> 8 & 255,
            I = 255 & _,
            o = Math.min(E /= 255, e /= 255, I /= 255),
            a = Math.max(E, e, I),
            R = a - o,
            t = 0,
            A = 0,
            T = 0;
        return (t = Math.round(60 * (t = 0 === R ? 0 : a === E ? (e - I) / R % 6 : a === e ? (I - E) / R + 2 : (E - e) / R + 4))) < 0 && (t += 360), T = (a + o) / 2, A = +(100 * (A = 0 === R ? 0 : R / (1 - Math.abs(2 * T - 1)))).toFixed(1), {
            h: t,
            s: A,
            l: T = +(100 * T).toFixed(1)
        }
    }

    function r(_) {
        let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            I = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            {
                h: o,
                s: a,
                l: R
            } = T(_);
        return E ? "hsla(".concat(o, ", calc(var(--saturation-factor, 1) * ").concat(a, "%), ").concat(R, "%, ").concat(I, ")") : null != e ? "hsla(".concat(o, ", ").concat(e * a, "%, ").concat(R, "%, ").concat(I, ")") : "hsla(".concat(o, ", ").concat(a, "%, ").concat(R, "%, ").concat(I, ")")
    }

    function N(_) {
        let E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!o().valid(_)) return null;
        let e = o()(_);
        return e.alpha(null != E ? E : e.alpha()).css()
    }

    function i(_, E) {
        return null == E && (E = (_ >> 24 & 255) / 255), "rgba(".concat(_ >> 16 & 255, ", ").concat(_ >> 8 & 255, ", ").concat(255 & _, ", ").concat(E, ")")
    }

    function c(_) {
        let E = _.match(a),
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

    function O(_) {
        return 1 - (.299 * (_ >> 16 & 255) + .587 * (_ >> 8 & 255) + .114 * (255 & _)) / 255
    }

    function n(_) {
        return o().valid(_)
    }

    function L(_) {
        return [_ >> 16 & 255, _ >> 8 & 255, 255 & _]
    }
}
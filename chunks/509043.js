function(_, E, I) {
    "use strict";
    I.r(E), I.d(E, {
        hex2int: function() {
            return t
        },
        int2hex: function() {
            return A
        },
        int2hsl: function() {
            return T
        },
        hex2rgb: function() {
            return r
        },
        int2rgba: function() {
            return N
        },
        rgb2int: function() {
            return i
        },
        getDarkness: function() {
            return c
        },
        isValidHex: function() {
            return O
        },
        int2rgbArray: function() {
            return n
        }
    });
    var e = I("10371"),
        a = I.n(e);
    let o = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;

    function R(_) {
        return 1 === _.length ? "0".concat(_) : _
    }

    function t(_) {
        return a(_).num()
    }

    function A(_) {
        return _ <= 16777215 ? "#".concat(R((_ >> 16 & 255).toString(16))).concat(R((_ >> 8 & 255).toString(16))).concat(R((255 & _).toString(16))) : "#".concat(R((_ >> 24 & 255).toString(16))).concat(R((_ >> 16 & 255).toString(16))).concat(R((_ >> 8 & 255).toString(16)))
    }

    function T(_) {
        let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            I = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            a = _ >> 16 & 255,
            o = _ >> 8 & 255,
            R = 255 & _;
        a /= 255, o /= 255, R /= 255;
        let t = Math.min(a, o, R),
            A = Math.max(a, o, R),
            T = A - t,
            r = 0,
            N = 0,
            i = 0;
        return ((r = Math.round(60 * (r = 0 === T ? 0 : A === a ? (o - R) / T % 6 : A === o ? (R - a) / T + 2 : (a - o) / T + 4))) < 0 && (r += 360), i = (A + t) / 2, N = +(100 * (N = 0 === T ? 0 : T / (1 - Math.abs(2 * i - 1)))).toFixed(1), i = +(100 * i).toFixed(1), E) ? "hsla(".concat(r, ", calc(var(--saturation-factor, 1) * ").concat(N, "%), ").concat(i, "%, ").concat(e, ")") : null != I ? "hsla(".concat(r, ", ").concat(I * N, "%, ").concat(i, "%, ").concat(e, ")") : "hsla(".concat(r, ", ").concat(N, "%, ").concat(i, "%, ").concat(e, ")")
    }

    function r(_) {
        let E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!a.valid(_)) return null;
        let I = a(_);
        return I.alpha(null != E ? E : I.alpha()).css()
    }

    function N(_, E) {
        return null == E && (E = (_ >> 24 & 255) / 255), "rgba(".concat(_ >> 16 & 255, ", ").concat(_ >> 8 & 255, ", ").concat(255 & _, ", ").concat(E, ")")
    }

    function i(_) {
        let E = _.match(o),
            I = null != E ? {
                red: parseInt(E[1]),
                green: parseInt(E[2]),
                blue: parseInt(E[3])
            } : {
                red: 0,
                green: 0,
                blue: 0
            };
        return (I.red << 16) + (I.green << 8) + I.blue
    }

    function c(_) {
        return 1 - (.299 * (_ >> 16 & 255) + .587 * (_ >> 8 & 255) + .114 * (255 & _)) / 255
    }

    function O(_) {
        return a.valid(_)
    }

    function n(_) {
        return [_ >> 16 & 255, _ >> 8 & 255, 255 & _]
    }
}
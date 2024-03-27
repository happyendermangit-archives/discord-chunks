function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        getDarkness: function() {
            return c
        },
        hex2int: function() {
            return t
        },
        hex2rgb: function() {
            return r
        },
        int2hex: function() {
            return A
        },
        int2hsl: function() {
            return T
        },
        int2rgbArray: function() {
            return n
        },
        int2rgba: function() {
            return N
        },
        isValidHex: function() {
            return O
        },
        rgb2int: function() {
            return i
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
        let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            I = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            o = _ >> 16 & 255,
            a = _ >> 8 & 255,
            R = 255 & _,
            t = Math.min(o /= 255, a /= 255, R /= 255),
            A = Math.max(o, a, R),
            T = A - t,
            r = 0,
            N = 0,
            i = 0;
        return ((r = Math.round(60 * (r = 0 === T ? 0 : A === o ? (a - R) / T % 6 : A === a ? (R - o) / T + 2 : (o - a) / T + 4))) < 0 && (r += 360), i = (A + t) / 2, N = +(100 * (N = 0 === T ? 0 : T / (1 - Math.abs(2 * i - 1)))).toFixed(1), i = +(100 * i).toFixed(1), E) ? "hsla(".concat(r, ", calc(var(--saturation-factor, 1) * ").concat(N, "%), ").concat(i, "%, ").concat(I, ")") : null != e ? "hsla(".concat(r, ", ").concat(e * N, "%, ").concat(i, "%, ").concat(I, ")") : "hsla(".concat(r, ", ").concat(N, "%, ").concat(i, "%, ").concat(I, ")")
    }

    function r(_) {
        let E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!o().valid(_)) return null;
        let e = o()(_);
        return e.alpha(null != E ? E : e.alpha()).css()
    }

    function N(_, E) {
        return null == E && (E = (_ >> 24 & 255) / 255), "rgba(".concat(_ >> 16 & 255, ", ").concat(_ >> 8 & 255, ", ").concat(255 & _, ", ").concat(E, ")")
    }

    function i(_) {
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

    function c(_) {
        return 1 - (.299 * (_ >> 16 & 255) + .587 * (_ >> 8 & 255) + .114 * (255 & _)) / 255
    }

    function O(_) {
        return o().valid(_)
    }

    function n(_) {
        return [_ >> 16 & 255, _ >> 8 & 255, 255 & _]
    }
}
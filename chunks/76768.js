function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        thumbHashToRGBA: function() {
            return o
        }
    });
    var r = n("788900");

    function o(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.detail, o = void 0 === n ? 1 : n, i = t.pop, a = void 0 === i ? 1 : i, u = Math.PI, s = Math.min, l = Math.max, c = Math.cos, f = Math.round, d = e[0] | e[1] << 8 | e[2] << 16, _ = e[3] | e[4] << 8, E = (63 & d) / 63, p = (d >> 6 & 63) / 31.5 - 1, m = (d >> 12 & 63) / 31.5 - 1, y = d >> 23, I = _ >> 15, h = l(3, I ? y ? 5 : 7 : 7 & _), O = l(3, I ? 7 & _ : y ? 5 : 7), T = y ? (15 & e[5]) / 15 : 1, S = (e[5] >> 4) / 15, v = y ? 6 : 5, g = 0, A = function(t, n, r) {
                for (var o = [], i = 0; i < n; i++)
                    for (var a = i ? 0 : 1; a * n < t * (n - i); a++) o.push(((e[v + (g >> 1)] >> ((1 & g++) << 2) & 15) / 7.5 - 1) * r);
                return o
            }, b = A(h, O, (d >> 18 & 31) / 31 / 2), N = A(3, 3, (_ >> 3 & 63) / 63 * a), R = A(3, 3, (_ >> 9 & 63) / 63 * a), C = y ? A(5, 5, S) : [], P = (0, r.thumbHashToApproximateAspectRatio)(e), D = f(P > 1 ? 32 : 32 * P), L = f(P > 1 ? 32 / P : 32), M = new Uint8Array(D * L * 4), U = [], w = [], k = 0, G = 0; k < L; k++)
            for (var B = 0; B < D; B++, G += 4) {
                for (var j = E, F = p, V = m, H = T, x = 0, Y = l(h, y ? 5 : 3); x < Y; x++) U[x] = c(u / D * (B + .5) * x);
                for (var W = 0, K = l(O, y ? 5 : 3); W < K; W++) w[W] = c(u / L * (k + .5) * W);
                for (var z = 0, X = 0; z < O; z++)
                    for (var q = z ? 0 : 1, Q = 2 * w[z]; q * O < h * (O - z); q++, X++) !(q > o) && !(z > o) && (j += b[X] * U[q] * Q);
                for (var J = 0, Z = 0; J < 3; J++)
                    for (var $ = J ? 0 : 1, ee = 2 * w[J]; $ < 3 - J; $++, Z++) {
                        var et = U[$] * ee;
                        F += N[Z] * et, V += R[Z] * et
                    }
                if (y)
                    for (var en = 0, er = 0; en < 5; en++)
                        for (var eo = en ? 0 : 1, ei = 2 * w[en]; eo < 5 - en; eo++, er++) H += C[er] * U[eo] * ei;
                var ea = j - 2 / 3 * F,
                    eu = (3 * j - ea + V) / 2,
                    es = eu - V;
                M[G] = l(0, 255 * s(1, eu)), M[G + 1] = l(0, 255 * s(1, es)), M[G + 2] = l(0, 255 * s(1, ea)), M[G + 3] = l(0, 255 * s(1, H))
            }
        return {
            w: D,
            h: L,
            rgba: M
        }
    }
}
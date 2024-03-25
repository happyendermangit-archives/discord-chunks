function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        thumbHashToRGBA: function() {
            return i
        }
    }), n("424973"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var r = n("723251");

    function i(e) {
        let {
            detail: t = 1,
            pop: n = 1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
            PI: i,
            min: a,
            max: l,
            cos: s,
            round: o
        } = Math, u = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & u) / 63, f = (u >> 6 & 63) / 31.5 - 1, m = (u >> 12 & 63) / 31.5 - 1, _ = u >> 23, E = c >> 15, I = l(3, E ? _ ? 5 : 7 : 7 & c), T = l(3, E ? 7 & c : _ ? 5 : 7), p = _ ? (15 & e[5]) / 15 : 1, S = (e[5] >> 4) / 15, P = _ ? 6 : 5, R = 0, C = (t, n, r) => {
            let i = [];
            for (let a = 0; a < n; a++)
                for (let l = a ? 0 : 1; l * n < t * (n - a); l++) i.push(((e[P + (R >> 1)] >> ((1 & R++) << 2) & 15) / 7.5 - 1) * r);
            return i
        }, O = C(I, T, (u >> 18 & 31) / 31 / 2), g = C(3, 3, (c >> 3 & 63) / 63 * n), M = C(3, 3, (c >> 9 & 63) / 63 * n), h = _ ? C(5, 5, S) : [], L = (0, r.thumbHashToApproximateAspectRatio)(e), v = o(L > 1 ? 32 : 32 * L), N = o(L > 1 ? 32 / L : 32), x = new Uint8Array(v * N * 4), A = [], U = [];
        for (let e = 0, n = 0; e < N; e++)
            for (let r = 0; r < v; r++, n += 4) {
                let o = d,
                    u = f,
                    c = m,
                    E = p;
                for (let e = 0, t = l(I, _ ? 5 : 3); e < t; e++) A[e] = s(i / v * (r + .5) * e);
                for (let t = 0, n = l(T, _ ? 5 : 3); t < n; t++) U[t] = s(i / N * (e + .5) * t);
                for (let e = 0, n = 0; e < T; e++)
                    for (let r = e ? 0 : 1, i = 2 * U[e]; r * T < I * (T - e); r++, n++) !(r > t) && !(e > t) && (o += O[n] * A[r] * i);
                for (let e = 0, t = 0; e < 3; e++)
                    for (let n = e ? 0 : 1, r = 2 * U[e]; n < 3 - e; n++, t++) {
                        let e = A[n] * r;
                        u += g[t] * e, c += M[t] * e
                    }
                if (_)
                    for (let e = 0, t = 0; e < 5; e++)
                        for (let n = e ? 0 : 1, r = 2 * U[e]; n < 5 - e; n++, t++) E += h[t] * A[n] * r;
                let S = o - 2 / 3 * u,
                    P = (3 * o - S + c) / 2,
                    R = P - c;
                x[n] = l(0, 255 * a(1, P)), x[n + 1] = l(0, 255 * a(1, R)), x[n + 2] = l(0, 255 * a(1, S)), x[n + 3] = l(0, 255 * a(1, E))
            }
        return {
            w: v,
            h: N,
            rgba: x
        }
    }
}
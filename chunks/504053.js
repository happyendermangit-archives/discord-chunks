function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        thumbHashToRGBA: function() {
            return r
        }
    }), n("653041"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
    var i = n("788900");

    function r(e) {
        let {
            detail: t = 1,
            pop: n = 1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
            PI: r,
            min: a,
            max: s,
            cos: o,
            round: l
        } = Math, u = e[0] | e[1] << 8 | e[2] << 16, d = e[3] | e[4] << 8, _ = (63 & u) / 63, c = (u >> 6 & 63) / 31.5 - 1, E = (u >> 12 & 63) / 31.5 - 1, I = u >> 23, T = d >> 15, f = s(3, T ? I ? 5 : 7 : 7 & d), S = s(3, T ? 7 & d : I ? 5 : 7), h = I ? (15 & e[5]) / 15 : 1, A = (e[5] >> 4) / 15, m = I ? 6 : 5, N = 0, p = (t, n, i) => {
            let r = [];
            for (let a = 0; a < n; a++)
                for (let s = a ? 0 : 1; s * n < t * (n - a); s++) r.push(((e[m + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * i);
            return r
        }, O = p(f, S, (u >> 18 & 31) / 31 / 2), R = p(3, 3, (d >> 3 & 63) / 63 * n), C = p(3, 3, (d >> 9 & 63) / 63 * n), g = I ? p(5, 5, A) : [], L = (0, i.thumbHashToApproximateAspectRatio)(e), v = l(L > 1 ? 32 : 32 * L), D = l(L > 1 ? 32 / L : 32), M = new Uint8Array(v * D * 4), y = [], P = [];
        for (let e = 0, n = 0; e < D; e++)
            for (let i = 0; i < v; i++, n += 4) {
                let l = _,
                    u = c,
                    d = E,
                    T = h;
                for (let e = 0, t = s(f, I ? 5 : 3); e < t; e++) y[e] = o(r / v * (i + .5) * e);
                for (let t = 0, n = s(S, I ? 5 : 3); t < n; t++) P[t] = o(r / D * (e + .5) * t);
                for (let e = 0, n = 0; e < S; e++)
                    for (let i = e ? 0 : 1, r = 2 * P[e]; i * S < f * (S - e); i++, n++) !(i > t) && !(e > t) && (l += O[n] * y[i] * r);
                for (let e = 0, t = 0; e < 3; e++)
                    for (let n = e ? 0 : 1, i = 2 * P[e]; n < 3 - e; n++, t++) {
                        let e = y[n] * i;
                        u += R[t] * e, d += C[t] * e
                    }
                if (I)
                    for (let e = 0, t = 0; e < 5; e++)
                        for (let n = e ? 0 : 1, i = 2 * P[e]; n < 5 - e; n++, t++) T += g[t] * y[n] * i;
                let A = l - 2 / 3 * u,
                    m = (3 * l - A + d) / 2,
                    N = m - d;
                M[n] = s(0, 255 * a(1, m)), M[n + 1] = s(0, 255 * a(1, N)), M[n + 2] = s(0, 255 * a(1, A)), M[n + 3] = s(0, 255 * a(1, T))
            }
        return {
            w: v,
            h: D,
            rgba: M
        }
    }
}
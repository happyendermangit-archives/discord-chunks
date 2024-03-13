function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        thumbHashToApproximateAspectRatio: function() {
            return n
        },
        rgbaToDataURL: function() {
            return u
        },
        thumbHashToDataURL: function() {
            return a
        }
    }), r("70102"), r("424973"), r("222007"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("101997");

    function n(e) {
        let t = e[3],
            r = 128 & e[2],
            n = 128 & e[4];
        return (n ? r ? 5 : 7 : 7 & t) / (n ? 7 & t : r ? 5 : 7)
    }

    function u(e, t, r) {
        let n = 4 * e + 1,
            u = 6 + t * (5 + n),
            a = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, u >>> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, 73, 68, 65, 84, 120, 1],
            o = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
            i = 1,
            s = 0;
        for (let e = 0, u = 0, o = n - 1; e < t; e++, o += n - 1)
            for (a.push(e + 1 < t ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0), s = (s + i) % 65521; u < o; u++) {
                let e = 255 & r[u];
                a.push(e), s = (s + (i = (i + e) % 65521)) % 65521
            }
        for (let [e, t] of(a.push(s >> 8, 255 & s, i >> 8, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                [12, 29],
                [37, 41 + u]
            ])) {
            let r = -1;
            for (let n = e; n < t; n++) r ^= a[n], r = (r = r >>> 4 ^ o[15 & r]) >>> 4 ^ o[15 & r];
            r = ~r, a[t++] = r >>> 24, a[t++] = r >> 16 & 255, a[t++] = r >> 8 & 255, a[t++] = 255 & r
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...a))
    }

    function a(e) {
        let t = function(e) {
            let {
                PI: t,
                min: r,
                max: u,
                cos: a,
                round: o
            } = Math, i = e[0] | e[1] << 8 | e[2] << 16, s = e[3] | e[4] << 8, l = (63 & i) / 63, c = (i >> 6 & 63) / 31.5 - 1, f = (i >> 12 & 63) / 31.5 - 1, d = i >> 23, D = s >> 15, h = u(3, D ? d ? 5 : 7 : 7 & s), v = u(3, D ? 7 & s : d ? 5 : 7), p = d ? (15 & e[5]) / 15 : 1, C = (e[5] >> 4) / 15, g = d ? 6 : 5, B = 0, E = (t, r, n) => {
                let u = [];
                for (let a = 0; a < r; a++)
                    for (let o = a ? 0 : 1; o * r < t * (r - a); o++) u.push(((e[g + (B >> 1)] >> ((1 & B++) << 2) & 15) / 7.5 - 1) * n);
                return u
            }, m = E(h, v, (i >> 18 & 31) / 31), A = E(3, 3, 1.25 * ((s >> 3 & 63) / 63)), F = E(3, 3, 1.25 * ((s >> 9 & 63) / 63)), b = d && E(5, 5, C), y = n(e), w = o(y > 1 ? 32 : 32 * y), O = o(y > 1 ? 32 / y : 32), x = new Uint8Array(w * O * 4), k = [], P = [];
            for (let e = 0, n = 0; e < O; e++)
                for (let o = 0; o < w; o++, n += 4) {
                    let i = l,
                        s = c,
                        D = f,
                        C = p;
                    for (let e = 0, r = u(h, d ? 5 : 3); e < r; e++) k[e] = a(t / w * (o + .5) * e);
                    for (let r = 0, n = u(v, d ? 5 : 3); r < n; r++) P[r] = a(t / O * (e + .5) * r);
                    for (let e = 0, t = 0; e < v; e++)
                        for (let r = e ? 0 : 1, n = 2 * P[e]; r * v < h * (v - e); r++, t++) i += m[t] * k[r] * n;
                    for (let e = 0, t = 0; e < 3; e++)
                        for (let r = e ? 0 : 1, n = 2 * P[e]; r < 3 - e; r++, t++) {
                            let e = k[r] * n;
                            s += A[t] * e, D += F[t] * e
                        }
                    if (d)
                        for (let e = 0, t = 0; e < 5; e++)
                            for (let r = e ? 0 : 1, n = 2 * P[e]; r < 5 - e; r++, t++) C += b[t] * k[r] * n;
                    let g = i - 2 / 3 * s,
                        B = (3 * i - g + D) / 2,
                        E = B - D;
                    x[n] = u(0, 255 * r(1, B)), x[n + 1] = u(0, 255 * r(1, E)), x[n + 2] = u(0, 255 * r(1, g)), x[n + 3] = u(0, 255 * r(1, C))
                }
            return {
                w,
                h: O,
                rgba: x
            }
        }(e);
        return u(t.w, t.h, t.rgba)
    }
}
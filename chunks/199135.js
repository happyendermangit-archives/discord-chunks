function(e, t, n) {
    var r = n("863847"),
        i = n("396494"),
        o = n("931492"),
        s = n("464477"),
        a = n("208011"),
        c = n("28279"),
        u = n("19381"),
        d = n("333714"),
        l = n("883687"),
        f = n("363863"),
        p = n("661495"),
        h = n("364599"),
        v = n("622142"),
        g = n("302549"),
        b = n("12062"),
        m = n("486036"),
        y = n("474710"),
        x = n("771642"),
        w = n("952133"),
        S = n("883751"),
        k = n("436335"),
        E = n("298169"),
        _ = "[object Arguments]",
        M = "[object Function]",
        D = "[object Object]",
        C = {};
    C[_] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C[D] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0, C["[object Error]"] = C[M] = C["[object WeakMap]"] = !1;
    e.exports = function e(t, n, P, T, A, R) {
        var I, O = 1 & n,
            j = 2 & n,
            L = 4 & n;
        if (P && (I = A ? P(t, T, A, R) : P(t)), void 0 !== I) return I;
        if (!w(t)) return t;
        var N = m(t);
        if (N) {
            if (I = v(t), !O) return u(t, I)
        } else {
            var F = h(t),
                B = F == M || "[object GeneratorFunction]" == F;
            if (y(t)) return c(t, O);
            if (F == D || F == _ || B && !A) {
                if (I = j || B ? {} : b(t), !O) return j ? l(t, a(I, t)) : d(t, s(I, t))
            } else {
                if (!C[F]) return A ? t : {};
                I = g(t, F, O)
            }
        }
        R || (R = new r);
        var z = R.get(t);
        if (z) return z;
        R.set(t, I), S(t) ? t.forEach(function(r) {
            I.add(e(r, n, P, r, t, R))
        }) : x(t) && t.forEach(function(r, i) {
            I.set(i, e(r, n, P, i, t, R))
        });
        var K = L ? j ? p : f : j ? E : k,
            V = N ? void 0 : K(t);
        return i(V || t, function(r, i) {
            V && (r = t[i = r]), o(I, i, e(r, n, P, i, t, R))
        }), I
    }
}
function(e, t, n) {
    var r = n("687249"),
        i = n("48889"),
        a = n("11537"),
        o = n("806867"),
        s = n("542334"),
        u = n("829815"),
        c = n("566131"),
        l = n("773151"),
        d = n("893741"),
        f = n("821164"),
        p = n("993106"),
        h = n("53919"),
        m = n("247323"),
        g = n("609511"),
        _ = n("292548"),
        b = n("290677"),
        v = n("551023"),
        y = n("118788"),
        E = n("661233"),
        S = n("357361"),
        x = n("438330"),
        w = "[object Arguments]",
        T = "[object Function]",
        C = "[object Object]",
        D = {};
    D[w] = D["[object Array]"] = D["[object ArrayBuffer]"] = D["[object DataView]"] = D["[object Boolean]"] = D["[object Date]"] = D["[object Float32Array]"] = D["[object Float64Array]"] = D["[object Int8Array]"] = D["[object Int16Array]"] = D["[object Int32Array]"] = D["[object Map]"] = D["[object Number]"] = D[C] = D["[object RegExp]"] = D["[object Set]"] = D["[object String]"] = D["[object Symbol]"] = D["[object Uint8Array]"] = D["[object Uint8ClampedArray]"] = D["[object Uint16Array]"] = D["[object Uint32Array]"] = !0, D["[object Error]"] = D[T] = D["[object WeakMap]"] = !1;
    e.exports = function e(t, n, O, M, A, k) {
        var R, N = 1 & n,
            I = 2 & n,
            L = 4 & n;
        if (O && (R = A ? O(t, M, A, k) : O(t)), void 0 !== R) return R;
        if (!E(t)) return t;
        var P = b(t);
        if (P) {
            if (R = m(t), !N) return c(t, R)
        } else {
            var F = h(t),
                B = F == T || "[object GeneratorFunction]" == F;
            if (v(t)) return u(t, N);
            if (F == C || F == w || B && !A) {
                if (R = I || B ? {} : _(t), !N) return I ? d(t, s(R, t)) : l(t, o(R, t))
            } else {
                if (!D[F]) return A ? t : {};
                R = g(t, F, N)
            }
        }
        k || (k = new r);
        var U = k.get(t);
        if (U) return U;
        k.set(t, R), S(t) ? t.forEach(function(r) {
            R.add(e(r, n, O, r, t, k))
        }) : y(t) && t.forEach(function(r, i) {
            R.set(i, e(r, n, O, i, t, k))
        });
        var Y = L ? I ? p : f : I ? keysIn : x,
            j = P ? void 0 : Y(t);
        return i(j || t, function(r, i) {
            j && (r = t[i = r]), a(R, i, e(r, n, O, i, t, k))
        }), R
    }
}
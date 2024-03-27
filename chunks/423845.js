function(e, t, n) {
    var r = n("620014"),
        i = n("580755"),
        a = n("805100"),
        o = n("224760"),
        s = n("915212"),
        u = n("228057"),
        c = n("161984"),
        l = n("388456"),
        d = n("325512"),
        f = n("990393"),
        p = n("890179"),
        h = n("65064"),
        m = n("207635"),
        g = n("354199"),
        _ = n("671660"),
        b = n("402428"),
        v = n("207757"),
        y = n("397985"),
        E = n("706627"),
        S = n("822480"),
        x = n("58834"),
        w = n("453342"),
        T = "[object Arguments]",
        C = "[object Function]",
        D = "[object Object]",
        O = {};
    O[T] = O["[object Array]"] = O["[object ArrayBuffer]"] = O["[object DataView]"] = O["[object Boolean]"] = O["[object Date]"] = O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Map]"] = O["[object Number]"] = O[D] = O["[object RegExp]"] = O["[object Set]"] = O["[object String]"] = O["[object Symbol]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = !0, O["[object Error]"] = O[C] = O["[object WeakMap]"] = !1;
    e.exports = function e(t, n, M, A, k, R) {
        var N, I = 1 & n,
            L = 2 & n,
            P = 4 & n;
        if (M && (N = k ? M(t, A, k, R) : M(t)), void 0 !== N) return N;
        if (!E(t)) return t;
        var F = b(t);
        if (F) {
            if (N = m(t), !I) return c(t, N)
        } else {
            var B = h(t),
                U = B == C || "[object GeneratorFunction]" == B;
            if (v(t)) return u(t, I);
            if (B == D || B == T || U && !k) {
                if (N = L || U ? {} : _(t), !I) return L ? d(t, s(N, t)) : l(t, o(N, t))
            } else {
                if (!O[B]) return k ? t : {};
                N = g(t, B, I)
            }
        }
        R || (R = new r);
        var Y = R.get(t);
        if (Y) return Y;
        R.set(t, N), S(t) ? t.forEach(function(r) {
            N.add(e(r, n, M, r, t, R))
        }) : y(t) && t.forEach(function(r, i) {
            N.set(i, e(r, n, M, i, t, R))
        });
        var j = P ? L ? p : f : L ? w : x,
            z = F ? void 0 : j(t);
        return i(z || t, function(r, i) {
            z && (r = t[i = r]), a(N, i, e(r, n, M, i, t, R))
        }), N
    }
}
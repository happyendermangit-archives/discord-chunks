function(e, t, r) {
    var n = r("146007"),
        u = r("334782"),
        a = r("253792"),
        o = r("366726"),
        i = r("855023"),
        s = r("552500"),
        l = r("561449"),
        c = r("619754"),
        f = r("310524"),
        d = r("904526"),
        D = r("552647"),
        h = r("540956"),
        v = r("925400"),
        p = r("493118"),
        C = r("789078"),
        g = r("725502"),
        B = r("591350"),
        E = r("751279"),
        m = r("285162"),
        A = r("154948"),
        F = r("466731"),
        b = "[object Arguments]",
        y = "[object Function]",
        w = "[object Object]",
        O = {};
    O[b] = O["[object Array]"] = O["[object ArrayBuffer]"] = O["[object DataView]"] = O["[object Boolean]"] = O["[object Date]"] = O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Map]"] = O["[object Number]"] = O[w] = O["[object RegExp]"] = O["[object Set]"] = O["[object String]"] = O["[object Symbol]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = !0, O["[object Error]"] = O[y] = O["[object WeakMap]"] = !1;
    e.exports = function e(t, r, x, k, P, j) {
        var S, R = 1 & r,
            T = 2 & r,
            M = 4 & r;
        if (x && (S = P ? x(t, k, P, j) : x(t)), void 0 !== S) return S;
        if (!m(t)) return t;
        var N = g(t);
        if (N) {
            if (S = v(t), !R) return l(t, S)
        } else {
            var z = h(t),
                I = z == y || "[object GeneratorFunction]" == z;
            if (B(t)) return s(t, R);
            if (z == w || z == b || I && !P) {
                if (S = T || I ? {} : C(t), !R) return T ? f(t, i(S, t)) : c(t, o(S, t))
            } else {
                if (!O[z]) return P ? t : {};
                S = p(t, z, R)
            }
        }
        j || (j = new n);
        var W = j.get(t);
        if (W) return W;
        j.set(t, S), A(t) ? t.forEach(function(n) {
            S.add(e(n, r, x, n, t, j))
        }) : E(t) && t.forEach(function(n, u) {
            S.set(u, e(n, r, x, u, t, j))
        });
        var L = M ? T ? D : d : T ? keysIn : F,
            _ = N ? void 0 : L(t);
        return u(_ || t, function(n, u) {
            _ && (n = t[u = n]), a(S, u, e(n, r, x, u, t, j))
        }), S
    }
}
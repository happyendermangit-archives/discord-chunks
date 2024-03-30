function(t, e, r) {
    "use strict";
    var n = r("147018"),
        o = r("926515"),
        i = r("992051"),
        c = r("539459"),
        s = r("354848"),
        u = r("673743"),
        a = r("144748"),
        f = r("276321"),
        p = r("865312"),
        l = r("251069"),
        y = r("859209"),
        v = r("641236"),
        d = r("874652"),
        h = r("84297"),
        L = c.PROPER,
        O = c.CONFIGURABLE,
        S = h.IteratorPrototype,
        g = h.BUGGY_SAFARI_ITERATORS,
        x = v("iterator"),
        m = "keys",
        T = "values",
        b = "entries",
        _ = function() {
            return this
        };
    t.exports = function(t, e, r, c, v, h, A) {
        u(r, e, c);
        var k, P, j, w = function(t) {
                if (t === v && M) return M;
                if (!g && t && t in C) return C[t];
                switch (t) {
                    case m:
                    case T:
                    case b:
                        return function() {
                            return new r(this, t)
                        }
                }
                return function() {
                    return new r(this)
                }
            },
            R = e + " Iterator",
            I = !1,
            C = t.prototype,
            G = C[x] || C["@@iterator"] || v && C[v],
            M = !g && G || w(v),
            E = "Array" === e && C.entries || G;
        if (E && (k = a(E.call(new t))) !== Object.prototype && k.next && (!i && a(k) !== S && (f ? f(k, S) : !s(k[x]) && y(k, x, _)), p(k, R, !0, !0), i && (d[R] = _)), L && v === T && G && G.name !== T && (!i && O ? l(C, "name", T) : (I = !0, M = function() {
                return o(G, this)
            })), v) {
            if (P = {
                    values: w(T),
                    keys: h ? M : w(m),
                    entries: w(b)
                }, A)
                for (j in P)(g || I || !(j in C)) && y(C, j, P[j]);
            else n({
                target: e,
                proto: !0,
                forced: g || I
            }, P)
        }
        return (!i || A) && C[x] !== M && y(C, x, M, {
            name: v
        }), d[e] = M, P
    }
}
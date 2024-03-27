function(t, r, n) {
    "use strict";
    var e, o, i, u = n("212036"),
        f = n("325008"),
        c = n("161581"),
        a = n("354848"),
        s = n("622281"),
        y = n("740362"),
        h = n("974971"),
        p = n("938507"),
        v = n("251069"),
        d = n("859209"),
        l = n("4340"),
        g = n("838957"),
        A = n("144748"),
        w = n("276321"),
        b = n("641236"),
        x = n("457507"),
        T = n("644659"),
        E = T.enforce,
        I = T.get,
        R = c.Int8Array,
        m = R && R.prototype,
        O = c.Uint8ClampedArray,
        M = O && O.prototype,
        F = R && A(R),
        U = m && A(m),
        _ = Object.prototype,
        L = c.TypeError,
        B = b("toStringTag"),
        C = x("TYPED_ARRAY_TAG"),
        P = "TypedArrayConstructor",
        V = u && !!w && "Opera" !== h(c.opera),
        N = !1,
        W = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        },
        D = {
            BigInt64Array: 8,
            BigUint64Array: 8
        },
        Y = function(t) {
            var r = A(t);
            if (s(r)) {
                var n = I(r);
                return n && y(n, P) ? n[P] : Y(r)
            }
        },
        j = function(t) {
            if (!s(t)) return !1;
            var r = h(t);
            return y(W, r) || y(D, r)
        };
    for (e in W)(i = (o = c[e]) && o.prototype) ? E(i)[P] = o : V = !1;
    for (e in D)(i = (o = c[e]) && o.prototype) && (E(i)[P] = o);
    if ((!V || !a(F) || F === Function.prototype) && (F = function() {
            throw L("Incorrect invocation")
        }, V))
        for (e in W) c[e] && w(c[e], F);
    if ((!V || !U || U === _) && (U = F.prototype, V))
        for (e in W) c[e] && w(c[e].prototype, U);
    if (V && A(M) !== U && w(M, U), f && !y(U, B))
        for (e in N = !0, l(U, B, {
                configurable: !0,
                get: function() {
                    return s(this) ? this[C] : void 0
                }
            }), W) c[e] && v(c[e], C, e);
    t.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: V,
        TYPED_ARRAY_TAG: N && C,
        aTypedArray: function(t) {
            if (j(t)) return t;
            throw L("Target is not a typed array")
        },
        aTypedArrayConstructor: function(t) {
            if (a(t) && (!w || g(F, t))) return t;
            throw L(p(t) + " is not a typed array constructor")
        },
        exportTypedArrayMethod: function(t, r, n, e) {
            if (f) {
                if (n)
                    for (var o in W) {
                        var i = c[o];
                        if (i && y(i.prototype, t)) try {
                            delete i.prototype[t]
                        } catch (n) {
                            try {
                                i.prototype[t] = r
                            } catch (t) {}
                        }
                    }(!U[t] || n) && d(U, t, n ? r : V && m[t] || r, e)
            }
        },
        exportTypedArrayStaticMethod: function(t, r, n) {
            var e, o;
            if (f) {
                if (w) {
                    if (n) {
                        for (e in W)
                            if ((o = c[e]) && y(o, t)) try {
                                delete o[t]
                            } catch (t) {}
                    }
                    if (F[t] && !n) return;
                    try {
                        return d(F, t, n ? r : V && F[t] || r)
                    } catch (t) {}
                }
                for (e in W)(o = c[e]) && (!o[t] || n) && d(o, t, r)
            }
        },
        getTypedArrayConstructor: Y,
        isView: function(t) {
            if (!s(t)) return !1;
            var r = h(t);
            return "DataView" === r || y(W, r) || y(D, r)
        },
        isTypedArray: j,
        TypedArray: F,
        TypedArrayPrototype: U
    }
}
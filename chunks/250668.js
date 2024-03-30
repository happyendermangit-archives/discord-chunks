function(t, r, n) {
    "use strict";
    var e = n("147018"),
        o = n("161581"),
        i = n("926515"),
        u = n("325008"),
        f = n("22092"),
        c = n("192291"),
        a = n("476579"),
        s = n("603528"),
        y = n("879"),
        h = n("251069"),
        p = n("907533"),
        v = n("552028"),
        d = n("646328"),
        l = n("18316"),
        g = n("712560"),
        A = n("966606"),
        w = n("740362"),
        b = n("974971"),
        x = n("622281"),
        T = n("323979"),
        E = n("803938"),
        I = n("838957"),
        R = n("276321"),
        m = n("537443").f,
        O = n("12367"),
        M = n("335225").forEach,
        F = n("930990"),
        U = n("4340"),
        _ = n("97131"),
        L = n("347722"),
        B = n("644659"),
        C = n("95948"),
        P = B.get,
        V = B.set,
        N = B.enforce,
        W = _.f,
        D = L.f,
        Y = o.RangeError,
        j = a.ArrayBuffer,
        S = j.prototype,
        k = a.DataView,
        G = c.NATIVE_ARRAY_BUFFER_VIEWS,
        K = c.TYPED_ARRAY_TAG,
        q = c.TypedArray,
        z = c.TypedArrayPrototype,
        H = c.aTypedArrayConstructor,
        J = c.isTypedArray,
        Q = "BYTES_PER_ELEMENT",
        X = "Wrong length",
        Z = function(t, r) {
            H(t);
            for (var n = 0, e = r.length, o = new t(e); e > n;) o[n] = r[n++];
            return o
        },
        $ = function(t, r) {
            U(t, r, {
                configurable: !0,
                get: function() {
                    return P(this)[r]
                }
            })
        },
        tt = function(t) {
            var r;
            return I(S, t) || "ArrayBuffer" === (r = b(t)) || "SharedArrayBuffer" === r
        },
        tr = function(t, r) {
            return J(t) && !T(r) && r in t && p(+r) && r >= 0
        },
        tn = function(t, r) {
            return tr(t, r = A(r)) ? y(2, t[r]) : D(t, r)
        },
        te = function(t, r, n) {
            return tr(t, r = A(r)) && x(n) && w(n, "value") && !w(n, "get") && !w(n, "set") && !n.configurable && (!w(n, "writable") || n.writable) && (!w(n, "enumerable") || n.enumerable) ? (t[r] = n.value, t) : W(t, r, n)
        };
    u ? (!G && (L.f = tn, _.f = te, $(z, "buffer"), $(z, "byteOffset"), $(z, "byteLength"), $(z, "length")), e({
        target: "Object",
        stat: !0,
        forced: !G
    }, {
        getOwnPropertyDescriptor: tn,
        defineProperty: te
    }), t.exports = function(t, r, n) {
        var u = t.match(/\d+/)[0] / 8,
            c = t + (n ? "Clamped" : "") + "Array",
            a = "get" + t,
            y = "set" + t,
            p = o[c],
            A = p,
            w = A && A.prototype,
            b = {},
            T = function(t, r) {
                var n = P(t);
                return n.view[a](r * u + n.byteOffset, !0)
            },
            I = function(t, r, e) {
                var o = P(t);
                o.view[y](r * u + o.byteOffset, n ? g(e) : e, !0)
            },
            U = function(t, r) {
                W(t, r, {
                    get: function() {
                        return T(this, r)
                    },
                    set: function(t) {
                        return I(this, r, t)
                    },
                    enumerable: !0
                })
            };
        G ? f && (A = r(function(t, r, n, e) {
            return s(t, w), C(x(r) ? tt(r) ? void 0 !== e ? new p(r, l(n, u), e) : void 0 !== n ? new p(r, l(n, u)) : new p(r) : J(r) ? Z(A, r) : i(O, A, r) : new p(d(r)), t, A)
        }), R && R(A, q), M(m(p), function(t) {
            !(t in A) && h(A, t, p[t])
        }), A.prototype = w) : (A = r(function(t, r, n, e) {
            s(t, w);
            var o, f, c, a = 0,
                y = 0;
            if (x(r)) {
                if (tt(r)) {
                    o = r, y = l(n, u);
                    var h = r.byteLength;
                    if (void 0 === e) {
                        if (h % u || (f = h - y) < 0) throw Y(X)
                    } else if ((f = v(e) * u) + y > h) throw Y(X);
                    c = f / u
                } else if (J(r)) return Z(A, r);
                else return i(O, A, r)
            } else o = new j(f = (c = d(r)) * u);
            for (V(t, {
                    buffer: o,
                    byteOffset: y,
                    byteLength: f,
                    length: c,
                    view: new k(o)
                }); a < c;) U(t, a++)
        }), R && R(A, q), w = A.prototype = E(z)), w.constructor !== A && h(w, "constructor", A), N(w).TypedArrayConstructor = A, K && h(w, K, c);
        var _ = A !== p;
        b[c] = A, e({
            global: !0,
            constructor: !0,
            forced: _,
            sham: !G
        }, b), !(Q in A) && h(A, Q, u), !(Q in w) && h(w, Q, u), F(c)
    }) : t.exports = function() {}
}
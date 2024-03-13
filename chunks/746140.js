function(e, t, r) {
    "use strict";

    function n(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(e) {
            return "'" + e + "'"
        }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
    }

    function u(e) {
        return !!e && !!e[q]
    }

    function a(e) {
        var t;
        return !!e && (function(e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return r === Object || "function" == typeof r && Function.toString.call(r) === V
        }(e) || Array.isArray(e) || !!e[_] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[_]) || c(e) || f(e))
    }

    function o(e, t, r) {
        void 0 === r && (r = !1), 0 === i(e) ? (r ? Object.keys : U)(e).forEach(function(n) {
            r && "symbol" == typeof n || t(n, e[n], e)
        }) : e.forEach(function(r, n) {
            return t(n, r, e)
        })
    }

    function i(e) {
        var t = e[q];
        return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : c(e) ? 2 : f(e) ? 3 : 0
    }

    function s(e, t) {
        return 2 === i(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
    }
    r.r(t), r.d(t, {
        createDraft: function() {
            return Y
        },
        finishDraft: function() {
            return G
        },
        isDraft: function() {
            return u
        },
        produce: function() {
            return Q
        }
    }), r("70102"), r("222007"), r("424973"), r("843762"), r("426094");

    function l(e, t, r) {
        var n = i(e);
        2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
    }

    function c(e) {
        return z && e instanceof Map
    }

    function f(e) {
        return I && e instanceof Set
    }

    function d(e) {
        return e.o || e.t
    }

    function D(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = H(e);
        delete t[q];
        for (var r = U(t), n = 0; n < r.length; n++) {
            var u = r[n],
                a = t[u];
            !1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[u] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: e[u]
            })
        }
        return Object.create(Object.getPrototypeOf(e), t)
    }

    function h(e, t) {
        return void 0 === t && (t = !1), p(e) || u(e) || !a(e) || (i(e) > 1 && (e.set = e.add = e.clear = e.delete = v), Object.freeze(e), t && o(e, function(e, t) {
            return h(t, !0)
        }, !0)), e
    }

    function v() {
        n(2)
    }

    function p(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e)
    }

    function C(e) {
        var t = K[e];
        return t || n(18, e), t
    }

    function g() {
        return M
    }

    function B(e, t) {
        t && (C("Patches"), e.u = [], e.s = [], e.v = t)
    }

    function E(e) {
        m(e), e.p.forEach(F), e.p = null
    }

    function m(e) {
        e === M && (M = e.l)
    }

    function A(e) {
        return M = {
            p: [],
            l: M,
            h: e,
            m: !0,
            _: 0
        }
    }

    function F(e) {
        var t = e[q];
        0 === t.i || 1 === t.i ? t.j() : t.g = !0
    }

    function b(e, t) {
        t._ = t.p.length;
        var r = t.p[0],
            u = void 0 !== e && e !== r;
        return t.h.O || C("ES5").S(t, e, u), u ? (r[q].P && (E(t), n(4)), a(e) && (e = y(t, e), t.l || O(t, e)), t.u && C("Patches").M(r[q].t, e, t.u, t.s)) : e = y(t, r, []), E(t), t.u && t.v(t.u, t.s), e !== L ? e : void 0
    }

    function y(e, t, r) {
        if (p(t)) return t;
        var n = t[q];
        if (!n) return o(t, function(u, a) {
            return w(e, n, t, u, a, r)
        }, !0), t;
        if (n.A !== e) return t;
        if (!n.P) return O(e, n.t, !0), n.t;
        if (!n.I) {
            n.I = !0, n.A._--;
            var u = 4 === n.i || 5 === n.i ? n.o = D(n.k) : n.o,
                a = u,
                i = !1;
            3 === n.i && (a = new Set(u), u.clear(), i = !0), o(a, function(t, a) {
                return w(e, n, u, t, a, r, i)
            }), O(e, u, !1), r && e.u && C("Patches").N(n, r, e.u, e.s)
        }
        return n.o
    }

    function w(e, t, r, n, o, i, c) {
        if (u(o)) {
            var f = y(e, o, i && t && 3 !== t.i && !s(t.R, n) ? i.concat(n) : void 0);
            if (l(r, n, f), !u(f)) return;
            e.m = !1
        } else c && r.add(o);
        if (a(o) && !p(o)) {
            if (!e.h.D && e._ < 1) return;
            y(e, o), t && t.A.l || O(e, o)
        }
    }

    function O(e, t, r) {
        void 0 === r && (r = !1), !e.l && e.h.D && e.m && h(t, r)
    }

    function x(e, t) {
        var r = e[q];
        return (r ? d(r) : e)[t]
    }

    function k(e, t) {
        if (t in e)
            for (var r = Object.getPrototypeOf(e); r;) {
                var n = Object.getOwnPropertyDescriptor(r, t);
                if (n) return n;
                r = Object.getPrototypeOf(r)
            }
    }

    function P(e) {
        e.P || (e.P = !0, e.l && P(e.l))
    }

    function j(e) {
        e.o || (e.o = D(e.t))
    }

    function S(e, t, r) {
        var n, u, a, o, i, s, l, d, D, h = c(t) ? C("MapSet").F(t, r) : f(t) ? C("MapSet").T(t, r) : e.O ? (n = t, u = r, i = o = {
            i: (a = Array.isArray(n)) ? 1 : 0,
            A: u ? u.A : M,
            P: !1,
            I: !1,
            R: {},
            l: u,
            t: n,
            k: null,
            o: null,
            j: null,
            C: !1
        }, s = $, a && (i = [o], s = X), d = (l = Proxy.revocable(i, s)).revoke, D = l.proxy, o.k = D, o.j = d, D) : C("ES5").J(t, r);
        return (r ? r.A : M).p.push(h), h
    }

    function R(e, t) {
        switch (t) {
            case 2:
                return new Map(e);
            case 3:
                return Array.from(e)
        }
        return D(e)
    }
    var T, M, N = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        z = "undefined" != typeof Map,
        I = "undefined" != typeof Set,
        W = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
        L = N ? Symbol.for("immer-nothing") : ((T = {})["immer-nothing"] = !0, T),
        _ = N ? Symbol.for("immer-draftable") : "__$immer_draftable",
        q = N ? Symbol.for("immer-state") : "__$immer_state",
        V = "" + Object.prototype.constructor,
        U = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : Object.getOwnPropertyNames,
        H = Object.getOwnPropertyDescriptors || function(e) {
            var t = {};
            return U(e).forEach(function(r) {
                t[r] = Object.getOwnPropertyDescriptor(e, r)
            }), t
        },
        K = {},
        $ = {
            get: function(e, t) {
                if (t === q) return e;
                var r, n, u, o = d(e);
                if (!s(o, t)) {
                    ;
                    return r = e, (u = k(o, t)) ? "value" in u ? u.value : null === (n = u.get) || void 0 === n ? void 0 : n.call(r.k) : void 0
                }
                var i = o[t];
                return e.I || !a(i) ? i : i === x(e.t, t) ? (j(e), e.o[t] = S(e.A.h, i, e)) : i
            },
            has: function(e, t) {
                return t in d(e)
            },
            ownKeys: function(e) {
                return Reflect.ownKeys(d(e))
            },
            set: function(e, t, r) {
                var n = k(d(e), t);
                if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
                if (!e.P) {
                    var u, a, o = x(d(e), t),
                        i = null == o ? void 0 : o[q];
                    if (i && i.t === r) return e.o[t] = r, e.R[t] = !1, !0;
                    if (((u = r) === (a = o) ? 0 !== u || 1 / u == 1 / a : u != u && a != a) && (void 0 !== r || s(e.t, t))) return !0;
                    j(e), P(e)
                }
                return e.o[t] === r && (void 0 !== r || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0
            },
            deleteProperty: function(e, t) {
                return void 0 !== x(e.t, t) || t in e.t ? (e.R[t] = !1, j(e), P(e)) : delete e.R[t], e.o && delete e.o[t], !0
            },
            getOwnPropertyDescriptor: function(e, t) {
                var r = d(e),
                    n = Reflect.getOwnPropertyDescriptor(r, t);
                return n ? {
                    writable: !0,
                    configurable: 1 !== e.i || "length" !== t,
                    enumerable: n.enumerable,
                    value: r[t]
                } : n
            },
            defineProperty: function() {
                n(11)
            },
            getPrototypeOf: function(e) {
                return Object.getPrototypeOf(e.t)
            },
            setPrototypeOf: function() {
                n(12)
            }
        },
        X = {};
    o($, function(e, t) {
        X[e] = function() {
            return arguments[0] = arguments[0][0], t.apply(this, arguments)
        }
    }), X.deleteProperty = function(e, t) {
        return X.set.call(this, e, t, void 0)
    }, X.set = function(e, t, r) {
        return $.set.call(this, e[0], t, r, e[0])
    };
    var J = new(function() {
            function e(e) {
                var t = this;
                this.O = W, this.D = !0, this.produce = function(e, r, u) {
                    if ("function" == typeof e && "function" != typeof r) {
                        var o, i = r;
                        return r = e,
                            function(e) {
                                var n = this;
                                void 0 === e && (e = i);
                                for (var u = arguments.length, a = Array(u > 1 ? u - 1 : 0), o = 1; o < u; o++) a[o - 1] = arguments[o];
                                return t.produce(e, function(e) {
                                    var t;
                                    return (t = r).call.apply(t, [n, e].concat(a))
                                })
                            }
                    }
                    if ("function" != typeof r && n(6), void 0 !== u && "function" != typeof u && n(7), a(e)) {
                        var s = A(t),
                            l = S(t, e, void 0),
                            c = !0;
                        try {
                            o = r(l), c = !1
                        } finally {
                            c ? E(s) : m(s)
                        }
                        return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(e) {
                            return B(s, u), b(e, s)
                        }, function(e) {
                            throw E(s), e
                        }) : (B(s, u), b(o, s))
                    }
                    if (!e || "object" != typeof e) {
                        if (void 0 === (o = r(e)) && (o = e), o === L && (o = void 0), t.D && h(o, !0), u) {
                            var f = [],
                                d = [];
                            C("Patches").M(e, o, f, d), u(f, d)
                        }
                        return o
                    }
                    n(21, e)
                }, this.produceWithPatches = function(e, r) {
                    if ("function" == typeof e) return function(r) {
                        for (var n = arguments.length, u = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) u[a - 1] = arguments[a];
                        return t.produceWithPatches(r, function(t) {
                            return e.apply(void 0, [t].concat(u))
                        })
                    };
                    var n, u, a = t.produce(e, r, function(e, t) {
                        n = e, u = t
                    });
                    return "undefined" != typeof Promise && a instanceof Promise ? a.then(function(e) {
                        return [e, n, u]
                    }) : [a, n, u]
                }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
            }
            var t = e.prototype;
            return t.createDraft = function(e) {
                a(e) || n(8), u(e) && (u(t = e) || n(22, t), e = function e(t) {
                    if (!a(t)) return t;
                    var r, n = t[q],
                        u = i(t);
                    if (n) {
                        if (!n.P && (n.i < 4 || !C("ES5").K(n))) return n.t;
                        n.I = !0, r = R(t, u), n.I = !1
                    } else r = R(t, u);
                    return o(r, function(t, u) {
                        var a, o;
                        n && (a = n.t, o = t, (2 === i(a) ? a.get(o) : a[o]) === u) || l(r, t, e(u))
                    }), 3 === u ? new Set(r) : r
                }(t));
                var t, r = A(this),
                    s = S(this, e, void 0);
                return s[q].C = !0, m(r), s
            }, t.finishDraft = function(e, t) {
                var r = (e && e[q]).A;
                return B(r, t), b(void 0, r)
            }, t.setAutoFreeze = function(e) {
                this.D = e
            }, t.setUseProxies = function(e) {
                e && !W && n(20), this.O = e
            }, t.applyPatches = function(e, t) {
                for (r = t.length - 1; r >= 0; r--) {
                    var r, n = t[r];
                    if (0 === n.path.length && "replace" === n.op) {
                        e = n.value;
                        break
                    }
                }
                r > -1 && (t = t.slice(r + 1));
                var a = C("Patches").$;
                return u(e) ? a(e, t) : this.produce(e, function(e) {
                    return a(e, t)
                })
            }, e
        }()),
        Q = J.produce,
        Y = (J.produceWithPatches.bind(J), J.setAutoFreeze.bind(J), J.setUseProxies.bind(J), J.applyPatches.bind(J), J.createDraft.bind(J)),
        G = J.finishDraft.bind(J)
}
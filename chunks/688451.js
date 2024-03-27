function(e, t, n) {
    "use strict";

    function r(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(e) {
            return "'" + e + "'"
        }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
    }

    function i(e) {
        return !!e && !!e[z]
    }

    function a(e) {
        var t;
        return !!e && (function(e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return n === Object || "function" == typeof n && Function.toString.call(n) === H
        }(e) || Array.isArray(e) || !!e[j] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[j]) || l(e) || d(e))
    }

    function o(e, t, n) {
        void 0 === n && (n = !1), 0 === s(e) ? (n ? Object.keys : G)(e).forEach(function(r) {
            n && "symbol" == typeof r || t(r, e[r], e)
        }) : e.forEach(function(n, r) {
            return t(r, n, e)
        })
    }

    function s(e) {
        var t = e[z];
        return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : l(e) ? 2 : d(e) ? 3 : 0
    }

    function u(e, t) {
        return 2 === s(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
    }
    n.r(t), n.d(t, {
        createDraft: function() {
            return Z
        },
        finishDraft: function() {
            return X
        },
        isDraft: function() {
            return i
        },
        produce: function() {
            return Q
        }
    });

    function c(e, t, n) {
        var r = s(e);
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
    }

    function l(e) {
        return F && e instanceof Map
    }

    function d(e) {
        return B && e instanceof Set
    }

    function f(e) {
        return e.o || e.t
    }

    function p(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = V(e);
        delete t[z];
        for (var n = G(t), r = 0; r < n.length; r++) {
            var i = n[r],
                a = t[i];
            !1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[i] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: e[i]
            })
        }
        return Object.create(Object.getPrototypeOf(e), t)
    }

    function h(e, t) {
        return void 0 === t && (t = !1), g(e) || i(e) || !a(e) || (s(e) > 1 && (e.set = e.add = e.clear = e.delete = m), Object.freeze(e), t && o(e, function(e, t) {
            return h(t, !0)
        }, !0)), e
    }

    function m() {
        r(2)
    }

    function g(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e)
    }

    function _(e) {
        var t = $[e];
        return t || r(18, e), t
    }

    function b() {
        return L
    }

    function v(e, t) {
        t && (_("Patches"), e.u = [], e.s = [], e.v = t)
    }

    function y(e) {
        E(e), e.p.forEach(x), e.p = null
    }

    function E(e) {
        e === L && (L = e.l)
    }

    function S(e) {
        return L = {
            p: [],
            l: L,
            h: e,
            m: !0,
            _: 0
        }
    }

    function x(e) {
        var t = e[z];
        0 === t.i || 1 === t.i ? t.j() : t.g = !0
    }

    function w(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
            i = void 0 !== e && e !== n;
        return t.h.O || _("ES5").S(t, e, i), i ? (n[z].P && (y(t), r(4)), a(e) && (e = T(t, e), t.l || D(t, e)), t.u && _("Patches").M(n[z].t, e, t.u, t.s)) : e = T(t, n, []), y(t), t.u && t.v(t.u, t.s), e !== Y ? e : void 0
    }

    function T(e, t, n) {
        if (g(t)) return t;
        var r = t[z];
        if (!r) return o(t, function(i, a) {
            return C(e, r, t, i, a, n)
        }, !0), t;
        if (r.A !== e) return t;
        if (!r.P) return D(e, r.t, !0), r.t;
        if (!r.I) {
            r.I = !0, r.A._--;
            var i = 4 === r.i || 5 === r.i ? r.o = p(r.k) : r.o,
                a = i,
                s = !1;
            3 === r.i && (a = new Set(i), i.clear(), s = !0), o(a, function(t, a) {
                return C(e, r, i, t, a, n, s)
            }), D(e, i, !1), n && e.u && _("Patches").N(r, n, e.u, e.s)
        }
        return r.o
    }

    function C(e, t, n, r, o, s, l) {
        if (i(o)) {
            var d = T(e, o, s && t && 3 !== t.i && !u(t.R, r) ? s.concat(r) : void 0);
            if (c(n, r, d), !i(d)) return;
            e.m = !1
        } else l && n.add(o);
        if (a(o) && !g(o)) {
            if (!e.h.D && e._ < 1) return;
            T(e, o), t && t.A.l || D(e, o)
        }
    }

    function D(e, t, n) {
        void 0 === n && (n = !1), !e.l && e.h.D && e.m && h(t, n)
    }

    function O(e, t) {
        var n = e[z];
        return (n ? f(n) : e)[t]
    }

    function M(e, t) {
        if (t in e)
            for (var n = Object.getPrototypeOf(e); n;) {
                var r = Object.getOwnPropertyDescriptor(n, t);
                if (r) return r;
                n = Object.getPrototypeOf(n)
            }
    }

    function A(e) {
        e.P || (e.P = !0, e.l && A(e.l))
    }

    function k(e) {
        e.o || (e.o = p(e.t))
    }

    function R(e, t, n) {
        var r, i, a, o, s, u, c, f, p, h = l(t) ? _("MapSet").F(t, n) : d(t) ? _("MapSet").T(t, n) : e.O ? (r = t, i = n, s = o = {
            i: (a = Array.isArray(r)) ? 1 : 0,
            A: i ? i.A : L,
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: r,
            k: null,
            o: null,
            j: null,
            C: !1
        }, u = W, a && (s = [o], u = K), f = (c = Proxy.revocable(s, u)).revoke, p = c.proxy, o.k = p, o.j = f, p) : _("ES5").J(t, n);
        return (n ? n.A : L).p.push(h), h
    }

    function N(e, t) {
        switch (t) {
            case 2:
                return new Map(e);
            case 3:
                return Array.from(e)
        }
        return p(e)
    }
    var I, L, P = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        F = "undefined" != typeof Map,
        B = "undefined" != typeof Set,
        U = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
        Y = P ? Symbol.for("immer-nothing") : ((I = {})["immer-nothing"] = !0, I),
        j = P ? Symbol.for("immer-draftable") : "__$immer_draftable",
        z = P ? Symbol.for("immer-state") : "__$immer_state",
        H = "" + Object.prototype.constructor,
        G = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : Object.getOwnPropertyNames,
        V = Object.getOwnPropertyDescriptors || function(e) {
            var t = {};
            return G(e).forEach(function(n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n)
            }), t
        },
        $ = {},
        W = {
            get: function(e, t) {
                if (t === z) return e;
                var n, r, i, o = f(e);
                if (!u(o, t)) {
                    ;
                    return n = e, (i = M(o, t)) ? "value" in i ? i.value : null === (r = i.get) || void 0 === r ? void 0 : r.call(n.k) : void 0
                }
                var s = o[t];
                return e.I || !a(s) ? s : s === O(e.t, t) ? (k(e), e.o[t] = R(e.A.h, s, e)) : s
            },
            has: function(e, t) {
                return t in f(e)
            },
            ownKeys: function(e) {
                return Reflect.ownKeys(f(e))
            },
            set: function(e, t, n) {
                var r = M(f(e), t);
                if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
                if (!e.P) {
                    var i, a, o = O(f(e), t),
                        s = null == o ? void 0 : o[z];
                    if (s && s.t === n) return e.o[t] = n, e.R[t] = !1, !0;
                    if (((i = n) === (a = o) ? 0 !== i || 1 / i == 1 / a : i != i && a != a) && (void 0 !== n || u(e.t, t))) return !0;
                    k(e), A(e)
                }
                return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
            },
            deleteProperty: function(e, t) {
                return void 0 !== O(e.t, t) || t in e.t ? (e.R[t] = !1, k(e), A(e)) : delete e.R[t], e.o && delete e.o[t], !0
            },
            getOwnPropertyDescriptor: function(e, t) {
                var n = f(e),
                    r = Reflect.getOwnPropertyDescriptor(n, t);
                return r ? {
                    writable: !0,
                    configurable: 1 !== e.i || "length" !== t,
                    enumerable: r.enumerable,
                    value: n[t]
                } : r
            },
            defineProperty: function() {
                r(11)
            },
            getPrototypeOf: function(e) {
                return Object.getPrototypeOf(e.t)
            },
            setPrototypeOf: function() {
                r(12)
            }
        },
        K = {};
    o(W, function(e, t) {
        K[e] = function() {
            return arguments[0] = arguments[0][0], t.apply(this, arguments)
        }
    }), K.deleteProperty = function(e, t) {
        return K.set.call(this, e, t, void 0)
    }, K.set = function(e, t, n) {
        return W.set.call(this, e[0], t, n, e[0])
    };
    var q = new(function() {
            function e(e) {
                var t = this;
                this.O = U, this.D = !0, this.produce = function(e, n, i) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var o, s = n;
                        return n = e,
                            function(e) {
                                var r = this;
                                void 0 === e && (e = s);
                                for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                                return t.produce(e, function(e) {
                                    var t;
                                    return (t = n).call.apply(t, [r, e].concat(a))
                                })
                            }
                    }
                    if ("function" != typeof n && r(6), void 0 !== i && "function" != typeof i && r(7), a(e)) {
                        var u = S(t),
                            c = R(t, e, void 0),
                            l = !0;
                        try {
                            o = n(c), l = !1
                        } finally {
                            l ? y(u) : E(u)
                        }
                        return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(e) {
                            return v(u, i), w(e, u)
                        }, function(e) {
                            throw y(u), e
                        }) : (v(u, i), w(o, u))
                    }
                    if (!e || "object" != typeof e) {
                        if (void 0 === (o = n(e)) && (o = e), o === Y && (o = void 0), t.D && h(o, !0), i) {
                            var d = [],
                                f = [];
                            _("Patches").M(e, o, d, f), i(d, f)
                        }
                        return o
                    }
                    r(21, e)
                }, this.produceWithPatches = function(e, n) {
                    if ("function" == typeof e) return function(n) {
                        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                        return t.produceWithPatches(n, function(t) {
                            return e.apply(void 0, [t].concat(i))
                        })
                    };
                    var r, i, a = t.produce(e, n, function(e, t) {
                        r = e, i = t
                    });
                    return "undefined" != typeof Promise && a instanceof Promise ? a.then(function(e) {
                        return [e, r, i]
                    }) : [a, r, i]
                }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
            }
            var t = e.prototype;
            return t.createDraft = function(e) {
                a(e) || r(8), i(e) && (i(t = e) || r(22, t), e = function e(t) {
                    if (!a(t)) return t;
                    var n, r = t[z],
                        i = s(t);
                    if (r) {
                        if (!r.P && (r.i < 4 || !_("ES5").K(r))) return r.t;
                        r.I = !0, n = N(t, i), r.I = !1
                    } else n = N(t, i);
                    return o(n, function(t, i) {
                        var a, o;
                        r && (a = r.t, o = t, (2 === s(a) ? a.get(o) : a[o]) === i) || c(n, t, e(i))
                    }), 3 === i ? new Set(n) : n
                }(t));
                var t, n = S(this),
                    u = R(this, e, void 0);
                return u[z].C = !0, E(n), u
            }, t.finishDraft = function(e, t) {
                var n = (e && e[z]).A;
                return v(n, t), w(void 0, n)
            }, t.setAutoFreeze = function(e) {
                this.D = e
            }, t.setUseProxies = function(e) {
                e && !U && r(20), this.O = e
            }, t.applyPatches = function(e, t) {
                for (n = t.length - 1; n >= 0; n--) {
                    var n, r = t[n];
                    if (0 === r.path.length && "replace" === r.op) {
                        e = r.value;
                        break
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var a = _("Patches").$;
                return i(e) ? a(e, t) : this.produce(e, function(e) {
                    return a(e, t)
                })
            }, e
        }()),
        Q = q.produce,
        Z = (q.produceWithPatches.bind(q), q.setAutoFreeze.bind(q), q.setUseProxies.bind(q), q.applyPatches.bind(q), q.createDraft.bind(q)),
        X = q.finishDraft.bind(q)
}
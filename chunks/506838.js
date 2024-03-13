function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        P: function() {
            return Z
        },
        match: function() {
            return X
        }
    }), n("222007"), n("424973"), n("70102"), n("808653");
    let r = Symbol.for("@ts-pattern/matcher"),
        i = Symbol.for("@ts-pattern/isVariadic"),
        o = "@ts-pattern/anonymous-select-key",
        s = e => !!(e && "object" == typeof e),
        a = e => e && !!e[r],
        c = (e, t, n) => {
            if (a(e)) {
                let i = e[r](),
                    {
                        matched: o,
                        selections: s
                    } = i.match(t);
                return o && s && Object.keys(s).forEach(e => n(e, s[e])), o
            }
            if (s(e)) {
                if (!s(t)) return !1;
                if (Array.isArray(e)) {
                    if (!Array.isArray(t)) return !1;
                    let r = [],
                        o = [],
                        s = [];
                    for (let t of e.keys()) {
                        let n = e[t];
                        a(n) && n[i] ? s.push(n) : s.length ? o.push(n) : r.push(n)
                    }
                    if (s.length) {
                        if (s.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                        if (t.length < r.length + o.length) return !1;
                        let e = t.slice(0, r.length),
                            i = 0 === o.length ? [] : t.slice(-o.length),
                            a = t.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                        return r.every((t, r) => c(t, e[r], n)) && o.every((e, t) => c(e, i[t], n)) && (0 === s.length || c(s[0], a, n))
                    }
                    return e.length === t.length && e.every((e, r) => c(e, t[r], n))
                }
                return Object.keys(e).every(i => {
                    let o = e[i];
                    return (i in t || a(o) && "optional" === o[r]().matcherType) && c(o, t[i], n)
                })
            }
            return Object.is(t, e)
        },
        u = e => {
            var t, n, i;
            return s(e) ? a(e) ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : [] : Array.isArray(e) ? d(e, u) : d(Object.values(e), u) : []
        },
        d = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

    function l(e) {
        return Object.assign(e, {
            optional: () => f(e),
            and: t => v(e, t),
            or: t => g(e, t),
            select: t => void 0 === t ? m(e) : m(t, e)
        })
    }

    function f(e) {
        return l({
            [r]: () => ({
                match: t => {
                    let n = {},
                        r = (e, t) => {
                            n[e] = t
                        };
                    return void 0 === t ? (u(e).forEach(e => r(e, void 0)), {
                        matched: !0,
                        selections: n
                    }) : {
                        matched: c(e, t, r),
                        selections: n
                    }
                },
                getSelectionKeys: () => u(e),
                matcherType: "optional"
            })
        })
    }
    let p = (e, t) => {
            for (let n of e)
                if (!t(n)) return !1;
            return !0
        },
        h = (e, t) => {
            for (let [n, r] of e.entries())
                if (!t(r, n)) return !1;
            return !0
        };

    function v() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return l({
            [r]: () => ({
                match: e => {
                    let n = {},
                        r = (e, t) => {
                            n[e] = t
                        };
                    return {
                        matched: t.every(t => c(t, e, r)),
                        selections: n
                    }
                },
                getSelectionKeys: () => d(t, u),
                matcherType: "and"
            })
        })
    }

    function g() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return l({
            [r]: () => ({
                match: e => {
                    let n = {},
                        r = (e, t) => {
                            n[e] = t
                        };
                    return d(t, u).forEach(e => r(e, void 0)), {
                        matched: t.some(t => c(t, e, r)),
                        selections: n
                    }
                },
                getSelectionKeys: () => d(t, u),
                matcherType: "or"
            })
        })
    }

    function b(e) {
        return {
            [r]: () => ({
                match: t => ({
                    matched: !!e(t)
                })
            })
        }
    }

    function m() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let i = "string" == typeof t[0] ? t[0] : void 0,
            s = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
        return l({
            [r]: () => ({
                match: e => {
                    let t = {
                        [null != i ? i : o]: e
                    };
                    return {
                        matched: void 0 === s || c(s, e, (e, n) => {
                            t[e] = n
                        }),
                        selections: t
                    }
                },
                getSelectionKeys: () => [null != i ? i : o].concat(void 0 === s ? [] : u(s))
            })
        })
    }

    function y(e) {
        return "number" == typeof e
    }

    function x(e) {
        return "string" == typeof e
    }

    function w(e) {
        return "bigint" == typeof e
    }
    let S = l(b(function(e) {
            return !0
        })),
        k = e => Object.assign(l(e), {
            startsWith: t => k(v(e, b(e => x(e) && e.startsWith(t)))),
            endsWith: t => k(v(e, b(e => x(e) && e.endsWith(t)))),
            minLength: t => {
                var n;
                return k(v(e, (n = t, b(e => x(e) && e.length >= n))))
            },
            maxLength: t => {
                var n;
                return k(v(e, (n = t, b(e => x(e) && e.length <= n))))
            },
            includes: t => k(v(e, b(e => x(e) && e.includes(t)))),
            regex: t => k(v(e, b(e => x(e) && !!e.match(t))))
        }),
        E = k(b(x)),
        _ = (e, t) => b(n => y(n) && e <= n && t >= n),
        M = e => b(t => y(t) && t < e),
        D = e => b(t => y(t) && t > e),
        C = e => b(t => y(t) && t <= e),
        P = e => b(t => y(t) && t >= e),
        T = () => b(e => y(e) && Number.isInteger(e)),
        A = () => b(e => y(e) && Number.isFinite(e)),
        R = () => b(e => y(e) && e > 0),
        I = () => b(e => y(e) && e < 0),
        O = e => Object.assign(l(e), {
            between: (t, n) => O(v(e, _(t, n))),
            lt: t => O(v(e, M(t))),
            gt: t => O(v(e, D(t))),
            lte: t => O(v(e, C(t))),
            gte: t => O(v(e, P(t))),
            int: () => O(v(e, T())),
            finite: () => O(v(e, A())),
            positive: () => O(v(e, R())),
            negative: () => O(v(e, I()))
        }),
        j = O(b(y)),
        L = (e, t) => b(n => w(n) && e <= n && t >= n),
        N = e => b(t => w(t) && t < e),
        F = e => b(t => w(t) && t > e),
        B = e => b(t => w(t) && t <= e),
        z = e => b(t => w(t) && t >= e),
        K = () => b(e => w(e) && e > 0),
        V = () => b(e => w(e) && e < 0),
        U = e => Object.assign(l(e), {
            between: (t, n) => U(v(e, L(t, n))),
            lt: t => U(v(e, N(t))),
            gt: t => U(v(e, F(t))),
            lte: t => U(v(e, B(t))),
            gte: t => U(v(e, z(t))),
            positive: () => U(v(e, K())),
            negative: () => U(v(e, V()))
        }),
        H = U(b(w)),
        q = l(b(function(e) {
            return "boolean" == typeof e
        })),
        G = l(b(function(e) {
            return "symbol" == typeof e
        })),
        W = l(b(function(e) {
            return null == e
        }));
    var Z = {
        __proto__: null,
        matcher: r,
        optional: f,
        array: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function e(t) {
                var n;
                return Object.assign((n = t, Object.assign(n, {
                    *[Symbol.iterator]() {
                        yield Object.assign(n, {
                            [i]: !0
                        })
                    }
                })), {
                    optional: () => e(f(t)),
                    select: n => e(void 0 === n ? m(t) : m(n, t))
                })
            }({
                [r]: () => ({
                    match: e => {
                        if (!Array.isArray(e)) return {
                            matched: !1
                        };
                        if (0 === t.length) return {
                            matched: !0
                        };
                        let n = t[0],
                            r = {};
                        if (0 === e.length) return u(n).forEach(e => {
                            r[e] = []
                        }), {
                            matched: !0,
                            selections: r
                        };
                        let i = (e, t) => {
                            r[e] = (r[e] || []).concat([t])
                        };
                        return {
                            matched: e.every(e => c(n, e, i)),
                            selections: r
                        }
                    },
                    getSelectionKeys: () => 0 === t.length ? [] : u(t[0])
                })
            })
        },
        set: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return l({
                [r]: () => ({
                    match: e => {
                        if (!(e instanceof Set)) return {
                            matched: !1
                        };
                        let n = {};
                        if (0 === e.size) return {
                            matched: !0,
                            selections: n
                        };
                        if (0 === t.length) return {
                            matched: !0
                        };
                        let r = (e, t) => {
                                n[e] = (n[e] || []).concat([t])
                            },
                            i = t[0];
                        return {
                            matched: p(e, e => c(i, e, r)),
                            selections: n
                        }
                    },
                    getSelectionKeys: () => 0 === t.length ? [] : u(t[0])
                })
            })
        },
        map: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return l({
                [r]: () => ({
                    match: e => {
                        var n;
                        if (!(e instanceof Map)) return {
                            matched: !1
                        };
                        let r = {};
                        if (0 === e.size) return {
                            matched: !0,
                            selections: r
                        };
                        let i = (e, t) => {
                            r[e] = (r[e] || []).concat([t])
                        };
                        if (0 === t.length) return {
                            matched: !0
                        };
                        if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                        let [o, s] = t;
                        return {
                            matched: h(e, (e, t) => {
                                let n = c(o, t, i),
                                    r = c(s, e, i);
                                return n && r
                            }),
                            selections: r
                        }
                    },
                    getSelectionKeys: () => 0 === t.length ? [] : [...u(t[0]), ...u(t[1])]
                })
            })
        },
        intersection: v,
        union: g,
        not: function(e) {
            return l({
                [r]: () => ({
                    match: t => ({
                        matched: !c(e, t, () => {})
                    }),
                    getSelectionKeys: () => [],
                    matcherType: "not"
                })
            })
        },
        when: b,
        select: m,
        any: S,
        _: S,
        string: E,
        between: _,
        lt: M,
        gt: D,
        lte: C,
        gte: P,
        int: T,
        finite: A,
        positive: R,
        negative: I,
        number: j,
        betweenBigInt: L,
        ltBigInt: N,
        gtBigInt: F,
        lteBigInt: B,
        gteBigInt: z,
        positiveBigInt: K,
        negativeBigInt: V,
        bigint: H,
        boolean: q,
        symbol: G,
        nullish: W,
        instanceOf: function(e) {
            var t;
            return l(b((t = e, e => e instanceof t)))
        },
        shape: function(e) {
            return l(b(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (1 === t.length) {
                    let [e] = t;
                    return t => c(e, t, () => {})
                }
                if (2 === t.length) {
                    let [e, n] = t;
                    return c(e, n, () => {})
                }
                throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(t.length, "."))
            }(e)))
        }
    };
    let Y = {
        matched: !1,
        value: void 0
    };

    function X(e) {
        return new J(e, Y)
    }
    class J {
        with() {
            let e;
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            if (this.state.matched) return this;
            let i = n[n.length - 1],
                s = [n[0]];
            3 === n.length && "function" == typeof n[1] ? (s.push(n[0]), e = n[1]) : n.length > 2 && s.push(...n.slice(1, n.length - 1));
            let a = !1,
                u = {},
                d = (e, t) => {
                    a = !0, u[e] = t
                },
                l = s.some(e => c(e, this.input, d)) && (!e || e(this.input)) ? {
                    matched: !0,
                    value: i(a ? o in u ? u[o] : u : this.input, this.input)
                } : Y;
            return new J(this.input, l)
        }
        when(e, t) {
            if (this.state.matched) return this;
            let n = !!e(this.input);
            return new J(this.input, n ? {
                matched: !0,
                value: t(this.input, this.input)
            } : Y)
        }
        otherwise(e) {
            return this.state.matched ? this.state.value : e(this.input)
        }
        exhaustive() {
            return this.run()
        }
        run() {
            let e;
            if (this.state.matched) return this.state.value;
            try {
                e = JSON.stringify(this.input)
            } catch (t) {
                e = this.input
            }
            throw Error("Pattern matching error: no pattern matches value ".concat(e))
        }
        returnType() {
            return this
        }
        constructor(e, t) {
            this.input = void 0, this.state = void 0, this.input = e, this.state = t
        }
    }
}
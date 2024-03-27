function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        P: function() {
            return K
        },
        match: function() {
            return Q
        }
    });
    let r = Symbol.for("@ts-pattern/matcher"),
        i = Symbol.for("@ts-pattern/isVariadic"),
        a = "@ts-pattern/anonymous-select-key",
        o = e => !!(e && "object" == typeof e),
        s = e => e && !!e[r],
        u = (e, t, n) => {
            if (s(e)) {
                let {
                    matched: i,
                    selections: a
                } = e[r]().match(t);
                return i && a && Object.keys(a).forEach(e => n(e, a[e])), i
            }
            if (o(e)) {
                if (!o(t)) return !1;
                if (Array.isArray(e)) {
                    if (!Array.isArray(t)) return !1;
                    let r = [],
                        a = [],
                        o = [];
                    for (let t of e.keys()) {
                        let n = e[t];
                        s(n) && n[i] ? o.push(n) : o.length ? a.push(n) : r.push(n)
                    }
                    if (o.length) {
                        if (o.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                        if (t.length < r.length + a.length) return !1;
                        let e = t.slice(0, r.length),
                            i = 0 === a.length ? [] : t.slice(-a.length),
                            s = t.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
                        return r.every((t, r) => u(t, e[r], n)) && a.every((e, t) => u(e, i[t], n)) && (0 === o.length || u(o[0], s, n))
                    }
                    return e.length === t.length && e.every((e, r) => u(e, t[r], n))
                }
                return Object.keys(e).every(i => {
                    let a = e[i];
                    return (i in t || s(a) && "optional" === a[r]().matcherType) && u(a, t[i], n)
                })
            }
            return Object.is(t, e)
        },
        c = e => {
            var t, n, i;
            return o(e) ? s(e) ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : [] : Array.isArray(e) ? l(e, c) : l(Object.values(e), c) : []
        },
        l = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

    function d(e) {
        return Object.assign(e, {
            optional: () => f(e),
            and: t => m(e, t),
            or: t => g(e, t),
            select: t => void 0 === t ? b(e) : b(t, e)
        })
    }

    function f(e) {
        return d({
            [r]: () => ({
                match: t => {
                    let n = {},
                        r = (e, t) => {
                            n[e] = t
                        };
                    return void 0 === t ? (c(e).forEach(e => r(e, void 0)), {
                        matched: !0,
                        selections: n
                    }) : {
                        matched: u(e, t, r),
                        selections: n
                    }
                },
                getSelectionKeys: () => c(e),
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

    function m(...e) {
        return d({
            [r]: () => ({
                match: t => {
                    let n = {},
                        r = (e, t) => {
                            n[e] = t
                        };
                    return {
                        matched: e.every(e => u(e, t, r)),
                        selections: n
                    }
                },
                getSelectionKeys: () => l(e, c),
                matcherType: "and"
            })
        })
    }

    function g(...e) {
        return d({
            [r]: () => ({
                match: t => {
                    let n = {},
                        r = (e, t) => {
                            n[e] = t
                        };
                    return l(e, c).forEach(e => r(e, void 0)), {
                        matched: e.some(e => u(e, t, r)),
                        selections: n
                    }
                },
                getSelectionKeys: () => l(e, c),
                matcherType: "or"
            })
        })
    }

    function _(e) {
        return {
            [r]: () => ({
                match: t => ({
                    matched: !!e(t)
                })
            })
        }
    }

    function b(...e) {
        let t = "string" == typeof e[0] ? e[0] : void 0,
            n = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
        return d({
            [r]: () => ({
                match: e => {
                    let r = {
                        [null != t ? t : a]: e
                    };
                    return {
                        matched: void 0 === n || u(n, e, (e, t) => {
                            r[e] = t
                        }),
                        selections: r
                    }
                },
                getSelectionKeys: () => [null != t ? t : a].concat(void 0 === n ? [] : c(n))
            })
        })
    }

    function v(e) {
        return "number" == typeof e
    }

    function y(e) {
        return "string" == typeof e
    }

    function E(e) {
        return "bigint" == typeof e
    }
    let S = d(_(function(e) {
            return !0
        })),
        x = e => Object.assign(d(e), {
            startsWith: t => x(m(e, _(e => y(e) && e.startsWith(t)))),
            endsWith: t => x(m(e, _(e => y(e) && e.endsWith(t)))),
            minLength: t => {
                let n;
                return x(m(e, (n = t, _(e => y(e) && e.length >= n))))
            },
            maxLength: t => {
                let n;
                return x(m(e, (n = t, _(e => y(e) && e.length <= n))))
            },
            includes: t => x(m(e, _(e => y(e) && e.includes(t)))),
            regex: t => x(m(e, _(e => y(e) && !!e.match(t))))
        }),
        w = x(_(y)),
        T = (e, t) => _(n => v(n) && e <= n && t >= n),
        C = e => _(t => v(t) && t < e),
        D = e => _(t => v(t) && t > e),
        O = e => _(t => v(t) && t <= e),
        M = e => _(t => v(t) && t >= e),
        A = () => _(e => v(e) && Number.isInteger(e)),
        k = () => _(e => v(e) && Number.isFinite(e)),
        R = () => _(e => v(e) && e > 0),
        N = () => _(e => v(e) && e < 0),
        I = e => Object.assign(d(e), {
            between: (t, n) => I(m(e, T(t, n))),
            lt: t => I(m(e, C(t))),
            gt: t => I(m(e, D(t))),
            lte: t => I(m(e, O(t))),
            gte: t => I(m(e, M(t))),
            int: () => I(m(e, A())),
            finite: () => I(m(e, k())),
            positive: () => I(m(e, R())),
            negative: () => I(m(e, N()))
        }),
        L = I(_(v)),
        P = (e, t) => _(n => E(n) && e <= n && t >= n),
        F = e => _(t => E(t) && t < e),
        B = e => _(t => E(t) && t > e),
        U = e => _(t => E(t) && t <= e),
        Y = e => _(t => E(t) && t >= e),
        j = () => _(e => E(e) && e > 0),
        z = () => _(e => E(e) && e < 0),
        H = e => Object.assign(d(e), {
            between: (t, n) => H(m(e, P(t, n))),
            lt: t => H(m(e, F(t))),
            gt: t => H(m(e, B(t))),
            lte: t => H(m(e, U(t))),
            gte: t => H(m(e, Y(t))),
            positive: () => H(m(e, j())),
            negative: () => H(m(e, z()))
        }),
        G = H(_(E)),
        V = d(_(function(e) {
            return "boolean" == typeof e
        })),
        $ = d(_(function(e) {
            return "symbol" == typeof e
        })),
        W = d(_(function(e) {
            return null == e
        }));
    var K = {
        __proto__: null,
        matcher: r,
        optional: f,
        array: function(...e) {
            return function e(t) {
                let n;
                return Object.assign(Object.assign(n = t, {
                    *[Symbol.iterator]() {
                        yield Object.assign(n, {
                            [i]: !0
                        })
                    }
                }), {
                    optional: () => e(f(t)),
                    select: n => e(void 0 === n ? b(t) : b(n, t))
                })
            }({
                [r]: () => ({
                    match: t => {
                        if (!Array.isArray(t)) return {
                            matched: !1
                        };
                        if (0 === e.length) return {
                            matched: !0
                        };
                        let n = e[0],
                            r = {};
                        if (0 === t.length) return c(n).forEach(e => {
                            r[e] = []
                        }), {
                            matched: !0,
                            selections: r
                        };
                        let i = (e, t) => {
                            r[e] = (r[e] || []).concat([t])
                        };
                        return {
                            matched: t.every(e => u(n, e, i)),
                            selections: r
                        }
                    },
                    getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
                })
            })
        },
        set: function(...e) {
            return d({
                [r]: () => ({
                    match: t => {
                        if (!(t instanceof Set)) return {
                            matched: !1
                        };
                        let n = {};
                        if (0 === t.size) return {
                            matched: !0,
                            selections: n
                        };
                        if (0 === e.length) return {
                            matched: !0
                        };
                        let r = (e, t) => {
                                n[e] = (n[e] || []).concat([t])
                            },
                            i = e[0];
                        return {
                            matched: p(t, e => u(i, e, r)),
                            selections: n
                        }
                    },
                    getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
                })
            })
        },
        map: function(...e) {
            return d({
                [r]: () => ({
                    match: t => {
                        var n;
                        if (!(t instanceof Map)) return {
                            matched: !1
                        };
                        let r = {};
                        if (0 === t.size) return {
                            matched: !0,
                            selections: r
                        };
                        let i = (e, t) => {
                            r[e] = (r[e] || []).concat([t])
                        };
                        if (0 === e.length) return {
                            matched: !0
                        };
                        if (1 === e.length) throw Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null==(n=e[0])?void 0:n.toString()}`);
                        let [a, o] = e;
                        return {
                            matched: h(t, (e, t) => {
                                let n = u(a, t, i),
                                    r = u(o, e, i);
                                return n && r
                            }),
                            selections: r
                        }
                    },
                    getSelectionKeys: () => 0 === e.length ? [] : [...c(e[0]), ...c(e[1])]
                })
            })
        },
        intersection: m,
        union: g,
        not: function(e) {
            return d({
                [r]: () => ({
                    match: t => ({
                        matched: !u(e, t, () => {})
                    }),
                    getSelectionKeys: () => [],
                    matcherType: "not"
                })
            })
        },
        when: _,
        select: b,
        any: S,
        _: S,
        string: w,
        between: T,
        lt: C,
        gt: D,
        lte: O,
        gte: M,
        int: A,
        finite: k,
        positive: R,
        negative: N,
        number: L,
        betweenBigInt: P,
        ltBigInt: F,
        gtBigInt: B,
        lteBigInt: U,
        gteBigInt: Y,
        positiveBigInt: j,
        negativeBigInt: z,
        bigint: G,
        boolean: V,
        symbol: $,
        nullish: W,
        instanceOf: function(e) {
            var t;
            return d(_((t = e, e => e instanceof t)))
        },
        shape: function(e) {
            return d(_(function(...e) {
                if (1 === e.length) {
                    let [t] = e;
                    return e => u(t, e, () => {})
                }
                if (2 === e.length) {
                    let [t, n] = e;
                    return u(t, n, () => {})
                }
                throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`)
            }(e)))
        }
    };
    let q = {
        matched: !1,
        value: void 0
    };

    function Q(e) {
        return new Z(e, q)
    }
    class Z {
        constructor(e, t) {
            this.input = void 0, this.state = void 0, this.input = e, this.state = t
        }
        with(...e) {
            let t;
            if (this.state.matched) return this;
            let n = e[e.length - 1],
                r = [e[0]];
            3 === e.length && "function" == typeof e[1] ? (r.push(e[0]), t = e[1]) : e.length > 2 && r.push(...e.slice(1, e.length - 1));
            let i = !1,
                o = {},
                s = (e, t) => {
                    i = !0, o[e] = t
                },
                c = r.some(e => u(e, this.input, s)) && (!t || t(this.input)) ? {
                    matched: !0,
                    value: n(i ? a in o ? o[a] : o : this.input, this.input)
                } : q;
            return new Z(this.input, c)
        }
        when(e, t) {
            if (this.state.matched) return this;
            let n = !!e(this.input);
            return new Z(this.input, n ? {
                matched: !0,
                value: t(this.input, this.input)
            } : q)
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
            throw Error(`Pattern matching error: no pattern matches value ${e}`)
        }
        returnType() {
            return this
        }
    }
}
function(t, r, e) {
    "use strict";
    e("422200");
    var n = e("859514"),
        o = e("503486"),
        i = e("868822"),
        a = e("64980"),
        u = e("814026"),
        s = e("768897"),
        f = e("484784"),
        c = e("18563"),
        l = e("985797"),
        h = e("89157"),
        p = e("662918"),
        v = e("515011"),
        d = e("88052"),
        g = e("125359"),
        b = e("59393"),
        y = e("886639"),
        m = e("681802"),
        w = e("418855"),
        _ = e("472960"),
        k = e("998270"),
        x = e("148066"),
        E = e("16447"),
        S = e("55082"),
        M = e("579697"),
        R = e("79807"),
        O = e("174669"),
        j = e("492470"),
        A = O("iterator"),
        N = "URLSearchParams",
        P = N + "Iterator",
        I = v.set,
        q = v.getterFor(N),
        U = v.getterFor(P),
        L = Object.getOwnPropertyDescriptor,
        B = function(t) {
            if (!u) return o[t];
            var r = L(o, t);
            return r && r.value
        },
        T = B("fetch"),
        C = B("Request"),
        Headers = B("Headers"),
        z = C && C.prototype,
        D = Headers && Headers.prototype,
        RegExp = o.RegExp,
        TypeError = o.TypeError,
        F = o.decodeURIComponent,
        H = o.encodeURIComponent,
        Z = a("".charAt),
        $ = a([].join),
        G = a([].push),
        J = a("".replace),
        V = a([].shift),
        Y = a([].splice),
        W = a("".split),
        X = a("".slice),
        Q = /\+/g,
        K = [, , , , ],
        tt = function(t) {
            try {
                return F(t)
            } catch (r) {
                return t
            }
        },
        tr = function(t) {
            var r, e = J(t, Q, " "),
                n = 4;
            try {
                return F(e)
            } catch (t) {
                for (; n;) {
                    ;
                    e = J(e, K[(r = n--) - 1] || (K[r - 1] = RegExp("((?:%[\\da-f]{2}){" + r + "})", "gi")), tt)
                }
                return e
            }
        },
        te = /[!'()~]|%20/g,
        tn = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        to = function(t) {
            return tn[t]
        },
        ti = function(t) {
            return J(H(t), te, to)
        },
        ta = p(function(t, r) {
            I(this, {
                type: P,
                iterator: S(q(t).entries),
                kind: r
            })
        }, "Iterator", function() {
            var t = U(this),
                r = t.kind,
                e = t.iterator.next(),
                n = e.value;
            return !e.done && (e.value = "keys" === r ? n.key : "values" === r ? n.value : [n.key, n.value]), e
        }, !0),
        tu = function(t) {
            this.entries = [], this.url = null, void 0 !== t && (_(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === Z(t, 0) ? X(t, 1) : t : k(t)))
        };
    tu.prototype = {
        type: N,
        bindURL: function(t) {
            this.url = t, this.update()
        },
        parseObject: function(t) {
            var r, e, n, o, a, u, s, f = M(t);
            if (f)
                for (e = (r = S(t, f)).next; !(n = i(e, r)).done;) {
                    if ((u = i(a = (o = S(w(n.value))).next, o)).done || (s = i(a, o)).done || !i(a, o).done) throw TypeError("Expected sequence with length 2");
                    G(this.entries, {
                        key: k(u.value),
                        value: k(s.value)
                    })
                } else
                    for (var c in t) b(t, c) && G(this.entries, {
                        key: c,
                        value: k(t[c])
                    })
        },
        parseQuery: function(t) {
            if (t) {
                for (var r, e, n = W(t, "&"), o = 0; o < n.length;)(r = n[o++]).length && (e = W(r, "="), G(this.entries, {
                    key: tr(V(e)),
                    value: tr($(e, "="))
                }))
            }
        },
        serialize: function() {
            for (var t, r = this.entries, e = [], n = 0; n < r.length;) G(e, ti((t = r[n++]).key) + "=" + ti(t.value));
            return $(e, "&")
        },
        update: function() {
            this.entries.length = 0, this.parseQuery(this.url.query)
        },
        updateURL: function() {
            this.url && this.url.update()
        }
    };
    var ts = function() {
            d(this, tf);
            var t = arguments.length > 0 ? arguments[0] : void 0,
                r = I(this, new tu(t));
            !u && (this.size = r.entries.length)
        },
        tf = ts.prototype;
    if (l(tf, {
            append: function(t, r) {
                var e = q(this);
                R(arguments.length, 2), G(e.entries, {
                    key: k(t),
                    value: k(r)
                }), !u && this.length++, e.updateURL()
            },
            delete: function(t) {
                for (var r = q(this), e = R(arguments.length, 1), n = r.entries, o = k(t), i = e < 2 ? void 0 : arguments[1], a = void 0 === i ? i : k(i), s = 0; s < n.length;) {
                    var f = n[s];
                    if (f.key === o && (void 0 === a || f.value === a)) {
                        if (Y(n, s, 1), void 0 !== a) break
                    } else s++
                }!u && (this.size = n.length), r.updateURL()
            },
            get: function(t) {
                var r = q(this).entries;
                R(arguments.length, 1);
                for (var e = k(t), n = 0; n < r.length; n++)
                    if (r[n].key === e) return r[n].value;
                return null
            },
            getAll: function(t) {
                var r = q(this).entries;
                R(arguments.length, 1);
                for (var e = k(t), n = [], o = 0; o < r.length; o++) r[o].key === e && G(n, r[o].value);
                return n
            },
            has: function(t) {
                for (var r = q(this).entries, e = R(arguments.length, 1), n = k(t), o = e < 2 ? void 0 : arguments[1], i = void 0 === o ? o : k(o), a = 0; a < r.length;) {
                    var u = r[a++];
                    if (u.key === n && (void 0 === i || u.value === i)) return !0
                }
                return !1
            },
            set: function(t, r) {
                var e, n = q(this);
                R(arguments.length, 1);
                for (var o = n.entries, i = !1, a = k(t), s = k(r), f = 0; f < o.length; f++)(e = o[f]).key === a && (i ? Y(o, f--, 1) : (i = !0, e.value = s));
                !i && G(o, {
                    key: a,
                    value: s
                }), !u && (this.size = o.length), n.updateURL()
            },
            sort: function() {
                var t = q(this);
                j(t.entries, function(t, r) {
                    return t.key > r.key ? 1 : -1
                }), t.updateURL()
            },
            forEach: function(t) {
                for (var r, e = q(this).entries, n = y(t, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < e.length;) n((r = e[o++]).value, r.key, this)
            },
            keys: function() {
                return new ta(this, "keys")
            },
            values: function() {
                return new ta(this, "values")
            },
            entries: function() {
                return new ta(this, "entries")
            }
        }, {
            enumerable: !0
        }), f(tf, A, tf.entries, {
            name: "entries"
        }), f(tf, "toString", function() {
            return q(this).serialize()
        }, {
            enumerable: !0
        }), u && c(tf, "size", {
            get: function() {
                return q(this).entries.length
            },
            configurable: !0,
            enumerable: !0
        }), h(ts, N), n({
            global: !0,
            constructor: !0,
            forced: !s
        }, {
            URLSearchParams: ts
        }), !s && g(Headers)) {
        var tc = a(D.has),
            tl = a(D.set),
            th = function(t) {
                if (_(t)) {
                    var r, e = t.body;
                    if (m(e) === N) return !tc(r = t.headers ? new Headers(t.headers) : new Headers, "content-type") && tl(r, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), x(t, {
                        body: E(0, k(e)),
                        headers: E(0, r)
                    })
                }
                return t
            };
        if (g(T) && n({
                global: !0,
                enumerable: !0,
                dontCallGetSet: !0,
                forced: !0
            }, {
                fetch: function(t) {
                    return T(t, arguments.length > 1 ? th(arguments[1]) : {})
                }
            }), g(C)) {
            var tp = function(t) {
                return d(this, z), new C(t, arguments.length > 1 ? th(arguments[1]) : {})
            };
            z.constructor = tp, tp.prototype = z, n({
                global: !0,
                constructor: !0,
                dontCallGetSet: !0,
                forced: !0
            }, {
                Request: tp
            })
        }
    }
    t.exports = {
        URLSearchParams: ts,
        getState: q
    }
}
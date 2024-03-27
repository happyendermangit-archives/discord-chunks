function(e, t, n) {
    "use strict";
    n("996173");
    var r = n("147018"),
        i = n("161581"),
        a = n("926515"),
        o = n("581031"),
        s = n("325008"),
        u = n("259230"),
        c = n("859209"),
        l = n("4340"),
        d = n("90338"),
        f = n("865312"),
        p = n("673743"),
        h = n("644659"),
        m = n("603528"),
        g = n("354848"),
        _ = n("740362"),
        b = n("566885"),
        v = n("974971"),
        y = n("24033"),
        E = n("622281"),
        S = n("714050"),
        x = n("803938"),
        w = n("879"),
        T = n("981971"),
        C = n("11697"),
        D = n("202934"),
        O = n("641236"),
        M = n("976418"),
        A = O("iterator"),
        k = "URLSearchParams",
        R = k + "Iterator",
        N = h.set,
        I = h.getterFor(k),
        L = h.getterFor(R),
        P = Object.getOwnPropertyDescriptor,
        F = function(e) {
            if (!s) return i[e];
            var t = P(i, e);
            return t && t.value
        },
        B = F("fetch"),
        U = F("Request"),
        Y = F("Headers"),
        j = U && U.prototype,
        z = Y && Y.prototype,
        H = i.RegExp,
        G = i.TypeError,
        V = i.decodeURIComponent,
        $ = i.encodeURIComponent,
        W = o("".charAt),
        K = o([].join),
        q = o([].push),
        Q = o("".replace),
        Z = o([].shift),
        X = o([].splice),
        J = o("".split),
        ee = o("".slice),
        et = /\+/g,
        en = [, , , , ],
        er = function(e) {
            try {
                return V(e)
            } catch (t) {
                return e
            }
        },
        ei = function(e) {
            var t, n = Q(e, et, " "),
                r = 4;
            try {
                return V(n)
            } catch (e) {
                for (; r;) {
                    ;
                    n = Q(n, en[(t = r--) - 1] || (en[t - 1] = H("((?:%[\\da-f]{2}){" + t + "})", "gi")), er)
                }
                return n
            }
        },
        ea = /[!'()~]|%20/g,
        eo = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        es = function(e) {
            return eo[e]
        },
        eu = function(e) {
            return Q($(e), ea, es)
        },
        ec = p(function(e, t) {
            N(this, {
                type: R,
                iterator: T(I(e).entries),
                kind: t
            })
        }, "Iterator", function() {
            var e = L(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value;
            return !n.done && (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
        }, !0),
        el = function(e) {
            this.entries = [], this.url = null, void 0 !== e && (E(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === W(e, 0) ? ee(e, 1) : e : S(e)))
        };
    el.prototype = {
        type: k,
        bindURL: function(e) {
            this.url = e, this.update()
        },
        parseObject: function(e) {
            var t, n, r, i, o, s, u, c = C(e);
            if (c)
                for (n = (t = T(e, c)).next; !(r = a(n, t)).done;) {
                    if ((s = a(o = (i = T(y(r.value))).next, i)).done || (u = a(o, i)).done || !a(o, i).done) throw G("Expected sequence with length 2");
                    q(this.entries, {
                        key: S(s.value),
                        value: S(u.value)
                    })
                } else
                    for (var l in e) _(e, l) && q(this.entries, {
                        key: l,
                        value: S(e[l])
                    })
        },
        parseQuery: function(e) {
            if (e) {
                for (var t, n, r = J(e, "&"), i = 0; i < r.length;)(t = r[i++]).length && (n = J(t, "="), q(this.entries, {
                    key: ei(Z(n)),
                    value: ei(K(n, "="))
                }))
            }
        },
        serialize: function() {
            for (var e, t = this.entries, n = [], r = 0; r < t.length;) q(n, eu((e = t[r++]).key) + "=" + eu(e.value));
            return K(n, "&")
        },
        update: function() {
            this.entries.length = 0, this.parseQuery(this.url.query)
        },
        updateURL: function() {
            this.url && this.url.update()
        }
    };
    var ed = function() {
            m(this, ef);
            var e = arguments.length > 0 ? arguments[0] : void 0,
                t = N(this, new el(e));
            !s && (this.size = t.entries.length)
        },
        ef = ed.prototype;
    if (d(ef, {
            append: function(e, t) {
                var n = I(this);
                D(arguments.length, 2), q(n.entries, {
                    key: S(e),
                    value: S(t)
                }), !s && this.length++, n.updateURL()
            },
            delete: function(e) {
                for (var t = I(this), n = D(arguments.length, 1), r = t.entries, i = S(e), a = n < 2 ? void 0 : arguments[1], o = void 0 === a ? a : S(a), u = 0; u < r.length;) {
                    var c = r[u];
                    if (c.key === i && (void 0 === o || c.value === o)) {
                        if (X(r, u, 1), void 0 !== o) break
                    } else u++
                }!s && (this.size = r.length), t.updateURL()
            },
            get: function(e) {
                var t = I(this).entries;
                D(arguments.length, 1);
                for (var n = S(e), r = 0; r < t.length; r++)
                    if (t[r].key === n) return t[r].value;
                return null
            },
            getAll: function(e) {
                var t = I(this).entries;
                D(arguments.length, 1);
                for (var n = S(e), r = [], i = 0; i < t.length; i++) t[i].key === n && q(r, t[i].value);
                return r
            },
            has: function(e) {
                for (var t = I(this).entries, n = D(arguments.length, 1), r = S(e), i = n < 2 ? void 0 : arguments[1], a = void 0 === i ? i : S(i), o = 0; o < t.length;) {
                    var s = t[o++];
                    if (s.key === r && (void 0 === a || s.value === a)) return !0
                }
                return !1
            },
            set: function(e, t) {
                var n, r = I(this);
                D(arguments.length, 1);
                for (var i = r.entries, a = !1, o = S(e), u = S(t), c = 0; c < i.length; c++)(n = i[c]).key === o && (a ? X(i, c--, 1) : (a = !0, n.value = u));
                !a && q(i, {
                    key: o,
                    value: u
                }), !s && (this.size = i.length), r.updateURL()
            },
            sort: function() {
                var e = I(this);
                M(e.entries, function(e, t) {
                    return e.key > t.key ? 1 : -1
                }), e.updateURL()
            },
            forEach: function(e) {
                for (var t, n = I(this).entries, r = b(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
            },
            keys: function() {
                return new ec(this, "keys")
            },
            values: function() {
                return new ec(this, "values")
            },
            entries: function() {
                return new ec(this, "entries")
            }
        }, {
            enumerable: !0
        }), c(ef, A, ef.entries, {
            name: "entries"
        }), c(ef, "toString", function() {
            return I(this).serialize()
        }, {
            enumerable: !0
        }), s && l(ef, "size", {
            get: function() {
                return I(this).entries.length
            },
            configurable: !0,
            enumerable: !0
        }), f(ed, k), r({
            global: !0,
            constructor: !0,
            forced: !u
        }, {
            URLSearchParams: ed
        }), !u && g(Y)) {
        var ep = o(z.has),
            eh = o(z.set),
            em = function(e) {
                if (E(e)) {
                    var t, n = e.body;
                    if (v(n) === k) return !ep(t = e.headers ? new Y(e.headers) : new Y, "content-type") && eh(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), x(e, {
                        body: w(0, S(n)),
                        headers: w(0, t)
                    })
                }
                return e
            };
        if (g(B) && r({
                global: !0,
                enumerable: !0,
                dontCallGetSet: !0,
                forced: !0
            }, {
                fetch: function(e) {
                    return B(e, arguments.length > 1 ? em(arguments[1]) : {})
                }
            }), g(U)) {
            var eg = function(e) {
                return m(this, j), new U(e, arguments.length > 1 ? em(arguments[1]) : {})
            };
            j.constructor = eg, eg.prototype = j, r({
                global: !0,
                constructor: !0,
                dontCallGetSet: !0,
                forced: !0
            }, {
                Request: eg
            })
        }
    }
    e.exports = {
        URLSearchParams: ed,
        getState: I
    }
}
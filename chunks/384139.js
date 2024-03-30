function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return k
        },
        hasOpenPlainTextCodeBlock: function() {
            return V
        },
        isPointInCodeBlock: function() {
            return F
        }
    });
    var r = n("920478"),
        o = n("31775"),
        i = n.n(o),
        a = n("388990"),
        u = n("928344"),
        s = n("610045"),
        l = n("590401"),
        c = n("453197"),
        f = n("714196"),
        d = n("188629");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || m(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function p(e) {
        return function(e) {
            if (Array.isArray(e)) return _(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || m(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t) {
        if (e) {
            if ("string" == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
        }
    }
    var y = new Set(["line"]),
        I = r.default.listLanguages(),
        h = {},
        O = !0,
        T = !1,
        S = void 0;
    try {
        for (var v, g = I[Symbol.iterator](); !(O = (v = g.next()).done); O = !0) {
            var A = v.value;
            A = A.toLowerCase();
            var b = r.default.getLanguage(A);
            if (null != b) {
                var N = b.aliases;
                if (h[A] = A, null != N) {
                    var R = !0,
                        C = !1,
                        P = void 0;
                    try {
                        for (var D, L = N[Symbol.iterator](); !(R = (D = L.next()).done); R = !0) h[D.value.toLowerCase()] = A
                    } catch (e) {
                        C = !0, P = e
                    } finally {
                        try {
                            !R && null != L.return && L.return()
                        } finally {
                            if (C) throw P
                        }
                    }
                }
            }
        }
    } catch (e) {
        T = !0, S = e
    } finally {
        try {
            !O && null != g.return && g.return()
        } finally {
            if (T) throw S
        }
    }
    var M = /^[a-z0-9_+\-.#]+$/,
        U = /^[a-z0-9_+\-.#]+$/i;
    for (var w in h)
        if (null == w.match(M)) throw Error("Language name does not match regex: ".concat(w));

    function k(e) {
        var t = e.onChange,
            n = null;
        return e.onChange = function() {
            f.EditorUtils.richValue(e) !== n && (s.HistoryUtils.withMergedEntry(e, function() {
                f.EditorUtils.withoutNormalizing(e, function() {
                    return function(e) {
                        var t = function(e) {
                            var t = [],
                                n = null,
                                o = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (var s, c = f.EditorUtils.blocks(e)[Symbol.iterator](); !(o = (s = c.next()).done); o = !0) {
                                    var d = s.value,
                                        _ = null != n && (n.isInCodeBlock || n.opensCodeBlock),
                                        m = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
                                        I = null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null;
                                    n = function(e, t, n, r, o) {
                                        var i, a = function(e) {
                                                var t, n = E(e, 2),
                                                    r = n[0],
                                                    o = n[1];
                                                if (!y.has(r.type)) return [];
                                                for (var i = [], a = /\\|```/g, u = 0; u < r.children.length; u++) {
                                                    var s = r.children[u];
                                                    if (f.TextUtils.isText(s))
                                                        for (a.lastIndex = 0; null != (t = a.exec(s.text));) {
                                                            if ("\\" === t[0]) {
                                                                a.lastIndex += 1;
                                                                continue
                                                            }
                                                            i.push({
                                                                path: f.PathUtils.child(o, u),
                                                                offset: t.index
                                                            })
                                                        }
                                                }
                                                return i
                                            }(t),
                                            u = a[0],
                                            s = a[a.length - 1],
                                            l = null;
                                        null != s && (l = E(f.EditorUtils.node(e, s.path), 1)[0].text.substring(s.offset + 3));
                                        var c = n && null != u,
                                            d = n && 0 === a.length,
                                            _ = r && 0 === a.length,
                                            p = (c ? a.slice(1) : a).length % 2 == 1,
                                            m = p && (null == l || "" === l || null != l.match(U)),
                                            I = m && null != l && null !== (i = h[l.toLowerCase()]) && void 0 !== i ? i : null;
                                        return {
                                            blockEntry: t,
                                            wasInCodeBlock: n,
                                            isInCodeBlock: d,
                                            isStyledCodeBlockLine: _,
                                            lang: p || c ? I : o,
                                            hljsTypes: null,
                                            closesCodeBlock: c,
                                            opensCodeBlock: p,
                                            opensCodeBlockOnOwnLine: m
                                        }
                                    }(e, d, _, m, I), t.push(n)
                                }
                            } catch (e) {
                                i = !0, a = e
                            } finally {
                                try {
                                    !o && null != c.return && c.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                            return function(e) {
                                var t = [],
                                    n = !1,
                                    o = !0,
                                    i = !1,
                                    a = void 0;
                                try {
                                    for (var s, c = e[Symbol.iterator](); !(o = (s = c.next()).done); o = !0) ! function() {
                                        var o = s.value,
                                            i = o === e[e.length - 1];
                                        if ((o.closesCodeBlock || i) && (n && i && !o.closesCodeBlock && t.push(o), n = !1, t.length > 0)) {
                                            var a = t.map(function(e) {
                                                    return (0, l.serializeDescendant)(e.blockEntry[0])
                                                }).join("\n"),
                                                c = t[0].lang;
                                            if (null != c && null != r.default.getLanguage(c)) {
                                                var f = function(e, t) {
                                                    var n = "".concat(e, "-").concat(t),
                                                        r = j.get(n);
                                                    if (null != r) return r;
                                                    var o = u.default.highlight(t, e, !1);
                                                    if (null == o || o.illegal) return null;
                                                    var i = o.value.split("\n");
                                                    return j.set(n, i), i
                                                }(a, c);
                                                if (null != f && f.length === t.length) {
                                                    for (var d = [], _ = 0; _ < t.length; _++) {
                                                        for (var E = f[_].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"), m = [], y = void 0, I = 0, h = 0; null != (y = G.exec(E));) {
                                                            var O = y.index + y[0].length,
                                                                T = y.index - h;
                                                            y.index > h && (d.length > 0 && m.push({
                                                                types: p(d),
                                                                start: I,
                                                                end: I + T
                                                            }), I += T), "</span>" === y[0] ? d.pop() : d.push(y[1]), h = O
                                                        }
                                                        if (d.length > 0) {
                                                            var S = E.length - h;
                                                            m.push({
                                                                types: p(d),
                                                                start: I,
                                                                end: I + S
                                                            })
                                                        }
                                                        t[_].hljsTypes = m
                                                    }
                                                } else
                                                    for (var v = 0; v < t.length; v++) t[v].hljsTypes = null
                                            }
                                            t = []
                                        }
                                        n && t.push(o), o.opensCodeBlock && (n = !0)
                                    }()
                                } catch (e) {
                                    i = !0, a = e
                                } finally {
                                    try {
                                        !o && null != c.return && c.return()
                                    } finally {
                                        if (i) throw a
                                    }
                                }
                            }(t), t
                        }(e);
                        (function(e, t) {
                            var n = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                                    var u = i.value,
                                        s = E(u.blockEntry, 2),
                                        l = s[0],
                                        f = s[1],
                                        d = function(e) {
                                            return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
                                                lang: e.lang,
                                                wasInCodeBlock: e.wasInCodeBlock,
                                                isInCodeBlock: e.isInCodeBlock,
                                                isStyledCodeBlockLine: e.isStyledCodeBlockLine,
                                                hljsTypes: e.hljsTypes
                                            } : null
                                        }(u);
                                    (null == l ? void 0 : l.codeBlockState) != d && c.SlateTransforms.setNodes(e, {
                                        codeBlockState: d
                                    }, {
                                        at: f
                                    })
                                }
                            } catch (e) {
                                r = !0, o = e
                            } finally {
                                try {
                                    !n && null != a.return && a.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                        })(e, t)
                    }(e)
                })
            }), n = f.EditorUtils.richValue(e)), t()
        }, e
    }
    var G = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
        B = {
            max: 1 / 0,
            maxAge: 1 * a.default.Millis.MINUTE,
            updateAgeOnGet: !0
        },
        j = new(i())(B);

    function F(e, t) {
        var n = 0,
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = f.EditorUtils.nodes(e, {
                    at: {
                        anchor: {
                            path: d.FIRST_TEXT_PATH,
                            offset: 0
                        },
                        focus: t
                    },
                    mode: "lowest",
                    match: function(e) {
                        return f.TextUtils.isText(e)
                    }
                })[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s, l = a.value,
                    c = l[0].text;
                f.PathUtils.equals(l[1], t.path) && (c = c.substring(0, t.offset));
                var _ = c.match(/```/g);
                n += null !== (s = null == _ ? void 0 : _.length) && void 0 !== s ? s : 0
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != u.return && u.return()
            } finally {
                if (o) throw i
            }
        }
        return n % 2 != 0
    }

    function V(e) {
        if (null == e.selection) return !1;
        var t = f.RangeUtils.start(e.selection);
        return F(e, t)
    }
}
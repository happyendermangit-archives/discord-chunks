function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        punycodeLink: function() {
            return N
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("31775"),
        a = n.n(i);
    n("711739");
    var u = n("302454"),
        s = n.n(u),
        l = n("964164"),
        c = n("162677"),
        f = n("76213"),
        d = n("705966");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function p(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function m(e) {
        return function(e) {
            if (Array.isArray(e)) return _(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || y(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function y(e, t) {
        if (e) {
            if ("string" == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
        }
    }
    var I = new(a())({
        max: 50
    });

    function h(e) {
        var t = I.get(e);
        if (null != t) return t;
        var n = (0, d.sanitizeWhitespace)(e),
            r = (0, d.sanitizeUnicodeConfusables)(n),
            o = {
                whitespaceSanitized: n,
                fullySanitized: r
            };
        return I.set(e, o), o
    }
    var O = ["http:", "https:", "discord:"],
        T = [f.AST_KEY.TEXT, f.AST_KEY.UNDERLINE, f.AST_KEY.STRONG, f.AST_KEY.ITALICS, f.AST_KEY.STRIKETHROUGH, f.AST_KEY.INLINE_CODE, f.AST_KEY.SPOILER, f.AST_KEY.LINE_BREAK, f.AST_KEY.TIMESTAMP],
        S = m(T).concat([f.AST_KEY.EMOJI, f.AST_KEY.CUSTOM_EMOJI]),
        v = [f.AST_KEY.LIST, f.AST_KEY.HEADING, f.AST_KEY.BLOCK_QUOTE],
        g = [f.AST_KEY.TEXT],
        A = [f.AST_KEY.UNDERLINE, f.AST_KEY.STRONG, f.AST_KEY.ITALICS, f.AST_KEY.STRIKETHROUGH, f.AST_KEY.INLINE_CODE, f.AST_KEY.SPOILER, f.AST_KEY.LINE_BREAK, f.AST_KEY.TIMESTAMP, f.AST_KEY.EMOJI, f.AST_KEY.CUSTOM_EMOJI, f.AST_KEY.LIST, f.AST_KEY.HEADING, f.AST_KEY.BLOCK_QUOTE];

    function b(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        !Array.isArray(e) && (e = [e]);
        var r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s = a.value;
                if (void 0 === s || !t.includes(s.type)) return null;
                if (s.type === f.AST_KEY.INLINE_CODE) {
                    var l = m(t).concat(m(n));
                    if (null == b(s.validationChildContent, l)) return null
                }
                if (Array.isArray(s.content) && null == b(s.content, t)) return null
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
        return e
    }

    function N(e) {
        try {
            var t, n = new URL(e),
                r = null !== (t = n.protocol) && void 0 !== t ? t : "";
            if (!O.includes(r.toLowerCase())) throw Error("Provided protocol is not allowed: " + r);
            if (("http:" === r || "https:" === r) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
            var o = (0, d.safelyMakeUrlHumanReadable)(n);
            n.username = "", n.password = "";
            var i = (0, d.safelyMakeUrlHumanReadable)(n);
            return {
                target: o,
                displayTarget: i
            }
        } catch (e) {
            return null
        }
    }
    t.default = p(E({}, s().defaultRules.link), {
        match: function(e, t, n) {
            return t.allowLinks ? s().defaultRules.link.match(e, t, n) : null
        },
        parse: function(e, t, n) {
            var r, i, a = (i = 4, function(e) {
                    if (Array.isArray(e)) return e
                }(r = e) || function(e, t) {
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
                }(r, i) || y(r, i) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                u = a[0],
                d = a[1],
                _ = a[2],
                I = a[3],
                O = function() {
                    return {
                        type: f.AST_KEY.TEXT,
                        content: u
                    }
                },
                R = h(_),
                C = h(d),
                P = h(null != I ? I : ""),
                D = R.whitespaceSanitized,
                L = C.fullySanitized,
                M = P.fullySanitized,
                U = L.trim();
            if (0 === D.trim().length || 0 === U.length) return O();
            var w = N(s().unescapeUrl(_)),
                k = (0, l.default)(d).length > 0 || (0, l.default)(I).length > 0;
            if (null == w || k) return O();
            var G = p(E({}, n), {
                    allowEscape: !1,
                    parseInlineCodeChildContent: !0
                }),
                B = n.allowEmojiLinks ? S : T,
                j = m(B).concat(m(v)),
                F = m(g).concat(m(A)),
                V = b(t(L, G), j, [f.AST_KEY.EMOJI]),
                H = b(t(M, G), F);
            if (null == V || null == H || 0 === (function e(t) {
                    var n = "",
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            switch (s.type) {
                                case f.AST_KEY.TEXT:
                                case f.AST_KEY.INLINE_CODE:
                                    n += s.content;
                                    break;
                                case f.AST_KEY.CUSTOM_EMOJI:
                                    n += s.name;
                                    break;
                                case f.AST_KEY.EMOJI:
                                    n += s.surrogate;
                                    break;
                                case f.AST_KEY.LINE_BREAK:
                                    n += "\n";
                                    break;
                                case f.AST_KEY.STRONG:
                                case f.AST_KEY.ITALICS:
                                case f.AST_KEY.UNDERLINE:
                                case f.AST_KEY.STRIKETHROUGH:
                                case f.AST_KEY.SPOILER:
                                    n += e(s.content);
                                    break;
                                case f.AST_KEY.TIMESTAMP:
                                    n += "<timestamp>";
                                    break;
                                case f.AST_KEY.BLOCK_QUOTE:
                                case f.AST_KEY.LIST:
                                case f.AST_KEY.HEADING:
                                    n += "<".concat(s.type, "Content>");
                                    break;
                                default:
                                    (0, c.assertNever)(s.type)
                            }
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
                    return n
                })(V).trim().length) return O();
            var x = o().pick(t.rules, B),
                Y = s().parserFor(x)(C.whitespaceSanitized, G),
                W = P.whitespaceSanitized;
            return {
                content: Y,
                target: w.target,
                title: W
            }
        }
    })
}
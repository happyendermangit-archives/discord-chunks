function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parse: function() {
            return w
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("31775"),
        a = n.n(i),
        u = n("302454"),
        s = n("364612"),
        l = n("35523"),
        c = n("9551"),
        f = n("690475"),
        d = n("676641"),
        _ = n("6226"),
        E = n("388990"),
        p = n("641213"),
        m = n("997173");

    function y(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function I(e) {
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

    function h(e, t) {
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
    var O = {
            link: {
                type: "skip"
            },
            highlight: {
                type: "skip"
            },
            blockQuote: {
                type: "skip"
            },
            codeBlock: {
                type: "skip"
            },
            list: {
                type: "skip"
            },
            heading: {
                type: "skip"
            },
            channelOrMessageUrl: {
                type: "skip"
            },
            mediaPostLink: {
                type: "skip"
            },
            attachmentLink: {
                type: "skip"
            },
            newline: {
                type: "verbatim"
            },
            br: {
                type: "verbatim"
            },
            paragraph: {
                type: "verbatim"
            },
            text: {
                type: "verbatim"
            },
            emoticon: {
                type: "verbatim"
            },
            mention: {
                type: "inlineObject"
            },
            roleMention: {
                type: "inlineObject"
            },
            commandMention: {
                type: "inlineObject"
            },
            channelMention: {
                type: "inlineObject"
            },
            emoji: {
                type: "inlineObject"
            },
            customEmoji: {
                type: "inlineObject"
            },
            em: {
                type: "inlineStyle",
                before: "*",
                after: "*"
            },
            looseEm: {
                type: "inlineStyle",
                before: "*",
                after: " *"
            },
            autolink: {
                type: "inlineStyle",
                before: "<",
                after: ">"
            },
            strong: {
                type: "inlineStyle",
                before: "**",
                after: "**"
            },
            u: {
                type: "inlineStyle",
                before: "__",
                after: "__"
            },
            s: {
                type: "inlineStyle",
                before: "~~",
                after: "~~"
            },
            escape: {
                type: "inlineStyle",
                before: "\\",
                after: ""
            },
            inlineCode: {
                type: "inlineStyle",
                before: "`",
                after: "`"
            },
            staticRouteLink: {
                type: "inlineStyle",
                before: "<id:",
                after: ">"
            },
            soundboard: {
                type: "inlineStyle",
                before: "<sound:",
                after: ">"
            },
            spoiler: {
                type: "inlineStyle",
                before: "||",
                after: "||"
            },
            url: {
                type: "inlineStyle",
                before: "",
                after: ""
            },
            codeBlockText: {
                type: "inlineStyle",
                before: "",
                after: ""
            },
            codeBlockSyntax: {
                type: "inlineStyle",
                before: "",
                after: ""
            },
            codeBlockLang: {
                type: "inlineStyle",
                before: "",
                after: ""
            },
            timestamp: {
                type: "inlineObject"
            }
        },
        T = new Set(["*", "_", "\\"]),
        S = {},
        v = {};
    for (var g in f.default.RULES) {
        if (!(g in O)) throw Error("Slate: Unknown markdown rule: ".concat(g, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
        var A = O[g];
        "skip" !== A.type && (S[g] = b(f.default.RULES[g])), "skip" !== A.type && "inlineObject" !== A.type && (v[g] = b("text" === g ? d.default : f.default.RULES[g]))
    }

    function b(e) {
        o()(null != e.parse, "Slate: rule must have a parse function");
        var t = e.parse;
        return h(I({}, e), {
            parse: function(e, n, r) {
                var o = t.call(this, e, n, r);
                return !y(o, Array) && (o.originalMatch = e), o
            }
        })
    }
    var N = {
            url: {
                parse: function(e) {
                    return null == (0, c.punycodeLink)(e[1]) ? {
                        type: "text",
                        content: e[0],
                        originalMatch: e
                    } : {
                        type: "link",
                        content: e[1],
                        originalMatch: e
                    }
                }
            },
            autolink: {
                parse: function(e) {
                    return null == (0, c.punycodeLink)(e[1]) ? {
                        type: "text",
                        content: e[0],
                        originalMatch: e
                    } : {
                        type: "autolink",
                        content: e[1],
                        originalMatch: e
                    }
                }
            },
            codeBlockSyntax: {
                order: u.defaultRules.inlineCode.order - .1,
                match: function(e) {
                    return /^(```)([a-z0-9_+\-.#]+$)?/.exec(e)
                },
                parse: function(e) {
                    return null != e[2] && "" !== e[2] && m.isKnownLang(e[2]) ? [{
                        type: "codeBlockSyntax",
                        content: e[1],
                        originalMatch: e
                    }, {
                        type: "codeBlockLang",
                        content: e[2],
                        originalMatch: e
                    }] : {
                        type: "codeBlockSyntax",
                        content: e[0],
                        originalMatch: e
                    }
                }
            }
        },
        R = (0, _.default)([S, N]),
        C = (0, _.default)([v, N]),
        P = s.astParserFor(R),
        D = s.astParserFor(C),
        L = {
            max: 1 / 0,
            maxAge: 1 * E.default.Millis.MINUTE,
            updateAgeOnGet: !0
        },
        M = new(a())(L),
        U = new(a())(L);

    function w(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = m.findBackticks(e);
        if (o.push(e.length), 1 === o.length && n) return [];
        var i = 0,
            a = n,
            u = [],
            s = !0,
            l = !1,
            c = void 0;
        try {
            for (var f, d = o[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                var _ = f.value;
                if (a) u.push({
                    text: e.substring(i, _),
                    start: i,
                    attributes: ["codeBlockText"],
                    data: void 0
                });
                else {
                    var E = _ === o[o.length - 2] ? e.substring(_ + 3) : "",
                        p = null != E.match(m.caseInsensitiveLangRegex) ? E : "";
                    _ += 3 + p.length;
                    var y = e.substring(i, _);
                    "" !== y && (function(e, t, n) {
                        var r = [],
                            o = n ? U : M,
                            i = o.get(e);
                        if (null != i) return i;
                        var a = e.replace(/\r\n/g, " \n").replace(/[\r\f]/g, " ").replace(/\t/g, " ") + "\n\n",
                            u = {
                                originalMatch: {
                                    index: 0,
                                    0: ""
                                },
                                type: "paragraph",
                                content: (n ? D : P)(a, !1, {
                                    returnMentionIds: !0,
                                    disableAutoBlockNewlines: !0,
                                    guildId: t
                                })
                            };
                        k(r, a, u, 0, []);
                        var s = function(e) {
                            if (0 === (e = e.filter(function(e) {
                                    return e.text.length > 0
                                })).length) return e;
                            for (var t = [e[0]], n = 1; n < e.length; n++) {
                                var r = t[t.length - 1],
                                    o = r.start + r.text.length,
                                    i = e[n];
                                i.start === o && null == r.data && null == i.data && r.attributes.join("-") === i.attributes.join("-") ? r.text += i.text : t.push(i)
                            }
                            return t
                        }(r);
                        return o.set(e, s), s
                    })(y, t, r).forEach(function(e) {
                        u.push(h(I({}, e), {
                            start: e.start + i
                        }))
                    })
                }
                a = !a, i = _
            }
        } catch (e) {
            l = !0, c = e
        } finally {
            try {
                !s && null != d.return && d.return()
            } finally {
                if (l) throw c
            }
        }
        return u
    }

    function k(e, t, n, r, i) {
        var a = n.content,
            u = n.type,
            s = n.originalMatch;
        switch (o()(null != s, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), u) {
            case "newline":
            case "br":
            case "paragraph":
            case "text":
            case "emoticon":
                return G(e, t, a || "", r, i);
            case "emoji":
            case "customEmoji":
                var l = t.substring(r);
                if (!l.startsWith(s[0]) && (r = V(e, t, r, t.length), l = t.substring(r)), l.startsWith(s[0])) return j({
                    result: e,
                    sourceText: t,
                    text: s[0],
                    originalStart: r,
                    attributes: [u],
                    data: n
                });
                throw Error("Slate: Unable to find emoji: ".concat(s[0], " in ").concat(t, " at ").concat(r));
            case "mention":
            case "roleMention":
            case "channelMention":
            case "commandMention":
            case "staticRouteLink":
            case "soundboard":
            case "channel":
                var c = n.text,
                    f = n.id;
                if (null != c) return o()(c === s[0], "Slate: text mentions must exactly match the regex match"), j({
                    result: e,
                    sourceText: t,
                    text: c,
                    originalStart: r,
                    attributes: ["textMention"],
                    data: {
                        text: c
                    }
                });
                return j({
                    result: e,
                    sourceText: t,
                    text: s[0],
                    originalStart: r,
                    attributes: [u],
                    data: {
                        id: f
                    }
                });
            case "timestamp":
                if (p.default.getCurrentConfig({
                        location: "c70cbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled) return j({
                    result: e,
                    sourceText: t,
                    text: s[0],
                    originalStart: r,
                    attributes: [u],
                    data: n
                });
                return G(e, t, s[0], r, i);
            case "em":
            case "autolink":
            case "strong":
            case "u":
            case "s":
            case "escape":
            case "inlineCode":
            case "codeBlockSyntax":
            case "codeBlockLang":
            case "spoiler":
            case "url":
            case "link":
                r = F(t, r);
                var d = function(e, t, n, r) {
                        if ("inlineCode" === t) return {
                            before: r[1],
                            after: r[1]
                        };
                        if ("em" === t && "_" === e.substring(n, n + 1)) return {
                            before: "_",
                            after: "_"
                        };
                        var o = O["link" === t ? "url" : t];
                        if ("inlineStyle" === o.type) return o;
                        throw Error("Slate: rule must be an inlineStyle")
                    }(t, u, r, s),
                    _ = d.before,
                    E = d.after;
                return r = B(e, t, _, r, "syntaxBefore"), i.push(u), r = G(e, t, null != a ? a : "", r, i), i.pop(), r = B(e, t, E, r, "syntaxAfter"), F(t, r);
            default:
                throw Error("Slate: Unknown rule type: ".concat(u))
        }
    }

    function G(e, t, n, r, o) {
        return "string" == typeof n ? r = j({
            result: e,
            sourceText: t,
            text: n,
            originalStart: r,
            attributes: o,
            data: null
        }) : (!y(n, Array) && (n = [n]), n.forEach(function(n) {
            r = k(e, t, n, r, o)
        })), F(t, r)
    }

    function B(e, t, n, r, i) {
        if (n.length > 0) {
            var a = t.indexOf(n, r),
                u = t.substring(r, a + n.length);
            o()(a >= 0, "Slate: Unable to find syntax characters"), e.push({
                text: u,
                attributes: [i],
                start: r,
                data: null
            }), r = a + n.length
        }
        return r
    }

    function j(e) {
        for (var t = e.result, n = e.sourceText, r = e.text, o = e.originalStart, i = e.attributes, a = e.data, u = F(n, o);
            "\n" === r.charAt(0) || " " === r.charAt(0);) r = r.substring(1);
        var s = n.indexOf(r, u);
        if (s !== u ? u = o = V(t, n, u, s) : "\\" === r && "\\" === n.charAt(s + 1) && (s++, o = ++u), s !== u) throw new l.default("MarkdownToSlate").error(JSON.stringify({
            sourceText: n,
            searchText: r,
            searchStartsAt: n.substring(u),
            startPos: u
        })), Error("Slate: Unable to find content in source text!");
        var c = u + r.length,
            f = n.substring(o, c);
        return t.push({
            text: f,
            attributes: i.slice(),
            start: o,
            data: a
        }), c
    }

    function F(e, t) {
        for (;
            "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
        return t
    }

    function V(e, t, n, r) {
        for (; n < r;)
            if (T.has(t[n])) n = B(e, t, t[n], n, "syntaxBefore"), n = F(t, n);
            else break;
        return n
    }
}
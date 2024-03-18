function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parse: function() {
            return R
        }
    }), n("222007"), n("70102"), n("781738"), n("424973");
    var i = n("627445"),
        l = n.n(i),
        a = n("693566"),
        s = n.n(a),
        r = n("404828"),
        o = n("933805"),
        u = n("605250"),
        d = n("647374"),
        c = n("888198"),
        f = n("290689"),
        p = n("788554"),
        m = n("718517"),
        h = n("23690"),
        x = n("10680");
    let E = {
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
        y = new Set(["*", "_", "\\"]),
        g = {},
        S = {};
    for (let e in c.default.RULES) {
        if (!(e in E)) throw Error("Slate: Unknown markdown rule: ".concat(e, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
        let t = E[e];
        "skip" !== t.type && (g[e] = C(c.default.RULES[e])), "skip" !== t.type && "inlineObject" !== t.type && (S[e] = C("text" === e ? f.default : c.default.RULES[e]))
    }

    function C(e) {
        l(null != e.parse, "Slate: rule must have a parse function");
        let t = e.parse;
        return {
            ...e,
            parse(e, n, i) {
                let l = t.call(this, e, n, i);
                return !(l instanceof Array) && (l.originalMatch = e), l
            }
        }
    }
    let I = {
            url: {
                parse: e => null == (0, d.punycodeLink)(e[1]) ? {
                    type: "text",
                    content: e[0],
                    originalMatch: e
                } : {
                    type: "link",
                    content: e[1],
                    originalMatch: e
                }
            },
            autolink: {
                parse: e => null == (0, d.punycodeLink)(e[1]) ? {
                    type: "text",
                    content: e[0],
                    originalMatch: e
                } : {
                    type: "autolink",
                    content: e[1],
                    originalMatch: e
                }
            },
            codeBlockSyntax: {
                order: r.defaultRules.inlineCode.order - .1,
                match: e => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
                parse: e => null != e[2] && "" !== e[2] && x.isKnownLang(e[2]) ? [{
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
        },
        T = (0, p.default)([g, I]),
        _ = (0, p.default)([S, I]),
        v = o.astParserFor(T),
        N = o.astParserFor(_),
        A = {
            max: 1 / 0,
            maxAge: 1 * m.default.Millis.MINUTE,
            updateAgeOnGet: !0
        },
        O = new s(A),
        M = new s(A);

    function R(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = x.findBackticks(e);
        if (l.push(e.length), 1 === l.length && n) return [];
        let a = 0,
            s = n,
            r = [];
        for (let n of l) {
            if (s) r.push({
                text: e.substring(a, n),
                start: a,
                attributes: ["codeBlockText"],
                data: void 0
            });
            else {
                let s = n === l[l.length - 2],
                    o = s ? e.substring(n + 3) : "",
                    u = null != o.match(x.caseInsensitiveLangRegex),
                    d = u ? o : "";
                n += 3 + d.length;
                let c = e.substring(a, n);
                if ("" !== c) {
                    let e = function(e, t, n) {
                        let i = [],
                            l = n ? M : O,
                            a = l.get(e);
                        if (null != a) return a;
                        let s = e.replace(/\r\n/g, " \n").replace(/[\r\f]/g, " ").replace(/\t/g, " ") + "\n\n",
                            r = {
                                originalMatch: {
                                    index: 0,
                                    0: ""
                                },
                                type: "paragraph",
                                content: (n ? N : v)(s, !1, {
                                    returnMentionIds: !0,
                                    disableAutoBlockNewlines: !0,
                                    guildId: t
                                })
                            };
                        k(i, s, r, 0, []);
                        let o = function(e) {
                            if (0 === (e = e.filter(e => e.text.length > 0)).length) return e;
                            let t = [e[0]];
                            for (let n = 1; n < e.length; n++) {
                                let i = t[t.length - 1],
                                    l = i.start + i.text.length,
                                    a = e[n];
                                a.start === l && null == i.data && null == a.data && i.attributes.join("-") === a.attributes.join("-") ? i.text += a.text : t.push(a)
                            }
                            return t
                        }(i);
                        return l.set(e, o), o
                    }(c, t, i);
                    e.forEach(e => {
                        r.push({
                            ...e,
                            start: e.start + a
                        })
                    })
                }
            }
            s = !s, a = n
        }
        return r
    }

    function k(e, t, n, i, a) {
        let {
            content: s,
            type: r,
            originalMatch: o
        } = n;
        switch (l(null != o, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), r) {
            case "newline":
            case "br":
            case "paragraph":
            case "text":
            case "emoticon":
                return L(e, t, s || "", i, a);
            case "emoji":
            case "customEmoji": {
                let l = t.substring(i);
                if (!l.startsWith(o[0]) && (i = U(e, t, i, t.length), l = t.substring(i)), l.startsWith(o[0])) return P({
                    result: e,
                    sourceText: t,
                    text: o[0],
                    originalStart: i,
                    attributes: [r],
                    data: n
                });
                throw Error("Slate: Unable to find emoji: ".concat(o[0], " in ").concat(t, " at ").concat(i))
            }
            case "mention":
            case "roleMention":
            case "channelMention":
            case "commandMention":
            case "staticRouteLink":
            case "soundboard":
            case "channel": {
                let {
                    text: a,
                    id: s
                } = n;
                if (null != a) return l(a === o[0], "Slate: text mentions must exactly match the regex match"), P({
                    result: e,
                    sourceText: t,
                    text: a,
                    originalStart: i,
                    attributes: ["textMention"],
                    data: {
                        text: a
                    }
                });
                return P({
                    result: e,
                    sourceText: t,
                    text: o[0],
                    originalStart: i,
                    attributes: [r],
                    data: {
                        id: s
                    }
                })
            }
            case "timestamp":
                if (h.default.getCurrentConfig({
                        location: "c70cbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled) return P({
                    result: e,
                    sourceText: t,
                    text: o[0],
                    originalStart: i,
                    attributes: [r],
                    data: n
                });
                return L(e, t, o[0], i, a);
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
            case "link": {
                i = j(t, i);
                let {
                    before: n,
                    after: l
                } = function(e, t, n, i) {
                    if ("inlineCode" === t) return {
                        before: i[1],
                        after: i[1]
                    };
                    if ("em" === t && "_" === e.substring(n, n + 1)) return {
                        before: "_",
                        after: "_"
                    };
                    let l = E["link" === t ? "url" : t];
                    if ("inlineStyle" === l.type) return l;
                    throw Error("Slate: rule must be an inlineStyle")
                }(t, r, i, o);
                return i = b(e, t, n, i, "syntaxBefore"), a.push(r), i = L(e, t, null != s ? s : "", i, a), a.pop(), i = b(e, t, l, i, "syntaxAfter"), j(t, i)
            }
            default:
                throw Error("Slate: Unknown rule type: ".concat(r))
        }
    }

    function L(e, t, n, i, l) {
        return "string" == typeof n ? i = P({
            result: e,
            sourceText: t,
            text: n,
            originalStart: i,
            attributes: l,
            data: null
        }) : (!(n instanceof Array) && (n = [n]), n.forEach(n => {
            i = k(e, t, n, i, l)
        })), j(t, i)
    }

    function b(e, t, n, i, a) {
        if (n.length > 0) {
            let s = t.indexOf(n, i),
                r = t.substring(i, s + n.length);
            l(s >= 0, "Slate: Unable to find syntax characters"), e.push({
                text: r,
                attributes: [a],
                start: i,
                data: null
            }), i = s + n.length
        }
        return i
    }

    function P(e) {
        let {
            result: t,
            sourceText: n,
            text: i,
            originalStart: l,
            attributes: a,
            data: s
        } = e, r = j(n, l);
        for (;
            "\n" === i.charAt(0) || " " === i.charAt(0);) i = i.substring(1);
        let o = n.indexOf(i, r);
        if (o !== r ? r = l = U(t, n, r, o) : "\\" === i && "\\" === n.charAt(o + 1) && (o++, l = ++r), o !== r) throw new(0, u.default)("MarkdownToSlate").error(JSON.stringify({
            sourceText: n,
            searchText: i,
            searchStartsAt: n.substring(r),
            startPos: r
        })), Error("Slate: Unable to find content in source text!");
        let d = r + i.length,
            c = n.substring(l, d);
        return t.push({
            text: c,
            attributes: a.slice(),
            start: l,
            data: s
        }), d
    }

    function j(e, t) {
        for (;
            "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
        return t
    }

    function U(e, t, n, i) {
        for (; n < i;)
            if (y.has(t[n])) n = b(e, t, t[n], n, "syntaxBefore"), n = j(t, n);
            else break;
        return n
    }
}
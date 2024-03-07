function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parse: function() {
            return M
        }
    }), n("222007"), n("70102"), n("781738"), n("424973");
    var l = n("627445"),
        i = n.n(l),
        a = n("693566"),
        s = n.n(a),
        r = n("404828"),
        o = n("933805"),
        u = n("605250"),
        d = n("647374"),
        c = n("888198"),
        f = n("290689"),
        m = n("788554"),
        p = n("718517"),
        h = n("23690"),
        E = n("10680");
    let g = {
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
        S = new Set(["*", "_", "\\"]),
        C = {},
        T = {};
    for (let e in c.default.RULES) {
        if (!(e in g)) throw Error("Slate: Unknown markdown rule: ".concat(e, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
        let t = g[e];
        "skip" !== t.type && (C[e] = v(c.default.RULES[e])), "skip" !== t.type && "inlineObject" !== t.type && (T[e] = v("text" === e ? f.default : c.default.RULES[e]))
    }

    function v(e) {
        i(null != e.parse, "Slate: rule must have a parse function");
        let t = e.parse;
        return {
            ...e,
            parse(e, n, l) {
                let i = t.call(this, e, n, l);
                return !(i instanceof Array) && (i.originalMatch = e), i
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
                parse: e => null != e[2] && "" !== e[2] && E.isKnownLang(e[2]) ? [{
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
        _ = (0, m.default)([C, I]),
        N = (0, m.default)([T, I]),
        A = o.astParserFor(_),
        x = o.astParserFor(N),
        y = {
            max: 1 / 0,
            maxAge: 1 * p.default.Millis.MINUTE,
            updateAgeOnGet: !0
        },
        O = new s(y),
        R = new s(y);

    function M(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = E.findBackticks(e);
        if (i.push(e.length), 1 === i.length && n) return [];
        let a = 0,
            s = n,
            r = [];
        for (let n of i) {
            if (s) r.push({
                text: e.substring(a, n),
                start: a,
                attributes: ["codeBlockText"],
                data: void 0
            });
            else {
                let s = n === i[i.length - 2],
                    o = s ? e.substring(n + 3) : "",
                    u = null != o.match(E.caseInsensitiveLangRegex),
                    d = u ? o : "";
                n += 3 + d.length;
                let c = e.substring(a, n);
                if ("" !== c) {
                    let e = function(e, t, n) {
                        let l = [],
                            i = n ? R : O,
                            a = i.get(e);
                        if (null != a) return a;
                        let s = e.replace(/\r\n/g, " \n").replace(/[\r\f]/g, " ").replace(/\t/g, " ") + "\n\n",
                            r = {
                                originalMatch: {
                                    index: 0,
                                    0: ""
                                },
                                type: "paragraph",
                                content: (n ? x : A)(s, !1, {
                                    returnMentionIds: !0,
                                    disableAutoBlockNewlines: !0,
                                    guildId: t
                                })
                            };
                        L(l, s, r, 0, []);
                        let o = function(e) {
                            if (0 === (e = e.filter(e => e.text.length > 0)).length) return e;
                            let t = [e[0]];
                            for (let n = 1; n < e.length; n++) {
                                let l = t[t.length - 1],
                                    i = l.start + l.text.length,
                                    a = e[n];
                                a.start === i && null == l.data && null == a.data && l.attributes.join("-") === a.attributes.join("-") ? l.text += a.text : t.push(a)
                            }
                            return t
                        }(l);
                        return i.set(e, o), o
                    }(c, t, l);
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

    function L(e, t, n, l, a) {
        let {
            content: s,
            type: r,
            originalMatch: o
        } = n;
        switch (i(null != o, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), r) {
            case "newline":
            case "br":
            case "paragraph":
            case "text":
            case "emoticon":
                return P(e, t, s || "", l, a);
            case "emoji":
            case "customEmoji": {
                let i = t.substring(l);
                if (!i.startsWith(o[0]) && (l = D(e, t, l, t.length), i = t.substring(l)), i.startsWith(o[0])) return j({
                    result: e,
                    sourceText: t,
                    text: o[0],
                    originalStart: l,
                    attributes: [r],
                    data: n
                });
                throw Error("Slate: Unable to find emoji: ".concat(o[0], " in ").concat(t, " at ").concat(l))
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
                if (null != a) return i(a === o[0], "Slate: text mentions must exactly match the regex match"), j({
                    result: e,
                    sourceText: t,
                    text: a,
                    originalStart: l,
                    attributes: ["textMention"],
                    data: {
                        text: a
                    }
                });
                return j({
                    result: e,
                    sourceText: t,
                    text: o[0],
                    originalStart: l,
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
                    }).enabled) return j({
                    result: e,
                    sourceText: t,
                    text: o[0],
                    originalStart: l,
                    attributes: [r],
                    data: n
                });
                return P(e, t, o[0], l, a);
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
                l = U(t, l);
                let {
                    before: n,
                    after: i
                } = function(e, t, n, l) {
                    if ("inlineCode" === t) return {
                        before: l[1],
                        after: l[1]
                    };
                    if ("em" === t && "_" === e.substring(n, n + 1)) return {
                        before: "_",
                        after: "_"
                    };
                    let i = g["link" === t ? "url" : t];
                    if ("inlineStyle" === i.type) return i;
                    throw Error("Slate: rule must be an inlineStyle")
                }(t, r, l, o);
                return l = b(e, t, n, l, "syntaxBefore"), a.push(r), l = P(e, t, null != s ? s : "", l, a), a.pop(), l = b(e, t, i, l, "syntaxAfter"), U(t, l)
            }
            default:
                throw Error("Slate: Unknown rule type: ".concat(r))
        }
    }

    function P(e, t, n, l, i) {
        return "string" == typeof n ? l = j({
            result: e,
            sourceText: t,
            text: n,
            originalStart: l,
            attributes: i,
            data: null
        }) : (!(n instanceof Array) && (n = [n]), n.forEach(n => {
            l = L(e, t, n, l, i)
        })), U(t, l)
    }

    function b(e, t, n, l, a) {
        if (n.length > 0) {
            let s = t.indexOf(n, l),
                r = t.substring(l, s + n.length);
            i(s >= 0, "Slate: Unable to find syntax characters"), e.push({
                text: r,
                attributes: [a],
                start: l,
                data: null
            }), l = s + n.length
        }
        return l
    }

    function j(e) {
        let {
            result: t,
            sourceText: n,
            text: l,
            originalStart: i,
            attributes: a,
            data: s
        } = e, r = U(n, i);
        for (;
            "\n" === l.charAt(0) || " " === l.charAt(0);) l = l.substring(1);
        let o = n.indexOf(l, r);
        if (o !== r ? r = i = D(t, n, r, o) : "\\" === l && "\\" === n.charAt(o + 1) && (o++, i = ++r), o !== r) throw new(0, u.default)("MarkdownToSlate").error(JSON.stringify({
            sourceText: n,
            searchText: l,
            searchStartsAt: n.substring(r),
            startPos: r
        })), Error("Slate: Unable to find content in source text!");
        let d = r + l.length,
            c = n.substring(i, d);
        return t.push({
            text: c,
            attributes: a.slice(),
            start: i,
            data: s
        }), d
    }

    function U(e, t) {
        for (;
            "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
        return t
    }

    function D(e, t, n, l) {
        for (; n < l;)
            if (S.has(t[n])) n = b(e, t, t[n], n, "syntaxBefore"), n = U(t, n);
            else break;
        return n
    }
}
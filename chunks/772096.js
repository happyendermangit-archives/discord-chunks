function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        punycodeLink: function() {
            return O
        }
    }), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("411104");
    var i = n("392711"),
        r = n.n(i),
        s = n("31775"),
        a = n.n(s);
    n("711739");
    var o = n("302454"),
        l = n.n(o),
        u = n("830121"),
        d = n("823379"),
        _ = n("172244"),
        c = n("571989");
    let E = new(a())({
        max: 50
    });

    function I(e) {
        let t = E.get(e);
        if (null != t) return t;
        let n = (0, c.sanitizeWhitespace)(e),
            i = (0, c.sanitizeUnicodeConfusables)(n),
            r = {
                whitespaceSanitized: n,
                fullySanitized: i
            };
        return E.set(e, r), r
    }
    let T = ["http:", "https:", "discord:"],
        f = [_.AST_KEY.TEXT, _.AST_KEY.UNDERLINE, _.AST_KEY.STRONG, _.AST_KEY.ITALICS, _.AST_KEY.STRIKETHROUGH, _.AST_KEY.INLINE_CODE, _.AST_KEY.SPOILER, _.AST_KEY.LINE_BREAK, _.AST_KEY.TIMESTAMP],
        S = [...f, _.AST_KEY.EMOJI, _.AST_KEY.CUSTOM_EMOJI],
        A = [_.AST_KEY.LIST, _.AST_KEY.HEADING, _.AST_KEY.BLOCK_QUOTE],
        h = [_.AST_KEY.TEXT],
        m = [_.AST_KEY.UNDERLINE, _.AST_KEY.STRONG, _.AST_KEY.ITALICS, _.AST_KEY.STRIKETHROUGH, _.AST_KEY.INLINE_CODE, _.AST_KEY.SPOILER, _.AST_KEY.LINE_BREAK, _.AST_KEY.TIMESTAMP, _.AST_KEY.EMOJI, _.AST_KEY.CUSTOM_EMOJI, _.AST_KEY.LIST, _.AST_KEY.HEADING, _.AST_KEY.BLOCK_QUOTE];

    function N(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        for (let i of (!Array.isArray(e) && (e = [e]), e)) {
            if (void 0 === i || !t.includes(i.type)) return null;
            if (i.type === _.AST_KEY.INLINE_CODE) {
                let e = [...t, ...n];
                if (null == N(i.validationChildContent, e)) return null
            }
            if (Array.isArray(i.content) && null == N(i.content, t)) return null
        }
        return e
    }

    function O(e) {
        try {
            var t;
            let n = new URL(e),
                i = null !== (t = n.protocol) && void 0 !== t ? t : "";
            if (!T.includes(i.toLowerCase())) throw Error("Provided protocol is not allowed: " + i);
            if (("http:" === i || "https:" === i) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
            let r = (0, c.safelyMakeUrlHumanReadable)(n);
            n.username = "", n.password = "";
            let s = (0, c.safelyMakeUrlHumanReadable)(n);
            return {
                target: r,
                displayTarget: s
            }
        } catch (e) {
            return null
        }
    }
    t.default = {
        ...l().defaultRules.link,
        match: (e, t, n) => t.allowLinks ? l().defaultRules.link.match(e, t, n) : null,
        parse(e, t, n) {
            let [i, s, a, o] = e, c = () => ({
                type: _.AST_KEY.TEXT,
                content: i
            }), E = I(a), T = I(s), p = I(null != o ? o : ""), R = E.whitespaceSanitized, C = T.fullySanitized, g = p.fullySanitized, L = C.trim();
            if (0 === R.trim().length || 0 === L.length) return c();
            let D = O(l().unescapeUrl(a)),
                v = (0, u.default)(s).length > 0 || (0, u.default)(o).length > 0;
            if (null == D || v) return c();
            let M = {
                    ...n,
                    allowEscape: !1,
                    parseInlineCodeChildContent: !0
                },
                y = n.allowEmojiLinks ? S : f,
                P = [...y, ...A],
                U = [...h, ...m],
                b = N(t(C, M), P, [_.AST_KEY.EMOJI]),
                G = N(t(g, M), U);
            if (null == b || null == G || 0 === (function e(t) {
                    let n = "";
                    for (let i of t) switch (i.type) {
                        case _.AST_KEY.TEXT:
                        case _.AST_KEY.INLINE_CODE:
                            n += i.content;
                            break;
                        case _.AST_KEY.CUSTOM_EMOJI:
                            n += i.name;
                            break;
                        case _.AST_KEY.EMOJI:
                            n += i.surrogate;
                            break;
                        case _.AST_KEY.LINE_BREAK:
                            n += "\n";
                            break;
                        case _.AST_KEY.STRONG:
                        case _.AST_KEY.ITALICS:
                        case _.AST_KEY.UNDERLINE:
                        case _.AST_KEY.STRIKETHROUGH:
                        case _.AST_KEY.SPOILER:
                            n += e(i.content);
                            break;
                        case _.AST_KEY.TIMESTAMP:
                            n += "<timestamp>";
                            break;
                        case _.AST_KEY.BLOCK_QUOTE:
                        case _.AST_KEY.LIST:
                        case _.AST_KEY.HEADING:
                            n += "<".concat(i.type, "Content>");
                            break;
                        default:
                            (0, d.assertNever)(i.type)
                    }
                    return n
                })(b).trim().length) return c();
            let w = r().pick(t.rules, y),
                B = l().parserFor(w)(T.whitespaceSanitized, M),
                k = p.whitespaceSanitized,
                {
                    target: F
                } = D;
            return {
                content: B,
                target: F,
                title: k
            }
        }
    }
}
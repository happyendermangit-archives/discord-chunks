function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("404828"),
        s = n.n(i),
        r = n("385976"),
        a = n("867805"),
        o = n("402671"),
        l = n("290689");
    let u = {
        s: {
            requiredFirstCharacters: ["~"],
            match: s.inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
        },
        highlight: {
            order: l.default.order,
            match: () => null
        },
        emoji: {
            order: l.default.order,
            requiredFirstCharacters: [":"],
            match(e) {
                let t = a.default.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
                return null != t && "" !== a.default.convertNameToSurrogate(t[1]) ? t : null
            },
            parse(e) {
                let [t, n] = e, i = a.default.convertNameToSurrogate(n);
                return null == i || "" === i ? {
                    type: "text",
                    content: t
                } : {
                    name: ":".concat(n, ":"),
                    surrogate: i,
                    src: o.default.getURL(i)
                }
            }
        },
        customEmoji: {
            order: s.defaultRules.codeBlock.order,
            requiredFirstCharacters: ["<"],
            match: e => /^<(a)?:(\w+):(\d+)>/.exec(e),
            parse(e, t, n) {
                let [i, s, a, o] = e, {
                    guildId: l
                } = n, u = r.default.getDisambiguatedEmojiContext(l).getById(o), d = null == u || u.require_colons;
                return null != u && (a = u.name), {
                    emojiId: o,
                    name: d ? ":".concat(a, ":") : a,
                    animated: "a" === s
                }
            }
        },
        text: {
            parse(e) {
                let t = a.default.findInlineEmojisFromSurrogates(e[0]),
                    n = 0;
                return t.map(e => {
                    if ("text" === e.type) {
                        let t = {
                            index: n,
                            0: e.text
                        };
                        return n += e.text.length, {
                            type: "text",
                            content: e.text,
                            originalMatch: t
                        }
                    } {
                        let t = {
                            index: n,
                            0: e.surrogate
                        };
                        return n += e.surrogate.length, {
                            type: "emoji",
                            name: e.emojiName,
                            surrogate: e.surrogate,
                            src: o.default.getURL(e.surrogate),
                            originalMatch: t
                        }
                    }
                })
            }
        },
        looseEm: {
            ...s.defaultRules.em,
            match: s.inlineRegex(RegExp("^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)")),
            parse: (e, t, n) => ({
                type: "em",
                content: t(e[1], n),
                originalMatch: e
            })
        }
    };
    var d = u
}
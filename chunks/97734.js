function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("302454"),
        r = n.n(i),
        s = n("339085"),
        a = n("633302"),
        o = n("176354"),
        l = n("594199");
    let u = {
        s: {
            requiredFirstCharacters: ["~"],
            match: r().inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
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
            order: r().defaultRules.codeBlock.order,
            requiredFirstCharacters: ["<"],
            match: e => /^<(a)?:(\w+):(\d+)>/.exec(e),
            parse(e, t, n) {
                let [i, r, a, o] = e, {
                    guildId: l
                } = n, u = s.default.getDisambiguatedEmojiContext(l).getById(o), d = null == u || u.require_colons;
                return null != u && (a = u.name), {
                    emojiId: o,
                    name: d ? ":".concat(a, ":") : a,
                    animated: "a" === r
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
            ...r().defaultRules.em,
            match: r().inlineRegex(RegExp("^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)")),
            parse: (e, t, n) => ({
                type: "em",
                content: t(e[1], n),
                originalMatch: e
            })
        }
    };
    t.default = u
}
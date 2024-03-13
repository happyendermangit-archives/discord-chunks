function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return z
        }
    }), n("781738"), n("424973"), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("404828"),
        a = n.n(r),
        o = n("980215"),
        l = n("867805"),
        u = n("235004"),
        d = n("42203"),
        c = n("305961"),
        f = n("697218"),
        _ = n("387111"),
        h = n("158998"),
        E = n("946897"),
        g = n("632886"),
        m = n("270926"),
        p = n("647374"),
        S = n("693078"),
        v = n("290689"),
        T = n("839462"),
        I = n("646630"),
        C = n("788554"),
        A = n("49111"),
        y = n("317041"),
        N = n("680894"),
        R = n("782340");
    let O = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
        D = /^$|\n *$/,
        P = /^ *>>> ?/,
        M = /^ *> ?/gm;

    function L(e) {
        let t = (0, p.punycodeLink)(e[1]);
        if (null == t) return {
            type: "text",
            content: e[1]
        };
        let {
            displayTarget: n,
            target: i
        } = t;
        return {
            type: "link",
            content: [{
                type: "text",
                content: n
            }],
            target: i,
            title: void 0
        }
    }
    let b = e => {
            let t = d.default.getChannel(e);
            return null == t ? void 0 : t.getGuildId()
        },
        U = e => null != e.guildId ? c.default.getGuild(e.guildId) : null != e.channelId ? c.default.getGuild(b(e.channelId)) : null,
        w = {
            newline: a.defaultRules.newline,
            paragraph: a.defaultRules.paragraph,
            escape: {
                ...a.defaultRules.escape,
                match: (e, t, n) => !1 === t.allowEscape ? null : a.defaultRules.escape.match(e, t, n)
            },
            blockQuote: {
                ...a.defaultRules.blockQuote,
                requiredFirstCharacters: [" ", ">"],
                match(e, t) {
                    let {
                        prevCapture: n,
                        inQuote: i,
                        nested: s
                    } = t;
                    if (i || s) return null;
                    if (null == n) return O.exec(e);
                    let r = n[0];
                    return D.test(r) ? O.exec(e) : null
                },
                parse(e, t, n) {
                    let i = e[0],
                        s = !!P.exec(i),
                        r = i.replace(s ? P : M, ""),
                        a = n.inQuote || !1,
                        o = n.inline || !1;
                    n.inQuote = !0, !s && (n.inline = !0);
                    let l = t(r, n);
                    return n.inQuote = a, n.inline = o, 0 === l.length && l.push({
                        type: "text",
                        content: " "
                    }), {
                        content: l,
                        type: "blockQuote"
                    }
                }
            },
            link: p.default,
            autolink: {
                ...a.defaultRules.autolink,
                parse: L
            },
            url: {
                ...a.defaultRules.url,
                requiredFirstCharacters: ["h", "s"],
                match(e, t) {
                    if (!t.inline) return null;
                    let n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
                    if (null != n) {
                        let e = 0,
                            t = n[0];
                        for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
                            let n = t.indexOf("(", e);
                            if (-1 === n) {
                                t = t.slice(0, t.length - 1);
                                break
                            }
                            e = n + 1
                        }
                        n[0] = n[1] = t
                    }
                    return n
                },
                parse: L
            },
            strong: a.defaultRules.strong,
            em: a.defaultRules.em,
            u: a.defaultRules.u,
            br: a.defaultRules.br,
            text: v.default,
            inlineCode: {
                ...a.defaultRules.inlineCode,
                parse(e, t, n) {
                    let i = a.defaultRules.inlineCode.parse(e, t, n);
                    return !0 === n.parseInlineCodeChildContent ? {
                        ...i,
                        validationChildContent: t(i.content, n)
                    } : i
                }
            },
            emoticon: {
                order: v.default.order,
                requiredFirstCharacters: ["\xaf"],
                match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
                parse: e => ({
                    type: "text",
                    content: e[1]
                })
            },
            codeBlock: {
                order: a.defaultRules.codeBlock.order,
                requiredFirstCharacters: ["`"],
                match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
                parse(e, t, n) {
                    var i, s;
                    return {
                        lang: null !== (i = e[1]) && void 0 !== i ? i : "",
                        content: null !== (s = e[2]) && void 0 !== s ? s : "",
                        inQuote: n.inQuote || !1
                    }
                }
            },
            roleMention: {
                order: v.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<@&(\d+)>/.exec(e),
                parse(e, t, n) {
                    let [i, s] = e;
                    if (n.returnMentionIds) return {
                        type: "roleMention",
                        id: s
                    };
                    let r = U(n),
                        a = null != r ? c.default.getRole(r.id, s) : null;
                    return null == a ? {
                        type: "text",
                        content: "@".concat(R.default.Messages.DELETED_ROLE_PLACEHOLDER)
                    } : {
                        type: "mention",
                        channelId: n.channelId,
                        guildId: null != r ? r.id : null,
                        roleId: s,
                        roleColor: a.color,
                        color: a.color,
                        colorString: a.colorString,
                        content: [{
                            type: "text",
                            content: "@".concat(a.name)
                        }]
                    }
                }
            },
            mention: {
                order: v.default.order,
                requiredFirstCharacters: ["<", "@"],
                match(e, t) {
                    let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                    return null != n && ("@Clyde" !== n[0] || (0, o.getClydeEnabled)(U(t), d.default.getChannel(t.channelId))) ? n : null
                },
                parse(e, t, n) {
                    let i, s;
                    if (n.returnMentionIds) return null == e[1] ? {
                        type: "mention",
                        text: e[0]
                    } : {
                        type: "mention",
                        id: e[1]
                    };
                    let r = f.default.getUser(e[1]),
                        a = d.default.getChannel(n.channelId);
                    if (null != r && (s = r.id, i = r.toString(), null != a)) {
                        var l;
                        i = null !== (l = _.default.getNickname(a.getGuildId(), n.channelId, r)) && void 0 !== l ? l : h.default.getName(r)
                    }
                    null == r && "@Clyde" === e[0] && (0, o.getClydeEnabled)(U(n), a) && (s = N.CLYDE_AI_USER_ID);
                    let u = e[1],
                        c = null != u && A.ID_REGEX.test(u.trim()),
                        E = c && n.unknownUserMentionPlaceholder ? "@".concat(R.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                    return {
                        userId: s,
                        channelId: n.channelId,
                        guildId: null == a ? void 0 : a.getGuildId(),
                        roleName: e[2],
                        content: [{
                            type: "text",
                            content: null != i ? "@".concat(i) : E
                        }]
                    }
                }
            },
            channelMention: g.default.channelMention,
            channelOrMessageUrl: g.default.channelOrMessageUrl,
            mediaPostLink: g.default.mediaPostLink,
            attachmentLink: E.default.attachmentLink,
            commandMention: {
                order: a.defaultRules.text.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
                parse(e, t, n) {
                    if (n.returnMentionIds) return {
                        type: "commandMention",
                        id: e[2]
                    };
                    let [, ...i] = e[1].split(" "), s = "".concat(e[2]).concat([...i].map(e => "".concat(y.SUB_COMMAND_KEY_SEPARATOR).concat(e)).join(""));
                    return {
                        channelId: n.channelId,
                        commandId: e[2],
                        commandName: e[1],
                        commandKey: s,
                        content: [{
                            type: "text",
                            content: "".concat(e[1])
                        }]
                    }
                }
            },
            emoji: {
                order: v.default.order,
                requiredFirstCharacters: [":"],
                match(e) {
                    let t = l.default.EMOJI_NAME_RE.exec(e);
                    return null != t && "" !== l.default.convertNameToSurrogate(t[1]) ? t : null
                },
                parse(e) {
                    let t = l.default.convertNameToSurrogate(e[1]);
                    return {
                        type: "text",
                        content: null == t || "" === t ? ":".concat(e[1], ":") : t
                    }
                }
            },
            soundboard: {
                order: v.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<sound:(\d+)>/.exec(e),
                parse(e, t, n) {
                    var i;
                    let s = e[1],
                        r = u.default.getSoundById(s),
                        a = null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : s;
                    return {
                        type: "soundboard",
                        id: s,
                        soundId: s,
                        channelId: n.channelId,
                        content: a
                    }
                }
            },
            customEmoji: {
                order: v.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                parse: e => ({
                    type: "text",
                    content: ":".concat(e[1], ":")
                })
            },
            timestamp: {
                order: v.default.order - 1,
                requiredFirstCharacters: ["<"],
                match: e => I.TIMESTAMP_REGEX.exec(e),
                parse(e) {
                    let [t, n, i] = e, s = (0, I.parseTimestamp)(n, i);
                    return null == s ? {
                        type: "text",
                        content: t
                    } : s
                }
            },
            s: {
                order: a.defaultRules.u.order,
                requiredFirstCharacters: ["~"],
                match: a.inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                parse: a.defaultRules.u.parse
            },
            spoiler: {
                order: v.default.order,
                requiredFirstCharacters: ["|"],
                match: e => A.MARKDOWN_SPOILER_REGEXP.exec(e),
                parse: (e, t, n) => ({
                    content: t(e[1], n),
                    channelId: n.channelId
                })
            },
            staticRouteLink: {
                order: v.default.order,
                requiredFirstCharacters: ["<"],
                match: e => A.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
                parse(e, t, n) {
                    let i = {
                        home: R.default.Messages.SERVER_GUIDE,
                        guide: R.default.Messages.SERVER_GUIDE,
                        browse: R.default.Messages.CHANNEL_BROWSER_TITLE,
                        customize: R.default.Messages.CHANNELS_AND_ROLES
                    };
                    return {
                        content: [{
                            type: "text",
                            content: i[e[1]]
                        }],
                        channelId: e[1],
                        guildId: b(n.channelId),
                        id: e[1]
                    }
                }
            },
            heading: m.default,
            list: S.default
        },
        k = (0, C.default)([w, T.default]),
        V = s.omit(k, ["inlineCode", "codeBlock", "br", "blockQuote"]),
        G = s.omit(k, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
        F = s.omit(k, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink"]),
        x = s.omit((0, C.default)([k, {
            inlineCode: {
                match(e, t, n) {
                    let i = k.codeBlock.match(e, t, n);
                    if (null != i) return i;
                    let s = k.inlineCode.match(e, t, n);
                    if (null != s) return s
                }
            }
        }]), ["blockQuote", "codeBlock", "br"]),
        B = s.omit(k, ["codeBlock", "br", "blockQuote"]),
        H = s.omit(k, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline"]),
        Y = s.omit(k, ["codeBlock", "blockQuote", "br"]),
        j = s.omit(k, ["codeBlock", "br", "inlineCode"]);

    function W(e, t) {
        return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
    }
    let K = (0, C.default)([{
        highlightWord: {
            order: -1,
            match(e, t) {
                if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
                let n = e.indexOf(t.highlightWord);
                if (-1 === n) return null;
                let i = !W(e, n);
                if (i)
                    do n = e.indexOf(t.highlightWord, n + 1), i = !W(e, n); while (i && -1 !== n);
                if (-1 === n) return null;
                let s = e.substring(0, n),
                    r = e.substring(n + t.highlightWord.length);
                return [e, t.highlightWord, s, r]
            },
            parse(e, t, n) {
                let i = t(e[2], n),
                    s = t(e[3], n);
                return [...i, {
                    type: "highlight",
                    content: e[1]
                }, ...s]
            }
        }
    }, s.omit(k, ["url"])]);
    var z = {
        RULES: k,
        CHANNEL_TOPIC_RULES: V,
        VOICE_CHANNEL_STATUS_RULES: G,
        EMBED_TITLE_RULES: F,
        INLINE_REPLY_RULES: x,
        GUILD_VERIFICATION_FORM_RULES: B,
        GUILD_EVENT_RULES: Y,
        PROFILE_BIO_RULES: H,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: K,
        NATIVE_SEARCH_RESULT_LINK_RULES: j
    }
}
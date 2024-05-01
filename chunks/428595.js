function(e, t, n) {
    "use strict";
    n.r(t), n("757143"), n("653041"), n("47120");
    var i = n("392711"),
        r = n.n(i),
        a = n("302454"),
        s = n.n(a),
        o = n("797610"),
        l = n("633302"),
        u = n("763296"),
        d = n("592125"),
        _ = n("430824"),
        c = n("594174"),
        E = n("5192"),
        I = n("51144"),
        T = n("369780"),
        f = n("444758"),
        S = n("723454"),
        h = n("772096"),
        A = n("800927"),
        m = n("945884"),
        N = n("594199"),
        p = n("97734"),
        O = n("660199"),
        R = n("364458"),
        C = n("981631"),
        g = n("689079"),
        L = n("377668"),
        v = n("689938");
    let D = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
        M = /^$|\n *$/,
        y = /^ *>>> ?/,
        P = /^ *> ?/gm;

    function U(e) {
        let t = (0, h.punycodeLink)(e[1]);
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
        G = e => null != e.guildId ? _.default.getGuild(e.guildId) : null != e.channelId ? _.default.getGuild(b(e.channelId)) : null,
        w = {
            newline: s().defaultRules.newline,
            paragraph: s().defaultRules.paragraph,
            escape: {
                ...s().defaultRules.escape,
                match: (e, t, n) => !1 === t.allowEscape ? null : s().defaultRules.escape.match(e, t, n)
            },
            blockQuote: {
                ...s().defaultRules.blockQuote,
                requiredFirstCharacters: [" ", ">"],
                match(e, t) {
                    let {
                        prevCapture: n,
                        inQuote: i,
                        nested: r
                    } = t;
                    if (i || r) return null;
                    if (null == n) return D.exec(e);
                    let a = n[0];
                    return M.test(a) ? D.exec(e) : null
                },
                parse(e, t, n) {
                    let i = e[0],
                        r = !!y.exec(i),
                        a = i.replace(r ? y : P, ""),
                        s = n.inQuote || !1,
                        o = n.inline || !1;
                    n.inQuote = !0, !r && (n.inline = !0);
                    let l = t(a, n);
                    return n.inQuote = s, n.inline = o, 0 === l.length && l.push({
                        type: "text",
                        content: " "
                    }), {
                        content: l,
                        type: "blockQuote"
                    }
                }
            },
            link: h.default,
            autolink: {
                ...s().defaultRules.autolink,
                parse: U
            },
            url: {
                ...s().defaultRules.url,
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
                parse: U
            },
            strong: s().defaultRules.strong,
            em: s().defaultRules.em,
            u: s().defaultRules.u,
            br: s().defaultRules.br,
            text: N.default,
            inlineCode: {
                ...s().defaultRules.inlineCode,
                parse(e, t, n) {
                    let i = s().defaultRules.inlineCode.parse(e, t, n);
                    return !0 === n.parseInlineCodeChildContent ? {
                        ...i,
                        validationChildContent: t(i.content, n)
                    } : i
                }
            },
            emoticon: {
                order: N.default.order,
                requiredFirstCharacters: ["\xaf"],
                match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
                parse: e => ({
                    type: "text",
                    content: e[1]
                })
            },
            codeBlock: {
                order: s().defaultRules.codeBlock.order,
                requiredFirstCharacters: ["`"],
                match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
                parse(e, t, n) {
                    var i, r;
                    return {
                        lang: null !== (i = e[1]) && void 0 !== i ? i : "",
                        content: null !== (r = e[2]) && void 0 !== r ? r : "",
                        inQuote: n.inQuote || !1
                    }
                }
            },
            roleMention: {
                order: N.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<@&(\d+)>/.exec(e),
                parse(e, t, n) {
                    let [i, r] = e;
                    if (n.returnMentionIds) return {
                        type: "roleMention",
                        id: r
                    };
                    let a = G(n),
                        s = null != a ? _.default.getRole(a.id, r) : null;
                    return null == s ? {
                        type: "text",
                        content: "@".concat(v.default.Messages.DELETED_ROLE_PLACEHOLDER)
                    } : {
                        type: "mention",
                        channelId: n.channelId,
                        guildId: null != a ? a.id : null,
                        roleId: r,
                        roleColor: s.color,
                        color: s.color,
                        colorString: s.colorString,
                        content: [{
                            type: "text",
                            content: "@".concat(s.name)
                        }]
                    }
                }
            },
            mention: {
                order: N.default.order,
                requiredFirstCharacters: ["<", "@"],
                match(e, t) {
                    let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                    return null != n && ("@Clyde" !== n[0] || (0, o.getClydeEnabled)(G(t), d.default.getChannel(t.channelId))) ? n : null
                },
                parse(e, t, n) {
                    let i, r;
                    if (n.returnMentionIds) return null == e[1] ? {
                        type: "mention",
                        text: e[0]
                    } : {
                        type: "mention",
                        id: e[1]
                    };
                    let a = c.default.getUser(e[1]),
                        s = d.default.getChannel(n.channelId);
                    if (null != a && (r = a.id, i = a.toString(), null != s)) {
                        var l;
                        i = null !== (l = E.default.getNickname(s.getGuildId(), n.channelId, a)) && void 0 !== l ? l : I.default.getName(a)
                    }
                    null == a && "@Clyde" === e[0] && (0, o.getClydeEnabled)(G(n), s) && (r = L.CLYDE_AI_USER_ID);
                    let u = e[1],
                        _ = null != u && C.ID_REGEX.test(u.trim()),
                        T = _ && n.unknownUserMentionPlaceholder ? "@".concat(v.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                    return {
                        userId: r,
                        channelId: n.channelId,
                        guildId: null == s ? void 0 : s.getGuildId(),
                        parsedUserId: _ ? u : null,
                        roleName: e[2],
                        content: [{
                            type: "text",
                            content: null != i ? "@".concat(i) : T
                        }]
                    }
                }
            },
            channelMention: f.default.channelMention,
            channelOrMessageUrl: f.default.channelOrMessageUrl,
            mediaPostLink: f.default.mediaPostLink,
            attachmentLink: T.default.attachmentLink,
            commandMention: {
                order: s().defaultRules.text.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
                parse(e, t, n) {
                    if (n.returnMentionIds) return {
                        type: "commandMention",
                        id: e[2]
                    };
                    let [, ...i] = e[1].split(" "), r = "".concat(e[2]).concat([...i].map(e => "".concat(g.SUB_COMMAND_KEY_SEPARATOR).concat(e)).join(""));
                    return {
                        channelId: n.channelId,
                        commandId: e[2],
                        commandName: e[1],
                        commandKey: r,
                        content: [{
                            type: "text",
                            content: "".concat(e[1])
                        }]
                    }
                }
            },
            emoji: {
                order: N.default.order,
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
                order: N.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<sound:(\d+)>/.exec(e),
                parse(e, t, n) {
                    var i;
                    let r = e[1],
                        a = u.default.getSoundById(r),
                        s = null !== (i = null == a ? void 0 : a.name) && void 0 !== i ? i : r;
                    return {
                        type: "soundboard",
                        id: r,
                        soundId: r,
                        channelId: n.channelId,
                        content: s
                    }
                }
            },
            customEmoji: {
                order: N.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                parse: e => ({
                    type: "text",
                    content: ":".concat(e[1], ":")
                })
            },
            timestamp: {
                order: N.default.order - 1,
                requiredFirstCharacters: ["<"],
                match: e => O.TIMESTAMP_REGEX.exec(e),
                parse(e) {
                    let [t, n, i] = e, r = (0, O.parseTimestamp)(n, i);
                    return null == r ? {
                        type: "text",
                        content: t
                    } : r
                }
            },
            s: {
                order: s().defaultRules.u.order,
                requiredFirstCharacters: ["~"],
                match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                parse: s().defaultRules.u.parse
            },
            spoiler: {
                order: N.default.order,
                requiredFirstCharacters: ["|"],
                match: e => C.MARKDOWN_SPOILER_REGEXP.exec(e),
                parse: (e, t, n) => ({
                    content: t(e[1], n),
                    channelId: n.channelId
                })
            },
            staticRouteLink: {
                order: N.default.order,
                requiredFirstCharacters: ["<"],
                match: e => C.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
                parse: (e, t, n) => ({
                    content: [{
                        type: "text",
                        content: {
                            home: v.default.Messages.SERVER_GUIDE,
                            guide: v.default.Messages.SERVER_GUIDE,
                            browse: v.default.Messages.CHANNEL_BROWSER_TITLE,
                            customize: v.default.Messages.CHANNELS_AND_ROLES
                        } [e[1]]
                    }],
                    channelId: e[1],
                    guildId: b(n.channelId),
                    id: e[1]
                })
            },
            heading: S.default,
            list: A.default,
            subtext: m.default
        },
        B = (0, R.default)([w, p.default]),
        k = r().omit(B, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext"]),
        V = r().omit(B, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink", "subtext"]),
        x = r().omit(B, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink", "subtext"]),
        F = r().omit((0, R.default)([B, {
            inlineCode: {
                match(e, t, n) {
                    let i = B.codeBlock.match(e, t, n);
                    if (null != i) return i;
                    let r = B.inlineCode.match(e, t, n);
                    if (null != r) return r
                }
            }
        }]), ["blockQuote", "codeBlock", "br"]),
        H = r().omit(B, ["codeBlock", "br", "blockQuote"]),
        Y = r().omit(B, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline", "subtext"]),
        j = r().omit(B, ["codeBlock", "blockQuote", "br"]),
        W = r().omit(B, ["codeBlock", "br", "inlineCode"]);

    function K(e, t) {
        return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
    }
    let z = (0, R.default)([{
        highlightWord: {
            order: -1,
            match(e, t) {
                if (null != t.parseDepth && t.parseDepth > 10 || null == t.highlightWord || 0 === t.highlightWord.length) return null;
                let n = e.indexOf(t.highlightWord);
                if (-1 === n) return null;
                let i = !K(e, n);
                if (i)
                    do n = e.indexOf(t.highlightWord, n + 1), i = !K(e, n); while (i && -1 !== n);
                if (-1 === n) return null;
                let r = e.substring(0, n),
                    a = e.substring(n + t.highlightWord.length);
                return [e, t.highlightWord, r, a]
            },
            parse(e, t, n) {
                var i;
                let r = null !== (i = n.parseDepth) && void 0 !== i ? i : 0,
                    a = {
                        ...n,
                        parseDepth: r + 1
                    },
                    s = t(e[2], a),
                    o = t(e[3], a);
                return [...s, {
                    type: "highlight",
                    content: e[1]
                }, ...o]
            }
        }
    }, r().omit(B, ["url"])]);
    t.default = {
        RULES: B,
        CHANNEL_TOPIC_RULES: k,
        VOICE_CHANNEL_STATUS_RULES: V,
        EMBED_TITLE_RULES: x,
        INLINE_REPLY_RULES: F,
        GUILD_VERIFICATION_FORM_RULES: H,
        GUILD_EVENT_RULES: j,
        PROFILE_BIO_RULES: Y,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: z,
        NATIVE_SEARCH_RESULT_LINK_RULES: W
    }
}
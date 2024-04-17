function(e, t, n) {
    "use strict";
    n.r(t), n("757143"), n("653041"), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("302454"),
        a = n.n(s),
        o = n("927723"),
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
        m = n("594199"),
        N = n("97734"),
        p = n("660199"),
        O = n("364458"),
        R = n("981631"),
        C = n("689079"),
        g = n("377668"),
        L = n("689938");
    let D = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
        v = /^$|\n *$/,
        M = /^ *>>> ?/,
        y = /^ *> ?/gm;

    function P(e) {
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
    let U = e => {
            let t = d.default.getChannel(e);
            return null == t ? void 0 : t.getGuildId()
        },
        b = e => null != e.guildId ? _.default.getGuild(e.guildId) : null != e.channelId ? _.default.getGuild(U(e.channelId)) : null,
        G = {
            newline: a().defaultRules.newline,
            paragraph: a().defaultRules.paragraph,
            escape: {
                ...a().defaultRules.escape,
                match: (e, t, n) => !1 === t.allowEscape ? null : a().defaultRules.escape.match(e, t, n)
            },
            blockQuote: {
                ...a().defaultRules.blockQuote,
                requiredFirstCharacters: [" ", ">"],
                match(e, t) {
                    let {
                        prevCapture: n,
                        inQuote: i,
                        nested: r
                    } = t;
                    if (i || r) return null;
                    if (null == n) return D.exec(e);
                    let s = n[0];
                    return v.test(s) ? D.exec(e) : null
                },
                parse(e, t, n) {
                    let i = e[0],
                        r = !!M.exec(i),
                        s = i.replace(r ? M : y, ""),
                        a = n.inQuote || !1,
                        o = n.inline || !1;
                    n.inQuote = !0, !r && (n.inline = !0);
                    let l = t(s, n);
                    return n.inQuote = a, n.inline = o, 0 === l.length && l.push({
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
                ...a().defaultRules.autolink,
                parse: P
            },
            url: {
                ...a().defaultRules.url,
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
                parse: P
            },
            strong: a().defaultRules.strong,
            em: a().defaultRules.em,
            u: a().defaultRules.u,
            br: a().defaultRules.br,
            text: m.default,
            inlineCode: {
                ...a().defaultRules.inlineCode,
                parse(e, t, n) {
                    let i = a().defaultRules.inlineCode.parse(e, t, n);
                    return !0 === n.parseInlineCodeChildContent ? {
                        ...i,
                        validationChildContent: t(i.content, n)
                    } : i
                }
            },
            emoticon: {
                order: m.default.order,
                requiredFirstCharacters: ["\xaf"],
                match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
                parse: e => ({
                    type: "text",
                    content: e[1]
                })
            },
            codeBlock: {
                order: a().defaultRules.codeBlock.order,
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
                order: m.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<@&(\d+)>/.exec(e),
                parse(e, t, n) {
                    let [i, r] = e;
                    if (n.returnMentionIds) return {
                        type: "roleMention",
                        id: r
                    };
                    let s = b(n),
                        a = null != s ? _.default.getRole(s.id, r) : null;
                    return null == a ? {
                        type: "text",
                        content: "@".concat(L.default.Messages.DELETED_ROLE_PLACEHOLDER)
                    } : {
                        type: "mention",
                        channelId: n.channelId,
                        guildId: null != s ? s.id : null,
                        roleId: r,
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
                order: m.default.order,
                requiredFirstCharacters: ["<", "@"],
                match(e, t) {
                    let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                    return null != n && ("@Clyde" !== n[0] || (0, o.getClydeEnabled)(b(t), d.default.getChannel(t.channelId))) ? n : null
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
                    let s = c.default.getUser(e[1]),
                        a = d.default.getChannel(n.channelId);
                    if (null != s && (r = s.id, i = s.toString(), null != a)) {
                        var l;
                        i = null !== (l = E.default.getNickname(a.getGuildId(), n.channelId, s)) && void 0 !== l ? l : I.default.getName(s)
                    }
                    null == s && "@Clyde" === e[0] && (0, o.getClydeEnabled)(b(n), a) && (r = g.CLYDE_AI_USER_ID);
                    let u = e[1],
                        _ = null != u && R.ID_REGEX.test(u.trim()) && n.unknownUserMentionPlaceholder ? "@".concat(L.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                    return {
                        userId: r,
                        channelId: n.channelId,
                        guildId: null == a ? void 0 : a.getGuildId(),
                        roleName: e[2],
                        content: [{
                            type: "text",
                            content: null != i ? "@".concat(i) : _
                        }]
                    }
                }
            },
            channelMention: f.default.channelMention,
            channelOrMessageUrl: f.default.channelOrMessageUrl,
            mediaPostLink: f.default.mediaPostLink,
            attachmentLink: T.default.attachmentLink,
            commandMention: {
                order: a().defaultRules.text.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
                parse(e, t, n) {
                    if (n.returnMentionIds) return {
                        type: "commandMention",
                        id: e[2]
                    };
                    let [, ...i] = e[1].split(" "), r = "".concat(e[2]).concat([...i].map(e => "".concat(C.SUB_COMMAND_KEY_SEPARATOR).concat(e)).join(""));
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
                order: m.default.order,
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
                order: m.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<sound:(\d+)>/.exec(e),
                parse(e, t, n) {
                    var i;
                    let r = e[1],
                        s = u.default.getSoundById(r),
                        a = null !== (i = null == s ? void 0 : s.name) && void 0 !== i ? i : r;
                    return {
                        type: "soundboard",
                        id: r,
                        soundId: r,
                        channelId: n.channelId,
                        content: a
                    }
                }
            },
            customEmoji: {
                order: m.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                parse: e => ({
                    type: "text",
                    content: ":".concat(e[1], ":")
                })
            },
            timestamp: {
                order: m.default.order - 1,
                requiredFirstCharacters: ["<"],
                match: e => p.TIMESTAMP_REGEX.exec(e),
                parse(e) {
                    let [t, n, i] = e, r = (0, p.parseTimestamp)(n, i);
                    return null == r ? {
                        type: "text",
                        content: t
                    } : r
                }
            },
            s: {
                order: a().defaultRules.u.order,
                requiredFirstCharacters: ["~"],
                match: a().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                parse: a().defaultRules.u.parse
            },
            spoiler: {
                order: m.default.order,
                requiredFirstCharacters: ["|"],
                match: e => R.MARKDOWN_SPOILER_REGEXP.exec(e),
                parse: (e, t, n) => ({
                    content: t(e[1], n),
                    channelId: n.channelId
                })
            },
            staticRouteLink: {
                order: m.default.order,
                requiredFirstCharacters: ["<"],
                match: e => R.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
                parse: (e, t, n) => ({
                    content: [{
                        type: "text",
                        content: {
                            home: L.default.Messages.SERVER_GUIDE,
                            guide: L.default.Messages.SERVER_GUIDE,
                            browse: L.default.Messages.CHANNEL_BROWSER_TITLE,
                            customize: L.default.Messages.CHANNELS_AND_ROLES
                        } [e[1]]
                    }],
                    channelId: e[1],
                    guildId: U(n.channelId),
                    id: e[1]
                })
            },
            heading: S.default,
            list: A.default
        },
        w = (0, O.default)([G, N.default]),
        B = r().omit(w, ["inlineCode", "codeBlock", "br", "blockQuote"]),
        k = r().omit(w, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
        F = r().omit(w, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink"]),
        V = r().omit((0, O.default)([w, {
            inlineCode: {
                match(e, t, n) {
                    let i = w.codeBlock.match(e, t, n);
                    if (null != i) return i;
                    let r = w.inlineCode.match(e, t, n);
                    if (null != r) return r
                }
            }
        }]), ["blockQuote", "codeBlock", "br"]),
        x = r().omit(w, ["codeBlock", "br", "blockQuote"]),
        H = r().omit(w, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline"]),
        Y = r().omit(w, ["codeBlock", "blockQuote", "br"]),
        j = r().omit(w, ["codeBlock", "br", "inlineCode"]);

    function W(e, t) {
        return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
    }
    let K = (0, O.default)([{
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
                let r = e.substring(0, n),
                    s = e.substring(n + t.highlightWord.length);
                return [e, t.highlightWord, r, s]
            },
            parse(e, t, n) {
                let i = t(e[2], n),
                    r = t(e[3], n);
                return [...i, {
                    type: "highlight",
                    content: e[1]
                }, ...r]
            }
        }
    }, r().omit(w, ["url"])]);
    t.default = {
        RULES: w,
        CHANNEL_TOPIC_RULES: B,
        VOICE_CHANNEL_STATUS_RULES: k,
        EMBED_TITLE_RULES: F,
        INLINE_REPLY_RULES: V,
        GUILD_VERIFICATION_FORM_RULES: x,
        GUILD_EVENT_RULES: Y,
        PROFILE_BIO_RULES: H,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: K,
        NATIVE_SEARCH_RESULT_LINK_RULES: j
    }
}
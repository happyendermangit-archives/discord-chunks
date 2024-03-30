function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458"), n("653041"), n("390547");
    var i = n("392711"),
        r = n.n(i),
        s = n("302454"),
        a = n.n(s),
        o = n("933557"),
        l = n("339085"),
        u = n("633302"),
        d = n("428595"),
        _ = n("594199"),
        c = n("467798"),
        E = n("601070"),
        I = n("695346"),
        T = n("592125"),
        f = n("984933"),
        S = n("271383"),
        h = n("430824"),
        A = n("496675"),
        m = n("699516"),
        N = n("246946"),
        O = n("594174"),
        p = n("483360"),
        R = n("176354"),
        C = n("51144"),
        g = n("981631"),
        L = n("185923"),
        D = n("689938");

    function v(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (t[0] !== e) return null;
        let r = t.substr(e.length);
        return n.sortBy(e => {
            let {
                text: t
            } = e;
            return -t.length
        }).filter(e => {
            let {
                text: n
            } = e;
            return 1 === t.toLowerCase().indexOf(n.toLowerCase())
        }).sortBy(e => {
            let {
                text: t
            } = e;
            return t === r ? 0 : 1
        }).map(t => {
            let {
                id: n,
                text: r
            } = t;
            return [e + r, n, i]
        }).first()
    }

    function M(e) {
        return {
            order: e.order,
            match: e.match,
            parse: t => ({
                type: e.type,
                content: t[0]
            })
        }
    }

    function y(e) {
        return {
            match: a().anyScopeRegex(e),
            parse: e => ({
                type: "text",
                content: e[0]
            })
        }
    }
    let P = d.default.RULES,
        U = _.default,
        b = /^<@!?(\d+)>/,
        G = /^<@&(\d+)>/,
        w = /^<#(\d+)>/,
        k = /^<a?:(\w+):(\d+)>/,
        B = /(@everyone|@here|@Clyde)\b/,
        V = {
            link: M(a().defaultRules.link),
            autolink: M(a().defaultRules.autolink),
            url: M(a().defaultRules.url),
            inlineCode: M(P.inlineCode),
            codeBlock: M(P.codeBlock),
            rawUserMention: y(b),
            rawRoleMention: y(G),
            rawChannelMention: y(w),
            rawEmoji: y(k),
            mention: {
                match(e, t, n) {
                    let i = n.split(" ").pop() + e;
                    if (/^[^ ]+@[^ ]+\.[^ .]+/.test(i)) return null;
                    let r = v("@", e, t.users, "mention");
                    if (r || (r = v("@", e, t.mentionableRoles, "roleMention"))) return r;
                    if (!(r = v("@", e, t.users.map(e => ({
                            ...e,
                            text: e.text.split("#")[0]
                        })), "mention"))) return null;
                    let s = B.exec(e);
                    if (null != s && r[0].length <= s[0].length) return null;
                    if ("" === n && (0, c.canSuppressNotifications)()) {
                        let t = c.SILENT_RE.exec(e);
                        if (null != t && r[0].length <= t[0].length) return null
                    }
                    return r
                },
                parse(e) {
                    let [, t, n] = e, i = "@";
                    return "roleMention" === n && (i += "&"), {
                        type: n,
                        content: "<".concat(i).concat(t, ">")
                    }
                }
            },
            channel: {
                match: (e, t) => (function(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    if (t[0] !== e) return null;
                    if ('"' !== t[1]) return v(e, t, n, i);
                    let r = 2;
                    for (; r < t.length; r++) {
                        if ("\\" === t[r]) {
                            r++;
                            continue
                        }
                        if ('"' === t[r]) break
                    }
                    let s = t.substring(0, r + 1),
                        a = (0, o.unescapeChannelName)(t.substring(2, r));
                    return n.sortBy(e => {
                        let {
                            text: t
                        } = e;
                        return -t.length
                    }).filter(e => {
                        let {
                            text: t
                        } = e;
                        return a === t
                    }).map(e => {
                        let {
                            id: t
                        } = e;
                        return [s, t, i]
                    }).first()
                })("#", e, t.channels),
                parse: e => ({
                    type: "text",
                    content: "<#".concat(e[1], ">")
                })
            },
            emoticon: {
                match(e, t, n) {
                    if (!I.ConvertEmoticons.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
                    let i = u.default.EMOJI_SHORTCUT_RE.exec(e);
                    return null == i || i[0].length !== e.length && " " !== e[i[0].length] && "\n" !== e[i[0].length] ? null : i
                },
                parse: e => ({
                    type: "emoticon",
                    content: u.default.convertShortcutToName(e[1]),
                    isShortcut: !0
                })
            },
            emoji: {
                order: P.emoji.order,
                match: e => u.default.EMOJI_NAME_RE.exec(e),
                parse(e, t, n) {
                    let [i, r] = e, {
                        customEmoji: s
                    } = n, a = Object.prototype.hasOwnProperty.call(s, r) ? s[r] : null;
                    if (null != a) {
                        var o;
                        return {
                            type: "customEmoticon",
                            content: "<".concat(!0 === a.animated ? "a" : "", ":").concat(null !== (o = a.originalName) && void 0 !== o ? o : a.name, ":").concat(a.id, ">"),
                            emoji: a
                        }
                    }
                    return {
                        type: "text",
                        content: i
                    }
                }
            },
            customEmoticons: {
                match(e, t) {
                    var n, i;
                    return null !== (i = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== i ? i : null
                },
                parse(e, t, n) {
                    let [i, r] = e, {
                        emojiContext: s
                    } = n, a = s.getEmoticonByName(r);
                    return null != a ? {
                        type: "customEmoticon",
                        content: "<".concat(!0 === a.animated ? "a" : "", ":").concat(a.name, ":").concat(a.id, ">"),
                        emoji: a
                    } : {
                        type: "text",
                        content: i
                    }
                }
            },
            text: {
                ...U,
                match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, _.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != U.match ? U.match(e, t, "") : null
            }
        },
        F = {
            inlineCode: M(P.inlineCode),
            codeBlock: M(P.codeBlock),
            mention: {
                match: a().anyScopeRegex(b),
                parse(e, t, n) {
                    let {
                        isNotification: i
                    } = n, r = O.default.getUser(e[1]);
                    if (null == r) return {
                        content: e[0]
                    };
                    let s = C.default.getUserTag(r, {
                        identifiable: i && N.default.enabled ? "never" : "always"
                    });
                    if (!i) return {
                        content: "@".concat(s)
                    };
                    {
                        let e = C.default.getGlobalName(r);
                        return {
                            content: null != e ? "@".concat(e) : "@".concat(s)
                        }
                    }
                }
            },
            roleMention: {
                match: a().anyScopeRegex(G),
                parse(e, t, n) {
                    let {
                        guild: i
                    } = n;
                    if (null != i) {
                        let t = h.default.getRoles(i.id)[e[1]];
                        if (null != t) return {
                            content: "@".concat(t.name)
                        }
                    }
                    return {
                        content: e[0]
                    }
                }
            },
            channel: {
                match: a().anyScopeRegex(w),
                parse(e) {
                    let t = T.default.getChannel(e[1]);
                    return {
                        content: null == t ? e[0] : (0, o.computeChannelName)(t, O.default, m.default, !0, !0)
                    }
                }
            },
            emoji: {
                match: a().anyScopeRegex(k),
                parse(e, t, n) {
                    let [i, r, s] = e, {
                        guild: a
                    } = n, o = l.default.getDisambiguatedEmojiContext(a ? a.id : null).getById(s), u = null != o ? o.name : r;
                    return {
                        content: ":".concat(u, ":")
                    }
                }
            },
            soundboard: {
                match: a().anyScopeRegex(/^<sound:(\d+)>/),
                parse(e) {
                    let [t, n] = e;
                    return {
                        content: "<sound:".concat(n, ">")
                    }
                }
            },
            spoiler: {
                match: a().anyScopeRegex(g.MARKDOWN_SPOILER_REGEXP),
                parse: () => ({
                    content: "<".concat(D.default.Messages.SPOILER.toLowerCase(), ">")
                })
            },
            staticRouteLink: {
                match: a().anyScopeRegex(g.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                parse: e => ({
                    content: "<id:".concat(e[1], ">")
                })
            },
            timestamp: {
                ...P.timestamp,
                parse() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return {
                        content: P.timestamp.parse(...t).formatted
                    }
                }
            },
            text: {
                ...U
            }
        };
    [V, F].forEach(e => {
        Object.keys(e).forEach((t, n) => {
            e[t].order = n
        })
    });
    let x = a().parserFor(V),
        H = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

    function Y(e, t, n, i) {
        let r = "";
        return e.forEach(e => {
            if (! function(e, t, n) {
                    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
                        let i;
                        let r = u.default.translateSurrogatesToInlineEmoji(t.content);
                        for (; null !== (i = H.exec(r));) {
                            let r;
                            null != i[1] && "" !== i[1] ? e.emojiContext && (r = e.emojiContext.getById(i[1])) : r = u.default.getByName(i[2]), r && n(r, t.isShortcut || !1)
                        }
                    }
                }(t, e, i), "string" == typeof e.content) switch (e.type) {
                case "codeBlock":
                case "inlineCode":
                case "mention":
                case "roleMention":
                case "channel":
                case "emoji":
                    r += e.content;
                    break;
                default:
                    r += n(e.content)
            } else e.content.constructor === Array ? r += Y(e.content, t, n, i) : console.warn("Unknown message item type: ", e)
        }), r
    }

    function j(e) {
        let t;
        let n = null == e ? void 0 : e.getGuildId(),
            i = null != n ? h.default.getGuild(n) : null,
            s = A.default.can(g.Permissions.MENTION_EVERYONE, e);
        t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
            userId: e,
            nick: null
        })) : null != n ? S.default.getMembers(n).map(e => {
            let {
                userId: t,
                nick: n
            } = e;
            return {
                userId: t,
                nick: n
            }
        }) : [];
        let a = r()(t.reduce((e, t) => {
                let {
                    userId: n
                } = t, i = O.default.getUser(n);
                return null == i ? e : (e.push({
                    id: n,
                    text: i.tag
                }), e)
            }, [])),
            o = r()(null != i ? h.default.getRoles(i.id) : {}).values().filter(e => {
                let {
                    mentionable: t
                } = e;
                return s || t
            }).map(e => {
                let {
                    id: t,
                    name: n
                } = e;
                return {
                    id: t,
                    text: n
                }
            }),
            u = r()(f.default.getTextChannelNameDisambiguations(n)).map(e => {
                let {
                    id: t,
                    name: n
                } = e;
                return {
                    id: t,
                    text: n
                }
            }),
            d = null != n ? r()(p.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== f.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => f.default.getChannels(n)[e].map(e => ({
                id: e.channel.id,
                text: e.channel.name
            }))).value() : [],
            _ = E.default.computeAllActiveJoinedThreads(n).map(e => ({
                id: e.id,
                text: e.name
            })),
            c = l.default.getDisambiguatedEmojiContext(n),
            I = c.getEscapedCustomEmoticonNames(),
            T = c.getCustomEmoji(),
            m = c.getCustomEmoticonRegex();
        return {
            inline: !0,
            mentionableRoles: o,
            guild: i,
            users: a,
            channels: u.concat(d).concat(_),
            emojiContext: c,
            customEmoticonsRegex: m,
            customEmoji: T,
            textExclusions: I,
            disableErrorGuards: !0
        }
    }

    function W(e) {
        return e
    }
    t.default = {
        parse(e, t) {
            var n, i, r;
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                a = null != s ? s : j(e),
                o = {
                    content: t,
                    tts: !1,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                };
            return o.content = (n = o.content, i = a, r = (t, n) => {
                R.default.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: L.EmojiIntention.CHAT
                }) ? o.invalidEmojis.push(t) : !n && o.validNonShortcutEmojis.push(t)
            }, Y(x(n, i), i, u.default.translateInlineEmojiToSurrogates, r)), o
        },
        parsePreprocessor: (e, t) => x(t, j(e)),
        unparse(e, t, n) {
            let i = T.default.getChannel(t),
                s = null != i ? i.getGuildId() : null,
                o = null != s ? h.default.getGuild(s) : null,
                l = n ? F : r().omit(F, ["spoiler", "timestamp"]),
                d = n ? W : u.default.translateSurrogatesToInlineEmoji,
                _ = a().parserFor(l),
                c = {
                    inline: !0,
                    guild: o,
                    isNotification: n
                };
            return Y(_(e, c), c, d)
        }
    }
}
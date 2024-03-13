function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return K
        }
    }), n("222007"), n("808653"), n("424973"), n("881410");
    var i = n("917351"),
        s = n.n(i),
        r = n("404828"),
        a = n.n(r),
        o = n("679653"),
        l = n("385976"),
        u = n("867805"),
        d = n("888198"),
        c = n("290689"),
        f = n("804888"),
        _ = n("401690"),
        h = n("845579"),
        E = n("42203"),
        g = n("923959"),
        m = n("26989"),
        p = n("305961"),
        S = n("957255"),
        v = n("27618"),
        T = n("102985"),
        I = n("697218"),
        C = n("25292"),
        A = n("402671"),
        y = n("158998"),
        N = n("49111"),
        R = n("958706"),
        O = n("782340");

    function D(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (t[0] !== e) return null;
        let s = t.substr(e.length);
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
            return t === s ? 0 : 1
        }).map(t => {
            let {
                id: n,
                text: s
            } = t;
            return [e + s, n, i]
        }).first()
    }

    function P(e) {
        return {
            order: e.order,
            match: e.match,
            parse: t => ({
                type: e.type,
                content: t[0]
            })
        }
    }

    function M(e) {
        return {
            match: a.anyScopeRegex(e),
            parse: e => ({
                type: "text",
                content: e[0]
            })
        }
    }
    let L = d.default.RULES,
        b = c.default,
        U = /^<@!?(\d+)>/,
        w = /^<@&(\d+)>/,
        k = /^<#(\d+)>/,
        V = /^<a?:(\w+):(\d+)>/,
        G = /(@everyone|@here|@Clyde)\b/,
        F = {
            link: P(a.defaultRules.link),
            autolink: P(a.defaultRules.autolink),
            url: P(a.defaultRules.url),
            inlineCode: P(L.inlineCode),
            codeBlock: P(L.codeBlock),
            rawUserMention: M(U),
            rawRoleMention: M(w),
            rawChannelMention: M(k),
            rawEmoji: M(V),
            mention: {
                match(e, t, n) {
                    let i = n.split(" ").pop() + e;
                    if (/^[^ ]+@[^ ]+\.[^ .]+/.test(i)) return null;
                    let s = D("@", e, t.users, "mention");
                    if (s || (s = D("@", e, t.mentionableRoles, "roleMention"))) return s;
                    let r = t.users.map(e => ({
                        ...e,
                        text: e.text.split("#")[0]
                    }));
                    if (!(s = D("@", e, r, "mention"))) return null;
                    let a = G.exec(e);
                    if (null != a && s[0].length <= a[0].length) return null;
                    if ("" === n && (0, f.canSuppressNotifications)()) {
                        let t = f.SILENT_RE.exec(e);
                        if (null != t && s[0].length <= t[0].length) return null
                    }
                    return s
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
                    if ('"' !== t[1]) return D(e, t, n, i);
                    let s = 2;
                    for (; s < t.length; s++) {
                        if ("\\" === t[s]) {
                            s++;
                            continue
                        }
                        if ('"' === t[s]) break
                    }
                    let r = t.substring(0, s + 1),
                        a = (0, o.unescapeChannelName)(t.substring(2, s));
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
                        return [r, t, i]
                    }).first()
                })("#", e, t.channels),
                parse: e => ({
                    type: "text",
                    content: "<#".concat(e[1], ">")
                })
            },
            emoticon: {
                match(e, t, n) {
                    if (!h.ConvertEmoticons.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
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
                order: L.emoji.order,
                match: e => u.default.EMOJI_NAME_RE.exec(e),
                parse(e, t, n) {
                    let [i, s] = e, {
                        customEmoji: r
                    } = n, a = Object.prototype.hasOwnProperty.call(r, s) ? r[s] : null;
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
                    let [i, s] = e, {
                        emojiContext: r
                    } = n, a = r.getEmoticonByName(s);
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
                ...b,
                match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, c.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != b.match ? b.match(e, t, "") : null
            }
        },
        x = {
            inlineCode: P(L.inlineCode),
            codeBlock: P(L.codeBlock),
            mention: {
                match: a.anyScopeRegex(U),
                parse(e, t, n) {
                    let {
                        isNotification: i
                    } = n, s = I.default.getUser(e[1]);
                    if (null == s) return {
                        content: e[0]
                    };
                    let r = y.default.getUserTag(s, {
                        identifiable: i && T.default.enabled ? "never" : "always"
                    });
                    if (!i) return {
                        content: "@".concat(r)
                    };
                    {
                        let e = y.default.getGlobalName(s);
                        return {
                            content: null != e ? "@".concat(e) : "@".concat(r)
                        }
                    }
                }
            },
            roleMention: {
                match: a.anyScopeRegex(w),
                parse(e, t, n) {
                    let {
                        guild: i
                    } = n;
                    if (null != i) {
                        let t = p.default.getRoles(i.id)[e[1]];
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
                match: a.anyScopeRegex(k),
                parse(e) {
                    let t = E.default.getChannel(e[1]);
                    return {
                        content: null == t ? e[0] : (0, o.computeChannelName)(t, I.default, v.default, !0, !0)
                    }
                }
            },
            emoji: {
                match: a.anyScopeRegex(V),
                parse(e, t, n) {
                    let [i, s, r] = e, {
                        guild: a
                    } = n, o = l.default.getDisambiguatedEmojiContext(a ? a.id : null).getById(r), u = null != o ? o.name : s;
                    return {
                        content: ":".concat(u, ":")
                    }
                }
            },
            soundboard: {
                match: a.anyScopeRegex(/^<sound:(\d+)>/),
                parse(e) {
                    let [t, n] = e;
                    return {
                        content: "<sound:".concat(n, ">")
                    }
                }
            },
            spoiler: {
                match: a.anyScopeRegex(N.MARKDOWN_SPOILER_REGEXP),
                parse: () => ({
                    content: "<".concat(O.default.Messages.SPOILER.toLowerCase(), ">")
                })
            },
            staticRouteLink: {
                match: a.anyScopeRegex(N.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                parse: e => ({
                    content: "<id:".concat(e[1], ">")
                })
            },
            timestamp: {
                ...L.timestamp,
                parse() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    let i = L.timestamp.parse(...t);
                    return {
                        content: i.formatted
                    }
                }
            },
            text: {
                ...b
            }
        };
    [F, x].forEach(e => {
        Object.keys(e).forEach((t, n) => {
            e[t].order = n
        })
    });
    let B = a.parserFor(F),
        H = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

    function Y(e, t, n, i) {
        let s = "";
        return e.forEach(e => {
            if (! function(e, t, n) {
                    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
                        let i;
                        let s = u.default.translateSurrogatesToInlineEmoji(t.content);
                        for (; null !== (i = H.exec(s));) {
                            let s;
                            null != i[1] && "" !== i[1] ? e.emojiContext && (s = e.emojiContext.getById(i[1])) : s = u.default.getByName(i[2]), s && n(s, t.isShortcut || !1)
                        }
                    }
                }(t, e, i), "string" == typeof e.content) switch (e.type) {
                case "codeBlock":
                case "inlineCode":
                case "mention":
                case "roleMention":
                case "channel":
                case "emoji":
                    s += e.content;
                    break;
                default:
                    s += n(e.content)
            } else e.content.constructor === Array ? s += Y(e.content, t, n, i) : console.warn("Unknown message item type: ", e)
        }), s
    }

    function j(e) {
        let t;
        let n = null == e ? void 0 : e.getGuildId(),
            i = null != n ? p.default.getGuild(n) : null,
            r = S.default.can(N.Permissions.MENTION_EVERYONE, e);
        t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
            userId: e,
            nick: null
        })) : null != n ? m.default.getMembers(n).map(e => {
            let {
                userId: t,
                nick: n
            } = e;
            return {
                userId: t,
                nick: n
            }
        }) : [];
        let a = s(t.reduce((e, t) => {
                let {
                    userId: n
                } = t, i = I.default.getUser(n);
                return null == i ? e : (e.push({
                    id: n,
                    text: i.tag
                }), e)
            }, [])),
            o = s(null != i ? p.default.getRoles(i.id) : {}).values().filter(e => {
                let {
                    mentionable: t
                } = e;
                return r || t
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
            u = s(g.default.getTextChannelNameDisambiguations(n)).map(e => {
                let {
                    id: t,
                    name: n
                } = e;
                return {
                    id: t,
                    text: n
                }
            }),
            d = null != n ? s(C.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== g.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => g.default.getChannels(n)[e].map(e => ({
                id: e.channel.id,
                text: e.channel.name
            }))).value() : [],
            c = _.default.computeAllActiveJoinedThreads(n).map(e => ({
                id: e.id,
                text: e.name
            })),
            f = l.default.getDisambiguatedEmojiContext(n),
            h = f.getEscapedCustomEmoticonNames(),
            E = f.getCustomEmoji(),
            v = f.getCustomEmoticonRegex(),
            T = {
                inline: !0,
                mentionableRoles: o,
                guild: i,
                users: a,
                channels: u.concat(d).concat(c),
                emojiContext: f,
                customEmoticonsRegex: v,
                customEmoji: E,
                textExclusions: h,
                disableErrorGuards: !0
            };
        return T
    }

    function W(e) {
        return e
    }
    var K = {
        parse(e, t) {
            var n, i, s;
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                a = null != r ? r : j(e),
                o = {
                    content: t,
                    tts: !1,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                };
            return o.content = (n = o.content, i = a, s = (t, n) => {
                A.default.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: R.EmojiIntention.CHAT
                }) ? o.invalidEmojis.push(t) : !n && o.validNonShortcutEmojis.push(t)
            }, Y(B(n, i), i, u.default.translateInlineEmojiToSurrogates, s)), o
        },
        parsePreprocessor(e, t) {
            let n = j(e);
            return B(t, n)
        },
        unparse(e, t, n) {
            let i = E.default.getChannel(t),
                r = null != i ? i.getGuildId() : null,
                o = null != r ? p.default.getGuild(r) : null,
                l = n ? x : s.omit(x, ["spoiler", "timestamp"]),
                d = n ? W : u.default.translateSurrogatesToInlineEmoji,
                c = a.parserFor(l),
                f = {
                    inline: !0,
                    guild: o,
                    isNotification: n
                };
            return Y(c(e, f), f, d)
        }
    }
}
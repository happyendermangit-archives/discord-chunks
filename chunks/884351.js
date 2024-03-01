function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    }), n("222007"), n("808653"), n("424973"), n("881410");
    var l = n("917351"),
        r = n.n(l),
        a = n("404828"),
        i = n.n(a),
        u = n("679653"),
        o = n("385976"),
        s = n("867805"),
        c = n("888198"),
        d = n("290689"),
        f = n("804888"),
        p = n("401690"),
        h = n("845579"),
        m = n("42203"),
        g = n("923959"),
        E = n("26989"),
        C = n("305961"),
        y = n("957255"),
        L = n("27618"),
        A = n("102985"),
        S = n("697218"),
        _ = n("25292"),
        T = n("402671"),
        I = n("158998"),
        N = n("49111"),
        v = n("958706"),
        R = n("782340");

    function b(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
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
            return [e + r, n, l]
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

    function x(e) {
        return {
            match: i.anyScopeRegex(e),
            parse: e => ({
                type: "text",
                content: e[0]
            })
        }
    }
    let U = c.default.RULES,
        O = d.default,
        D = /^<@!?(\d+)>/,
        G = /^<@&(\d+)>/,
        P = /^<#(\d+)>/,
        w = /^<a?:(\w+):(\d+)>/,
        k = /(@everyone|@here|@Clyde)\b/,
        F = {
            link: M(i.defaultRules.link),
            autolink: M(i.defaultRules.autolink),
            url: M(i.defaultRules.url),
            inlineCode: M(U.inlineCode),
            codeBlock: M(U.codeBlock),
            rawUserMention: x(D),
            rawRoleMention: x(G),
            rawChannelMention: x(P),
            rawEmoji: x(w),
            mention: {
                match(e, t, n) {
                    let l = n.split(" ").pop() + e;
                    if (/^[^ ]+@[^ ]+\.[^ .]+/.test(l)) return null;
                    let r = b("@", e, t.users, "mention");
                    if (r || (r = b("@", e, t.mentionableRoles, "roleMention"))) return r;
                    let a = t.users.map(e => ({
                        ...e,
                        text: e.text.split("#")[0]
                    }));
                    if (!(r = b("@", e, a, "mention"))) return null;
                    let i = k.exec(e);
                    if (null != i && r[0].length <= i[0].length) return null;
                    if ("" === n && (0, f.canSuppressNotifications)()) {
                        let t = f.SILENT_RE.exec(e);
                        if (null != t && r[0].length <= t[0].length) return null
                    }
                    return r
                },
                parse(e) {
                    let [, t, n] = e, l = "@";
                    return "roleMention" === n && (l += "&"), {
                        type: n,
                        content: "<".concat(l).concat(t, ">")
                    }
                }
            },
            channel: {
                match: (e, t) => (function(e, t, n) {
                    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    if (t[0] !== e) return null;
                    if ('"' !== t[1]) return b(e, t, n, l);
                    let r = 2;
                    for (; r < t.length; r++) {
                        if ("\\" === t[r]) {
                            r++;
                            continue
                        }
                        if ('"' === t[r]) break
                    }
                    let a = t.substring(0, r + 1),
                        i = (0, u.unescapeChannelName)(t.substring(2, r));
                    return n.sortBy(e => {
                        let {
                            text: t
                        } = e;
                        return -t.length
                    }).filter(e => {
                        let {
                            text: t
                        } = e;
                        return i === t
                    }).map(e => {
                        let {
                            id: t
                        } = e;
                        return [a, t, l]
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
                    let l = s.default.EMOJI_SHORTCUT_RE.exec(e);
                    return null == l || l[0].length !== e.length && " " !== e[l[0].length] && "\n" !== e[l[0].length] ? null : l
                },
                parse: e => ({
                    type: "emoticon",
                    content: s.default.convertShortcutToName(e[1]),
                    isShortcut: !0
                })
            },
            emoji: {
                order: U.emoji.order,
                match: e => s.default.EMOJI_NAME_RE.exec(e),
                parse(e, t, n) {
                    let [l, r] = e, {
                        customEmoji: a
                    } = n, i = Object.prototype.hasOwnProperty.call(a, r) ? a[r] : null;
                    if (null != i) {
                        var u;
                        return {
                            type: "customEmoticon",
                            content: "<".concat(!0 === i.animated ? "a" : "", ":").concat(null !== (u = i.originalName) && void 0 !== u ? u : i.name, ":").concat(i.id, ">"),
                            emoji: i
                        }
                    }
                    return {
                        type: "text",
                        content: l
                    }
                }
            },
            customEmoticons: {
                match(e, t) {
                    var n, l;
                    return null !== (l = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== l ? l : null
                },
                parse(e, t, n) {
                    let [l, r] = e, {
                        emojiContext: a
                    } = n, i = a.getEmoticonByName(r);
                    return null != i ? {
                        type: "customEmoticon",
                        content: "<".concat(!0 === i.animated ? "a" : "", ":").concat(i.name, ":").concat(i.id, ">"),
                        emoji: i
                    } : {
                        type: "text",
                        content: l
                    }
                }
            },
            text: {
                ...O,
                match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, d.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != O.match ? O.match(e, t, "") : null
            }
        },
        q = {
            inlineCode: M(U.inlineCode),
            codeBlock: M(U.codeBlock),
            mention: {
                match: i.anyScopeRegex(D),
                parse(e, t, n) {
                    let {
                        isNotification: l
                    } = n, r = S.default.getUser(e[1]);
                    if (null == r) return {
                        content: e[0]
                    };
                    let a = I.default.getUserTag(r, {
                        identifiable: l && A.default.enabled ? "never" : "always"
                    });
                    if (!l) return {
                        content: "@".concat(a)
                    };
                    {
                        let e = I.default.getGlobalName(r);
                        return {
                            content: null != e ? "@".concat(e) : "@".concat(a)
                        }
                    }
                }
            },
            roleMention: {
                match: i.anyScopeRegex(G),
                parse(e, t, n) {
                    let {
                        guild: l
                    } = n;
                    if (null != l) {
                        let t = l.roles[e[1]];
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
                match: i.anyScopeRegex(P),
                parse(e) {
                    let t = m.default.getChannel(e[1]);
                    return {
                        content: null == t ? e[0] : (0, u.computeChannelName)(t, S.default, L.default, !0, !0)
                    }
                }
            },
            emoji: {
                match: i.anyScopeRegex(w),
                parse(e, t, n) {
                    let [l, r, a] = e, {
                        guild: i
                    } = n, u = o.default.getDisambiguatedEmojiContext(i ? i.id : null).getById(a), s = null != u ? u.name : r;
                    return {
                        content: ":".concat(s, ":")
                    }
                }
            },
            soundboard: {
                match: i.anyScopeRegex(/^<sound:(\d+)>/),
                parse(e) {
                    let [t, n] = e;
                    return {
                        content: "<sound:".concat(n, ">")
                    }
                }
            },
            spoiler: {
                match: i.anyScopeRegex(N.MARKDOWN_SPOILER_REGEXP),
                parse: () => ({
                    content: "<".concat(R.default.Messages.SPOILER.toLowerCase(), ">")
                })
            },
            staticRouteLink: {
                match: i.anyScopeRegex(N.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                parse: e => ({
                    content: "<id:".concat(e[1], ">")
                })
            },
            timestamp: {
                ...U.timestamp,
                parse() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    let l = U.timestamp.parse(...t);
                    return {
                        content: l.formatted
                    }
                }
            },
            text: {
                ...O
            }
        };
    [F, q].forEach(e => {
        Object.keys(e).forEach((t, n) => {
            e[t].order = n
        })
    });
    let B = i.parserFor(F),
        H = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

    function V(e, t, n, l) {
        let r = "";
        return e.forEach(e => {
            if (! function(e, t, n) {
                    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
                        let l;
                        let r = s.default.translateSurrogatesToInlineEmoji(t.content);
                        for (; null !== (l = H.exec(r));) {
                            let r;
                            null != l[1] && "" !== l[1] ? e.emojiContext && (r = e.emojiContext.getById(l[1])) : r = s.default.getByName(l[2]), r && n(r, t.isShortcut || !1)
                        }
                    }
                }(t, e, l), "string" == typeof e.content) switch (e.type) {
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
            } else e.content.constructor === Array ? r += V(e.content, t, n, l) : console.warn("Unknown message item type: ", e)
        }), r
    }

    function K(e) {
        let t;
        let n = null == e ? void 0 : e.getGuildId(),
            l = null != n ? C.default.getGuild(n) : null,
            a = y.default.can(N.Permissions.MENTION_EVERYONE, e);
        t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
            userId: e,
            nick: null
        })) : null != n ? E.default.getMembers(n).map(e => {
            let {
                userId: t,
                nick: n
            } = e;
            return {
                userId: t,
                nick: n
            }
        }) : [];
        let i = r(t.reduce((e, t) => {
                let {
                    userId: n
                } = t, l = S.default.getUser(n);
                return null == l ? e : (e.push({
                    id: n,
                    text: l.tag
                }), e)
            }, [])),
            u = r(null != l ? l.roles : {}).values().filter(e => {
                let {
                    mentionable: t
                } = e;
                return a || t
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
            s = r(g.default.getTextChannelNameDisambiguations(n)).map(e => {
                let {
                    id: t,
                    name: n
                } = e;
                return {
                    id: t,
                    text: n
                }
            }),
            c = null != n ? r(_.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== g.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => g.default.getChannels(n)[e].map(e => ({
                id: e.channel.id,
                text: e.channel.name
            }))).value() : [],
            d = p.default.computeAllActiveJoinedThreads(n).map(e => ({
                id: e.id,
                text: e.name
            })),
            f = o.default.getDisambiguatedEmojiContext(n),
            h = f.getEscapedCustomEmoticonNames(),
            m = f.getCustomEmoji(),
            L = f.getCustomEmoticonRegex(),
            A = {
                inline: !0,
                mentionableRoles: u,
                guild: l,
                users: i,
                channels: s.concat(c).concat(d),
                emojiContext: f,
                customEmoticonsRegex: L,
                customEmoji: m,
                textExclusions: h,
                disableErrorGuards: !0
            };
        return A
    }

    function Y(e) {
        return e
    }
    var j = {
        parse(e, t) {
            var n, l, r;
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                i = null != a ? a : K(e),
                u = {
                    content: t,
                    tts: !1,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                };
            return u.content = (n = u.content, l = i, r = (t, n) => {
                T.default.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: v.EmojiIntention.CHAT
                }) ? u.invalidEmojis.push(t) : !n && u.validNonShortcutEmojis.push(t)
            }, V(B(n, l), l, s.default.translateInlineEmojiToSurrogates, r)), u
        },
        parsePreprocessor(e, t) {
            let n = K(e);
            return B(t, n)
        },
        unparse(e, t, n) {
            let l = m.default.getChannel(t),
                a = null != l ? l.getGuildId() : null,
                u = null != a ? C.default.getGuild(a) : null,
                o = n ? q : r.omit(q, ["spoiler", "timestamp"]),
                c = n ? Y : s.default.translateSurrogatesToInlineEmoji,
                d = i.parserFor(o),
                f = {
                    inline: !0,
                    guild: u,
                    isNotification: n
                };
            return V(d(e, f), f, c)
        }
    }
}
function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("302454"),
        a = n.n(i),
        u = n("534965"),
        s = n("300983"),
        l = n("27375"),
        c = n("690475"),
        f = n("676641"),
        d = n("931582"),
        _ = n("914535"),
        E = n("53867"),
        p = n("935741"),
        m = n("29604"),
        y = n("957808"),
        I = n("306912"),
        h = n("29884"),
        O = n("776982"),
        T = n("930949"),
        S = n("208454"),
        v = n("378309"),
        g = n("739226"),
        A = n("830567"),
        b = n("281767"),
        N = n("68735"),
        R = n("941504");

    function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function P(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function D(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function L(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || M(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function M(e, t) {
        if (e) {
            if ("string" == typeof e) return C(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
        }
    }

    function U(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (t[0] !== e) return null;
        var o = t.substr(e.length);
        return n.sortBy(function(e) {
            return -e.text.length
        }).filter(function(e) {
            var n = e.text;
            return 1 === t.toLowerCase().indexOf(n.toLowerCase())
        }).sortBy(function(e) {
            return e.text === o ? 0 : 1
        }).map(function(t) {
            var n = t.id;
            return [e + t.text, n, r]
        }).first()
    }

    function w(e) {
        return {
            order: e.order,
            match: e.match,
            parse: function(t) {
                return {
                    type: e.type,
                    content: t[0]
                }
            }
        }
    }

    function k(e) {
        return {
            match: a().anyScopeRegex(e),
            parse: function(e) {
                return {
                    type: "text",
                    content: e[0]
                }
            }
        }
    }
    var G = c.default.RULES,
        B = f.default,
        j = /^<@!?(\d+)>/,
        F = /^<@&(\d+)>/,
        V = /^<#(\d+)>/,
        H = /^<a?:(\w+):(\d+)>/,
        x = /(@everyone|@here|@Clyde)\b/,
        Y = {
            link: w(a().defaultRules.link),
            autolink: w(a().defaultRules.autolink),
            url: w(a().defaultRules.url),
            inlineCode: w(G.inlineCode),
            codeBlock: w(G.codeBlock),
            rawUserMention: k(j),
            rawRoleMention: k(F),
            rawChannelMention: k(V),
            rawEmoji: k(H),
            mention: {
                match: function(e, t, n) {
                    var r = n.split(" ").pop() + e;
                    if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r)) return null;
                    var o = U("@", e, t.users, "mention");
                    if (o || (o = U("@", e, t.mentionableRoles, "roleMention"))) return o;
                    if (!(o = U("@", e, t.users.map(function(e) {
                            return D(P({}, e), {
                                text: e.text.split("#")[0]
                            })
                        }), "mention"))) return null;
                    var i = x.exec(e);
                    if (null != i && o[0].length <= i[0].length) return null;
                    if ("" === n && (0, d.canSuppressNotifications)()) {
                        var a = d.SILENT_RE.exec(e);
                        if (null != a && o[0].length <= a[0].length) return null
                    }
                    return o
                },
                parse: function(e) {
                    var t = L(e, 3),
                        n = t[1],
                        r = t[2],
                        o = "@";
                    return "roleMention" === r && (o += "&"), {
                        type: r,
                        content: "<".concat(o).concat(n, ">")
                    }
                }
            },
            channel: {
                match: function(e, t) {
                    return function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        if (t[0] !== e) return null;
                        if ('"' !== t[1]) return U(e, t, n, r);
                        for (var o = 2; o < t.length; o++) {
                            if ("\\" === t[o]) {
                                o++;
                                continue
                            }
                            if ('"' === t[o]) break
                        }
                        var i = t.substring(0, o + 1),
                            a = (0, u.unescapeChannelName)(t.substring(2, o));
                        return n.sortBy(function(e) {
                            return -e.text.length
                        }).filter(function(e) {
                            return a === e.text
                        }).map(function(e) {
                            return [i, e.id, r]
                        }).first()
                    }("#", e, t.channels)
                },
                parse: function(e) {
                    return {
                        type: "text",
                        content: "<#".concat(e[1], ">")
                    }
                }
            },
            emoticon: {
                match: function(e, t, n) {
                    if (!E.ConvertEmoticons.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
                    var r = l.default.EMOJI_SHORTCUT_RE.exec(e);
                    return null == r || r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length] ? null : r
                },
                parse: function(e) {
                    return {
                        type: "emoticon",
                        content: l.default.convertShortcutToName(e[1]),
                        isShortcut: !0
                    }
                }
            },
            emoji: {
                order: G.emoji.order,
                match: function(e) {
                    return l.default.EMOJI_NAME_RE.exec(e)
                },
                parse: function(e, t, n) {
                    var r, o = L(e, 2),
                        i = o[0],
                        a = o[1],
                        u = n.customEmoji,
                        s = Object.prototype.hasOwnProperty.call(u, a) ? u[a] : null;
                    return null != s ? {
                        type: "customEmoticon",
                        content: "<".concat(!0 === s.animated ? "a" : "", ":").concat(null !== (r = s.originalName) && void 0 !== r ? r : s.name, ":").concat(s.id, ">"),
                        emoji: s
                    } : {
                        type: "text",
                        content: i
                    }
                }
            },
            customEmoticons: {
                match: function(e, t) {
                    var n, r;
                    return null !== (r = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== r ? r : null
                },
                parse: function(e, t, n) {
                    var r = L(e, 2),
                        o = r[0],
                        i = r[1],
                        a = n.emojiContext.getEmoticonByName(i);
                    return null != a ? {
                        type: "customEmoticon",
                        content: "<".concat(!0 === a.animated ? "a" : "", ":").concat(a.name, ":").concat(a.id, ">"),
                        emoji: a
                    } : {
                        type: "text",
                        content: o
                    }
                }
            },
            text: D(P({}, B), {
                match: function(e, t) {
                    return "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, f.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != B.match ? B.match(e, t, "") : null
                }
            })
        },
        W = {
            inlineCode: w(G.inlineCode),
            codeBlock: w(G.codeBlock),
            mention: {
                match: a().anyScopeRegex(j),
                parse: function(e, t, n) {
                    var r = n.isNotification,
                        o = S.default.getUser(e[1]);
                    if (null == o) return {
                        content: e[0]
                    };
                    var i = A.default.getUserTag(o, {
                        identifiable: r && T.default.enabled ? "never" : "always"
                    });
                    if (!r) return {
                        content: "@".concat(i)
                    };
                    var a = A.default.getGlobalName(o);
                    return {
                        content: null != a ? "@".concat(a) : "@".concat(i)
                    }
                }
            },
            roleMention: {
                match: a().anyScopeRegex(F),
                parse: function(e, t, n) {
                    var r = n.guild;
                    if (null != r) {
                        var o = I.default.getRoles(r.id)[e[1]];
                        if (null != o) return {
                            content: "@".concat(o.name)
                        }
                    }
                    return {
                        content: e[0]
                    }
                }
            },
            channel: {
                match: a().anyScopeRegex(V),
                parse: function(e) {
                    var t = p.default.getChannel(e[1]);
                    return {
                        content: null == t ? e[0] : (0, u.computeChannelName)(t, S.default, O.default, !0, !0)
                    }
                }
            },
            emoji: {
                match: a().anyScopeRegex(H),
                parse: function(e, t, n) {
                    var r = L(e, 3),
                        o = (r[0], r[1]),
                        i = r[2],
                        a = n.guild,
                        u = s.default.getDisambiguatedEmojiContext(a ? a.id : null).getById(i),
                        l = null != u ? u.name : o;
                    return {
                        content: ":".concat(l, ":")
                    }
                }
            },
            soundboard: {
                match: a().anyScopeRegex(/^<sound:(\d+)>/),
                parse: function(e) {
                    var t = L(e, 2),
                        n = (t[0], t[1]);
                    return {
                        content: "<sound:".concat(n, ">")
                    }
                }
            },
            spoiler: {
                match: a().anyScopeRegex(b.MARKDOWN_SPOILER_REGEXP),
                parse: function() {
                    return {
                        content: "<".concat(R.default.Messages.SPOILER.toLowerCase(), ">")
                    }
                }
            },
            staticRouteLink: {
                match: a().anyScopeRegex(b.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                parse: function(e) {
                    return {
                        content: "<id:".concat(e[1], ">")
                    }
                }
            },
            timestamp: D(P({}, G.timestamp), {
                parse: function() {
                    for (var e, t, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return {
                        content: (t = G.timestamp).parse.apply(t, function(e) {
                            if (Array.isArray(e)) return C(e)
                        }(e = r) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(e) || M(e) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()).formatted
                    }
                }
            }),
            text: P({}, B)
        };
    [Y, W].forEach(function(e) {
        Object.keys(e).forEach(function(t, n) {
            e[t].order = n
        })
    });
    var K = a().parserFor(Y),
        z = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

    function X(e, t, n, r) {
        var o = "";
        return e.forEach(function(e) {
            if (! function(e, t, n) {
                    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
                        for (var r, o = l.default.translateSurrogatesToInlineEmoji(t.content); null !== (r = z.exec(o));) {
                            var i = void 0;
                            null != r[1] && "" !== r[1] ? e.emojiContext && (i = e.emojiContext.getById(r[1])) : i = l.default.getByName(r[2]), i && n(i, t.isShortcut || !1)
                        }
                    }
                }(t, e, r), "string" == typeof e.content) switch (e.type) {
                case "codeBlock":
                case "inlineCode":
                case "mention":
                case "roleMention":
                case "channel":
                case "emoji":
                    o += e.content;
                    break;
                default:
                    o += n(e.content)
            } else e.content.constructor === Array ? o += X(e.content, t, n, r) : console.warn("Unknown message item type: ", e)
        }), o
    }

    function q(e) {
        var t, n = null == e ? void 0 : e.getGuildId(),
            r = null != n ? I.default.getGuild(n) : null,
            i = h.default.can(b.Permissions.MENTION_EVERYONE, e);
        t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(function(e) {
            return {
                userId: e,
                nick: null
            }
        }) : null != n ? y.default.getMembers(n).map(function(e) {
            return {
                userId: e.userId,
                nick: e.nick
            }
        }) : [];
        var a = o()(t.reduce(function(e, t) {
                var n = t.userId,
                    r = S.default.getUser(n);
                return null == r ? e : (e.push({
                    id: n,
                    text: r.tag
                }), e)
            }, [])),
            u = o()(null != r ? I.default.getRoles(r.id) : {}).values().filter(function(e) {
                var t = e.mentionable;
                return i || t
            }).map(function(e) {
                return {
                    id: e.id,
                    text: e.name
                }
            }),
            l = o()(m.default.getTextChannelNameDisambiguations(n)).map(function(e) {
                return {
                    id: e.id,
                    text: e.name
                }
            }),
            c = null != n ? o()(v.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(function(e) {
                return e !== m.GUILD_SELECTABLE_CHANNELS_KEY
            }).flatMap(function(e) {
                return m.default.getChannels(n)[e].map(function(e) {
                    return {
                        id: e.channel.id,
                        text: e.channel.name
                    }
                })
            }).value() : [],
            f = _.default.computeAllActiveJoinedThreads(n).map(function(e) {
                return {
                    id: e.id,
                    text: e.name
                }
            }),
            d = s.default.getDisambiguatedEmojiContext(n),
            E = d.getEscapedCustomEmoticonNames(),
            p = d.getCustomEmoji(),
            O = d.getCustomEmoticonRegex();
        return {
            inline: !0,
            mentionableRoles: u,
            guild: r,
            users: a,
            channels: l.concat(c).concat(f),
            emojiContext: d,
            customEmoticonsRegex: O,
            customEmoji: p,
            textExclusions: E,
            disableErrorGuards: !0
        }
    }

    function Q(e) {
        return e
    }
    t.default = {
        parse: function(e, t) {
            var n, r, o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                a = null != i ? i : q(e),
                u = {
                    content: t,
                    tts: !1,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                };
            return u.content = (n = u.content, r = a, o = function(t, n) {
                g.default.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: N.EmojiIntention.CHAT
                }) ? u.invalidEmojis.push(t) : !n && u.validNonShortcutEmojis.push(t)
            }, X(K(n, r), r, l.default.translateInlineEmojiToSurrogates, o)), u
        },
        parsePreprocessor: function(e, t) {
            return K(t, q(e))
        },
        unparse: function(e, t, n) {
            var r = p.default.getChannel(t),
                i = null != r ? r.getGuildId() : null,
                u = null != i ? I.default.getGuild(i) : null,
                s = n ? W : o().omit(W, ["spoiler", "timestamp"]),
                c = n ? Q : l.default.translateSurrogatesToInlineEmoji,
                f = a().parserFor(s),
                d = {
                    inline: !0,
                    guild: u,
                    isNotification: n
                };
            return X(f(e, d), d, c)
        }
    }
}
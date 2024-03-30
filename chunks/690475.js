function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("302454"),
        a = n.n(i),
        u = n("646220"),
        s = n("27375"),
        l = n("452700"),
        c = n("935741"),
        f = n("306912"),
        d = n("208454"),
        _ = n("62957"),
        E = n("830567"),
        p = n("306504"),
        m = n("809164"),
        y = n("468326"),
        I = n("9551"),
        h = n("922232"),
        O = n("676641"),
        T = n("536016"),
        S = n("591234"),
        v = n("6226"),
        g = n("281767"),
        A = n("118891"),
        b = n("142680"),
        N = n("941504");

    function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function C(e) {
        if (Array.isArray(e)) return e
    }

    function P(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function D() {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function L(e) {
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

    function M(e, t) {
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

    function U(e, t) {
        return C(e) || function(e, t) {
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
        }(e, t) || k(e, t) || D()
    }

    function w(e) {
        return function(e) {
            if (Array.isArray(e)) return R(e)
        }(e) || P(e) || k(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function k(e, t) {
        if (e) {
            if ("string" == typeof e) return R(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
        }
    }
    var G = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
        B = /^$|\n *$/,
        j = /^ *>>> ?/,
        F = /^ *> ?/gm;

    function V(e) {
        var t = (0, I.punycodeLink)(e[1]);
        return null == t ? {
            type: "text",
            content: e[1]
        } : {
            type: "link",
            content: [{
                type: "text",
                content: t.displayTarget
            }],
            target: t.target,
            title: void 0
        }
    }
    var H = function(e) {
            var t = c.default.getChannel(e);
            return null == t ? void 0 : t.getGuildId()
        },
        x = function(e) {
            return null != e.guildId ? f.default.getGuild(e.guildId) : null != e.channelId ? f.default.getGuild(H(e.channelId)) : null
        },
        Y = {
            newline: a().defaultRules.newline,
            paragraph: a().defaultRules.paragraph,
            escape: M(L({}, a().defaultRules.escape), {
                match: function(e, t, n) {
                    return !1 === t.allowEscape ? null : a().defaultRules.escape.match(e, t, n)
                }
            }),
            blockQuote: M(L({}, a().defaultRules.blockQuote), {
                requiredFirstCharacters: [" ", ">"],
                match: function(e, t) {
                    var n = t.prevCapture,
                        r = t.inQuote,
                        o = t.nested;
                    if (r || o) return null;
                    if (null == n) return G.exec(e);
                    var i = n[0];
                    return B.test(i) ? G.exec(e) : null
                },
                parse: function(e, t, n) {
                    var r = e[0],
                        o = !!j.exec(r),
                        i = r.replace(o ? j : F, ""),
                        a = n.inQuote || !1,
                        u = n.inline || !1;
                    n.inQuote = !0, !o && (n.inline = !0);
                    var s = t(i, n);
                    return n.inQuote = a, n.inline = u, 0 === s.length && s.push({
                        type: "text",
                        content: " "
                    }), {
                        content: s,
                        type: "blockQuote"
                    }
                }
            }),
            link: I.default,
            autolink: M(L({}, a().defaultRules.autolink), {
                parse: V
            }),
            url: M(L({}, a().defaultRules.url), {
                requiredFirstCharacters: ["h", "s"],
                match: function(e, t) {
                    if (!t.inline) return null;
                    var n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
                    if (null != n) {
                        for (var r = 0, o = n[0], i = o.length - 1; i >= 0 && ")" === o[i]; i--) {
                            var a = o.indexOf("(", r);
                            if (-1 === a) {
                                o = o.slice(0, o.length - 1);
                                break
                            }
                            r = a + 1
                        }
                        n[0] = n[1] = o
                    }
                    return n
                },
                parse: V
            }),
            strong: a().defaultRules.strong,
            em: a().defaultRules.em,
            u: a().defaultRules.u,
            br: a().defaultRules.br,
            text: O.default,
            inlineCode: M(L({}, a().defaultRules.inlineCode), {
                parse: function(e, t, n) {
                    var r = a().defaultRules.inlineCode.parse(e, t, n);
                    return !0 === n.parseInlineCodeChildContent ? M(L({}, r), {
                        validationChildContent: t(r.content, n)
                    }) : r
                }
            }),
            emoticon: {
                order: O.default.order,
                requiredFirstCharacters: ["\xaf"],
                match: function(e) {
                    return /^(¯\\_\(ツ\)_\/¯)/.exec(e)
                },
                parse: function(e) {
                    return {
                        type: "text",
                        content: e[1]
                    }
                }
            },
            codeBlock: {
                order: a().defaultRules.codeBlock.order,
                requiredFirstCharacters: ["`"],
                match: function(e) {
                    return /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e)
                },
                parse: function(e, t, n) {
                    var r, o;
                    return {
                        lang: null !== (r = e[1]) && void 0 !== r ? r : "",
                        content: null !== (o = e[2]) && void 0 !== o ? o : "",
                        inQuote: n.inQuote || !1
                    }
                }
            },
            roleMention: {
                order: O.default.order,
                requiredFirstCharacters: ["<"],
                match: function(e) {
                    return /^<@&(\d+)>/.exec(e)
                },
                parse: function(e, t, n) {
                    var r = U(e, 2),
                        o = (r[0], r[1]);
                    if (n.returnMentionIds) return {
                        type: "roleMention",
                        id: o
                    };
                    var i = x(n),
                        a = null != i ? f.default.getRole(i.id, o) : null;
                    return null == a ? {
                        type: "text",
                        content: "@".concat(N.default.Messages.DELETED_ROLE_PLACEHOLDER)
                    } : {
                        type: "mention",
                        channelId: n.channelId,
                        guildId: null != i ? i.id : null,
                        roleId: o,
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
                order: O.default.order,
                requiredFirstCharacters: ["<", "@"],
                match: function(e, t) {
                    var n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                    return null != n && ("@Clyde" !== n[0] || (0, u.getClydeEnabled)(x(t), c.default.getChannel(t.channelId))) ? n : null
                },
                parse: function(e, t, n) {
                    if (n.returnMentionIds) return null == e[1] ? {
                        type: "mention",
                        text: e[0]
                    } : {
                        type: "mention",
                        id: e[1]
                    };
                    var r, o, i, a = d.default.getUser(e[1]),
                        s = c.default.getChannel(n.channelId);
                    null != a && (o = a.id, r = a.toString(), null != s && (r = null !== (i = _.default.getNickname(s.getGuildId(), n.channelId, a)) && void 0 !== i ? i : E.default.getName(a))), null == a && "@Clyde" === e[0] && (0, u.getClydeEnabled)(x(n), s) && (o = b.CLYDE_AI_USER_ID);
                    var l = e[1],
                        f = null != l && g.ID_REGEX.test(l.trim()) && n.unknownUserMentionPlaceholder ? "@".concat(N.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                    return {
                        userId: o,
                        channelId: n.channelId,
                        guildId: null == s ? void 0 : s.getGuildId(),
                        roleName: e[2],
                        content: [{
                            type: "text",
                            content: null != r ? "@".concat(r) : f
                        }]
                    }
                }
            },
            channelMention: m.default.channelMention,
            channelOrMessageUrl: m.default.channelOrMessageUrl,
            mediaPostLink: m.default.mediaPostLink,
            attachmentLink: p.default.attachmentLink,
            commandMention: {
                order: a().defaultRules.text.order,
                requiredFirstCharacters: ["<"],
                match: function(e) {
                    return RegExp("^<\\/((?:[-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?):(\\d+)>", "u").exec(e)
                },
                parse: function(e, t, n) {
                    if (n.returnMentionIds) return {
                        type: "commandMention",
                        id: e[2]
                    };
                    var r, o = (C(r = e[1].split(" ")) || P(r) || k(r) || D()).slice(1),
                        i = "".concat(e[2]).concat(w(o).map(function(e) {
                            return "".concat(A.SUB_COMMAND_KEY_SEPARATOR).concat(e)
                        }).join(""));
                    return {
                        channelId: n.channelId,
                        commandId: e[2],
                        commandName: e[1],
                        commandKey: i,
                        content: [{
                            type: "text",
                            content: "".concat(e[1])
                        }]
                    }
                }
            },
            emoji: {
                order: O.default.order,
                requiredFirstCharacters: [":"],
                match: function(e) {
                    var t = s.default.EMOJI_NAME_RE.exec(e);
                    return null != t && "" !== s.default.convertNameToSurrogate(t[1]) ? t : null
                },
                parse: function(e) {
                    var t = s.default.convertNameToSurrogate(e[1]);
                    return {
                        type: "text",
                        content: null == t || "" === t ? ":".concat(e[1], ":") : t
                    }
                }
            },
            soundboard: {
                order: O.default.order,
                requiredFirstCharacters: ["<"],
                match: function(e) {
                    return /^<sound:(\d+)>/.exec(e)
                },
                parse: function(e, t, n) {
                    var r, o = e[1],
                        i = l.default.getSoundById(o),
                        a = null !== (r = null == i ? void 0 : i.name) && void 0 !== r ? r : o;
                    return {
                        type: "soundboard",
                        id: o,
                        soundId: o,
                        channelId: n.channelId,
                        content: a
                    }
                }
            },
            customEmoji: {
                order: O.default.order,
                requiredFirstCharacters: ["<"],
                match: function(e) {
                    return /^<a?:(\w+):(\d+)>/.exec(e)
                },
                parse: function(e) {
                    return {
                        type: "text",
                        content: ":".concat(e[1], ":")
                    }
                }
            },
            timestamp: {
                order: O.default.order - 1,
                requiredFirstCharacters: ["<"],
                match: function(e) {
                    return S.TIMESTAMP_REGEX.exec(e)
                },
                parse: function(e) {
                    var t = U(e, 3),
                        n = t[0],
                        r = t[1],
                        o = t[2],
                        i = (0, S.parseTimestamp)(r, o);
                    return null == i ? {
                        type: "text",
                        content: n
                    } : i
                }
            },
            s: {
                order: a().defaultRules.u.order,
                requiredFirstCharacters: ["~"],
                match: a().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                parse: a().defaultRules.u.parse
            },
            spoiler: {
                order: O.default.order,
                requiredFirstCharacters: ["|"],
                match: function(e) {
                    return g.MARKDOWN_SPOILER_REGEXP.exec(e)
                },
                parse: function(e, t, n) {
                    return {
                        content: t(e[1], n),
                        channelId: n.channelId
                    }
                }
            },
            staticRouteLink: {
                order: O.default.order,
                requiredFirstCharacters: ["<"],
                match: function(e) {
                    return g.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e)
                },
                parse: function(e, t, n) {
                    return {
                        content: [{
                            type: "text",
                            content: {
                                home: N.default.Messages.SERVER_GUIDE,
                                guide: N.default.Messages.SERVER_GUIDE,
                                browse: N.default.Messages.CHANNEL_BROWSER_TITLE,
                                customize: N.default.Messages.CHANNELS_AND_ROLES
                            } [e[1]]
                        }],
                        channelId: e[1],
                        guildId: H(n.channelId),
                        id: e[1]
                    }
                }
            },
            heading: y.default,
            list: h.default
        },
        W = (0, v.default)([Y, T.default]),
        K = o().omit(W, ["inlineCode", "codeBlock", "br", "blockQuote"]),
        z = o().omit(W, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
        X = o().omit(W, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink"]),
        q = o().omit((0, v.default)([W, {
            inlineCode: {
                match: function(e, t, n) {
                    var r = W.codeBlock.match(e, t, n);
                    if (null != r) return r;
                    var o = W.inlineCode.match(e, t, n);
                    if (null != o) return o
                }
            }
        }]), ["blockQuote", "codeBlock", "br"]),
        Q = o().omit(W, ["codeBlock", "br", "blockQuote"]),
        J = o().omit(W, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline"]),
        Z = o().omit(W, ["codeBlock", "blockQuote", "br"]),
        $ = o().omit(W, ["codeBlock", "br", "inlineCode"]);

    function ee(e, t) {
        return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
    }
    var et = (0, v.default)([{
        highlightWord: {
            order: -1,
            match: function(e, t) {
                if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
                var n = e.indexOf(t.highlightWord);
                if (-1 === n) return null;
                var r = !ee(e, n);
                if (r)
                    do n = e.indexOf(t.highlightWord, n + 1), r = !ee(e, n); while (r && -1 !== n);
                if (-1 === n) return null;
                var o = e.substring(0, n),
                    i = e.substring(n + t.highlightWord.length);
                return [e, t.highlightWord, o, i]
            },
            parse: function(e, t, n) {
                var r = t(e[2], n),
                    o = t(e[3], n);
                return w(r).concat([{
                    type: "highlight",
                    content: e[1]
                }], w(o))
            }
        }
    }, o().omit(W, ["url"])]);
    t.default = {
        RULES: W,
        CHANNEL_TOPIC_RULES: K,
        VOICE_CHANNEL_STATUS_RULES: z,
        EMBED_TITLE_RULES: X,
        INLINE_REPLY_RULES: q,
        GUILD_VERIFICATION_FORM_RULES: Q,
        GUILD_EVENT_RULES: Z,
        PROFILE_BIO_RULES: J,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: et,
        NATIVE_SEARCH_RESULT_LINK_RULES: $
    }
}
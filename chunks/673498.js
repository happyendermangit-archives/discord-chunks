function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("302454"),
        u = n("784184"),
        s = n("798481"),
        l = n("586159"),
        c = n("300983"),
        f = n("765184"),
        d = n("163291"),
        _ = n("306912"),
        E = n("266140"),
        p = n("778653"),
        m = n("843317"),
        y = n("547887"),
        I = n("214354"),
        h = n("488920"),
        O = n("143323"),
        T = n("11818"),
        S = n("53053"),
        v = n("421960"),
        g = n("467789"),
        A = n("933893"),
        b = n("824489"),
        N = n("78454"),
        R = n("439723"),
        C = n("63093"),
        P = n("281767"),
        D = n("928204"),
        L = n("941504"),
        M = n("633353");
    n("519308");
    var U = n("931093");

    function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function k(e) {
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

    function G(e, t) {
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

    function B(e) {
        var t, n, o = e.text;
        var i = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            a = i[0],
            s = i[1];
        return r.createElement(u.Clickable, {
            onClick: function() {
                try {
                    (0, S.copy)(o), s(!0)
                } catch (e) {
                    s(!1)
                }
            }
        }, a ? r.createElement(m.default, {
            width: 16,
            height: 16
        }) : r.createElement(y.default, {
            width: 16,
            height: 16
        }))
    }
    var j = {
        blockQuote: {
            react: function(e, t, n) {
                return r.createElement("div", {
                    key: n.key,
                    className: U.blockquoteContainer
                }, r.createElement("div", {
                    className: U.blockquoteDivider
                }), r.createElement("blockquote", null, t(e.content, n)))
            }
        },
        s: {
            react: function(e, t, n) {
                return r.createElement("s", {
                    key: n.key
                }, t(e.content, n))
            }
        },
        highlight: {
            react: function(e, t, n) {
                return r.createElement("span", {
                    key: n.key,
                    className: "highlight"
                }, e.content)
            }
        },
        paragraph: {
            react: function(e, t, n) {
                return r.createElement("p", {
                    key: n.key
                }, t(e.content, n))
            }
        },
        inlineCode: {
            react: function(e, t, n) {
                return r.createElement("code", {
                    key: n.key,
                    className: "inline"
                }, (0, g.smartOutput)(e, t, n))
            }
        },
        codeBlock: {
            react: function(e, t, o) {
                var a = function() {
                    return r.createElement("code", {
                        className: i()(M.scrollbarGhostHairline, "hljs")
                    }, (0, g.smartOutput)(e, t, o))
                };
                return r.createElement("pre", {
                    key: o.key
                }, r.createElement("div", {
                    className: U.codeContainer
                }, S.SUPPORTS_COPY ? r.createElement("div", {
                    className: U.codeActions
                }, r.createElement(B, {
                    text: e.content
                })) : null, r.createElement(l.LazyLibrary, {
                    createPromise: function() {
                        return Promise.resolve().then(n.bind(n, "928344"))
                    },
                    webpackId: "928344",
                    renderFallback: a,
                    render: function(t) {
                        if (!(e.lang && t.hasLanguage(e.lang))) return a();
                        var n = t.highlight(e.lang, e.content, !0);
                        return null == n ? a() : r.createElement("code", {
                            className: i()(M.scrollbarGhostHairline, "hljs", n.language),
                            dangerouslySetInnerHTML: {
                                __html: n.value
                            }
                        })
                    }
                })))
            }
        },
        text: {
            react: function(e, t, n) {
                return "string" == typeof e.content ? r.createElement("span", {
                    key: n.key
                }, e.content) : r.createElement("span", {
                    key: n.key
                }, t(e.content, n))
            }
        },
        spoiler: {
            react: function(e, t, n) {
                return r.createElement(p.default, {
                    key: n.key,
                    type: p.default.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: function(e, t) {
                        return null == e || e.type !== s.default || t ? e : r.cloneElement(e, {
                            tabIndex: -1
                        })
                    }
                }, function() {
                    return t(e.content, n)
                })
            }
        },
        soundboard: {
            react: function(e) {
                return r.createElement(T.default, {
                    channelId: e.channelId,
                    soundId: e.soundId,
                    jumbo: e.jumboable
                })
            }
        },
        staticRouteLink: {
            react: function(e, t, n) {
                var o = function() {
                    ! function(e, t) {
                        var n = _.default.getGuild(e);
                        if (null != e && null != n && n.hasFeature(P.GuildFeatures.COMMUNITY)) {
                            var r = {
                                    home: D.StaticChannelRoute.GUILD_HOME,
                                    browse: D.StaticChannelRoute.CHANNEL_BROWSER,
                                    customize: D.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                                    guide: D.StaticChannelRoute.GUILD_HOME
                                } [t],
                                o = _.default.getGuild(e);
                            if ((null == o ? void 0 : o.joinedAt) == null) {
                                v.startLurking(e, {}, {
                                    channelId: r
                                });
                                return
                            }(0, d.transitionTo)(P.Routes.CHANNEL(e, r))
                        }
                    }(e.guildId, e.channelId)
                };
                if (!(0, g.isStaticRouteIconType)(e.channelId)) return null;
                var i = "".concat(e.channelId);
                switch (e.channelId) {
                    case D.StaticChannelId.GUILD_HOME:
                    case D.StaticChannelId.SERVER_GUIDE:
                        i = L.default.Messages.SERVER_GUIDE;
                        break;
                    case D.StaticChannelId.CHANNEL_BROWSER:
                        i = L.default.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
                        break;
                    case D.StaticChannelId.CUSTOMIZE_COMMUNITY:
                        i = L.default.Messages.CHANNELS_AND_ROLES
                }
                return r.createElement(u.Tooltip, {
                    key: n.key,
                    text: i,
                    position: "top"
                }, function(i) {
                    var a = i.onMouseEnter,
                        u = i.onMouseLeave;
                    return r.createElement(E.default, {
                        role: "link",
                        key: n.key,
                        onClick: o,
                        onMouseEnter: a,
                        onMouseLeave: u,
                        className: "channelMention",
                        iconType: e.channelId
                    }, t(e.content, n))
                })
            }
        },
        timestamp: {
            react: function(e, t, n) {
                return r.createElement(A.default, {
                    key: n.key,
                    node: e
                })
            }
        },
        list: {
            react: function(e, t, n) {
                var r = e.ordered ? "ol" : "ul",
                    o = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
                return (0, a.reactElement)(r, "".concat(n.key), {
                    start: e.start,
                    className: n.formatInline ? U.inlineFormat : null,
                    style: {
                        "--totalCharacters": o
                    },
                    children: e.items.map(function(e, r) {
                        var o = (0, a.reactElement)("span", "".concat(n.key, "-").concat(r, "-innerSpan"), {
                            children: t(e, n)
                        });
                        return (0, a.reactElement)("li", "".concat(n.key, "-").concat(r) + r, {
                            children: o
                        })
                    })
                })
            }
        },
        heading: {
            react: function(e, t, n) {
                var r = (0, a.reactElement)("span", "".concat(n.key, "-innerSpan"), {
                    children: t(e.content, n)
                });
                return (0, a.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                    children: r,
                    className: n.formatInline ? U.inlineFormat : null
                })
            }
        },
        guild: {
            react: function(e, t, n) {
                var o = _.default.getGuild(e.guildId);
                return r.createElement(h.default, {
                    guild: o,
                    key: n.key
                }, (0, g.smartOutput)(e, t, n))
            }
        },
        channel: {
            react: function(e, t, n) {
                return r.createElement(I.default, {
                    iconType: e.iconType,
                    key: n.key
                }, (0, g.smartOutput)(e, t, n))
            }
        },
        message: {
            react: function(e, t, n) {
                return r.createElement(O.default, {
                    key: n.key
                })
            }
        }
    };

    function F(e) {
        var t, n, o, i, a, u, s, l, d, _;
        return G(k({}, j), {
            link: (0, C.default)(e),
            emoji: (o = void 0 === (n = (t = e).emojiTooltipPosition) ? "top" : n, a = void 0 === (i = t.enableEmojiClick) || i, {
                react: function(e, t, n) {
                    var i = n.key;
                    return e.src ? r.createElement(f.MessageStandardEmoji, {
                        key: i,
                        node: e,
                        tooltipPosition: o,
                        enableClick: a
                    }) : r.createElement("span", {
                        key: i
                    }, e.surrogate)
                }
            }),
            customEmoji: (l = void 0 === (s = (u = e).emojiTooltipPosition) ? "top" : s, _ = void 0 === (d = u.enableEmojiClick) || d, {
                react: function(e, t, n) {
                    var o = n.key,
                        i = n.guildId,
                        a = n.isInteracting,
                        u = c.default.getDisambiguatedEmojiContext(i).getById(e.emojiId);
                    if (null != u) {
                        var s = u.require_colons;
                        e = G(k({}, e), {
                            name: s ? ":".concat(u.name, ":") : u.name
                        })
                    }
                    return r.createElement(f.MessageCustomEmoji, {
                        isInteracting: a,
                        key: o,
                        node: e,
                        tooltipPosition: l,
                        enableClick: _
                    })
                }
            }),
            channelMention: (0, N.default)(e),
            commandMention: (0, R.default)(e),
            attachmentLink: (0, b.default)(e)
        })
    }
}
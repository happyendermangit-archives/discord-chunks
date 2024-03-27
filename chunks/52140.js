function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("404828"),
        o = n("77078"),
        u = n("340616"),
        d = n("269936"),
        c = n("385976"),
        f = n("855920"),
        m = n("393414"),
        p = n("305961"),
        h = n("666897"),
        x = n("505684"),
        E = n("36694"),
        y = n("413709"),
        g = n("873218"),
        S = n("250832"),
        C = n("22248"),
        T = n("28236"),
        _ = n("306160"),
        I = n("794818"),
        v = n("844659"),
        A = n("657057"),
        N = n("886125"),
        R = n("180161"),
        O = n("781423"),
        M = n("47677"),
        k = n("49111"),
        L = n("724210"),
        P = n("782340"),
        b = n("356410");
    n("312336");
    var j = n("919163");

    function U(e) {
        let {
            text: t
        } = e, [n, a] = l.useState(!1);
        return (0, i.jsx)(o.Clickable, {
            onClick: () => {
                try {
                    (0, _.copy)(t), a(!0)
                } catch (e) {
                    a(!1)
                }
            },
            children: n ? (0, i.jsx)(E.default, {
                width: 16,
                height: 16
            }) : (0, i.jsx)(y.default, {
                width: 16,
                height: 16
            })
        })
    }
    let D = {
        blockQuote: {
            react: (e, t, n) => (0, i.jsxs)("div", {
                className: j.blockquoteContainer,
                children: [(0, i.jsx)("div", {
                    className: j.blockquoteDivider
                }), (0, i.jsx)("blockquote", {
                    children: t(e.content, n)
                })]
            }, n.key)
        },
        s: {
            react: (e, t, n) => (0, i.jsx)("s", {
                children: t(e.content, n)
            }, n.key)
        },
        highlight: {
            react: (e, t, n) => (0, i.jsx)("span", {
                className: "highlight",
                children: e.content
            }, n.key)
        },
        paragraph: {
            react: (e, t, n) => (0, i.jsx)("p", {
                children: t(e.content, n)
            }, n.key)
        },
        inlineCode: {
            react: (e, t, n) => (0, i.jsx)("code", {
                className: "inline",
                children: (0, v.smartOutput)(e, t, n)
            }, n.key)
        },
        codeBlock: {
            react(e, t, l) {
                let a = () => (0, i.jsx)("code", {
                    className: s(b.scrollbarGhostHairline, "hljs"),
                    children: (0, v.smartOutput)(e, t, l)
                });
                return (0, i.jsx)("pre", {
                    children: (0, i.jsxs)("div", {
                        className: j.codeContainer,
                        children: [_.SUPPORTS_COPY ? (0, i.jsx)("div", {
                            className: j.codeActions,
                            children: (0, i.jsx)(U, {
                                text: e.content
                            })
                        }) : null, (0, i.jsx)(d.LazyLibrary, {
                            createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                            webpackId: "86256",
                            renderFallback: a,
                            render: t => {
                                if (!(e.lang && t.hasLanguage(e.lang))) return a();
                                {
                                    let n = t.highlight(e.lang, e.content, !0);
                                    return null == n ? a() : (0, i.jsx)("code", {
                                        className: s(b.scrollbarGhostHairline, "hljs", n.language),
                                        dangerouslySetInnerHTML: {
                                            __html: n.value
                                        }
                                    })
                                }
                            }
                        })]
                    })
                }, l.key)
            }
        },
        text: {
            react: (e, t, n) => "string" == typeof e.content ? (0, i.jsx)("span", {
                children: e.content
            }, n.key) : (0, i.jsx)("span", {
                children: t(e.content, n)
            }, n.key)
        },
        spoiler: {
            react: (e, t, n) => (0, i.jsx)(x.default, {
                type: x.default.Types.TEXT,
                inline: n.formatInline,
                renderTextElement: (e, t) => null == e || e.type !== u.default || t ? e : l.cloneElement(e, {
                    tabIndex: -1
                }),
                children: () => t(e.content, n)
            }, n.key)
        },
        soundboard: {
            react: e => (0, i.jsx)(T.default, {
                channelId: e.channelId,
                soundId: e.soundId,
                jumbo: e.jumboable
            })
        },
        staticRouteLink: {
            react(e, t, n) {
                let l = () => {
                    ! function(e, t) {
                        let n = p.default.getGuild(e);
                        if (null == e || null == n || !n.hasFeature(k.GuildFeatures.COMMUNITY)) return;
                        let i = {
                                home: L.StaticChannelRoute.GUILD_HOME,
                                browse: L.StaticChannelRoute.CHANNEL_BROWSER,
                                customize: L.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                                guide: L.StaticChannelRoute.GUILD_HOME
                            },
                            l = i[t],
                            a = p.default.getGuild(e);
                        if ((null == a ? void 0 : a.joinedAt) == null) {
                            I.startLurking(e, {}, {
                                channelId: l
                            });
                            return
                        }(0, m.transitionTo)(k.Routes.CHANNEL(e, l))
                    }(e.guildId, e.channelId)
                };
                if (!(0, v.isStaticRouteIconType)(e.channelId)) return null;
                let a = "".concat(e.channelId);
                switch (e.channelId) {
                    case L.StaticChannelId.GUILD_HOME:
                    case L.StaticChannelId.SERVER_GUIDE:
                        a = P.default.Messages.SERVER_GUIDE;
                        break;
                    case L.StaticChannelId.CHANNEL_BROWSER:
                        a = P.default.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
                        break;
                    case L.StaticChannelId.CUSTOMIZE_COMMUNITY:
                        a = P.default.Messages.CHANNELS_AND_ROLES
                }
                return (0, i.jsx)(o.Tooltip, {
                    text: a,
                    position: "top",
                    children: a => {
                        let {
                            onMouseEnter: s,
                            onMouseLeave: r
                        } = a;
                        return (0, i.jsx)(h.default, {
                            role: "link",
                            onClick: l,
                            onMouseEnter: s,
                            onMouseLeave: r,
                            className: "channelMention",
                            iconType: e.channelId,
                            children: t(e.content, n)
                        }, n.key)
                    }
                }, n.key)
            }
        },
        timestamp: {
            react: (e, t, n) => (0, i.jsx)(A.default, {
                node: e
            }, n.key)
        },
        list: {
            react: (e, t, n) => {
                let i = e.ordered ? "ol" : "ul",
                    l = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
                return (0, r.reactElement)(i, "".concat(n.key), {
                    start: e.start,
                    className: n.formatInline ? j.inlineFormat : null,
                    style: {
                        "--totalCharacters": l
                    },
                    children: e.items.map((e, i) => {
                        let l = (0, r.reactElement)("span", "".concat(n.key, "-").concat(i, "-innerSpan"), {
                            children: t(e, n)
                        });
                        return (0, r.reactElement)("li", "".concat(n.key, "-").concat(i) + i, {
                            children: l
                        })
                    })
                })
            }
        },
        heading: {
            react: (e, t, n) => {
                let i = (0, r.reactElement)("span", "".concat(n.key, "-innerSpan"), {
                    children: t(e.content, n)
                });
                return (0, r.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                    children: i,
                    className: n.formatInline ? j.inlineFormat : null
                })
            }
        },
        guild: {
            react: (e, t, n) => {
                let l = p.default.getGuild(e.guildId);
                return (0, i.jsx)(S.default, {
                    guild: l,
                    children: (0, v.smartOutput)(e, t, n)
                }, n.key)
            }
        },
        channel: {
            react: (e, t, n) => (0, i.jsx)(g.default, {
                iconType: e.iconType,
                children: (0, v.smartOutput)(e, t, n)
            }, n.key)
        },
        message: {
            react: (e, t, n) => (0, i.jsx)(C.default, {}, n.key)
        }
    };

    function w(e) {
        return {
            ...D,
            link: (0, M.default)(e),
            emoji: function(e) {
                let {
                    emojiTooltipPosition: t = "top",
                    enableEmojiClick: n = !0
                } = e;
                return {
                    react(e, l, a) {
                        let {
                            key: s
                        } = a;
                        return e.src ? (0, i.jsx)(f.MessageStandardEmoji, {
                            node: e,
                            tooltipPosition: t,
                            enableClick: n
                        }, s) : (0, i.jsx)("span", {
                            children: e.surrogate
                        }, s)
                    }
                }
            }(e),
            customEmoji: function(e) {
                let {
                    emojiTooltipPosition: t = "top",
                    enableEmojiClick: n = !0
                } = e;
                return {
                    react(e, l, a) {
                        let {
                            key: s,
                            guildId: r,
                            isInteracting: o
                        } = a, u = c.default.getDisambiguatedEmojiContext(r).getById(e.emojiId);
                        if (null != u) {
                            let t = u.require_colons;
                            e = {
                                ...e,
                                name: t ? ":".concat(u.name, ":") : u.name
                            }
                        }
                        return (0, i.jsx)(f.MessageCustomEmoji, {
                            isInteracting: o,
                            node: e,
                            tooltipPosition: t,
                            enableClick: n
                        }, s)
                    }
                }
            }(e),
            channelMention: (0, R.default)(e),
            commandMention: (0, O.default)(e),
            attachmentLink: (0, N.default)(e)
        }
    }
}
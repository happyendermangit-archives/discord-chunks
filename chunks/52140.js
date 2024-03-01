function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
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
        E = n("505684"),
        g = n("36694"),
        C = n("413709"),
        S = n("873218"),
        T = n("250832"),
        v = n("22248"),
        I = n("28236"),
        _ = n("306160"),
        N = n("794818"),
        A = n("844659"),
        x = n("657057"),
        y = n("886125"),
        O = n("180161"),
        R = n("781423"),
        M = n("47677"),
        L = n("49111"),
        P = n("724210"),
        b = n("782340"),
        j = n("356410");
    n("312336");
    var U = n("919163");

    function D(e) {
        let {
            text: t
        } = e, [n, a] = i.useState(!1);
        return (0, l.jsx)(o.Clickable, {
            onClick: () => {
                try {
                    (0, _.copy)(t), a(!0)
                } catch (e) {
                    a(!1)
                }
            },
            children: n ? (0, l.jsx)(g.default, {
                width: 16,
                height: 16
            }) : (0, l.jsx)(C.default, {
                width: 16,
                height: 16
            })
        })
    }
    let k = {
        blockQuote: {
            react: (e, t, n) => (0, l.jsxs)("div", {
                className: U.blockquoteContainer,
                children: [(0, l.jsx)("div", {
                    className: U.blockquoteDivider
                }), (0, l.jsx)("blockquote", {
                    children: t(e.content, n)
                })]
            }, n.key)
        },
        s: {
            react: (e, t, n) => (0, l.jsx)("s", {
                children: t(e.content, n)
            }, n.key)
        },
        highlight: {
            react: (e, t, n) => (0, l.jsx)("span", {
                className: "highlight",
                children: e.content
            }, n.key)
        },
        paragraph: {
            react: (e, t, n) => (0, l.jsx)("p", {
                children: t(e.content, n)
            }, n.key)
        },
        inlineCode: {
            react: (e, t, n) => (0, l.jsx)("code", {
                className: "inline",
                children: (0, A.smartOutput)(e, t, n)
            }, n.key)
        },
        codeBlock: {
            react(e, t, i) {
                let a = () => (0, l.jsx)("code", {
                    className: s(j.scrollbarGhostHairline, "hljs"),
                    children: (0, A.smartOutput)(e, t, i)
                });
                return (0, l.jsx)("pre", {
                    children: (0, l.jsxs)("div", {
                        className: U.codeContainer,
                        children: [_.SUPPORTS_COPY ? (0, l.jsx)("div", {
                            className: U.codeActions,
                            children: (0, l.jsx)(D, {
                                text: e.content
                            })
                        }) : null, (0, l.jsx)(d.LazyLibrary, {
                            createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                            webpackId: "86256",
                            renderFallback: a,
                            render: t => {
                                if (!(e.lang && t.hasLanguage(e.lang))) return a();
                                {
                                    let n = t.highlight(e.lang, e.content, !0);
                                    return null == n ? a() : (0, l.jsx)("code", {
                                        className: s(j.scrollbarGhostHairline, "hljs", n.language),
                                        dangerouslySetInnerHTML: {
                                            __html: n.value
                                        }
                                    })
                                }
                            }
                        })]
                    })
                }, i.key)
            }
        },
        text: {
            react: (e, t, n) => "string" == typeof e.content ? (0, l.jsx)("span", {
                children: e.content
            }, n.key) : (0, l.jsx)("span", {
                children: t(e.content, n)
            }, n.key)
        },
        spoiler: {
            react: (e, t, n) => (0, l.jsx)(E.default, {
                type: E.default.Types.TEXT,
                inline: n.formatInline,
                renderTextElement: (e, t) => null == e || e.type !== u.default || t ? e : i.cloneElement(e, {
                    tabIndex: -1
                }),
                children: () => t(e.content, n)
            }, n.key)
        },
        soundboard: {
            react: e => (0, l.jsx)(I.default, {
                channelId: e.channelId,
                soundId: e.soundId,
                jumbo: e.jumboable
            })
        },
        staticRouteLink: {
            react(e, t, n) {
                let i = () => {
                    ! function(e, t) {
                        let n = p.default.getGuild(e);
                        if (null == e || null == n || !n.hasFeature(L.GuildFeatures.COMMUNITY)) return;
                        let l = {
                                home: P.StaticChannelRoute.GUILD_HOME,
                                browse: P.StaticChannelRoute.CHANNEL_BROWSER,
                                customize: P.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                                guide: P.StaticChannelRoute.GUILD_HOME
                            },
                            i = l[t],
                            a = p.default.getGuild(e);
                        if ((null == a ? void 0 : a.joinedAt) == null) {
                            N.startLurking(e, {}, {
                                channelId: i
                            });
                            return
                        }(0, m.transitionTo)(L.Routes.CHANNEL(e, i))
                    }(e.guildId, e.channelId)
                };
                if (!(0, A.isStaticRouteIconType)(e.channelId)) return null;
                let a = "".concat(e.channelId);
                switch (e.channelId) {
                    case P.StaticChannelId.GUILD_HOME:
                    case P.StaticChannelId.SERVER_GUIDE:
                        a = b.default.Messages.SERVER_GUIDE;
                        break;
                    case P.StaticChannelId.CHANNEL_BROWSER:
                        a = b.default.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
                        break;
                    case P.StaticChannelId.CUSTOMIZE_COMMUNITY:
                        a = b.default.Messages.CHANNELS_AND_ROLES
                }
                return (0, l.jsx)(o.Tooltip, {
                    text: a,
                    position: "top",
                    children: a => {
                        let {
                            onMouseEnter: s,
                            onMouseLeave: r
                        } = a;
                        return (0, l.jsx)(h.default, {
                            role: "link",
                            onClick: i,
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
            react: (e, t, n) => (0, l.jsx)(x.default, {
                node: e
            }, n.key)
        },
        list: {
            react: (e, t, n) => {
                let l = e.ordered ? "ol" : "ul",
                    i = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
                return (0, r.reactElement)(l, "".concat(n.key), {
                    start: e.start,
                    className: n.formatInline ? U.inlineFormat : null,
                    style: {
                        "--totalCharacters": i
                    },
                    children: e.items.map((e, l) => {
                        let i = (0, r.reactElement)("span", "".concat(n.key, "-").concat(l, "-innerSpan"), {
                            children: t(e, n)
                        });
                        return (0, r.reactElement)("li", "".concat(n.key, "-").concat(l) + l, {
                            children: i
                        })
                    })
                })
            }
        },
        heading: {
            react: (e, t, n) => {
                let l = (0, r.reactElement)("span", "".concat(n.key, "-innerSpan"), {
                    children: t(e.content, n)
                });
                return (0, r.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                    children: l,
                    className: n.formatInline ? U.inlineFormat : null
                })
            }
        },
        guild: {
            react: (e, t, n) => {
                let i = p.default.getGuild(e.guildId);
                return (0, l.jsx)(T.default, {
                    guild: i,
                    children: (0, A.smartOutput)(e, t, n)
                }, n.key)
            }
        },
        channel: {
            react: (e, t, n) => (0, l.jsx)(S.default, {
                iconType: e.iconType,
                children: (0, A.smartOutput)(e, t, n)
            }, n.key)
        },
        message: {
            react: (e, t, n) => (0, l.jsx)(v.default, {}, n.key)
        }
    };

    function w(e) {
        return {
            ...k,
            link: (0, M.default)(e),
            emoji: function(e) {
                let {
                    emojiTooltipPosition: t = "top",
                    enableEmojiClick: n = !0
                } = e;
                return {
                    react(e, i, a) {
                        let {
                            key: s
                        } = a;
                        return e.src ? (0, l.jsx)(f.MessageStandardEmoji, {
                            node: e,
                            tooltipPosition: t,
                            enableClick: n
                        }, s) : (0, l.jsx)("span", {
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
                    react(e, i, a) {
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
                        return (0, l.jsx)(f.MessageCustomEmoji, {
                            isInteracting: o,
                            node: e,
                            tooltipPosition: t,
                            enableClick: n
                        }, s)
                    }
                }
            }(e),
            channelMention: (0, O.default)(e),
            commandMention: (0, R.default)(e),
            attachmentLink: (0, y.default)(e)
        }
    }
}
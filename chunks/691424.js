function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("302454"),
        l = n("481060"),
        u = n("794295"),
        d = n("663993"),
        _ = n("339085"),
        c = n("590956"),
        E = n("703656"),
        I = n("430824"),
        T = n("797053"),
        f = n("68588"),
        S = n("263704"),
        h = n("757206"),
        A = n("332870"),
        m = n("750156"),
        N = n("979516"),
        p = n("671612"),
        O = n("572004"),
        R = n("900849"),
        C = n("746878"),
        g = n("285063"),
        L = n("943362"),
        D = n("551452"),
        v = n("69626"),
        M = n("142990"),
        y = n("532901"),
        P = n("981631"),
        U = n("176505"),
        b = n("689938"),
        G = n("633353");
    n("519308");
    var w = n("931093");

    function B(e) {
        let {
            text: t
        } = e, [n, s] = r.useState(!1);
        return (0, i.jsx)(l.Clickable, {
            onClick: () => {
                try {
                    (0, O.copy)(t), s(!0)
                } catch (e) {
                    s(!1)
                }
            },
            children: n ? (0, i.jsx)(S.default, {
                width: 16,
                height: 16
            }) : (0, i.jsx)(h.default, {
                width: 16,
                height: 16
            })
        })
    }
    let k = {
        blockQuote: {
            react: (e, t, n) => (0, i.jsxs)("div", {
                className: w.blockquoteContainer,
                children: [(0, i.jsx)("div", {
                    className: w.blockquoteDivider
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
                children: (0, C.smartOutput)(e, t, n)
            }, n.key)
        },
        codeBlock: {
            react(e, t, r) {
                let s = () => (0, i.jsx)("code", {
                    className: a()(G.scrollbarGhostHairline, "hljs"),
                    children: (0, C.smartOutput)(e, t, r)
                });
                return (0, i.jsx)("pre", {
                    children: (0, i.jsxs)("div", {
                        className: w.codeContainer,
                        children: [O.SUPPORTS_COPY ? (0, i.jsx)("div", {
                            className: w.codeActions,
                            children: (0, i.jsx)(B, {
                                text: e.content
                            })
                        }) : null, (0, i.jsx)(d.LazyLibrary, {
                            createPromise: () => Promise.resolve().then(n.bind(n, "364964")),
                            webpackId: "364964",
                            renderFallback: s,
                            render: t => {
                                if (!(e.lang && t.hasLanguage(e.lang))) return s();
                                {
                                    let n = t.highlight(e.lang, e.content, !0);
                                    return null == n ? s() : (0, i.jsx)("code", {
                                        className: a()(G.scrollbarGhostHairline, "hljs", n.language),
                                        dangerouslySetInnerHTML: {
                                            __html: n.value
                                        }
                                    })
                                }
                            }
                        })]
                    })
                }, r.key)
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
            react: (e, t, n) => (0, i.jsx)(f.default, {
                type: f.default.Types.TEXT,
                inline: n.formatInline,
                renderTextElement: (e, t) => null == e || e.type !== u.default || t ? e : r.cloneElement(e, {
                    tabIndex: -1
                }),
                children: () => t(e.content, n)
            }, n.key)
        },
        soundboard: {
            react: e => (0, i.jsx)(p.default, {
                channelId: e.channelId,
                soundId: e.soundId,
                jumbo: e.jumboable
            })
        },
        staticRouteLink: {
            react(e, t, n) {
                let r = () => {
                    ! function(e, t) {
                        let n = I.default.getGuild(e);
                        if (null == e || null == n || !n.hasFeature(P.GuildFeatures.COMMUNITY)) return;
                        let i = {
                                home: U.StaticChannelRoute.GUILD_HOME,
                                browse: U.StaticChannelRoute.CHANNEL_BROWSER,
                                customize: U.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                                guide: U.StaticChannelRoute.GUILD_HOME
                            } [t],
                            r = I.default.getGuild(e);
                        if ((null == r ? void 0 : r.joinedAt) == null) {
                            R.startLurking(e, {}, {
                                channelId: i
                            });
                            return
                        }(0, E.transitionTo)(P.Routes.CHANNEL(e, i))
                    }(e.guildId, e.channelId)
                };
                if (!(0, C.isStaticRouteIconType)(e.channelId)) return null;
                let s = "".concat(e.channelId);
                switch (e.channelId) {
                    case U.StaticChannelId.GUILD_HOME:
                    case U.StaticChannelId.SERVER_GUIDE:
                        s = b.default.Messages.SERVER_GUIDE;
                        break;
                    case U.StaticChannelId.CHANNEL_BROWSER:
                        s = b.default.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
                        break;
                    case U.StaticChannelId.CUSTOMIZE_COMMUNITY:
                        s = b.default.Messages.CHANNELS_AND_ROLES
                }
                return (0, i.jsx)(l.Tooltip, {
                    text: s,
                    position: "top",
                    children: s => {
                        let {
                            onMouseEnter: a,
                            onMouseLeave: o
                        } = s;
                        return (0, i.jsx)(T.default, {
                            role: "link",
                            onClick: r,
                            onMouseEnter: a,
                            onMouseLeave: o,
                            className: "channelMention",
                            iconType: e.channelId,
                            children: t(e.content, n)
                        }, n.key)
                    }
                }, n.key)
            }
        },
        timestamp: {
            react: (e, t, n) => (0, i.jsx)(g.default, {
                node: e
            }, n.key)
        },
        list: {
            react: (e, t, n) => {
                let i = e.ordered ? "ol" : "ul",
                    r = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
                return (0, o.reactElement)(i, "".concat(n.key), {
                    start: e.start,
                    className: n.formatInline ? w.inlineFormat : null,
                    style: {
                        "--totalCharacters": r
                    },
                    children: e.items.map((e, i) => {
                        let r = (0, o.reactElement)("span", "".concat(n.key, "-").concat(i, "-innerSpan"), {
                            children: t(e, n)
                        });
                        return (0, o.reactElement)("li", "".concat(n.key, "-").concat(i) + i, {
                            children: r
                        })
                    })
                })
            }
        },
        heading: {
            react: (e, t, n) => {
                let i = (0, o.reactElement)("span", "".concat(n.key, "-innerSpan"), {
                    children: t(e.content, n)
                });
                return (0, o.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                    children: i,
                    className: n.formatInline ? w.inlineFormat : null
                })
            }
        },
        guild: {
            react: (e, t, n) => {
                let r = I.default.getGuild(e.guildId);
                return (0, i.jsx)(m.default, {
                    guild: r,
                    children: (0, C.smartOutput)(e, t, n)
                }, n.key)
            }
        },
        channel: {
            react: (e, t, n) => (0, i.jsx)(A.default, {
                iconType: e.iconType,
                children: (0, C.smartOutput)(e, t, n)
            }, n.key)
        },
        message: {
            react: (e, t, n) => (0, i.jsx)(N.default, {}, n.key)
        }
    };

    function F(e) {
        return {
            ...k,
            link: (0, y.default)(e),
            devLink: (0, M.default)(e),
            emoji: function(e) {
                let {
                    emojiTooltipPosition: t = "top",
                    enableEmojiClick: n = !0
                } = e;
                return {
                    react(e, r, s) {
                        let {
                            key: a
                        } = s;
                        return e.src ? (0, i.jsx)(c.MessageStandardEmoji, {
                            node: e,
                            tooltipPosition: t,
                            enableClick: n
                        }, a) : (0, i.jsx)("span", {
                            children: e.surrogate
                        }, a)
                    }
                }
            }(e),
            customEmoji: function(e) {
                let {
                    emojiTooltipPosition: t = "top",
                    enableEmojiClick: n = !0
                } = e;
                return {
                    react(e, r, s) {
                        let {
                            key: a,
                            guildId: o,
                            isInteracting: l
                        } = s, u = _.default.getDisambiguatedEmojiContext(o).getById(e.emojiId);
                        if (null != u) {
                            let t = u.require_colons;
                            e = {
                                ...e,
                                name: t ? ":".concat(u.name, ":") : u.name
                            }
                        }
                        return (0, i.jsx)(c.MessageCustomEmoji, {
                            isInteracting: l,
                            node: e,
                            tooltipPosition: t,
                            enableClick: n
                        }, a)
                    }
                }
            }(e),
            channelMention: (0, D.default)(e),
            commandMention: (0, v.default)(e),
            attachmentLink: (0, L.default)(e)
        }
    }
}
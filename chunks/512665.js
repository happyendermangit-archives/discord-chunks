function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return G
        },
        renderSingleLineMessage: function() {
            return b
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("913527"),
        l = n.n(o),
        u = n("481060"),
        d = n("100527"),
        _ = n("906732"),
        c = n("372900"),
        E = n("453687"),
        I = n("123145"),
        T = n("223021"),
        f = n("869765"),
        S = n("403132"),
        h = n("378233"),
        A = n("377617"),
        m = n("84017"),
        N = n("748500"),
        p = n("836879"),
        O = n("191741"),
        R = n("768581"),
        C = n("55935"),
        g = n("823379"),
        L = n("113039"),
        v = n("768760"),
        D = n("981631"),
        M = n("689938"),
        y = n("904335");

    function P(e) {
        let {
            width: t = 12,
            height: n = 8,
            color: r = "currentColor",
            className: s,
            foreground: a
        } = e;
        return (0, i.jsx)("svg", {
            className: s,
            width: t,
            height: n,
            viewBox: "0 0 12 8",
            children: (0, i.jsx)("path", {
                d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
                className: a,
                fill: r
            })
        })
    }

    function U(e) {
        let {
            width: t = 18,
            height: n = 18,
            className: r,
            foreground: s
        } = e;
        return (0, i.jsx)("svg", {
            className: r,
            width: t,
            height: n,
            viewBox: "0 0 18 18",
            children: (0, i.jsx)("path", {
                fill: "#3ba55c",
                d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
                className: s
            })
        })
    }

    function b(e, t, n, r, s) {
        let a, o, l;
        let {
            iconClass: u,
            iconSize: d
        } = s, _ = null == t || "" === t || Array.isArray(t) && 0 === t.length, c = (0, h.getMessageStickers)(e).length > 0, E = null != e.interaction, I = e.hasFlag(D.MessageFlags.IS_VOICE_MESSAGE), T = e.isPoll();
        if (n) a = M.default.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
        else if (e.type === D.MessageTypes.CHANNEL_PINNED_MESSAGE) a = M.default.Messages.MESSAGE_PINNED;
        else if (_) {
            if (T) {
                var f, S;
                o = null == e ? void 0 : null === (S = e.poll) || void 0 === S ? void 0 : null === (f = S.question) || void 0 === f ? void 0 : f.text
            } else c ? a = M.default.Messages.REPLY_QUOTE_STICKER : E ? a = M.default.Messages.REPLY_QUOTE_COMMAND : I ? a = M.default.Messages.REPLY_QUOTE_VOICE_MESSAGE : (a = M.default.Messages.REPLY_QUOTE_NO_TEXT_CONTENT, l = (0, i.jsx)(m.default, {
                className: u,
                width: d,
                height: d
            }))
        } else o = (0, i.jsx)(L.default, {
            message: e,
            content: t,
            className: r
        });
        return c ? l = (0, i.jsx)(p.default, {
            className: u,
            width: d,
            height: d
        }) : E ? l = (0, i.jsx)(A.default, {
            className: u,
            width: d,
            height: d
        }) : I ? l = (0, i.jsx)(N.default, {
            className: u,
            width: 19 / 24 * d,
            height: d
        }) : (e.attachments.length > 0 || e.embeds.length > 0) && (l = (0, i.jsx)(m.default, {
            className: u,
            width: d,
            height: d
        })), {
            contentPlaceholder: a,
            renderedContent: o,
            icon: l
        }
    }

    function G(e) {
        let t;
        let {
            repliedAuthor: n,
            baseAuthor: s,
            baseMessage: o,
            referencedMessage: h,
            renderPopout: A
        } = e, m = r.useMemo(() => null != A && h.state === f.ReferencedMessageState.LOADED ? e => A(e, h.message) : void 0, [h, A]), N = function(e, t, n) {
            let {
                referencedMessage: r,
                compact: s,
                isReplyAuthorBlocked: o,
                repliedAuthor: l,
                showAvatarPopout: c,
                onClickAvatar: E,
                onContextMenu: I,
                onPopoutRequestClose: T
            } = e, {
                analyticsLocations: S
            } = (0, _.default)(d.default.AVATAR);
            if (s || r.state !== f.ReferencedMessageState.LOADED || o) return (0, i.jsx)("div", {
                className: y.replyBadge,
                children: (0, i.jsx)(P, {
                    className: y.replyIcon
                })
            });
            if (r.message.type === D.MessageTypes.USER_JOIN || r.message.type === D.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || r.message.type === D.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || r.message.type === D.MessageTypes.GUILD_GAMING_STATS_PROMPT) return (0, i.jsx)(U, {
                className: y.userJoinSystemMessageIcon
            });
            if (r.message.type === D.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.jsx)(O.default, {
                className: y.ticketIcon
            });
            let h = () => {
                var e, n, s, o, u;
                return e = r.message.author, n = l, s = t, o = E, u = I, (0, i.jsx)("img", {
                    alt: "",
                    src: (null == n ? void 0 : n.guildMemberAvatar) != null && null != s ? (0, R.getGuildMemberAvatarURLSimple)({
                        guildId: s,
                        userId: e.id,
                        avatar: n.guildMemberAvatar
                    }) : e.getAvatarURL(s, 16),
                    onClick: o,
                    onContextMenu: u,
                    className: a()({
                        [y.replyAvatar]: !0,
                        [y.clickable]: null != o
                    })
                })
            };
            return null != n && null != c ? (0, i.jsx)(_.AnalyticsLocationProvider, {
                value: S,
                children: (0, i.jsx)(u.Popout, {
                    renderPopout: n,
                    shouldShow: c,
                    position: "right",
                    onRequestClose: T,
                    children: h
                })
            }) : (0, i.jsx)(_.AnalyticsLocationProvider, {
                value: S,
                children: h()
            })
        }(e, r.useContext(c.default), m), p = function(e, t) {
            let {
                baseMessage: n,
                channel: r,
                referencedMessage: s,
                showUsernamePopout: a,
                onClickUsername: o,
                onContextMenu: l,
                onPopoutRequestClose: u
            } = e, d = (null == s ? void 0 : s.state) === f.ReferencedMessageState.LOADED ? s.message : void 0;
            return null == d || d.type === D.MessageTypes.USER_JOIN || d.type === D.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || d.type === D.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || d.type === D.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || d.type === D.MessageTypes.GUILD_GAMING_STATS_PROMPT ? null : (0, i.jsx)(I.default, {
                message: d,
                channel: r,
                compact: !0,
                withMentionPrefix: (0, S.default)(n, d),
                showPopout: a,
                renderPopout: t,
                onClick: o,
                onContextMenu: l,
                onPopoutRequestClose: u,
                isRepliedMessage: !0
            })
        }(e, m), L = function(e) {
            let {
                content: t,
                referencedMessage: n,
                isReplyAuthorBlocked: r
            } = e, s = n.state !== f.ReferencedMessageState.DELETED ? e.onClickReply : void 0;
            switch (n.state) {
                case f.ReferencedMessageState.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: o,
                        icon: l
                    } = b(n.message, t, r, y.repliedTextContent, {
                        iconClass: y.repliedTextContentIcon,
                        iconSize: v.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(u.Clickable, {
                            className: a()(y.repliedTextPreview, y.clickable),
                            onClick: s,
                            children: (0, i.jsx)(u.BlockInteractions, {
                                children: null != o ? o : (0, i.jsx)("span", {
                                    className: y.repliedTextPlaceholder,
                                    children: e
                                })
                            })
                        }), l]
                    })
                }
                case f.ReferencedMessageState.NOT_LOADED:
                    return (0, i.jsx)(u.Clickable, {
                        className: a()(y.repliedTextPreview, y.clickable),
                        onClick: s,
                        children: (0, i.jsx)("span", {
                            className: y.repliedTextPlaceholder,
                            children: M.default.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
                        })
                    });
                case f.ReferencedMessageState.DELETED:
                    return (0, i.jsx)("div", {
                        className: y.repliedTextPreview,
                        children: (0, i.jsx)("span", {
                            className: y.repliedTextPlaceholder,
                            children: M.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                        })
                    });
                default:
                    (0, g.assertNever)(n)
            }
        }(e), G = r.useMemo(() => e.compact ? (0, T.default)((0, C.dateFormat)(l()(), "LT")) : null, [e.compact]);
        return null != n && null != s && (t = M.default.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
            author: null == s ? void 0 : s.nick,
            repliedAuthor: null == n ? void 0 : n.nick
        })), (0, i.jsxs)("div", {
            id: (0, E.getMessageReplyId)(o),
            className: a()(y.repliedMessage, G),
            "aria-label": t,
            children: [N, p, L]
        })
    }
}
function(e, s, t) {
    "use strict";
    t.r(s), t.d(s, {
        renderSingleLineMessage: function() {
            return y
        },
        default: function() {
            return w
        }
    });
    var l = t("37983"),
        a = t("884691"),
        n = t("414456"),
        i = t.n(n),
        r = t("866227"),
        c = t.n(r),
        u = t("77078"),
        d = t("390236"),
        o = t("865343"),
        h = t("14526"),
        f = t("38600"),
        g = t("119001"),
        p = t("256572"),
        E = t("862846"),
        M = t("24373"),
        C = t("83910"),
        v = t("95689"),
        m = t("943409"),
        _ = t("437472"),
        T = t("8161"),
        x = t("315102"),
        N = t("888400"),
        S = t("449008"),
        R = t("497880"),
        I = t("719347"),
        A = t("49111"),
        L = t("782340"),
        P = t("356296");

    function j(e) {
        let {
            width: s = 12,
            height: t = 8,
            color: a = "currentColor",
            className: n,
            foreground: i
        } = e;
        return (0, l.jsx)("svg", {
            className: n,
            width: s,
            height: t,
            viewBox: "0 0 12 8",
            children: (0, l.jsx)("path", {
                d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
                className: i,
                fill: a
            })
        })
    }

    function O(e) {
        let {
            width: s = 18,
            height: t = 18,
            className: a,
            foreground: n
        } = e;
        return (0, l.jsx)("svg", {
            className: a,
            width: s,
            height: t,
            viewBox: "0 0 18 18",
            children: (0, l.jsx)("path", {
                fill: "#3ba55c",
                d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
                className: n
            })
        })
    }

    function y(e, s, t, a, n) {
        let i, r, c;
        let {
            iconClass: u,
            iconSize: d
        } = n, o = null == s || "" === s || Array.isArray(s) && 0 === s.length, h = (0, M.getMessageStickers)(e), f = h.length > 0, p = null != e.interaction, E = e.hasFlag(A.MessageFlags.IS_VOICE_MESSAGE), T = e.isPoll();
        if (t) i = L.default.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
        else if (e.type === A.MessageTypes.CHANNEL_PINNED_MESSAGE) i = L.default.Messages.MESSAGE_PINNED;
        else if (o) {
            if (T) {
                var x, N;
                r = null == e ? void 0 : null === (N = e.poll) || void 0 === N ? void 0 : null === (x = N.question) || void 0 === x ? void 0 : x.text
            } else f ? i = L.default.Messages.REPLY_QUOTE_STICKER : p ? i = L.default.Messages.REPLY_QUOTE_COMMAND : E ? i = L.default.Messages.REPLY_QUOTE_VOICE_MESSAGE : (i = L.default.Messages.REPLY_QUOTE_NO_TEXT_CONTENT, c = (0, l.jsx)(v.default, {
                className: u,
                width: d,
                height: d
            }))
        } else r = (0, l.jsx)(R.default, {
            message: e,
            content: s,
            className: a
        });
        return T ? c = (0, l.jsx)(g.default, {
            className: P.pollBadgeReplied
        }) : f ? c = (0, l.jsx)(_.default, {
            className: u,
            width: d,
            height: d
        }) : p ? c = (0, l.jsx)(C.default, {
            className: u,
            width: d,
            height: d
        }) : E ? c = (0, l.jsx)(m.default, {
            className: u,
            width: d * (19 / 24),
            height: d
        }) : (e.attachments.length > 0 || e.embeds.length > 0) && (c = (0, l.jsx)(v.default, {
            className: u,
            width: d,
            height: d
        })), {
            contentPlaceholder: i,
            renderedContent: r,
            icon: c
        }
    }

    function w(e) {
        let s;
        let {
            repliedAuthor: t,
            baseAuthor: n,
            baseMessage: r,
            referencedMessage: g,
            renderPopout: M
        } = e, C = a.useMemo(() => null != M && g.state === p.ReferencedMessageState.LOADED ? e => M(e, g.message) : void 0, [g, M]), v = a.useContext(d.default), m = function(e, s, t) {
            let {
                referencedMessage: a,
                compact: n,
                isReplyAuthorBlocked: r,
                repliedAuthor: c,
                showAvatarPopout: d,
                onClickAvatar: o,
                onContextMenu: h,
                onPopoutRequestClose: f
            } = e;
            if (n || a.state !== p.ReferencedMessageState.LOADED || r) return (0, l.jsx)("div", {
                className: P.replyBadge,
                children: (0, l.jsx)(j, {
                    className: P.replyIcon
                })
            });
            if (a.message.type === A.MessageTypes.USER_JOIN || a.message.type === A.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || a.message.type === A.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || a.message.type === A.MessageTypes.GUILD_GAMING_STATS_PROMPT) return (0, l.jsx)(O, {
                className: P.userJoinSystemMessageIcon
            });
            if (a.message.type === A.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, l.jsx)(T.default, {
                className: P.ticketIcon
            });
            let g = () => {
                var e, t, n, r, u;
                return e = a.message.author, t = c, n = s, r = o, u = h, (0, l.jsx)("img", {
                    alt: "",
                    src: (null == t ? void 0 : t.guildMemberAvatar) != null && null != n ? (0, x.getGuildMemberAvatarURLSimple)({
                        guildId: n,
                        userId: e.id,
                        avatar: t.guildMemberAvatar
                    }) : e.getAvatarURL(n, 16),
                    onClick: r,
                    onContextMenu: u,
                    className: i({
                        [P.replyAvatar]: !0,
                        [P.clickable]: null != r
                    })
                })
            };
            return null != t && null != d ? (0, l.jsx)(u.Popout, {
                renderPopout: t,
                shouldShow: d,
                position: "right",
                onRequestClose: f,
                children: g
            }) : g()
        }(e, v, C), _ = function(e, s) {
            let {
                baseMessage: t,
                channel: a,
                referencedMessage: n,
                showUsernamePopout: i,
                onClickUsername: r,
                onContextMenu: c,
                onPopoutRequestClose: u
            } = e, d = (null == n ? void 0 : n.state) === p.ReferencedMessageState.LOADED ? n.message : void 0;
            return null == d || d.type === A.MessageTypes.USER_JOIN || d.type === A.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || d.type === A.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || d.type === A.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || d.type === A.MessageTypes.GUILD_GAMING_STATS_PROMPT ? null : (0, l.jsx)(h.default, {
                message: d,
                channel: a,
                compact: !0,
                withMentionPrefix: (0, E.default)(t, d),
                showPopout: i,
                renderPopout: s,
                onClick: r,
                onContextMenu: c,
                onPopoutRequestClose: u,
                isRepliedMessage: !0
            })
        }(e, C), R = function(e) {
            let {
                content: s,
                referencedMessage: t,
                isReplyAuthorBlocked: a
            } = e, n = t.state !== p.ReferencedMessageState.DELETED ? e.onClickReply : void 0;
            switch (t.state) {
                case p.ReferencedMessageState.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: r,
                        icon: c
                    } = y(t.message, s, a, P.repliedTextContent, {
                        iconClass: P.repliedTextContentIcon,
                        iconSize: I.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.Clickable, {
                            className: i(P.repliedTextPreview, P.clickable),
                            onClick: n,
                            children: (0, l.jsx)(u.BlockInteractions, {
                                children: null != r ? r : (0, l.jsx)("span", {
                                    className: P.repliedTextPlaceholder,
                                    children: e
                                })
                            })
                        }), c]
                    })
                }
                case p.ReferencedMessageState.NOT_LOADED:
                    return (0, l.jsx)(u.Clickable, {
                        className: i(P.repliedTextPreview, P.clickable),
                        onClick: n,
                        children: (0, l.jsx)("span", {
                            className: P.repliedTextPlaceholder,
                            children: L.default.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
                        })
                    });
                case p.ReferencedMessageState.DELETED:
                    return (0, l.jsx)("div", {
                        className: P.repliedTextPreview,
                        children: (0, l.jsx)("span", {
                            className: P.repliedTextPlaceholder,
                            children: L.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                        })
                    });
                default:
                    (0, S.assertNever)(t)
            }
        }(e), w = a.useMemo(() => e.compact ? (0, f.default)((0, N.dateFormat)(c(), "LT")) : null, [e.compact]);
        return null != t && null != n && (s = L.default.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
            author: null == n ? void 0 : n.nick,
            repliedAuthor: null == t ? void 0 : t.nick
        })), (0, l.jsxs)("div", {
            id: (0, o.getMessageReplyId)(r),
            className: i(P.repliedMessage, w),
            "aria-label": s,
            children: [m, _, R]
        })
    }
}
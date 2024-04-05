function(e, s, t) {
    "use strict";
    t.r(s), t.d(s, {
        default: function() {
            return U
        },
        renderSingleLineMessage: function() {
            return D
        }
    });
    var l = t("735250"),
        a = t("470079"),
        n = t("803997"),
        i = t.n(n),
        r = t("913527"),
        c = t.n(r),
        u = t("481060"),
        d = t("100527"),
        o = t("906732"),
        h = t("372900"),
        f = t("453687"),
        g = t("123145"),
        p = t("223021"),
        E = t("768232"),
        M = t("869765"),
        C = t("403132"),
        v = t("378233"),
        m = t("377617"),
        _ = t("84017"),
        T = t("748500"),
        x = t("836879"),
        N = t("191741"),
        S = t("768581"),
        R = t("55935"),
        A = t("823379"),
        I = t("113039"),
        L = t("768760"),
        P = t("981631"),
        j = t("689938"),
        O = t("50182");

    function y(e) {
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

    function w(e) {
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

    function D(e, s, t, a, n) {
        let i, r, c;
        let {
            iconClass: u,
            iconSize: d
        } = n, o = null == s || "" === s || Array.isArray(s) && 0 === s.length, h = (0, v.getMessageStickers)(e).length > 0, f = null != e.interaction, g = e.hasFlag(P.MessageFlags.IS_VOICE_MESSAGE), p = e.isPoll();
        if (t) i = j.default.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
        else if (e.type === P.MessageTypes.CHANNEL_PINNED_MESSAGE) i = j.default.Messages.MESSAGE_PINNED;
        else if (o) {
            if (p) {
                var M, C;
                r = null == e ? void 0 : null === (C = e.poll) || void 0 === C ? void 0 : null === (M = C.question) || void 0 === M ? void 0 : M.text
            } else h ? i = j.default.Messages.REPLY_QUOTE_STICKER : f ? i = j.default.Messages.REPLY_QUOTE_COMMAND : g ? i = j.default.Messages.REPLY_QUOTE_VOICE_MESSAGE : (i = j.default.Messages.REPLY_QUOTE_NO_TEXT_CONTENT, c = (0, l.jsx)(_.default, {
                className: u,
                width: d,
                height: d
            }))
        } else r = (0, l.jsx)(I.default, {
            message: e,
            content: s,
            className: a
        });
        return p ? c = (0, l.jsx)(E.default, {
            className: O.pollBadgeReplied
        }) : h ? c = (0, l.jsx)(x.default, {
            className: u,
            width: d,
            height: d
        }) : f ? c = (0, l.jsx)(m.default, {
            className: u,
            width: d,
            height: d
        }) : g ? c = (0, l.jsx)(T.default, {
            className: u,
            width: 19 / 24 * d,
            height: d
        }) : (e.attachments.length > 0 || e.embeds.length > 0) && (c = (0, l.jsx)(_.default, {
            className: u,
            width: d,
            height: d
        })), {
            contentPlaceholder: i,
            renderedContent: r,
            icon: c
        }
    }

    function U(e) {
        let s;
        let {
            repliedAuthor: t,
            baseAuthor: n,
            baseMessage: r,
            referencedMessage: E,
            renderPopout: v
        } = e, m = a.useMemo(() => null != v && E.state === M.ReferencedMessageState.LOADED ? e => v(e, E.message) : void 0, [E, v]), _ = function(e, s, t) {
            let {
                referencedMessage: a,
                compact: n,
                isReplyAuthorBlocked: r,
                repliedAuthor: c,
                showAvatarPopout: h,
                onClickAvatar: f,
                onContextMenu: g,
                onPopoutRequestClose: p
            } = e, {
                analyticsLocations: E
            } = (0, o.default)(d.default.AVATAR);
            if (n || a.state !== M.ReferencedMessageState.LOADED || r) return (0, l.jsx)("div", {
                className: O.replyBadge,
                children: (0, l.jsx)(y, {
                    className: O.replyIcon
                })
            });
            if (a.message.type === P.MessageTypes.USER_JOIN || a.message.type === P.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || a.message.type === P.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || a.message.type === P.MessageTypes.GUILD_GAMING_STATS_PROMPT) return (0, l.jsx)(w, {
                className: O.userJoinSystemMessageIcon
            });
            if (a.message.type === P.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, l.jsx)(N.default, {
                className: O.ticketIcon
            });
            let C = () => {
                var e, t, n, r, u;
                return e = a.message.author, t = c, n = s, r = f, u = g, (0, l.jsx)("img", {
                    alt: "",
                    src: (null == t ? void 0 : t.guildMemberAvatar) != null && null != n ? (0, S.getGuildMemberAvatarURLSimple)({
                        guildId: n,
                        userId: e.id,
                        avatar: t.guildMemberAvatar
                    }) : e.getAvatarURL(n, 16),
                    onClick: r,
                    onContextMenu: u,
                    className: i()({
                        [O.replyAvatar]: !0,
                        [O.clickable]: null != r
                    })
                })
            };
            return null != t && null != h ? (0, l.jsx)(o.AnalyticsLocationProvider, {
                value: E,
                children: (0, l.jsx)(u.Popout, {
                    renderPopout: t,
                    shouldShow: h,
                    position: "right",
                    onRequestClose: p,
                    children: C
                })
            }) : (0, l.jsx)(o.AnalyticsLocationProvider, {
                value: E,
                children: C()
            })
        }(e, a.useContext(h.default), m), T = function(e, s) {
            let {
                baseMessage: t,
                channel: a,
                referencedMessage: n,
                showUsernamePopout: i,
                onClickUsername: r,
                onContextMenu: c,
                onPopoutRequestClose: u
            } = e, d = (null == n ? void 0 : n.state) === M.ReferencedMessageState.LOADED ? n.message : void 0;
            return null == d || d.type === P.MessageTypes.USER_JOIN || d.type === P.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || d.type === P.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || d.type === P.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || d.type === P.MessageTypes.GUILD_GAMING_STATS_PROMPT ? null : (0, l.jsx)(g.default, {
                message: d,
                channel: a,
                compact: !0,
                withMentionPrefix: (0, C.default)(t, d),
                showPopout: i,
                renderPopout: s,
                onClick: r,
                onContextMenu: c,
                onPopoutRequestClose: u,
                isRepliedMessage: !0
            })
        }(e, m), x = function(e) {
            let {
                content: s,
                referencedMessage: t,
                isReplyAuthorBlocked: a
            } = e, n = t.state !== M.ReferencedMessageState.DELETED ? e.onClickReply : void 0;
            switch (t.state) {
                case M.ReferencedMessageState.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: r,
                        icon: c
                    } = D(t.message, s, a, O.repliedTextContent, {
                        iconClass: O.repliedTextContentIcon,
                        iconSize: L.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.Clickable, {
                            className: i()(O.repliedTextPreview, O.clickable),
                            onClick: n,
                            children: (0, l.jsx)(u.BlockInteractions, {
                                children: null != r ? r : (0, l.jsx)("span", {
                                    className: O.repliedTextPlaceholder,
                                    children: e
                                })
                            })
                        }), c]
                    })
                }
                case M.ReferencedMessageState.NOT_LOADED:
                    return (0, l.jsx)(u.Clickable, {
                        className: i()(O.repliedTextPreview, O.clickable),
                        onClick: n,
                        children: (0, l.jsx)("span", {
                            className: O.repliedTextPlaceholder,
                            children: j.default.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
                        })
                    });
                case M.ReferencedMessageState.DELETED:
                    return (0, l.jsx)("div", {
                        className: O.repliedTextPreview,
                        children: (0, l.jsx)("span", {
                            className: O.repliedTextPlaceholder,
                            children: j.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                        })
                    });
                default:
                    (0, A.assertNever)(t)
            }
        }(e), I = a.useMemo(() => e.compact ? (0, p.default)((0, R.dateFormat)(c()(), "LT")) : null, [e.compact]);
        return null != t && null != n && (s = j.default.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
            author: null == n ? void 0 : n.nick,
            repliedAuthor: null == t ? void 0 : t.nick
        })), (0, l.jsxs)("div", {
            id: (0, f.getMessageReplyId)(r),
            className: i()(O.repliedMessage, I),
            "aria-label": s,
            children: [_, T, x]
        })
    }
}
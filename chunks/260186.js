function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return k
        },
        renderSingleLineMessage: function() {
            return L
        }
    });
    var n = r("470079"),
        o = r("803997"),
        a = r.n(o),
        l = r("913527"),
        c = r.n(l),
        s = r("784184"),
        i = r("649455"),
        u = r("396586"),
        f = r("103526"),
        d = r("555572"),
        p = r("210239"),
        g = r("261133"),
        O = r("670207"),
        y = r("299794"),
        m = r("264992"),
        b = r("443699"),
        h = r("763105"),
        v = r("923976"),
        E = r("939234"),
        P = r("976982"),
        w = r("825986"),
        C = r("299529"),
        M = r("170030"),
        j = r("162677"),
        S = r("905113"),
        _ = r("766063"),
        T = r("281767"),
        N = r("941504"),
        A = r("50182");

    function R(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function I(e) {
        var t = e.width,
            r = e.height,
            o = e.color,
            a = e.className,
            l = e.foreground;
        return n.createElement("svg", {
            className: a,
            width: void 0 === t ? 12 : t,
            height: void 0 === r ? 8 : r,
            viewBox: "0 0 12 8"
        }, n.createElement("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: l,
            fill: void 0 === o ? "currentColor" : o
        }))
    }

    function D(e) {
        var t = e.width,
            r = e.height,
            o = e.className,
            a = e.foreground;
        return n.createElement("svg", {
            className: o,
            width: void 0 === t ? 18 : t,
            height: void 0 === r ? 18 : r,
            viewBox: "0 0 18 18"
        }, n.createElement("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: a
        }))
    }

    function L(e, t, r, o, a) {
        var l, c, s, i, u, f = a.iconClass,
            d = a.iconSize,
            p = null == t || "" === t || Array.isArray(t) && 0 === t.length,
            g = (0, b.getMessageStickers)(e).length > 0,
            y = null != e.interaction,
            m = e.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE),
            w = e.isPoll();
        return r ? l = N.default.Messages.REPLY_QUOTE_MESSAGE_BLOCKED : e.type === T.MessageTypes.CHANNEL_PINNED_MESSAGE ? l = N.default.Messages.MESSAGE_PINNED : p ? w ? c = null == e ? void 0 : null === (u = e.poll) || void 0 === u ? void 0 : null === (i = u.question) || void 0 === i ? void 0 : i.text : g ? l = N.default.Messages.REPLY_QUOTE_STICKER : y ? l = N.default.Messages.REPLY_QUOTE_COMMAND : m ? l = N.default.Messages.REPLY_QUOTE_VOICE_MESSAGE : (l = N.default.Messages.REPLY_QUOTE_NO_TEXT_CONTENT, s = n.createElement(v.default, {
            className: f,
            width: d,
            height: d
        })) : c = n.createElement(S.default, {
            message: e,
            content: t,
            className: o
        }), w ? s = n.createElement(O.default, {
            className: A.pollBadgeReplied
        }) : g ? s = n.createElement(P.default, {
            className: f,
            width: d,
            height: d
        }) : y ? s = n.createElement(h.default, {
            className: f,
            width: d,
            height: d
        }) : m ? s = n.createElement(E.default, {
            className: f,
            width: 19 / 24 * d,
            height: d
        }) : (e.attachments.length > 0 || e.embeds.length > 0) && (s = n.createElement(v.default, {
            className: f,
            width: d,
            height: d
        })), {
            contentPlaceholder: l,
            renderedContent: c,
            icon: s
        }
    }

    function k(e) {
        var t, r, o, l, O, b, h, v, E, P, S, k = e.repliedAuthor,
            x = e.baseAuthor,
            U = e.baseMessage,
            G = e.referencedMessage,
            V = e.renderPopout,
            H = n.useMemo(function() {
                return null != V && G.state === y.ReferencedMessageState.LOADED ? function(e) {
                    return V(e, G.message)
                } : void 0
            }, [G, V]),
            B = function(e, t, r) {
                var o = e.referencedMessage,
                    l = e.compact,
                    c = e.isReplyAuthorBlocked,
                    f = e.repliedAuthor,
                    d = e.showAvatarPopout,
                    p = e.onClickAvatar,
                    g = e.onContextMenu,
                    O = e.onPopoutRequestClose,
                    m = (0, u.default)(i.default.AVATAR).analyticsLocations;
                if (l || o.state !== y.ReferencedMessageState.LOADED || c) return n.createElement("div", {
                    className: A.replyBadge
                }, n.createElement(I, {
                    className: A.replyIcon
                }));
                if (o.message.type === T.MessageTypes.USER_JOIN || o.message.type === T.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || o.message.type === T.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || o.message.type === T.MessageTypes.GUILD_GAMING_STATS_PROMPT) return n.createElement(D, {
                    className: A.userJoinSystemMessageIcon
                });
                if (o.message.type === T.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return n.createElement(w.default, {
                    className: A.ticketIcon
                });
                var b = function() {
                    var e, r, l, c, s, i;
                    return e = o.message.author, r = f, l = t, c = p, s = g, n.createElement("img", {
                        alt: "",
                        src: (null == r ? void 0 : r.guildMemberAvatar) != null && null != l ? (0, C.getGuildMemberAvatarURLSimple)({
                            guildId: l,
                            userId: e.id,
                            avatar: r.guildMemberAvatar
                        }) : e.getAvatarURL(l, 16),
                        onClick: c,
                        onContextMenu: s,
                        className: a()((R(i = {}, A.replyAvatar, !0), R(i, A.clickable, null != c), i))
                    })
                };
                return null != r && null != d ? n.createElement(u.AnalyticsLocationProvider, {
                    value: m
                }, n.createElement(s.Popout, {
                    renderPopout: r,
                    shouldShow: d,
                    position: "right",
                    onRequestClose: O
                }, b)) : n.createElement(u.AnalyticsLocationProvider, {
                    value: m
                }, b())
            }(e, n.useContext(f.default), H);
        var Z = (t = e, r = H, o = t.baseMessage, l = t.channel, O = t.referencedMessage, b = t.showUsernamePopout, h = t.onClickUsername, v = t.onContextMenu, E = t.onPopoutRequestClose, null == (P = (null == O ? void 0 : O.state) === y.ReferencedMessageState.LOADED ? O.message : void 0) || P.type === T.MessageTypes.USER_JOIN || P.type === T.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || P.type === T.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || P.type === T.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || P.type === T.MessageTypes.GUILD_GAMING_STATS_PROMPT ? null : n.createElement(p.default, {
                message: P,
                channel: l,
                compact: !0,
                withMentionPrefix: (0, m.default)(o, P),
                showPopout: b,
                renderPopout: r,
                onClick: h,
                onContextMenu: v,
                onPopoutRequestClose: E,
                isRepliedMessage: !0
            })),
            Y = function(e) {
                var t = e.content,
                    r = e.referencedMessage,
                    o = e.isReplyAuthorBlocked,
                    l = r.state !== y.ReferencedMessageState.DELETED ? e.onClickReply : void 0;
                switch (r.state) {
                    case y.ReferencedMessageState.LOADED:
                        var c = L(r.message, t, o, A.repliedTextContent, {
                                iconClass: A.repliedTextContentIcon,
                                iconSize: _.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            }),
                            i = c.contentPlaceholder,
                            u = c.renderedContent,
                            f = c.icon;
                        return n.createElement(n.Fragment, null, n.createElement(s.Clickable, {
                            className: a()(A.repliedTextPreview, A.clickable),
                            onClick: l
                        }, n.createElement(s.BlockInteractions, null, null != u ? u : n.createElement("span", {
                            className: A.repliedTextPlaceholder
                        }, i))), f);
                    case y.ReferencedMessageState.NOT_LOADED:
                        return n.createElement(s.Clickable, {
                            className: a()(A.repliedTextPreview, A.clickable),
                            onClick: l
                        }, n.createElement("span", {
                            className: A.repliedTextPlaceholder
                        }, N.default.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED));
                    case y.ReferencedMessageState.DELETED:
                        return n.createElement("div", {
                            className: A.repliedTextPreview
                        }, n.createElement("span", {
                            className: A.repliedTextPlaceholder
                        }, N.default.Messages.REPLY_QUOTE_MESSAGE_DELETED));
                    default:
                        (0, j.assertNever)(r)
                }
            }(e),
            Q = n.useMemo(function() {
                return e.compact ? (0, g.default)((0, M.dateFormat)(c()(), "LT")) : null
            }, [e.compact]);
        return null != k && null != x && (S = N.default.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
            author: null == x ? void 0 : x.nick,
            repliedAuthor: null == k ? void 0 : k.nick
        })), n.createElement("div", {
            id: (0, d.getMessageReplyId)(U),
            className: a()(A.repliedMessage, Q),
            "aria-label": S
        }, B, Z, Y)
    }
}
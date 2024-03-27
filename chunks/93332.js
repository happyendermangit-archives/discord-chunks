function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        useUsername: function() {
            return H
        },
        useAvatar: function() {
            return Z
        },
        BaseMessageHeader: function() {
            return z
        },
        default: function() {
            return Y
        }
    }), i("222007"), i("424973"), i("702976");
    var l = i("37983"),
        r = i("884691"),
        a = i("414456"),
        n = i.n(a),
        s = i("394846"),
        o = i("446674"),
        d = i("77078"),
        c = i("812204"),
        h = i("685665"),
        u = i("793621"),
        f = i("406043"),
        x = i("28913"),
        m = i("321905"),
        g = i("865343"),
        j = i("253299"),
        w = i("119001"),
        p = i("626301"),
        v = i("256572"),
        C = i("436595"),
        N = i("713135"),
        y = i("506885"),
        T = i("106435"),
        I = i("168973"),
        E = i("305961"),
        _ = i("957255"),
        O = i("697218"),
        M = i("491401"),
        S = i("483093"),
        A = i("315102"),
        R = i("659500"),
        P = i("568734"),
        b = i("719923"),
        L = i("587904"),
        B = i("473374"),
        D = i("195483"),
        U = i("49111"),
        k = i("782340"),
        G = i("356296"),
        F = i("809764");

    function V(t) {
        let {
            avatarSrc: e,
            avatarDecorationSrc: i,
            compact: r,
            onClick: a,
            onContextMenu: s,
            onMouseDown: o,
            onMouseEnter: d,
            onMouseLeave: c,
            onKeyDown: h,
            showCommunicationDisabledStyles: u = !1,
            className: f
        } = t;
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("img", {
                onClick: a,
                onContextMenu: s,
                onMouseDown: o,
                onKeyDown: h,
                onMouseEnter: d,
                onMouseLeave: c,
                src: e,
                "aria-hidden": !0,
                className: n(f, G.avatar, {
                    [G.compact]: r,
                    [G.clickable]: null != a,
                    [G.communicationDisabledOpacity]: u
                }),
                alt: " "
            }), null == i || r ? null : (0, l.jsx)("img", {
                className: G.avatarDecoration,
                src: i,
                alt: " ",
                "aria-hidden": !0
            })]
        })
    }

    function H(t, e, i) {
        let {
            message: r,
            channel: a,
            author: n,
            compact: s = !1,
            onContextMenu: o,
            showUsernamePopout: d,
            roleIcon: c,
            onClickUsername: h,
            onPopoutRequestClose: u
        } = t;
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(D.default, {
                message: r,
                channel: a,
                author: n,
                compact: s,
                roleIcon: c,
                showPopout: d,
                renderPopout: e,
                onClick: h,
                onContextMenu: o,
                onPopoutRequestClose: u,
                decorations: i,
                renderRemixTag: !0
            }), s && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("i", {
                    className: G.separator,
                    children: ":"
                }), " "]
            })]
        })
    }

    function Z(t) {
        var e, i;
        let {
            props: a,
            guildId: n,
            handleRenderPopout: u,
            showCommunicationDisabledStyles: f = !1,
            className: x
        } = t, {
            message: m,
            author: g,
            compact: j = !1,
            subscribeToGroupId: w,
            animate: p = !0,
            onContextMenu: v,
            onClickAvatar: C,
            onPopoutRequestClose: N,
            showAvatarPopout: E
        } = a, [_, O] = r.useState(!1), {
            analyticsLocations: M
        } = (0, h.default)(c.default.AVATAR), S = (0, o.useStateFromStores)([I.default], () => {
            var t;
            return null !== (t = a.displayCompactAvatars) && void 0 !== t ? t : I.default.displayCompactAvatars
        }), P = null != m.messageReference && null != m.webhookId, b = m.author, {
            id: L
        } = b, B = j ? 32 : 80, {
            avatarSrc: D,
            avatarDecorationSrc: k,
            eventHandlers: G
        } = (0, T.default)({
            user: b,
            guildId: n,
            size: B,
            animateOnHover: null != w ? !_ : !p,
            showPending: !0
        }), F = m.isInteractionPlaceholder(), H = r.useMemo(() => {
            var t, e;
            return F && null == b.avatar && (null === (t = m.application) || void 0 === t ? void 0 : t.icon) != null ? null !== (e = A.default.getApplicationIconURL({
                id: m.application.id,
                icon: m.application.icon,
                size: B,
                fallbackAvatar: !1
            })) && void 0 !== e ? e : D : D
        }, [F, null === (e = m.application) || void 0 === e ? void 0 : e.icon, null === (i = m.application) || void 0 === i ? void 0 : i.id, b.avatar, B, D]);
        if (r.useEffect(() => {
                if (null != w) return R.ComponentDispatch.subscribeKeyed(U.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(w, ":").concat(L), O), () => void R.ComponentDispatch.unsubscribeKeyed(U.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(w, ":").concat(L), O)
            }, [L, w]), !j || S) return null != u && null != E ? (0, l.jsx)(h.AnalyticsLocationProvider, {
            value: M,
            children: (0, l.jsx)(d.Popout, {
                preload: P ? void 0 : function() {
                    return (0, y.default)(m.author.id, null != g.guildMemberAvatar && null != n ? A.default.getGuildMemberAvatarURLSimple({
                        guildId: n,
                        userId: m.author.id,
                        avatar: g.guildMemberAvatar,
                        size: 80
                    }) : m.author.getAvatarURL(void 0, 80, !1), {
                        guildId: n,
                        channelId: m.channel_id
                    })
                },
                renderPopout: u,
                shouldShow: E,
                position: s.isMobile ? "window_center" : "right",
                onRequestClose: N,
                children: t => V({
                    ...G,
                    avatarSrc: H,
                    avatarDecorationSrc: k,
                    compact: j,
                    onClick: C,
                    onContextMenu: v,
                    onMouseDown: t.onMouseDown,
                    onKeyDown: t.onKeyDown,
                    showCommunicationDisabledStyles: f,
                    className: x
                })
            })
        }) : (0, l.jsx)(h.AnalyticsLocationProvider, {
            value: M,
            children: V({
                ...G,
                avatarSrc: H,
                avatarDecorationSrc: k,
                compact: j,
                onClick: C,
                onContextMenu: v,
                onMouseDown: void 0,
                onKeyDown: void 0,
                showCommunicationDisabledStyles: f,
                className: x
            })
        })
    }

    function z(t) {
        let {
            message: e,
            avatar: i,
            username: r,
            usernameSpanId: a,
            usernameClassName: s,
            compact: o,
            showTimestamp: c,
            showTimestampOnHover: h,
            ariaLabelledBy: u,
            ariaDescribedBy: f,
            className: x,
            messageClassname: m,
            badges: j
        } = t;
        return (0, l.jsxs)(l.Fragment, {
            children: [!o && i, (0, l.jsxs)(d.H, {
                className: n(G.header, x),
                "aria-describedby": f,
                "aria-labelledby": u,
                children: [c && o && (0, l.jsx)(L.default, {
                    id: (0, g.getMessageTimestampId)(e),
                    compact: !0,
                    timestamp: e.timestamp,
                    isVisibleOnlyOnHover: h,
                    className: m,
                    isInline: !1
                }), o && i, (0, l.jsx)("span", {
                    id: a,
                    className: s,
                    children: r
                }), c && !o && (0, l.jsx)(L.default, {
                    id: (0, g.getMessageTimestampId)(e),
                    timestamp: e.timestamp,
                    className: m
                }), null != j && j.length > 0 ? (0, l.jsx)("div", {
                    className: G.badgesContainer,
                    children: j
                }) : null]
            })]
        })
    }
    let W = t => {
        !t && (0, p.navigateToPremiumMarketingPage)()
    };

    function K(t) {
        let {
            currentUserIsPremium: e,
            author: i
        } = t, r = (0, o.useStateFromStores)([N.default], () => {
            var t;
            return null === (t = N.default.getUserProfile(i.id)) || void 0 === t ? void 0 : t.premiumSince
        });
        return (0, l.jsx)(d.Tooltip, {
            tooltipClassName: G.nitroAuthorBadgeTootip,
            shouldShow: null != r,
            text: k.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: r
            }),
            onTooltipShow: () => (0, y.default)(i.id),
            children: t => (0, l.jsx)(d.Clickable, {
                className: G.nitroAuthorBadgeContainer,
                onClick: () => W(e),
                "aria-label": k.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                    date: r
                }),
                children: (0, l.jsx)("img", {
                    alt: "",
                    className: G.nitroBadgeSvg,
                    src: F,
                    ...t
                })
            })
        })
    }

    function Y(t) {
        let {
            message: e,
            repliedMessage: i,
            compact: a = !1,
            renderPopout: s,
            showTimestampOnHover: c,
            roleIcon: h,
            subscribeToGroupId: p,
            hideTimestamp: N,
            className: y,
            channel: T
        } = t, A = r.useMemo(() => null != s ? t => s(t, e) : void 0, [s, e]), [, R] = (0, f.default)(e.author.id, t.guildId), L = (0, o.useStateFromStores)([E.default], () => E.default.getGuild(t.guildId), [t.guildId]), F = null != e.author && null != L && _.default.canManageUser(U.Permissions.MODERATE_MEMBERS, e.author, L), V = R && F, W = Z({
            props: t,
            guildId: t.guildId,
            handleRenderPopout: A,
            showCommunicationDisabledStyles: V
        }), Y = (0, o.useStateFromStores)([I.default], () => {
            var e;
            return null !== (e = t.displayCompactAvatars) && void 0 !== e ? e : I.default.displayCompactAvatars
        }), X = (!a || Y) && null != h && null != L ? (0, l.jsx)(d.Popout, {
            animation: d.Popout.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: () => (0, l.jsx)(j.default, {
                roleIcon: h,
                guild: L
            }),
            children: t => {
                let {
                    onClick: e
                } = t;
                return (0, l.jsx)(S.default, {
                    ...h,
                    className: G.roleIcon,
                    onClick: e
                })
            }
        }, "role-icon-children") : (!a || Y) && null != h ? (0, l.jsx)(S.default, {
            ...h,
            className: G.roleIcon
        }, "role-icon-children") : null, q = (0, B.renderSystemTag)({
            message: e,
            channel: T,
            user: null == e ? void 0 : e.author,
            compact: a,
            isRepliedMessage: !1
        }), J = [], Q = O.default.getCurrentUser(), $ = b.default.isPremium(e.author), tt = b.default.isPremium(Q), te = null == T ? void 0 : T.isPrivate();
        (0, m.shouldShowNitroBadge)(null != h, "Message Username") && $ && !a && !te && J.push((0, l.jsx)(K, {
            currentUserIsPremium: tt,
            author: e.author
        }, "nitro-author")), null != X && J.push(X), null != L && J.push((0, l.jsx)(x.default, {
            guild: L,
            message: e
        }, "new-member")), null != T && null != L && J.push((0, l.jsx)(u.default, {
            guild: L,
            channel: T,
            userId: e.author.id,
            messageId: e.id
        }, "connections"));
        let ti = [];
        (0, P.hasFlag)(e.flags, U.MessageFlags.SUPPRESS_NOTIFICATIONS) && ti.push((0, l.jsx)(C.default, {}, "suppress-notifications")), e.isPoll() && ti.push((0, l.jsx)(w.default, {
            className: G.pollBadgeDefault
        }, "poll"));
        let tl = {};
        tl[D.UsernameDecorationTypes.SYSTEM_TAG] = q, tl[D.UsernameDecorationTypes.BADGES] = J;
        let tr = H(t, A, tl),
            ta = (0, g.getMessageUsernameId)(e, p),
            tn = (0, g.getMessageTimestampId)(e),
            ts = N ? "".concat(ta) : "".concat(ta, " ").concat(tn),
            to = (null == i ? void 0 : i.state) === v.ReferencedMessageState.LOADED ? (0, g.getMessageReplyId)(e) : void 0;
        return (0, l.jsx)(z, {
            message: e,
            avatar: W,
            username: (0, l.jsxs)(l.Fragment, {
                children: [V && (0, l.jsx)(d.Tooltip, {
                    text: k.default.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                    children: t => (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(M.default, {
                            ...t,
                            width: 12,
                            height: 12,
                            className: a ? G.compactCommunicationDisabled : G.communicationDisabled
                        }), (0, l.jsx)(d.HiddenVisually, {
                            children: k.default.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
                        })]
                    })
                }), tr]
            }),
            usernameSpanId: (0, g.getMessageUsernameId)(e, p),
            usernameClassName: n(G.headerText, {
                [G.hasRoleIcon]: null != X,
                [G.hasBadges]: null != q || ti.length > 0
            }),
            compact: a,
            showTimestamp: !0 !== N,
            showTimestampOnHover: c,
            ariaLabelledBy: ts,
            ariaDescribedBy: to,
            className: y,
            badges: ti
        })
    }
}
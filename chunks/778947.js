function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        BaseMessageHeader: function() {
            return W
        },
        default: function() {
            return Y
        },
        useAvatar: function() {
            return z
        },
        useUsername: function() {
            return H
        }
    }), i("47120"), i("653041"), i("789020");
    var l = i("735250"),
        r = i("470079"),
        a = i("120356"),
        n = i.n(a),
        s = i("873546"),
        o = i("442837"),
        d = i("481060"),
        c = i("100527"),
        h = i("906732"),
        u = i("366030"),
        f = i("71619"),
        x = i("340797"),
        m = i("276554"),
        g = i("453687"),
        j = i("304176"),
        p = i("768232"),
        w = i("98278"),
        v = i("869765"),
        C = i("243317"),
        N = i("621853"),
        y = i("484459"),
        T = i("204197"),
        _ = i("740492"),
        I = i("430824"),
        E = i("496675"),
        O = i("594174"),
        M = i("789695"),
        S = i("176278"),
        A = i("768581"),
        R = i("585483"),
        P = i("630388"),
        b = i("74538"),
        L = i("534761"),
        B = i("307187"),
        D = i("750858"),
        U = i("981631"),
        k = i("689938"),
        G = i("50182"),
        F = i("255963");

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
                className: n()(f, G.avatar, {
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

    function z(t) {
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
            subscribeToGroupId: p,
            animate: w = !0,
            onContextMenu: v,
            onClickAvatar: C,
            onPopoutRequestClose: N,
            showAvatarPopout: I
        } = a, [E, O] = r.useState(!1), {
            analyticsLocations: M
        } = (0, h.default)(c.default.AVATAR), S = (0, o.useStateFromStores)([_.default], () => {
            var t;
            return null !== (t = a.displayCompactAvatars) && void 0 !== t ? t : _.default.displayCompactAvatars
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
            animateOnHover: null != p ? !E : !w,
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
                if (null != p) return R.ComponentDispatch.subscribeKeyed(U.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(p, ":").concat(L), O), () => void R.ComponentDispatch.unsubscribeKeyed(U.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(p, ":").concat(L), O)
            }, [L, p]), !j || S) return null != u && null != I ? (0, l.jsx)(h.AnalyticsLocationProvider, {
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
                shouldShow: I,
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

    function W(t) {
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
                className: n()(G.header, x),
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
    let Z = t => {
        !t && (0, w.navigateToPremiumMarketingPage)()
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
                onClick: () => Z(e),
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
            subscribeToGroupId: w,
            hideTimestamp: N,
            className: y,
            channel: T
        } = t, A = r.useMemo(() => null != s ? t => s(t, e) : void 0, [s, e]), [, R] = (0, f.default)(e.author.id, t.guildId), L = (0, o.useStateFromStores)([I.default], () => I.default.getGuild(t.guildId), [t.guildId]), F = null != e.author && null != L && E.default.canManageUser(U.Permissions.MODERATE_MEMBERS, e.author, L), V = R && F, Z = z({
            props: t,
            guildId: t.guildId,
            handleRenderPopout: A,
            showCommunicationDisabledStyles: V
        }), Y = (0, o.useStateFromStores)([_.default], () => {
            var e;
            return null !== (e = t.displayCompactAvatars) && void 0 !== e ? e : _.default.displayCompactAvatars
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
        (0, P.hasFlag)(e.flags, U.MessageFlags.SUPPRESS_NOTIFICATIONS) && ti.push((0, l.jsx)(C.default, {}, "suppress-notifications")), e.isPoll() && ti.push((0, l.jsx)(p.default, {
            className: G.pollBadgeDefault
        }, "poll"));
        let tl = {};
        tl[D.UsernameDecorationTypes.SYSTEM_TAG] = q, tl[D.UsernameDecorationTypes.BADGES] = J;
        let tr = H(t, A, tl),
            ta = (0, g.getMessageUsernameId)(e, w),
            tn = (0, g.getMessageTimestampId)(e),
            ts = N ? "".concat(ta) : "".concat(ta, " ").concat(tn),
            to = (null == i ? void 0 : i.state) === v.ReferencedMessageState.LOADED ? (0, g.getMessageReplyId)(e) : void 0;
        return (0, l.jsx)(W, {
            message: e,
            avatar: Z,
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
            usernameSpanId: (0, g.getMessageUsernameId)(e, w),
            usernameClassName: n()(G.headerText, {
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
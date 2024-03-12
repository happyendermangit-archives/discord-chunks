function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        useUsername: function() {
            return F
        },
        useAvatar: function() {
            return V
        },
        BaseMessageHeader: function() {
            return H
        },
        default: function() {
            return W
        }
    }), i("222007"), i("424973"), i("702976");
    var l = i("37983"),
        r = i("884691"),
        a = i("414456"),
        n = i.n(a),
        s = i("394846"),
        o = i("446674"),
        d = i("77078"),
        c = i("793621"),
        h = i("406043"),
        u = i("28913"),
        f = i("321905"),
        x = i("865343"),
        m = i("253299"),
        g = i("119001"),
        j = i("626301"),
        w = i("256572"),
        p = i("436595"),
        v = i("713135"),
        C = i("506885"),
        N = i("106435"),
        y = i("168973"),
        T = i("305961"),
        I = i("957255"),
        E = i("697218"),
        _ = i("491401"),
        O = i("483093"),
        M = i("315102"),
        S = i("659500"),
        A = i("568734"),
        R = i("719923"),
        P = i("587904"),
        b = i("473374"),
        L = i("195483"),
        B = i("49111"),
        D = i("782340"),
        U = i("356296"),
        k = i("809764");

    function G(t) {
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
                className: n(f, U.avatar, {
                    [U.compact]: r,
                    [U.clickable]: null != a,
                    [U.communicationDisabledOpacity]: u
                }),
                alt: " "
            }), null == i || r ? null : (0, l.jsx)("img", {
                className: U.avatarDecoration,
                src: i,
                alt: " ",
                "aria-hidden": !0
            })]
        })
    }

    function F(t, e, i) {
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
            children: [(0, l.jsx)(L.default, {
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
                    className: U.separator,
                    children: ":"
                }), " "]
            })]
        })
    }

    function V(t) {
        var e, i;
        let {
            props: a,
            guildId: n,
            handleRenderPopout: c,
            showCommunicationDisabledStyles: h = !1,
            className: u
        } = t, {
            message: f,
            author: x,
            compact: m = !1,
            subscribeToGroupId: g,
            animate: j = !0,
            onContextMenu: w,
            onClickAvatar: p,
            onPopoutRequestClose: v,
            showAvatarPopout: T
        } = a, [I, E] = r.useState(!1), _ = (0, o.useStateFromStores)([y.default], () => {
            var t;
            return null !== (t = a.displayCompactAvatars) && void 0 !== t ? t : y.default.displayCompactAvatars
        }), O = null != f.messageReference && null != f.webhookId, A = f.author, {
            id: R
        } = A, P = m ? 32 : 80, {
            avatarSrc: b,
            avatarDecorationSrc: L,
            eventHandlers: D
        } = (0, N.default)({
            user: A,
            guildId: n,
            size: P,
            animateOnHover: null != g ? !I : !j,
            showPending: !0
        }), U = f.isInteractionPlaceholder(), k = r.useMemo(() => {
            var t, e;
            return U && null == A.avatar && (null === (t = f.application) || void 0 === t ? void 0 : t.icon) != null ? null !== (e = M.default.getApplicationIconURL({
                id: f.application.id,
                icon: f.application.icon,
                size: P,
                fallbackAvatar: !1
            })) && void 0 !== e ? e : b : b
        }, [U, null === (e = f.application) || void 0 === e ? void 0 : e.icon, null === (i = f.application) || void 0 === i ? void 0 : i.id, A.avatar, P, b]);
        if (r.useEffect(() => {
                if (null != g) return S.ComponentDispatch.subscribeKeyed(B.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(R), E), () => void S.ComponentDispatch.unsubscribeKeyed(B.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(R), E)
            }, [R, g]), !m || _) {
            if (null != c && null != T) return (0, l.jsx)(d.Popout, {
                preload: O ? void 0 : function() {
                    return (0, C.default)(f.author.id, null != x.guildMemberAvatar && null != n ? M.default.getGuildMemberAvatarURLSimple({
                        guildId: n,
                        userId: f.author.id,
                        avatar: x.guildMemberAvatar,
                        size: 80
                    }) : f.author.getAvatarURL(void 0, 80, !1), {
                        guildId: n,
                        channelId: f.channel_id
                    })
                },
                renderPopout: c,
                shouldShow: T,
                position: s.isMobile ? "window_center" : "right",
                onRequestClose: v,
                children: t => G({
                    ...D,
                    avatarSrc: k,
                    avatarDecorationSrc: L,
                    compact: m,
                    onClick: p,
                    onContextMenu: w,
                    onMouseDown: t.onMouseDown,
                    onKeyDown: t.onKeyDown,
                    showCommunicationDisabledStyles: h,
                    className: u
                })
            });
            else return G({
                ...D,
                avatarSrc: k,
                avatarDecorationSrc: L,
                compact: m,
                onClick: p,
                onContextMenu: w,
                onMouseDown: void 0,
                onKeyDown: void 0,
                showCommunicationDisabledStyles: h,
                className: u
            })
        }
    }

    function H(t) {
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
            className: m,
            messageClassname: g,
            badges: j
        } = t;
        return (0, l.jsxs)(l.Fragment, {
            children: [!o && i, (0, l.jsxs)(d.H, {
                className: n(U.header, m),
                "aria-describedby": f,
                "aria-labelledby": u,
                children: [c && o && (0, l.jsx)(P.default, {
                    id: (0, x.getMessageTimestampId)(e),
                    compact: !0,
                    timestamp: e.timestamp,
                    isVisibleOnlyOnHover: h,
                    className: g,
                    isInline: !1
                }), o && i, (0, l.jsx)("span", {
                    id: a,
                    className: s,
                    children: r
                }), c && !o && (0, l.jsx)(P.default, {
                    id: (0, x.getMessageTimestampId)(e),
                    timestamp: e.timestamp,
                    className: g
                }), null != j && j.length > 0 ? (0, l.jsx)("div", {
                    className: U.badgesContainer,
                    children: j
                }) : null]
            })]
        })
    }
    let Z = t => {
        !t && (0, j.navigateToPremiumMarketingPage)()
    };

    function z(t) {
        let {
            currentUserIsPremium: e,
            author: i
        } = t, r = (0, o.useStateFromStores)([v.default], () => {
            var t;
            return null === (t = v.default.getUserProfile(i.id)) || void 0 === t ? void 0 : t.premiumSince
        });
        return (0, l.jsx)(d.Tooltip, {
            tooltipClassName: U.nitroAuthorBadgeTootip,
            shouldShow: null != r,
            text: D.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: r
            }),
            onTooltipShow: () => (0, C.default)(i.id),
            children: t => (0, l.jsx)(d.Clickable, {
                className: U.nitroAuthorBadgeContainer,
                onClick: () => Z(e),
                "aria-label": D.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                    date: r
                }),
                children: (0, l.jsx)("img", {
                    alt: "",
                    className: U.nitroBadgeSvg,
                    src: k,
                    ...t
                })
            })
        })
    }

    function W(t) {
        let {
            message: e,
            repliedMessage: i,
            compact: a = !1,
            renderPopout: s,
            showTimestampOnHover: j,
            roleIcon: v,
            subscribeToGroupId: C,
            hideTimestamp: N,
            className: M,
            channel: S
        } = t, P = r.useMemo(() => null != s ? t => s(t, e) : void 0, [s, e]), [, k] = (0, h.default)(e.author.id, t.guildId), G = (0, o.useStateFromStores)([T.default], () => T.default.getGuild(t.guildId), [t.guildId]), Z = null != e.author && null != G && I.default.canManageUser(B.Permissions.MODERATE_MEMBERS, e.author, G), W = k && Z, K = V({
            props: t,
            guildId: t.guildId,
            handleRenderPopout: P,
            showCommunicationDisabledStyles: W
        }), Y = (0, o.useStateFromStores)([y.default], () => {
            var e;
            return null !== (e = t.displayCompactAvatars) && void 0 !== e ? e : y.default.displayCompactAvatars
        }), X = (!a || Y) && null != v && null != G ? (0, l.jsx)(d.Popout, {
            animation: d.Popout.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: () => (0, l.jsx)(m.default, {
                roleIcon: v,
                guild: G
            }),
            children: t => {
                let {
                    onClick: e
                } = t;
                return (0, l.jsx)(O.default, {
                    ...v,
                    className: U.roleIcon,
                    onClick: e
                })
            }
        }, "role-icon-children") : (!a || Y) && null != v ? (0, l.jsx)(O.default, {
            ...v,
            className: U.roleIcon
        }, "role-icon-children") : null, q = (0, b.renderSystemTag)({
            message: e,
            channel: S,
            user: null == e ? void 0 : e.author,
            compact: a,
            isRepliedMessage: !1
        }), J = [], Q = E.default.getCurrentUser(), $ = R.default.isPremium(e.author), tt = R.default.isPremium(Q), te = null == S ? void 0 : S.isPrivate();
        (0, f.shouldShowNitroBadge)(null != v, "Message Username") && $ && !a && !te && J.push((0, l.jsx)(z, {
            currentUserIsPremium: tt,
            author: e.author
        }, "nitro-author")), null != X && J.push(X), null != G && J.push((0, l.jsx)(u.default, {
            guild: G,
            message: e
        }, "new-member")), null != S && null != G && J.push((0, l.jsx)(c.default, {
            guild: G,
            channel: S,
            userId: e.author.id
        }, "connections"));
        let ti = [];
        (0, A.hasFlag)(e.flags, B.MessageFlags.SUPPRESS_NOTIFICATIONS) && ti.push((0, l.jsx)(p.default, {}, "suppress-notifications")), e.isPoll() && ti.push((0, l.jsx)(g.default, {
            className: U.pollBadgeDefault
        }, "poll"));
        let tl = {};
        tl[L.UsernameDecorationTypes.SYSTEM_TAG] = q, tl[L.UsernameDecorationTypes.BADGES] = J;
        let tr = F(t, P, tl),
            ta = (0, x.getMessageUsernameId)(e, C),
            tn = (0, x.getMessageTimestampId)(e),
            ts = N ? "".concat(ta) : "".concat(ta, " ").concat(tn),
            to = (null == i ? void 0 : i.state) === w.ReferencedMessageState.LOADED ? (0, x.getMessageReplyId)(e) : void 0;
        return (0, l.jsx)(H, {
            message: e,
            avatar: K,
            username: (0, l.jsxs)(l.Fragment, {
                children: [W && (0, l.jsx)(d.Tooltip, {
                    text: D.default.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                    children: t => (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(_.default, {
                            ...t,
                            width: 12,
                            height: 12,
                            className: a ? U.compactCommunicationDisabled : U.communicationDisabled
                        }), (0, l.jsx)(d.HiddenVisually, {
                            children: D.default.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
                        })]
                    })
                }), tr]
            }),
            usernameSpanId: (0, x.getMessageUsernameId)(e, C),
            usernameClassName: n(U.headerText, {
                [U.hasRoleIcon]: null != X,
                [U.hasBadges]: null != q || ti.length > 0
            }),
            compact: a,
            showTimestamp: !0 !== N,
            showTimestampOnHover: j,
            ariaLabelledBy: ts,
            ariaDescribedBy: to,
            className: M,
            badges: ti
        })
    }
}
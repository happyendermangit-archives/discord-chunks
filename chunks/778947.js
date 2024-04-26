function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseMessageHeader: function() {
            return W
        },
        default: function() {
            return X
        },
        useAvatar: function() {
            return j
        },
        useUsername: function() {
            return Y
        }
    }), n("47120"), n("653041"), n("789020");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("873546"),
        l = n("442837"),
        u = n("481060"),
        d = n("100527"),
        _ = n("906732"),
        c = n("366030"),
        E = n("71619"),
        I = n("340797"),
        T = n("276554"),
        f = n("453687"),
        S = n("304176"),
        h = n("768232"),
        A = n("98278"),
        m = n("869765"),
        N = n("243317"),
        p = n("621853"),
        O = n("484459"),
        R = n("204197"),
        C = n("740492"),
        g = n("430824"),
        L = n("496675"),
        D = n("594174"),
        v = n("789695"),
        M = n("176278"),
        y = n("768581"),
        P = n("585483"),
        U = n("630388"),
        b = n("74538"),
        G = n("534761"),
        w = n("307187"),
        B = n("750858"),
        k = n("981631"),
        V = n("689938"),
        x = n("904335"),
        F = n("255963");

    function H(e) {
        let {
            avatarSrc: t,
            avatarDecorationSrc: n,
            compact: r,
            onClick: s,
            onContextMenu: o,
            onMouseDown: l,
            onMouseEnter: u,
            onMouseLeave: d,
            onKeyDown: _,
            showCommunicationDisabledStyles: c = !1,
            className: E
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
                onClick: s,
                onContextMenu: o,
                onMouseDown: l,
                onKeyDown: _,
                onMouseEnter: u,
                onMouseLeave: d,
                src: t,
                "aria-hidden": !0,
                className: a()(E, x.avatar, {
                    [x.compact]: r,
                    [x.clickable]: null != s,
                    [x.communicationDisabledOpacity]: c
                }),
                alt: " "
            }), null == n || r ? null : (0, i.jsx)("img", {
                className: x.avatarDecoration,
                src: n,
                alt: " ",
                "aria-hidden": !0
            })]
        })
    }

    function Y(e, t, n) {
        let {
            message: r,
            channel: s,
            author: a,
            compact: o = !1,
            onContextMenu: l,
            showUsernamePopout: u,
            roleIcon: d,
            onClickUsername: _,
            onPopoutRequestClose: c
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(B.default, {
                message: r,
                channel: s,
                author: a,
                compact: o,
                roleIcon: d,
                showPopout: u,
                renderPopout: t,
                onClick: _,
                onContextMenu: l,
                onPopoutRequestClose: c,
                decorations: n,
                renderRemixTag: !0
            }), o && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("i", {
                    className: x.separator,
                    children: ":"
                }), " "]
            })]
        })
    }

    function j(e) {
        var t, n;
        let {
            props: s,
            guildId: a,
            handleRenderPopout: c,
            showCommunicationDisabledStyles: E = !1,
            className: I
        } = e, {
            message: T,
            author: f,
            compact: S = !1,
            subscribeToGroupId: h,
            animate: A = !0,
            onContextMenu: m,
            onClickAvatar: N,
            onPopoutRequestClose: p,
            showAvatarPopout: g
        } = s, [L, D] = r.useState(!1), {
            analyticsLocations: v
        } = (0, _.default)(d.default.AVATAR), M = (0, l.useStateFromStores)([C.default], () => {
            var e;
            return null !== (e = s.displayCompactAvatars) && void 0 !== e ? e : C.default.displayCompactAvatars
        }), U = null != T.messageReference && null != T.webhookId, b = T.author, {
            id: G
        } = b, w = S ? 32 : 80, {
            avatarSrc: B,
            avatarDecorationSrc: V,
            eventHandlers: x
        } = (0, R.default)({
            user: b,
            guildId: a,
            size: w,
            animateOnHover: null != h ? !L : !A,
            showPending: !0
        }), F = T.isInteractionPlaceholder(), Y = r.useMemo(() => {
            var e, t;
            return F && null == b.avatar && (null === (e = T.application) || void 0 === e ? void 0 : e.icon) != null ? null !== (t = y.default.getApplicationIconURL({
                id: T.application.id,
                icon: T.application.icon,
                size: w,
                fallbackAvatar: !1
            })) && void 0 !== t ? t : B : B
        }, [F, null === (t = T.application) || void 0 === t ? void 0 : t.icon, null === (n = T.application) || void 0 === n ? void 0 : n.id, b.avatar, w, B]);
        if (r.useEffect(() => {
                if (null != h) return P.ComponentDispatch.subscribeKeyed(k.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(G), D), () => void P.ComponentDispatch.unsubscribeKeyed(k.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(G), D)
            }, [G, h]), !S || M) return null != c && null != g ? (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: v,
            children: (0, i.jsx)(u.Popout, {
                preload: U ? void 0 : function() {
                    return (0, O.default)(T.author.id, null != f.guildMemberAvatar && null != a ? y.default.getGuildMemberAvatarURLSimple({
                        guildId: a,
                        userId: T.author.id,
                        avatar: f.guildMemberAvatar,
                        size: 80
                    }) : T.author.getAvatarURL(void 0, 80, !1), {
                        guildId: a,
                        channelId: T.channel_id
                    })
                },
                renderPopout: c,
                shouldShow: g,
                position: o.isMobile ? "window_center" : "right",
                onRequestClose: p,
                children: e => H({
                    ...x,
                    avatarSrc: Y,
                    avatarDecorationSrc: V,
                    compact: S,
                    onClick: N,
                    onContextMenu: m,
                    onMouseDown: e.onMouseDown,
                    onKeyDown: e.onKeyDown,
                    showCommunicationDisabledStyles: E,
                    className: I
                })
            })
        }) : (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: v,
            children: H({
                ...x,
                avatarSrc: Y,
                avatarDecorationSrc: V,
                compact: S,
                onClick: N,
                onContextMenu: m,
                onMouseDown: void 0,
                onKeyDown: void 0,
                showCommunicationDisabledStyles: E,
                className: I
            })
        })
    }

    function W(e) {
        let {
            message: t,
            avatar: n,
            username: r,
            usernameSpanId: s,
            usernameClassName: o,
            compact: l,
            showTimestamp: d,
            showTimestampOnHover: _,
            ariaLabelledBy: c,
            ariaDescribedBy: E,
            className: I,
            messageClassname: T,
            badges: S
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [!l && n, (0, i.jsxs)(u.H, {
                className: a()(x.header, I),
                "aria-describedby": E,
                "aria-labelledby": c,
                children: [d && l && (0, i.jsx)(G.default, {
                    id: (0, f.getMessageTimestampId)(t),
                    compact: !0,
                    timestamp: t.timestamp,
                    isVisibleOnlyOnHover: _,
                    className: T,
                    isInline: !1
                }), l && n, (0, i.jsx)("span", {
                    id: s,
                    className: o,
                    children: r
                }), d && !l && (0, i.jsx)(G.default, {
                    id: (0, f.getMessageTimestampId)(t),
                    timestamp: t.timestamp,
                    className: T
                }), null != S && S.length > 0 ? (0, i.jsx)("div", {
                    className: x.badgesContainer,
                    children: S
                }) : null]
            })]
        })
    }
    let K = e => {
        !e && (0, A.navigateToPremiumMarketingPage)()
    };

    function z(e) {
        let {
            currentUserIsPremium: t,
            author: n
        } = e, r = (0, l.useStateFromStores)([p.default], () => {
            var e;
            return null === (e = p.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince
        });
        return (0, i.jsx)(u.Tooltip, {
            tooltipClassName: x.nitroAuthorBadgeTootip,
            shouldShow: null != r,
            text: V.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: r
            }),
            onTooltipShow: () => (0, O.default)(n.id),
            children: e => (0, i.jsx)(u.Clickable, {
                className: x.nitroAuthorBadgeContainer,
                onClick: () => K(t),
                "aria-label": V.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                    date: r
                }),
                children: (0, i.jsx)("img", {
                    alt: "",
                    className: x.nitroBadgeSvg,
                    src: F,
                    ...e
                })
            })
        })
    }

    function X(e) {
        let {
            message: t,
            repliedMessage: n,
            compact: s = !1,
            renderPopout: o,
            showTimestampOnHover: d,
            roleIcon: _,
            subscribeToGroupId: A,
            hideTimestamp: p,
            className: O,
            channel: R
        } = e, y = r.useMemo(() => null != o ? e => o(e, t) : void 0, [o, t]), [, P] = (0, E.default)(t.author.id, e.guildId), G = (0, l.useStateFromStores)([g.default], () => g.default.getGuild(e.guildId), [e.guildId]), F = null != t.author && null != G && L.default.canManageUser(k.Permissions.MODERATE_MEMBERS, t.author, G), H = P && F, K = j({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: y,
            showCommunicationDisabledStyles: H
        }), X = (0, l.useStateFromStores)([C.default], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : C.default.displayCompactAvatars
        }), Q = (!s || X) && null != _ && null != G ? (0, i.jsx)(u.Popout, {
            animation: u.Popout.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: () => (0, i.jsx)(S.default, {
                roleIcon: _,
                guild: G
            }),
            children: e => {
                let {
                    onClick: t
                } = e;
                return (0, i.jsx)(M.default, {
                    ..._,
                    className: x.roleIcon,
                    onClick: t
                })
            }
        }, "role-icon-children") : (!s || X) && null != _ ? (0, i.jsx)(M.default, {
            ..._,
            className: x.roleIcon
        }, "role-icon-children") : null, q = (0, w.renderSystemTag)({
            message: t,
            channel: R,
            user: null == t ? void 0 : t.author,
            compact: s,
            isRepliedMessage: !1
        }), Z = [], J = D.default.getCurrentUser(), $ = b.default.isPremium(t.author), ee = b.default.isPremium(J), et = null == R ? void 0 : R.isPrivate();
        (0, T.shouldShowNitroBadge)(null != _, "Message Username") && $ && !s && !et && Z.push((0, i.jsx)(z, {
            currentUserIsPremium: ee,
            author: t.author
        }, "nitro-author")), null != Q && Z.push(Q), null != G && Z.push((0, i.jsx)(I.default, {
            guild: G,
            message: t
        }, "new-member")), null != R && null != G && Z.push((0, i.jsx)(c.default, {
            guild: G,
            channel: R,
            userId: t.author.id,
            messageId: t.id
        }, "connections"));
        let en = [];
        (0, U.hasFlag)(t.flags, k.MessageFlags.SUPPRESS_NOTIFICATIONS) && en.push((0, i.jsx)(N.default, {}, "suppress-notifications")), t.isPoll() && en.push((0, i.jsx)(h.default, {
            className: x.pollBadgeDefault
        }, "poll"));
        let ei = {};
        ei[B.UsernameDecorationTypes.SYSTEM_TAG] = q, ei[B.UsernameDecorationTypes.BADGES] = Z;
        let er = Y(e, y, ei),
            es = (0, f.getMessageUsernameId)(t, A),
            ea = (0, f.getMessageTimestampId)(t),
            eo = p ? "".concat(es) : "".concat(es, " ").concat(ea),
            el = (null == n ? void 0 : n.state) === m.ReferencedMessageState.LOADED ? (0, f.getMessageReplyId)(t) : void 0;
        return (0, i.jsx)(W, {
            message: t,
            avatar: K,
            username: (0, i.jsxs)(i.Fragment, {
                children: [H && (0, i.jsx)(u.Tooltip, {
                    text: V.default.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                    children: e => (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(v.default, {
                            ...e,
                            width: 12,
                            height: 12,
                            className: s ? x.compactCommunicationDisabled : x.communicationDisabled
                        }), (0, i.jsx)(u.HiddenVisually, {
                            children: V.default.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
                        })]
                    })
                }), er]
            }),
            usernameSpanId: (0, f.getMessageUsernameId)(t, A),
            usernameClassName: a()(x.headerText, {
                [x.hasRoleIcon]: null != Q,
                [x.hasBadges]: null != q || en.length > 0
            }),
            compact: s,
            showTimestamp: !0 !== p,
            showTimestampOnHover: d,
            ariaLabelledBy: eo,
            ariaDescribedBy: el,
            className: O,
            badges: en
        })
    }
}
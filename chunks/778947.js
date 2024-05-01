function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseMessageHeader: function() {
            return j
        },
        default: function() {
            return z
        },
        useAvatar: function() {
            return Y
        },
        useUsername: function() {
            return H
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
        h = n("98278"),
        A = n("869765"),
        m = n("243317"),
        N = n("621853"),
        p = n("484459"),
        O = n("204197"),
        R = n("740492"),
        C = n("430824"),
        g = n("496675"),
        L = n("594174"),
        v = n("789695"),
        D = n("176278"),
        M = n("768581"),
        y = n("585483"),
        P = n("630388"),
        U = n("74538"),
        b = n("534761"),
        G = n("307187"),
        w = n("750858"),
        B = n("981631"),
        k = n("689938"),
        V = n("904335"),
        x = n("255963");

    function F(e) {
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
                className: a()(E, V.avatar, {
                    [V.compact]: r,
                    [V.clickable]: null != s,
                    [V.communicationDisabledOpacity]: c
                }),
                alt: " "
            }), null == n || r ? null : (0, i.jsx)("img", {
                className: V.avatarDecoration,
                src: n,
                alt: " ",
                "aria-hidden": !0
            })]
        })
    }

    function H(e, t, n) {
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
            children: [(0, i.jsx)(w.default, {
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
                    className: V.separator,
                    children: ":"
                }), " "]
            })]
        })
    }

    function Y(e) {
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
            onPopoutRequestClose: C,
            showAvatarPopout: g
        } = s, [L, v] = r.useState(!1), {
            analyticsLocations: D
        } = (0, _.default)(d.default.AVATAR), P = (0, l.useStateFromStores)([R.default], () => {
            var e;
            return null !== (e = s.displayCompactAvatars) && void 0 !== e ? e : R.default.displayCompactAvatars
        }), U = null != T.messageReference && null != T.webhookId, b = T.author, {
            id: G
        } = b, w = S ? 32 : 80, {
            avatarSrc: k,
            avatarDecorationSrc: V,
            eventHandlers: x
        } = (0, O.default)({
            user: b,
            guildId: a,
            size: w,
            animateOnHover: null != h ? !L : !A,
            showPending: !0
        }), H = T.isInteractionPlaceholder(), Y = r.useMemo(() => {
            var e, t;
            return H && null == b.avatar && (null === (e = T.application) || void 0 === e ? void 0 : e.icon) != null ? null !== (t = M.default.getApplicationIconURL({
                id: T.application.id,
                icon: T.application.icon,
                size: w,
                fallbackAvatar: !1
            })) && void 0 !== t ? t : k : k
        }, [H, null === (t = T.application) || void 0 === t ? void 0 : t.icon, null === (n = T.application) || void 0 === n ? void 0 : n.id, b.avatar, w, k]);
        if (r.useEffect(() => {
                if (null != h) return y.ComponentDispatch.subscribeKeyed(B.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(G), v), () => void y.ComponentDispatch.unsubscribeKeyed(B.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(G), v)
            }, [G, h]), !S || P) return null != c && null != g ? (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: D,
            children: (0, i.jsx)(u.Popout, {
                preload: U ? void 0 : function() {
                    return (0, p.maybeFetchUserProfileForPopout)(T.author.id, null != f.guildMemberAvatar && null != a ? M.default.getGuildMemberAvatarURLSimple({
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
                onRequestClose: C,
                children: e => F({
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
            value: D,
            children: F({
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

    function j(e) {
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
                className: a()(V.header, I),
                "aria-describedby": E,
                "aria-labelledby": c,
                children: [d && l && (0, i.jsx)(b.default, {
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
                }), d && !l && (0, i.jsx)(b.default, {
                    id: (0, f.getMessageTimestampId)(t),
                    timestamp: t.timestamp,
                    className: T
                }), null != S && S.length > 0 ? (0, i.jsx)("div", {
                    className: V.badgesContainer,
                    children: S
                }) : null]
            })]
        })
    }
    let W = e => {
        !e && (0, h.navigateToPremiumMarketingPage)()
    };

    function K(e) {
        let {
            currentUserIsPremium: t,
            author: n
        } = e, r = (0, l.useStateFromStores)([N.default], () => {
            var e;
            return null === (e = N.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince
        });
        return (0, i.jsx)(u.Tooltip, {
            tooltipClassName: V.nitroAuthorBadgeTootip,
            shouldShow: null != r,
            text: k.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: r
            }),
            onTooltipShow: () => (0, p.default)(n.id),
            children: e => (0, i.jsx)(u.Clickable, {
                className: V.nitroAuthorBadgeContainer,
                onClick: () => W(t),
                "aria-label": k.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                    date: r
                }),
                children: (0, i.jsx)("img", {
                    alt: "",
                    className: V.nitroBadgeSvg,
                    src: x,
                    ...e
                })
            })
        })
    }

    function z(e) {
        let {
            message: t,
            repliedMessage: n,
            compact: s = !1,
            renderPopout: o,
            showTimestampOnHover: d,
            roleIcon: _,
            subscribeToGroupId: h,
            hideTimestamp: N,
            className: p,
            channel: O
        } = e, M = r.useMemo(() => null != o ? e => o(e, t) : void 0, [o, t]), [, y] = (0, E.default)(t.author.id, e.guildId), b = (0, l.useStateFromStores)([C.default], () => C.default.getGuild(e.guildId), [e.guildId]), x = null != t.author && null != b && g.default.canManageUser(B.Permissions.MODERATE_MEMBERS, t.author, b), F = y && x, W = Y({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: M,
            showCommunicationDisabledStyles: F
        }), z = (0, l.useStateFromStores)([R.default], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : R.default.displayCompactAvatars
        }), Z = (!s || z) && null != _ && null != b ? (0, i.jsx)(u.Popout, {
            animation: u.Popout.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: () => (0, i.jsx)(S.default, {
                roleIcon: _,
                guild: b
            }),
            children: e => {
                let {
                    onClick: t
                } = e;
                return (0, i.jsx)(D.default, {
                    ..._,
                    className: V.roleIcon,
                    onClick: t
                })
            }
        }, "role-icon-children") : (!s || z) && null != _ ? (0, i.jsx)(D.default, {
            ..._,
            className: V.roleIcon
        }, "role-icon-children") : null, X = (0, G.renderSystemTag)({
            message: t,
            channel: O,
            user: null == t ? void 0 : t.author,
            compact: s,
            isRepliedMessage: !1
        }), Q = [], q = L.default.getCurrentUser(), J = U.default.isPremium(t.author), $ = U.default.isPremium(q), ee = null == O ? void 0 : O.isPrivate();
        (0, T.shouldShowNitroBadge)(null != _, "Message Username") && J && !s && !ee && Q.push((0, i.jsx)(K, {
            currentUserIsPremium: $,
            author: t.author
        }, "nitro-author")), null != Z && Q.push(Z), null != b && Q.push((0, i.jsx)(I.default, {
            guild: b,
            message: t
        }, "new-member")), null != O && null != b && Q.push((0, i.jsx)(c.default, {
            guild: b,
            channel: O,
            userId: t.author.id,
            messageId: t.id
        }, "connections"));
        let et = [];
        (0, P.hasFlag)(t.flags, B.MessageFlags.SUPPRESS_NOTIFICATIONS) && et.push((0, i.jsx)(m.default, {}, "suppress-notifications"));
        let en = {};
        en[w.UsernameDecorationTypes.SYSTEM_TAG] = X, en[w.UsernameDecorationTypes.BADGES] = Q;
        let ei = H(e, M, en),
            er = (0, f.getMessageUsernameId)(t, h),
            es = (0, f.getMessageTimestampId)(t),
            ea = N ? "".concat(er) : "".concat(er, " ").concat(es),
            eo = (null == n ? void 0 : n.state) === A.ReferencedMessageState.LOADED ? (0, f.getMessageReplyId)(t) : void 0;
        return (0, i.jsx)(j, {
            message: t,
            avatar: W,
            username: (0, i.jsxs)(i.Fragment, {
                children: [F && (0, i.jsx)(u.Tooltip, {
                    text: k.default.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                    children: e => (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(v.default, {
                            ...e,
                            width: 12,
                            height: 12,
                            className: s ? V.compactCommunicationDisabled : V.communicationDisabled
                        }), (0, i.jsx)(u.HiddenVisually, {
                            children: k.default.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
                        })]
                    })
                }), ei]
            }),
            usernameSpanId: (0, f.getMessageUsernameId)(t, h),
            usernameClassName: a()(V.headerText, {
                [V.hasRoleIcon]: null != Z,
                [V.hasBadges]: null != X || et.length > 0
            }),
            compact: s,
            showTimestamp: !0 !== N,
            showTimestampOnHover: d,
            ariaLabelledBy: ea,
            ariaDescribedBy: eo,
            className: p,
            badges: et
        })
    }
}
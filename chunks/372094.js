function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        BaseMessageHeader: function() {
            return q
        },
        default: function() {
            return J
        },
        useAvatar: function() {
            return Y
        },
        useUsername: function() {
            return K
        }
    });
    var n = r("470079"),
        l = r("803997"),
        i = r.n(l),
        a = r("56300"),
        o = r("898511"),
        c = r("784184"),
        u = r("649455"),
        s = r("396586"),
        f = r("96680"),
        d = r("965100"),
        m = r("366207"),
        h = r("27606"),
        p = r("555572"),
        g = r("706453"),
        y = r("670207"),
        b = r("150736"),
        O = r("299794"),
        E = r("86404"),
        v = r("903716"),
        w = r("335050"),
        P = r("687990"),
        x = r("24039"),
        S = r("306912"),
        C = r("29884"),
        j = r("208454"),
        I = r("870280"),
        N = r("227051"),
        T = r("299529"),
        M = r("120447"),
        _ = r("947248"),
        A = r("830721"),
        R = r("276781"),
        D = r("447078"),
        k = r("21397"),
        L = r("281767"),
        B = r("941504"),
        U = r("50182"),
        G = r("255963");

    function H(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function F(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function V(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                F(e, t, r[t])
            })
        }
        return e
    }

    function z(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
    }

    function Z(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var r, n, l = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != l) {
                var i = [],
                    a = !0,
                    o = !1;
                try {
                    for (l = l.call(e); !(a = (r = l.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    o = !0, n = e
                } finally {
                    try {
                        !a && null != l.return && l.return()
                    } finally {
                        if (o) throw n
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return H(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return H(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function W(e) {
        var t, r = e.avatarSrc,
            l = e.avatarDecorationSrc,
            a = e.compact,
            o = e.onClick,
            c = e.onContextMenu,
            u = e.onMouseDown,
            s = e.onMouseEnter,
            f = e.onMouseLeave,
            d = e.onKeyDown,
            m = e.showCommunicationDisabledStyles,
            h = e.className;
        return n.createElement(n.Fragment, null, n.createElement("img", {
            onClick: o,
            onContextMenu: c,
            onMouseDown: u,
            onKeyDown: d,
            onMouseEnter: s,
            onMouseLeave: f,
            src: r,
            "aria-hidden": !0,
            className: i()(h, U.avatar, (F(t = {}, U.compact, a), F(t, U.clickable, null != o), F(t, U.communicationDisabledOpacity, void 0 !== m && m), t)),
            alt: " "
        }), null == l || a ? null : n.createElement("img", {
            className: U.avatarDecoration,
            src: l,
            alt: " ",
            "aria-hidden": !0
        }))
    }

    function K(e, t, r) {
        var l = e.message,
            i = e.channel,
            a = e.author,
            o = e.compact,
            c = void 0 !== o && o,
            u = e.onContextMenu,
            s = e.showUsernamePopout,
            f = e.roleIcon,
            d = e.onClickUsername,
            m = e.onPopoutRequestClose;
        return n.createElement(n.Fragment, null, n.createElement(k.default, {
            message: l,
            channel: i,
            author: a,
            compact: c,
            roleIcon: f,
            showPopout: s,
            renderPopout: t,
            onClick: d,
            onContextMenu: u,
            onPopoutRequestClose: m,
            decorations: r,
            renderRemixTag: !0
        }), c && n.createElement(n.Fragment, null, n.createElement("i", {
            className: U.separator
        }, ":"), " "))
    }

    function Y(e) {
        var t, r, l = e.props,
            i = e.guildId,
            f = e.handleRenderPopout,
            d = e.showCommunicationDisabledStyles,
            m = void 0 !== d && d,
            h = e.className,
            p = l.message,
            g = l.author,
            y = l.compact,
            b = void 0 !== y && y,
            O = l.subscribeToGroupId,
            E = l.animate,
            v = l.onContextMenu,
            S = l.onClickAvatar,
            C = l.onPopoutRequestClose,
            j = l.showAvatarPopout,
            I = Z(n.useState(!1), 2),
            N = I[0],
            _ = I[1],
            A = (0, s.default)(u.default.AVATAR).analyticsLocations,
            R = (0, o.useStateFromStores)([x.default], function() {
                var e;
                return null !== (e = l.displayCompactAvatars) && void 0 !== e ? e : x.default.displayCompactAvatars
            }),
            D = null != p.messageReference && null != p.webhookId,
            k = p.author,
            B = k.id,
            U = b ? 32 : 80,
            G = (0, P.default)({
                user: k,
                guildId: i,
                size: U,
                animateOnHover: null != O ? !N : !(void 0 === E || E),
                showPending: !0
            }),
            H = G.avatarSrc,
            F = G.avatarDecorationSrc,
            K = G.eventHandlers,
            Y = p.isInteractionPlaceholder(),
            q = n.useMemo(function() {
                var e, t;
                return Y && null == k.avatar && (null === (e = p.application) || void 0 === e ? void 0 : e.icon) != null ? null !== (t = T.default.getApplicationIconURL({
                    id: p.application.id,
                    icon: p.application.icon,
                    size: U,
                    fallbackAvatar: !1
                })) && void 0 !== t ? t : H : H
            }, [Y, null === (t = p.application) || void 0 === t ? void 0 : t.icon, null === (r = p.application) || void 0 === r ? void 0 : r.id, k.avatar, U, H]);
        if (n.useEffect(function() {
                if (null != O) return M.ComponentDispatch.subscribeKeyed(L.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(O, ":").concat(B), _),
                    function() {
                        M.ComponentDispatch.unsubscribeKeyed(L.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(O, ":").concat(B), _)
                    }
            }, [B, O]), !b || R) return null != f && null != j ? n.createElement(s.AnalyticsLocationProvider, {
            value: A
        }, n.createElement(c.Popout, {
            preload: D ? void 0 : function() {
                return (0, w.default)(p.author.id, null != g.guildMemberAvatar && null != i ? T.default.getGuildMemberAvatarURLSimple({
                    guildId: i,
                    userId: p.author.id,
                    avatar: g.guildMemberAvatar,
                    size: 80
                }) : p.author.getAvatarURL(void 0, 80, !1), {
                    guildId: i,
                    channelId: p.channel_id
                })
            },
            renderPopout: f,
            shouldShow: j,
            position: a.isMobile ? "window_center" : "right",
            onRequestClose: C
        }, function(e) {
            return W(z(V({}, K), {
                avatarSrc: q,
                avatarDecorationSrc: F,
                compact: b,
                onClick: S,
                onContextMenu: v,
                onMouseDown: e.onMouseDown,
                onKeyDown: e.onKeyDown,
                showCommunicationDisabledStyles: m,
                className: h
            }))
        })) : n.createElement(s.AnalyticsLocationProvider, {
            value: A
        }, W(z(V({}, K), {
            avatarSrc: q,
            avatarDecorationSrc: F,
            compact: b,
            onClick: S,
            onContextMenu: v,
            onMouseDown: void 0,
            onKeyDown: void 0,
            showCommunicationDisabledStyles: m,
            className: h
        })))
    }

    function q(e) {
        var t = e.message,
            r = e.avatar,
            l = e.username,
            a = e.usernameSpanId,
            o = e.usernameClassName,
            u = e.compact,
            s = e.showTimestamp,
            f = e.showTimestampOnHover,
            d = e.ariaLabelledBy,
            m = e.ariaDescribedBy,
            h = e.className,
            g = e.messageClassname,
            y = e.badges;
        return n.createElement(n.Fragment, null, !u && r, n.createElement(c.H, {
            className: i()(U.header, h),
            "aria-describedby": m,
            "aria-labelledby": d
        }, s && u && n.createElement(R.default, {
            id: (0, p.getMessageTimestampId)(t),
            compact: !0,
            timestamp: t.timestamp,
            isVisibleOnlyOnHover: f,
            className: g,
            isInline: !1
        }), u && r, n.createElement("span", {
            id: a,
            className: o
        }, l), s && !u && n.createElement(R.default, {
            id: (0, p.getMessageTimestampId)(t),
            timestamp: t.timestamp,
            className: g
        }), null != y && y.length > 0 ? n.createElement("div", {
            className: U.badgesContainer
        }, y) : null))
    }
    var X = function(e) {
        !e && (0, b.navigateToPremiumMarketingPage)()
    };

    function $(e) {
        var t = e.currentUserIsPremium,
            r = e.author,
            l = (0, o.useStateFromStores)([v.default], function() {
                var e;
                return null === (e = v.default.getUserProfile(r.id)) || void 0 === e ? void 0 : e.premiumSince
            });
        return n.createElement(c.Tooltip, {
            tooltipClassName: U.nitroAuthorBadgeTootip,
            shouldShow: null != l,
            text: B.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: l
            }),
            onTooltipShow: function() {
                return (0, w.default)(r.id)
            }
        }, function(e) {
            return n.createElement(c.Clickable, {
                className: U.nitroAuthorBadgeContainer,
                onClick: function() {
                    return X(t)
                },
                "aria-label": B.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                    date: l
                })
            }, n.createElement("img", V({
                alt: "",
                className: U.nitroBadgeSvg,
                src: G
            }, e)))
        })
    }

    function J(e) {
        var t, r = e.message,
            l = e.repliedMessage,
            a = e.compact,
            u = void 0 !== a && a,
            s = e.renderPopout,
            b = e.showTimestampOnHover,
            v = e.roleIcon,
            w = e.subscribeToGroupId,
            P = e.hideTimestamp,
            T = e.className,
            M = e.channel,
            R = n.useMemo(function() {
                return null != s ? function(e) {
                    return s(e, r)
                } : void 0
            }, [s, r]),
            G = Z((0, d.default)(r.author.id, e.guildId), 2)[1],
            H = (0, o.useStateFromStores)([S.default], function() {
                return S.default.getGuild(e.guildId)
            }, [e.guildId]),
            W = null != r.author && null != H && C.default.canManageUser(L.Permissions.MODERATE_MEMBERS, r.author, H),
            X = G && W,
            J = Y({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: R,
                showCommunicationDisabledStyles: X
            }),
            Q = (0, o.useStateFromStores)([x.default], function() {
                var t;
                return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : x.default.displayCompactAvatars
            }),
            ee = (!u || Q) && null != v && null != H ? n.createElement(c.Popout, {
                key: "role-icon-children",
                animation: c.Popout.Animation.TRANSLATE,
                align: "center",
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: function() {
                    return n.createElement(g.default, {
                        roleIcon: v,
                        guild: H
                    })
                }
            }, function(e) {
                var t = e.onClick;
                return n.createElement(N.default, z(V({}, v), {
                    className: U.roleIcon,
                    onClick: t
                }))
            }) : (!u || Q) && null != v ? n.createElement(N.default, z(V({
                key: "role-icon-children"
            }, v), {
                className: U.roleIcon
            })) : null,
            et = (0, D.renderSystemTag)({
                message: r,
                channel: M,
                user: null == r ? void 0 : r.author,
                compact: u,
                isRepliedMessage: !1
            }),
            er = [],
            en = j.default.getCurrentUser(),
            el = A.default.isPremium(r.author),
            ei = A.default.isPremium(en),
            ea = null == M ? void 0 : M.isPrivate();
        (0, h.shouldShowNitroBadge)(null != v, "Message Username") && el && !u && !ea && er.push(n.createElement($, {
            key: "nitro-author",
            currentUserIsPremium: ei,
            author: r.author
        })), null != ee && er.push(ee), null != H && er.push(n.createElement(m.default, {
            key: "new-member",
            guild: H,
            message: r
        })), null != M && null != H && er.push(n.createElement(f.default, {
            key: "connections",
            guild: H,
            channel: M,
            userId: r.author.id,
            messageId: r.id
        }));
        var eo = [];
        (0, _.hasFlag)(r.flags, L.MessageFlags.SUPPRESS_NOTIFICATIONS) && eo.push(n.createElement(E.default, {
            key: "suppress-notifications"
        })), r.isPoll() && eo.push(n.createElement(y.default, {
            key: "poll",
            className: U.pollBadgeDefault
        }));
        var ec = {};
        ec[k.UsernameDecorationTypes.SYSTEM_TAG] = et, ec[k.UsernameDecorationTypes.BADGES] = er;
        var eu = K(e, R, ec),
            es = (0, p.getMessageUsernameId)(r, w),
            ef = (0, p.getMessageTimestampId)(r),
            ed = P ? "".concat(es) : "".concat(es, " ").concat(ef),
            em = (null == l ? void 0 : l.state) === O.ReferencedMessageState.LOADED ? (0, p.getMessageReplyId)(r) : void 0;
        return n.createElement(q, {
            message: r,
            avatar: J,
            username: n.createElement(n.Fragment, null, X && n.createElement(c.Tooltip, {
                text: B.default.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY
            }, function(e) {
                return n.createElement(n.Fragment, null, n.createElement(I.default, z(V({}, e), {
                    width: 12,
                    height: 12,
                    className: u ? U.compactCommunicationDisabled : U.communicationDisabled
                })), n.createElement(c.HiddenVisually, null, B.default.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE))
            }), eu),
            usernameSpanId: (0, p.getMessageUsernameId)(r, w),
            usernameClassName: i()(U.headerText, (F(t = {}, U.hasRoleIcon, null != ee), F(t, U.hasBadges, null != et || eo.length > 0), t)),
            compact: u,
            showTimestamp: !0 !== P,
            showTimestampOnHover: b,
            ariaLabelledBy: ed,
            ariaDescribedBy: em,
            className: T,
            badges: eo
        })
    }
}
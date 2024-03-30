function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AVATAR_DECORATION_PADDING: function() {
            return M
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("337905"),
        u = n("784184"),
        s = n("896154"),
        l = n("510518"),
        c = n("388717"),
        f = n("858207"),
        d = n("116179"),
        _ = n("687990"),
        E = n("208454"),
        p = n("303052"),
        m = n("471143"),
        y = n("726508"),
        I = n("134466"),
        h = n("318209"),
        O = n("778513"),
        T = n("830567"),
        S = n("590611"),
        v = n("281767"),
        g = n("292851"),
        A = n("582258"),
        b = n("941504"),
        N = n("581477");

    function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function P(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                C(e, t, n[t])
            })
        }
        return e
    }

    function D(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function L(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return R(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var M = (0, O.cssValueToNumber)(a.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
    t.default = function(e) {
        var t, n = e.selected,
            o = void 0 !== n && n,
            a = e.colorString,
            O = e.colorRoleName,
            R = e.isOwner,
            M = e.ownerTooltipText,
            U = e.lostPermissionTooltipText,
            w = e.isTyping,
            k = void 0 !== w && w,
            G = e.nick,
            B = e.user,
            j = e.currentUser,
            F = e.activities,
            V = e.applicationStream,
            H = e.status,
            x = e.shouldAnimateStatus,
            Y = void 0 !== x && x,
            W = e.isMobile,
            K = e.premiumSince,
            z = e.channel,
            X = e.guildId,
            q = e.className,
            Q = e.onMouseDown,
            J = e.onKeyDown,
            Z = e.onClick,
            $ = e.onContextMenu,
            ee = e.onClickPremiumGuildIcon,
            et = e.onFocus,
            en = e["aria-controls"],
            er = e["aria-expanded"],
            eo = e["aria-posinset"],
            ei = e["aria-setsize"],
            ea = e.id,
            eu = e.tabIndex,
            es = e.itemProps,
            el = T.default.useName(B),
            ec = (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === (null == B ? void 0 : B.id),
            ef = L(r.useState(!1), 2),
            ed = ef[0],
            e_ = ef[1],
            eE = L(r.useState(!1), 2),
            ep = eE[0],
            em = eE[1],
            ey = L(r.useState(null), 2),
            eI = ey[0],
            eh = ey[1],
            eO = (0, _.default)({
                user: B,
                size: u.AvatarSizes.SIZE_32,
                animateOnHover: !(o || ed),
                guildId: X
            }),
            eT = eO.avatarDecorationSrc,
            eS = eO.avatarSrc,
            ev = eO.eventHandlers,
            eg = (0, f.useQuestFromActivities)(F),
            eA = null != eg && !ec && !o && (ed || ep),
            eb = function() {
                e_(!0)
            },
            eN = function() {
                e_(!1)
            },
            eR = function(e) {
                eh(e)
            },
            eC = function() {
                var e = null != F ? F.find(function(e) {
                        return e.type === v.ActivityTypes.CUSTOM_STATUS
                    }) : null,
                    t = null != e && null != B && (0, l.default)(e, B, z);
                return r.createElement(S.default, {
                    className: N.activity,
                    textClassName: N.activityText,
                    emojiClassName: N.activityEmoji,
                    activities: F,
                    applicationStream: V,
                    animate: ed,
                    hideEmoji: !t,
                    hideTooltip: !0,
                    user: B,
                    hasQuest: null != eg
                })
            },
            eP = function() {
                var e = (null == B ? void 0 : B.isClyde()) ? g.BotTagTypes.AI : g.BotTagTypes.BOT;
                return null != B && B.bot ? r.createElement(p.default, {
                    className: N.botTag,
                    type: e,
                    verified: B.isVerifiedBot()
                }) : null
            },
            eD = function(e, t) {
                var n = Y ? u.AnimatedAvatar : u.Avatar,
                    o = (0, s.default)(F) ? v.StatusTypes.STREAMING : H;
                return o = t ? void 0 : o, r.createElement(r.Fragment, null, r.createElement(n, D(P({}, ev), {
                    size: u.AvatarSizes.SIZE_32,
                    src: eS,
                    isMobile: W,
                    isTyping: k,
                    status: o,
                    "aria-label": e.username,
                    statusTooltip: !0,
                    avatarDecoration: eT,
                    typingIndicatorRef: eR
                })), r.createElement(c.default, {
                    confettiSpawnRef: eI,
                    shouldFire: k && null != j && e.id !== j.id,
                    confettiLocation: A.ConfettiLocation.MEMBER_USER
                }))
            },
            eL = function() {
                return r.createElement(u.NameWithRole, {
                    roleName: O,
                    color: null != a ? a : void 0,
                    name: null != G ? G : el
                })
            },
            eM = H === v.StatusTypes.OFFLINE;
        return null == B ? r.createElement(m.default, {
            avatarSize: u.AvatarSizes.SIZE_32,
            className: N.placeholder
        }) : r.createElement(u.Popout, {
            renderPopout: function(e) {
                return r.createElement(d.default, P({
                    quest: eg,
                    applicationStream: V,
                    onMouseEnter: function() {
                        return em(!0)
                    },
                    onMouseLeave: function() {
                        return em(!1)
                    }
                }, e))
            },
            position: "top",
            shouldShow: eA,
            spacing: 0
        }, function() {
            return r.createElement(h.default, P({
                selected: o,
                className: i()(N.member, q, C({}, N.offline, eM && !o)),
                innerClassName: N.memberInner,
                onClick: Z,
                onKeyDown: J,
                onMouseDown: Q,
                onContextMenu: $,
                onMouseEnter: eb,
                onMouseLeave: eN,
                name: null == U ? r.createElement("span", {
                    className: N.username
                }, eL()) : r.createElement(u.Tooltip, {
                    text: U
                }, function(e) {
                    return r.createElement("span", D(P({}, e), {
                        className: i()(N.username, N.lostPermission)
                    }), eL())
                }),
                avatar: eD(B, eM),
                subText: eC(),
                decorators: r.createElement(r.Fragment, null, eP(), null != R && R && null == U ? r.createElement(u.Tooltip, {
                    text: null != M ? M : b.default.Messages.GUILD_OWNER
                }, function(e) {
                    return r.createElement(y.default, D(P({}, e), {
                        className: N.ownerIcon
                    }))
                }) : null, null == K ? null : r.createElement(u.Tooltip, {
                    text: b.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                        date: K
                    })
                }, function(e) {
                    return r.createElement(u.Clickable, {
                        onClick: ee,
                        tabIndex: -1
                    }, r.createElement(I.default, D(P({}, e), {
                        className: N.premiumIcon
                    })))
                })),
                "aria-controls": en,
                "aria-expanded": er,
                "aria-setsize": ei,
                "aria-posinset": eo,
                id: ea,
                tabIndex: eu,
                onFocus: et,
                focusProps: {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: 4,
                        right: 4
                    }
                }
            }, es))
        })
    }
}
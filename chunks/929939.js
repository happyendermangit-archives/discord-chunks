function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BiteSizeProfileHeader: function() {
            return W
        },
        UserPopoutAvatar: function() {
            return x
        },
        UserPopoutBadgeList: function() {
            return V
        },
        default: function() {
            return Y
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("278074"),
        u = n("898511"),
        s = n("447515"),
        l = n("784184"),
        c = n("896154"),
        f = n("396586"),
        d = n("535386"),
        _ = n("646220"),
        E = n("427385"),
        p = n("195063"),
        m = n("73013"),
        y = n("306912"),
        I = n("868447"),
        h = n("707907"),
        O = n("845265"),
        T = n("870331"),
        S = n("830721"),
        v = n("131900"),
        g = n("264437"),
        A = n("903716"),
        b = n("687990"),
        N = n("944184"),
        R = n("884125"),
        C = n("578466"),
        P = n("906885"),
        D = n("899517"),
        L = n("731616"),
        M = n("281767"),
        U = n("868615"),
        w = n("941504"),
        k = n("181390");

    function G(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function B(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                G(e, t, n[t])
            })
        }
        return e
    }
    var j = l.AvatarSizes.SIZE_80,
        F = (0, d.getDecorationSizeForAvatarSize)(j);

    function V(e) {
        var t = e.user,
            n = e.guildId,
            o = e.isTryItOutFlow,
            i = e.forProfileEffectModal,
            a = (0, u.useStateFromStores)([A.default], function() {
                return A.default.getUserProfile(t.id)
            }, [t]),
            c = (0, u.useStateFromStores)([y.default], function() {
                return y.default.getGuild(n)
            }, [n]),
            f = (0, _.useClydeProfilesEnabled)(c);
        return r.createElement(r.Fragment, null, (null == a ? void 0 : a.profileFetchFailed) && (!t.isClyde() || f) && r.createElement(l.Tooltip, {
            text: w.default.Messages.USER_PROFILE_LOAD_ERROR,
            spacing: 16
        }, function(e) {
            var t, n;
            return r.createElement(h.default, (t = B({}, e), n = (n = {
                className: k.warningCircleIcon,
                color: s.default.unsafe_rawColors.YELLOW_300.css
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        }), r.createElement(C.default, {
            className: i ? k.profileBadgesCompactNoTouch : k.profileBadges,
            user: t,
            guildId: n,
            isTryItOutFlow: o,
            size: C.BadgeSizes.SIZE_22
        }))
    }
    var H = v.default.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

    function x(e) {
        var t, n, o, u = e.user,
            s = e.displayProfile,
            c = e.avatarSrc,
            d = e.hasBanner,
            _ = e.status,
            p = e.isMobile,
            m = e.guildId,
            y = e.channelId,
            I = e.onClose,
            h = e.disableUserProfileLink,
            v = e.profileType,
            A = e.animateOnHover,
            N = e.hasProfileEffect,
            C = r.useContext(P.UserProfileContext).profileTheme,
            V = r.useContext(T.AnalyticsContext),
            x = u.isNonUserBot() && !u.isClyde(),
            Y = S.default.isPremiumAtLeast(null == s ? void 0 : s.premiumType, U.PremiumTypes.TIER_2),
            W = r.useMemo(function() {
                return (0, E.shouldDisableUserPresenceInChannel)(u, y)
            }, [u, y]),
            K = (0, f.default)().analyticsLocations,
            z = (0, g.useUserProfileAnalyticsContext)(),
            X = z.trackUserProfileAction,
            q = z.messageId,
            Q = z.roleId,
            J = h || u.isClyde(),
            Z = (0, b.default)({
                user: u,
                guildId: m,
                size: j,
                animateOnHover: A
            }),
            $ = Z.avatarDecorationSrc,
            ee = Z.avatarSrc,
            et = Z.eventHandlers,
            en = r.createElement("div", B({
                className: k.avatarHoverTarget
            }, et), r.createElement(H, {
                src: null != c ? c : ee,
                avatarDecoration: $,
                size: j,
                "aria-label": u.username,
                status: W ? M.StatusTypes.UNKNOWN : _,
                statusBackdropColor: null != C && Y && !W ? (0, l.getStatusBackdropColor)(C) : void 0,
                isMobile: p,
                statusTooltip: !0
            })),
            er = (0, a.match)(v).with(L.UserProfileTypes.POPOUT, function() {
                return (0, R.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: k.avatarPositionPremiumBanner,
                    premiumUserWithoutBanner: k.avatarPositionPremiumNoBanner,
                    default: k.avatarPositionNormal
                })({
                    isPremium: Y,
                    hasBanner: d,
                    hasProfileEffect: N
                })
            }).with(L.UserProfileTypes.POMELO_POPOUT, function() {
                return k.avatarPositionPomelo
            }).with(L.UserProfileTypes.PANEL, function() {
                return k.avatarPositionPanel
            }).exhaustive();
        return r.createElement(r.Fragment, null, r.createElement(l.Clickable, {
            className: i()((G(o = {}, k.clickable, !J), G(o, k.avatarWrapperNonUserBot, x), G(o, k.avatarWrapperNormal, !x), o), er),
            onClick: x || J ? void 0 : function() {
                X({
                    action: "PRESS_VIEW_PROFILE"
                }), (0, D.openUserProfileModal)({
                    userId: u.id,
                    guildId: null != m ? m : void 0,
                    channelId: null != y ? y : void 0,
                    messageId: null != q ? q : void 0,
                    roleId: null != Q ? Q : void 0,
                    sourceAnalyticsLocations: K,
                    analyticsLocation: V.location
                }), null == I || I()
            }
        }, en, !J && (n = (t = null != $) ? F : (0, l.getAvatarSize)(j), r.createElement(O.default, {
            mask: null == _ || _ === M.StatusTypes.UNKNOWN || W ? O.default.Masks.AVATAR_DEFAULT : (0, a.match)([t, p]).with([!0, !0], function() {
                return O.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80
            }).with([!0, !1], function() {
                return O.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80
            }).with([!1, !0], function() {
                return O.default.Masks.AVATAR_STATUS_MOBILE_80
            }).with([!1, !1], function() {
                return O.default.Masks.AVATAR_STATUS_ROUND_80
            }).exhaustive(),
            className: t ? k.avatarDecorationHint : k.avatarHint,
            style: t ? {
                borderRadius: .4 * n
            } : void 0,
            width: n,
            height: n
        }, r.createElement("div", {
            className: k.avatarHintInner
        }, w.default.Messages.VIEW_PROFILE)))))
    }

    function Y(e) {
        var t = e.user,
            n = e.displayProfile,
            o = e.guildId,
            i = e.channelId,
            a = e.onClose,
            u = e.isMobile,
            s = e.isStreaming,
            l = e.status,
            c = e.disableUserProfileLink,
            f = e.isHovering,
            d = e.showPremiumBadgeUpsell,
            _ = e.upsell;
        return r.createElement(r.Fragment, null, _, r.createElement(N.default, {
            user: t,
            displayProfile: n,
            onClose: a,
            guildId: o,
            profileType: L.UserProfileTypes.POPOUT,
            showPremiumBadgeUpsell: void 0 === d || d,
            isHovering: f,
            hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
        }), (null == n ? void 0 : n.profileEffectId) != null && r.createElement(p.default, {
            profileEffectId: null == n ? void 0 : n.profileEffectId,
            bannerAdjustment: 0,
            isHovering: f
        }), r.createElement(x, {
            user: t,
            displayProfile: n,
            status: s ? M.StatusTypes.STREAMING : l,
            isMobile: u,
            guildId: o,
            channelId: i,
            onClose: a,
            disableUserProfileLink: c,
            hasBanner: (null == n ? void 0 : n.banner) != null,
            hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
            profileType: L.UserProfileTypes.POPOUT
        }), r.createElement(V, {
            user: t,
            guildId: o
        }))
    }

    function W(e) {
        var t = e.user,
            n = e.displayProfile,
            o = e.guildId,
            i = e.channelId,
            a = e.onClose,
            s = e.disableUserProfileLink,
            l = e.isHovering,
            f = t.isNonUserBot(),
            d = (0, u.useStateFromStoresObject)([m.default, I.default], function() {
                var e = null != m.default.getAnyStreamForUser(t.id);
                return {
                    activity: I.default.findActivity(t.id, function(t) {
                        var n = t.type;
                        return e ? n === M.ActivityTypes.PLAYING : n !== M.ActivityTypes.CUSTOM_STATUS
                    }),
                    status: f ? null : I.default.getStatus(t.id),
                    isMobile: I.default.isMobileOnline(t.id)
                }
            }),
            _ = d.activity,
            E = d.status,
            y = d.isMobile;
        return r.createElement("div", {
            className: k.biteSizeHeaderContainer
        }, r.createElement(N.default, {
            user: t,
            displayProfile: n,
            onClose: a,
            guildId: o,
            profileType: L.UserProfileTypes.POPOUT,
            isHovering: l,
            hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
        }), (null == n ? void 0 : n.profileEffectId) != null && r.createElement(p.default, {
            profileEffectId: null == n ? void 0 : n.profileEffectId,
            bannerAdjustment: 0,
            isHovering: l
        }), r.createElement(x, {
            user: t,
            displayProfile: n,
            status: (0, c.default)(_) ? M.StatusTypes.STREAMING : E,
            isMobile: y,
            guildId: o,
            channelId: i,
            onClose: a,
            disableUserProfileLink: s,
            hasBanner: (null == n ? void 0 : n.banner) != null,
            hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
            profileType: L.UserProfileTypes.POPOUT
        }))
    }
}
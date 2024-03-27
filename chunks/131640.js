function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BiteSizeProfileHeader: function() {
            return Y
        },
        UserPopoutAvatar: function() {
            return x
        },
        UserPopoutBadgeList: function() {
            return V
        },
        default: function() {
            return H
        }
    }), n("627341");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("278074"),
        l = n("442837"),
        u = n("692547"),
        d = n("481060"),
        _ = n("420660"),
        c = n("1585"),
        E = n("927723"),
        I = n("233440"),
        T = n("680295"),
        f = n("199902"),
        S = n("430824"),
        h = n("158776"),
        A = n("759231"),
        m = n("806519"),
        N = n("626135"),
        O = n("74538"),
        p = n("998502"),
        R = n("785717"),
        C = n("621853"),
        g = n("204197"),
        L = n("735336"),
        D = n("793397"),
        v = n("184325"),
        M = n("747074"),
        y = n("171368"),
        P = n("228168"),
        U = n("981631"),
        b = n("474936"),
        G = n("689938"),
        w = n("181390");
    let k = d.AvatarSizes.SIZE_80,
        B = (0, c.getDecorationSizeForAvatarSize)(k);

    function V(e) {
        let {
            user: t,
            guildId: n,
            isTryItOutFlow: r,
            forProfileEffectModal: s
        } = e, a = (0, l.useStateFromStores)([C.default], () => C.default.getUserProfile(t.id), [t]), o = (0, l.useStateFromStores)([S.default], () => S.default.getGuild(n), [n]), _ = (0, E.useClydeProfilesEnabled)(o);
        return (0, i.jsxs)(i.Fragment, {
            children: [(null == a ? void 0 : a.profileFetchFailed) && (!t.isClyde() || _) && (0, i.jsx)(d.Tooltip, {
                text: G.default.Messages.USER_PROFILE_LOAD_ERROR,
                spacing: 16,
                children: e => (0, i.jsx)(A.default, {
                    ...e,
                    className: w.warningCircleIcon,
                    color: u.default.unsafe_rawColors.YELLOW_300.css
                })
            }), (0, i.jsx)(v.default, {
                className: s ? w.profileBadgesCompactNoTouch : w.profileBadges,
                user: t,
                guildId: n,
                isTryItOutFlow: r,
                size: v.BadgeSizes.SIZE_22
            })]
        })
    }
    let F = p.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

    function x(e) {
        let {
            user: t,
            displayProfile: n,
            avatarSrc: s,
            hasBanner: l,
            status: u,
            isMobile: _,
            guildId: c,
            channelId: E,
            onClose: T,
            disableUserProfileLink: f,
            profileType: S,
            animateOnHover: h,
            hasProfileEffect: A
        } = e, {
            profileTheme: p
        } = r.useContext(M.UserProfileContext), C = r.useContext(N.AnalyticsContext), L = t.isNonUserBot() && !t.isClyde(), v = O.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, b.PremiumTypes.TIER_2), V = r.useMemo(() => (0, I.shouldDisableUserPresenceInChannel)(t, E), [t, E]), {
            trackUserProfileAction: x,
            analyticsLocations: H,
            messageId: Y,
            roleId: j
        } = (0, R.useUserProfileAnalyticsContext)(), W = f || t.isClyde(), {
            avatarDecorationSrc: K,
            avatarSrc: z,
            eventHandlers: X
        } = (0, g.default)({
            user: t,
            guildId: c,
            size: k,
            animateOnHover: h
        }), Q = (0, i.jsx)("div", {
            className: w.avatarHoverTarget,
            ...X,
            children: (0, i.jsx)(F, {
                src: null != s ? s : z,
                avatarDecoration: K,
                size: k,
                "aria-label": t.username,
                status: V ? U.StatusTypes.UNKNOWN : u,
                statusBackdropColor: null != p && v && !V ? (0, d.getStatusBackdropColor)(p) : void 0,
                isMobile: _,
                statusTooltip: !0
            })
        }), q = (0, o.match)(S).with(P.UserProfileTypes.POPOUT, () => (0, D.buildGetPremiumUserBannerStyles)({
            premiumUserWithBanner: w.avatarPositionPremiumBanner,
            premiumUserWithoutBanner: w.avatarPositionPremiumNoBanner,
            default: w.avatarPositionNormal
        })({
            isPremium: v,
            hasBanner: l,
            hasProfileEffect: A
        })).with(P.UserProfileTypes.POMELO_POPOUT, () => w.avatarPositionPomelo).with(P.UserProfileTypes.PANEL, () => w.avatarPositionPanel).exhaustive();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(d.Clickable, {
                className: a()({
                    [w.clickable]: !W,
                    [w.avatarWrapperNonUserBot]: L,
                    [w.avatarWrapperNormal]: !L
                }, q),
                onClick: L || W ? void 0 : function() {
                    x({
                        action: "PRESS_VIEW_PROFILE"
                    }), (0, y.openUserProfileModal)({
                        userId: t.id,
                        guildId: null != c ? c : void 0,
                        channelId: null != E ? E : void 0,
                        messageId: null != Y ? Y : void 0,
                        roleId: null != j ? j : void 0,
                        sourceAnalyticsLocations: H,
                        analyticsLocation: C.location
                    }), null == T || T()
                },
                children: [Q, !W && function() {
                    let e = null != K,
                        t = e ? B : (0, d.getAvatarSize)(k);
                    return (0, i.jsx)(m.default, {
                        mask: null == u || u === U.StatusTypes.UNKNOWN || V ? m.default.Masks.AVATAR_DEFAULT : (0, o.match)([e, _]).with([!0, !0], () => m.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => m.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => m.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => m.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                        className: e ? w.avatarDecorationHint : w.avatarHint,
                        style: e ? {
                            borderRadius: .4 * t
                        } : void 0,
                        width: t,
                        height: t,
                        children: (0, i.jsx)("div", {
                            className: w.avatarHintInner,
                            children: G.default.Messages.VIEW_PROFILE
                        })
                    })
                }()]
            })
        })
    }

    function H(e) {
        let {
            user: t,
            displayProfile: n,
            guildId: r,
            channelId: s,
            onClose: a,
            isMobile: o,
            isStreaming: l,
            status: u,
            disableUserProfileLink: d,
            isHovering: _,
            showPremiumBadgeUpsell: c = !0,
            upsell: E
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [E, (0, i.jsx)(L.default, {
                user: t,
                displayProfile: n,
                onClose: a,
                guildId: r,
                profileType: P.UserProfileTypes.POPOUT,
                showPremiumBadgeUpsell: c,
                isHovering: _,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(T.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: _
            }), (0, i.jsx)(x, {
                user: t,
                displayProfile: n,
                status: l ? U.StatusTypes.STREAMING : u,
                isMobile: o,
                guildId: r,
                channelId: s,
                onClose: a,
                disableUserProfileLink: d,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: P.UserProfileTypes.POPOUT
            }), (0, i.jsx)(V, {
                user: t,
                guildId: r
            })]
        })
    }

    function Y(e) {
        let {
            user: t,
            displayProfile: n,
            guildId: r,
            channelId: s,
            onClose: a,
            disableUserProfileLink: o,
            isHovering: u
        } = e, d = t.isNonUserBot(), {
            activity: c,
            status: E,
            isMobile: I
        } = (0, l.useStateFromStoresObject)([f.default, h.default], () => {
            let e = null != f.default.getAnyStreamForUser(t.id);
            return {
                activity: h.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === U.ActivityTypes.PLAYING : n !== U.ActivityTypes.CUSTOM_STATUS
                }),
                status: d ? null : h.default.getStatus(t.id),
                isMobile: h.default.isMobileOnline(t.id)
            }
        });
        return (0, i.jsxs)("div", {
            className: w.biteSizeHeaderContainer,
            children: [(0, i.jsx)(L.default, {
                user: t,
                displayProfile: n,
                onClose: a,
                guildId: r,
                profileType: P.UserProfileTypes.POPOUT,
                isHovering: u,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(T.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: u
            }), (0, i.jsx)(x, {
                user: t,
                displayProfile: n,
                status: (0, _.default)(c) ? U.StatusTypes.STREAMING : E,
                isMobile: I,
                guildId: r,
                channelId: s,
                onClose: a,
                disableUserProfileLink: o,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: P.UserProfileTypes.POPOUT
            })]
        })
    }
}
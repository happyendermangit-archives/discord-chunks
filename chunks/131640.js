function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserPopoutAvatar: function() {
            return F
        },
        UserPopoutBadgeList: function() {
            return k
        },
        default: function() {
            return V
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
        _ = n("906732"),
        c = n("1585"),
        E = n("927723"),
        I = n("233440"),
        T = n("680295"),
        f = n("430824"),
        S = n("759231"),
        A = n("806519"),
        h = n("626135"),
        m = n("74538"),
        N = n("998502"),
        O = n("785717"),
        p = n("621853"),
        R = n("204197"),
        C = n("735336"),
        g = n("793397"),
        L = n("184325"),
        D = n("652853"),
        v = n("171368"),
        M = n("228168"),
        y = n("981631"),
        P = n("474936"),
        U = n("689938"),
        b = n("181390");
    let G = d.AvatarSizes.SIZE_80,
        w = (0, c.getDecorationSizeForAvatarSize)(G);

    function k(e) {
        let {
            user: t,
            guildId: n,
            isTryItOutFlow: r,
            forProfileEffectModal: s
        } = e, a = (0, l.useStateFromStores)([p.default], () => p.default.getUserProfile(t.id), [t]), o = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(n), [n]), _ = (0, E.useClydeProfilesEnabled)(o);
        return (0, i.jsxs)(i.Fragment, {
            children: [(null == a ? void 0 : a.profileFetchFailed) && (!t.isClyde() || _) && (0, i.jsx)(d.Tooltip, {
                text: U.default.Messages.USER_PROFILE_LOAD_ERROR,
                spacing: 16,
                children: e => (0, i.jsx)(S.default, {
                    ...e,
                    className: b.warningCircleIcon,
                    color: u.default.unsafe_rawColors.YELLOW_300.css
                })
            }), (0, i.jsx)(L.default, {
                className: s ? b.profileBadgesCompactNoTouch : b.profileBadges,
                user: t,
                guildId: n,
                isTryItOutFlow: r,
                size: L.BadgeSizes.SIZE_22
            })]
        })
    }
    let B = N.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

    function F(e) {
        let {
            user: t,
            displayProfile: n,
            avatarSrc: s,
            hasBanner: l,
            status: u,
            isMobile: c,
            guildId: E,
            channelId: T,
            onClose: f,
            disableUserProfileLink: S,
            profileType: N,
            animateOnHover: p,
            hasProfileEffect: C
        } = e, {
            profileTheme: L
        } = (0, D.useUserProfileThemeContext)(), k = r.useContext(h.AnalyticsContext), F = t.isNonUserBot() && !t.isClyde(), V = m.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, P.PremiumTypes.TIER_2), x = r.useMemo(() => (0, I.shouldDisableUserPresenceInChannel)(t, T), [t, T]), {
            analyticsLocations: H
        } = (0, _.default)(), {
            trackUserProfileAction: Y,
            messageId: j,
            roleId: W
        } = (0, O.useUserProfileAnalyticsContext)(), K = S || t.isClyde(), {
            avatarDecorationSrc: z,
            avatarSrc: X,
            eventHandlers: Q
        } = (0, R.default)({
            user: t,
            guildId: E,
            size: G,
            animateOnHover: p
        }), q = (0, i.jsx)("div", {
            className: b.avatarHoverTarget,
            ...Q,
            children: (0, i.jsx)(B, {
                src: null != s ? s : X,
                avatarDecoration: z,
                size: G,
                "aria-label": t.username,
                status: x ? y.StatusTypes.UNKNOWN : u,
                statusBackdropColor: null != L && V && !x ? (0, d.getStatusBackdropColor)(L) : void 0,
                isMobile: c,
                statusTooltip: !0
            })
        }), J = (0, o.match)(N).with(M.UserProfileTypes.POPOUT, () => (0, g.buildGetPremiumUserBannerStyles)({
            premiumUserWithBanner: b.avatarPositionPremiumBanner,
            premiumUserWithoutBanner: b.avatarPositionPremiumNoBanner,
            default: b.avatarPositionNormal
        })({
            isPremium: V,
            hasBanner: l,
            hasProfileEffect: C
        })).with(M.UserProfileTypes.POMELO_POPOUT, () => b.avatarPositionPomelo).with(M.UserProfileTypes.PANEL, () => b.avatarPositionPanel).exhaustive();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(d.Clickable, {
                className: a()({
                    [b.clickable]: !K,
                    [b.avatarWrapperNonUserBot]: F,
                    [b.avatarWrapperNormal]: !F
                }, J),
                onClick: F || K ? void 0 : function() {
                    Y({
                        action: "PRESS_VIEW_PROFILE"
                    }), (0, v.openUserProfileModal)({
                        userId: t.id,
                        guildId: E,
                        channelId: T,
                        messageId: j,
                        roleId: W,
                        sourceAnalyticsLocations: H,
                        analyticsLocation: k.location
                    }), null == f || f()
                },
                children: [q, !K && function() {
                    let e = null != z,
                        t = e ? w : (0, d.getAvatarSize)(G);
                    return (0, i.jsx)(A.default, {
                        mask: null == u || u === y.StatusTypes.UNKNOWN || x ? A.default.Masks.AVATAR_DEFAULT : (0, o.match)([e, c]).with([!0, !0], () => A.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => A.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => A.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => A.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                        className: e ? b.avatarDecorationHint : b.avatarHint,
                        style: e ? {
                            borderRadius: .4 * t
                        } : void 0,
                        width: t,
                        height: t,
                        children: (0, i.jsx)("div", {
                            className: b.avatarHintInner,
                            children: U.default.Messages.VIEW_PROFILE
                        })
                    })
                }()]
            })
        })
    }

    function V(e) {
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
            children: [E, (0, i.jsx)(C.default, {
                user: t,
                displayProfile: n,
                onClose: a,
                guildId: r,
                profileType: M.UserProfileTypes.POPOUT,
                showPremiumBadgeUpsell: c,
                isHovering: _,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(T.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: _
            }), (0, i.jsx)(F, {
                user: t,
                displayProfile: n,
                status: l ? y.StatusTypes.STREAMING : u,
                isMobile: o,
                guildId: r,
                channelId: s,
                onClose: a,
                disableUserProfileLink: d,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: M.UserProfileTypes.POPOUT
            }), (0, i.jsx)(k, {
                user: t,
                guildId: r
            })]
        })
    }
}
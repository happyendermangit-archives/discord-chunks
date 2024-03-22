function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserPopoutBadgeList: function() {
            return U
        },
        UserPopoutAvatar: function() {
            return w
        },
        default: function() {
            return F
        }
    }), n("794252");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("506838"),
        o = n("446674"),
        u = n("669491"),
        d = n("77078");
    n("502651");
    var c = n("606292"),
        f = n("980215"),
        p = n("824794"),
        m = n("635471");
    n("373469");
    var h = n("305961");
    n("824563");
    var x = n("423487"),
        E = n("587974"),
        y = n("599110"),
        g = n("719923"),
        S = n("50885"),
        C = n("756507"),
        T = n("713135"),
        _ = n("106435"),
        I = n("289918"),
        v = n("878569"),
        N = n("590006"),
        A = n("430312"),
        O = n("401642"),
        R = n("590456"),
        M = n("49111"),
        k = n("646718"),
        L = n("782340"),
        P = n("291809");
    let b = d.AvatarSizes.SIZE_80,
        j = (0, c.getDecorationSizeForAvatarSize)(b);

    function U(e) {
        let {
            user: t,
            guildId: n,
            isTryItOutFlow: l,
            forProfileEffectModal: a
        } = e, s = (0, o.useStateFromStores)([T.default], () => T.default.getUserProfile(t.id), [t]), r = (0, o.useStateFromStores)([h.default], () => h.default.getGuild(n), [n]), c = (0, f.useClydeProfilesEnabled)(r);
        return (0, i.jsxs)(i.Fragment, {
            children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || c) && (0, i.jsx)(d.Tooltip, {
                text: L.default.Messages.USER_PROFILE_LOAD_ERROR,
                spacing: 16,
                children: e => (0, i.jsx)(x.default, {
                    ...e,
                    className: P.warningCircleIcon,
                    color: u.default.unsafe_rawColors.YELLOW_300.css
                })
            }), (0, i.jsx)(N.default, {
                className: a ? P.profileBadgesCompactNoTouch : P.profileBadges,
                user: t,
                guildId: n,
                isTryItOutFlow: l,
                size: N.BadgeSizes.SIZE_22
            })]
        })
    }
    let D = S.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

    function w(e) {
        let {
            user: t,
            displayProfile: n,
            avatarSrc: a,
            hasBanner: o,
            status: u,
            isMobile: c,
            guildId: f,
            channelId: m,
            onClose: h,
            disableUserProfileLink: x,
            profileType: S,
            animateOnHover: T,
            hasProfileEffect: I
        } = e, {
            profileTheme: N
        } = l.useContext(A.UserProfileContext), U = l.useContext(y.AnalyticsContext), w = t.isNonUserBot() && !t.isClyde(), F = g.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, k.PremiumTypes.TIER_2), G = l.useMemo(() => (0, p.shouldDisableUserPresenceInChannel)(t, m), [t, m]), {
            trackUserProfileAction: H,
            analyticsLocations: B,
            messageId: V,
            roleId: K
        } = (0, C.useUserProfileAnalyticsContext)(), W = x || t.isClyde(), {
            avatarDecorationSrc: Y,
            avatarSrc: z,
            eventHandlers: Z
        } = (0, _.default)({
            user: t,
            guildId: f,
            size: b,
            animateOnHover: T
        }), J = (0, i.jsx)("div", {
            className: P.avatarHoverTarget,
            ...Z,
            children: (0, i.jsx)(D, {
                src: null != a ? a : z,
                avatarDecoration: Y,
                size: b,
                "aria-label": t.username,
                status: G ? M.StatusTypes.UNKNOWN : u,
                statusBackdropColor: null != N && F && !G ? (0, d.getStatusBackdropColor)(N) : void 0,
                isMobile: c,
                statusTooltip: !0
            })
        }), q = (0, r.match)(S).with(R.UserProfileTypes.POPOUT, () => {
            let e = (0, v.buildGetPremiumUserBannerStyles)({
                premiumUserWithBanner: P.avatarPositionPremiumBanner,
                premiumUserWithoutBanner: P.avatarPositionPremiumNoBanner,
                default: P.avatarPositionNormal
            });
            return e({
                isPremium: F,
                hasBanner: o,
                hasProfileEffect: I
            })
        }).with(R.UserProfileTypes.POMELO_POPOUT, () => P.avatarPositionPomelo).with(R.UserProfileTypes.PANEL, () => P.avatarPositionPanel).exhaustive();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(d.Clickable, {
                className: s({
                    [P.clickable]: !W,
                    [P.avatarWrapperNonUserBot]: w,
                    [P.avatarWrapperNormal]: !w
                }, q),
                onClick: w || W ? void 0 : function() {
                    H({
                        action: "PRESS_VIEW_PROFILE"
                    }), (0, O.openUserProfileModal)({
                        userId: t.id,
                        guildId: null != f ? f : void 0,
                        channelId: null != m ? m : void 0,
                        messageId: null != V ? V : void 0,
                        roleId: null != K ? K : void 0,
                        sourceAnalyticsLocations: B,
                        analyticsLocation: U.location
                    }), null == h || h()
                },
                children: [J, !W && function() {
                    let e = null != Y,
                        t = e ? j : (0, d.getAvatarSize)(b);
                    return (0, i.jsx)(E.default, {
                        mask: null == u || u === M.StatusTypes.UNKNOWN || G ? E.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, c]).with([!0, !0], () => E.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => E.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => E.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => E.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                        className: e ? P.avatarDecorationHint : P.avatarHint,
                        style: e ? {
                            borderRadius: .4 * t
                        } : void 0,
                        width: t,
                        height: t,
                        children: (0, i.jsx)("div", {
                            className: P.avatarHintInner,
                            children: L.default.Messages.VIEW_PROFILE
                        })
                    })
                }()]
            })
        })
    }

    function F(e) {
        let {
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: a,
            onClose: s,
            isMobile: r,
            isStreaming: o,
            status: u,
            disableUserProfileLink: d,
            isHovering: c,
            showPremiumBadgeUpsell: f = !0,
            upsell: p
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [p, (0, i.jsx)(I.default, {
                user: t,
                displayProfile: n,
                onClose: s,
                guildId: l,
                profileType: R.UserProfileTypes.POPOUT,
                showPremiumBadgeUpsell: f,
                isHovering: c,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(m.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: c
            }), (0, i.jsx)(w, {
                user: t,
                displayProfile: n,
                status: o ? M.StatusTypes.STREAMING : u,
                isMobile: r,
                guildId: l,
                channelId: a,
                onClose: s,
                disableUserProfileLink: d,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: R.UserProfileTypes.POPOUT
            }), (0, i.jsx)(U, {
                user: t,
                guildId: l
            })]
        })
    }
}
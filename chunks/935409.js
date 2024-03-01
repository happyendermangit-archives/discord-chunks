function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserPopoutBadgeList: function() {
            return U
        },
        UserPopoutAvatar: function() {
            return k
        },
        default: function() {
            return w
        }
    }), n("794252");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("506838"),
        o = n("446674"),
        u = n("669491"),
        d = n("77078"),
        c = n("606292"),
        f = n("980215"),
        m = n("824794"),
        p = n("635471"),
        h = n("305961"),
        E = n("423487"),
        g = n("587974"),
        C = n("599110"),
        S = n("719923"),
        T = n("50885"),
        v = n("713135"),
        I = n("106435"),
        _ = n("289918"),
        N = n("878569"),
        A = n("590006"),
        x = n("430312"),
        y = n("401642"),
        O = n("590456"),
        R = n("49111"),
        M = n("646718"),
        L = n("782340"),
        P = n("291809");
    let b = d.AvatarSizes.SIZE_80,
        j = (0, c.getDecorationSizeForAvatarSize)(b);

    function U(e) {
        let {
            user: t,
            guildId: n,
            isTryItOutFlow: i,
            forProfileEffectModal: a
        } = e, s = (0, o.useStateFromStores)([v.default], () => v.default.getUserProfile(t.id), [t]), r = (0, o.useStateFromStores)([h.default], () => h.default.getGuild(n), [n]), c = (0, f.useClydeProfilesEnabled)(r);
        return (0, l.jsxs)(l.Fragment, {
            children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || c) && (0, l.jsx)(d.Tooltip, {
                text: L.default.Messages.USER_PROFILE_LOAD_ERROR,
                spacing: 16,
                children: e => (0, l.jsx)(E.default, {
                    ...e,
                    className: P.warningCircleIcon,
                    color: u.default.unsafe_rawColors.YELLOW_300.css
                })
            }), (0, l.jsx)(A.default, {
                className: a ? P.profileBadgesCompactNoTouch : P.profileBadges,
                user: t,
                guildId: n,
                isTryItOutFlow: i,
                size: A.BadgeSizes.SIZE_22
            })]
        })
    }
    let D = T.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

    function k(e) {
        let {
            user: t,
            displayProfile: n,
            avatarSrc: a,
            hasBanner: o,
            status: u,
            isMobile: c,
            guildId: f,
            channelId: p,
            onClose: h,
            disableUserProfileLink: E,
            profileType: T,
            animateOnHover: v,
            hasProfileEffect: _
        } = e, {
            profileTheme: A
        } = i.useContext(x.UserProfileContext), U = i.useContext(C.AnalyticsContext), k = t.isNonUserBot() && !t.isClyde(), w = S.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, M.PremiumTypes.TIER_2), F = i.useMemo(() => (0, m.shouldDisableUserPresenceInChannel)(t, p), [t, p]), G = E || t.isClyde(), {
            avatarDecorationSrc: B,
            avatarSrc: H,
            eventHandlers: V
        } = (0, I.default)({
            user: t,
            guildId: f,
            size: b,
            animateOnHover: v
        }), K = (0, l.jsx)("div", {
            className: P.avatarHoverTarget,
            ...V,
            children: (0, l.jsx)(D, {
                src: null != a ? a : H,
                avatarDecoration: B,
                size: b,
                "aria-label": t.username,
                status: F ? R.StatusTypes.UNKNOWN : u,
                statusBackdropColor: null != A && w && !F ? (0, d.getStatusBackdropColor)(A) : void 0,
                isMobile: c,
                statusTooltip: !0
            })
        }), W = (0, r.match)(T).with(O.UserProfileTypes.POPOUT, () => {
            let e = (0, N.buildGetPremiumUserBannerStyles)({
                premiumUserWithBanner: P.avatarPositionPremiumBanner,
                premiumUserWithoutBanner: P.avatarPositionPremiumNoBanner,
                default: P.avatarPositionNormal
            });
            return e({
                isPremium: w && !k,
                hasBanner: o,
                hasProfileEffect: _
            })
        }).with(O.UserProfileTypes.POMELO_POPOUT, () => P.avatarPositionPomelo).with(O.UserProfileTypes.PANEL, () => P.avatarPositionPanel).exhaustive();
        return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)(d.Clickable, {
                className: s({
                    [P.clickable]: !G,
                    [P.avatarWrapperNonUserBot]: k,
                    [P.avatarWrapperNormal]: !k
                }, W),
                onClick: k || G ? void 0 : function() {
                    (0, y.openUserProfileModal)({
                        userId: t.id,
                        guildId: null != f ? f : void 0,
                        channelId: null != p ? p : void 0,
                        analyticsLocation: U.location
                    }), null == h || h()
                },
                children: [K, !G && function() {
                    let e = null != B,
                        t = e ? j : (0, d.getAvatarSize)(b);
                    return (0, l.jsx)(g.default, {
                        mask: null == u || u === R.StatusTypes.UNKNOWN || F ? g.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, c]).with([!0, !0], () => g.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => g.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => g.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => g.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                        className: e ? P.avatarDecorationHint : P.avatarHint,
                        style: e ? {
                            borderRadius: .4 * t
                        } : void 0,
                        width: t,
                        height: t,
                        children: (0, l.jsx)("div", {
                            className: P.avatarHintInner,
                            children: L.default.Messages.VIEW_PROFILE
                        })
                    })
                }()]
            })
        })
    }

    function w(e) {
        let {
            user: t,
            displayProfile: n,
            guildId: i,
            channelId: a,
            onClose: s,
            isMobile: r,
            isStreaming: o,
            status: u,
            disableUserProfileLink: d,
            isHovering: c,
            showPremiumBadgeUpsell: f = !0,
            upsell: m
        } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [m, (0, l.jsx)(_.default, {
                user: t,
                displayProfile: n,
                onClose: s,
                guildId: i,
                profileType: O.UserProfileTypes.POPOUT,
                showPremiumBadgeUpsell: f,
                isHovering: c,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, l.jsx)(p.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: c
            }), (0, l.jsx)(k, {
                user: t,
                displayProfile: n,
                status: o ? R.StatusTypes.STREAMING : u,
                isMobile: r,
                guildId: i,
                channelId: a,
                onClose: s,
                disableUserProfileLink: d,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: O.UserProfileTypes.POPOUT
            }), (0, l.jsx)(U, {
                user: t,
                guildId: i
            })]
        })
    }
}
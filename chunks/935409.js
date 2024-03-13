function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserPopoutBadgeList: function() {
            return j
        },
        UserPopoutAvatar: function() {
            return D
        },
        default: function() {
            return w
        }
    }), n("794252");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("506838"),
        o = n("446674"),
        u = n("669491"),
        d = n("77078"),
        c = n("606292"),
        f = n("980215"),
        p = n("824794"),
        m = n("635471"),
        h = n("305961"),
        x = n("423487"),
        E = n("587974"),
        y = n("599110"),
        g = n("719923"),
        S = n("50885"),
        C = n("713135"),
        I = n("106435"),
        T = n("289918"),
        _ = n("878569"),
        v = n("590006"),
        N = n("430312"),
        A = n("401642"),
        O = n("590456"),
        R = n("49111"),
        M = n("646718"),
        k = n("782340"),
        L = n("291809");
    let P = d.AvatarSizes.SIZE_80,
        b = (0, c.getDecorationSizeForAvatarSize)(P);

    function j(e) {
        let {
            user: t,
            guildId: n,
            isTryItOutFlow: l,
            forProfileEffectModal: a
        } = e, s = (0, o.useStateFromStores)([C.default], () => C.default.getUserProfile(t.id), [t]), r = (0, o.useStateFromStores)([h.default], () => h.default.getGuild(n), [n]), c = (0, f.useClydeProfilesEnabled)(r);
        return (0, i.jsxs)(i.Fragment, {
            children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || c) && (0, i.jsx)(d.Tooltip, {
                text: k.default.Messages.USER_PROFILE_LOAD_ERROR,
                spacing: 16,
                children: e => (0, i.jsx)(x.default, {
                    ...e,
                    className: L.warningCircleIcon,
                    color: u.default.unsafe_rawColors.YELLOW_300.css
                })
            }), (0, i.jsx)(v.default, {
                className: a ? L.profileBadgesCompactNoTouch : L.profileBadges,
                user: t,
                guildId: n,
                isTryItOutFlow: l,
                size: v.BadgeSizes.SIZE_22
            })]
        })
    }
    let U = S.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

    function D(e) {
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
            animateOnHover: C,
            hasProfileEffect: T
        } = e, {
            profileTheme: v
        } = l.useContext(N.UserProfileContext), j = l.useContext(y.AnalyticsContext), D = t.isNonUserBot() && !t.isClyde(), w = g.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, M.PremiumTypes.TIER_2), F = l.useMemo(() => (0, p.shouldDisableUserPresenceInChannel)(t, m), [t, m]), B = x || t.isClyde(), {
            avatarDecorationSrc: G,
            avatarSrc: H,
            eventHandlers: V
        } = (0, I.default)({
            user: t,
            guildId: f,
            size: P,
            animateOnHover: C
        }), K = (0, i.jsx)("div", {
            className: L.avatarHoverTarget,
            ...V,
            children: (0, i.jsx)(U, {
                src: null != a ? a : H,
                avatarDecoration: G,
                size: P,
                "aria-label": t.username,
                status: F ? R.StatusTypes.UNKNOWN : u,
                statusBackdropColor: null != v && w && !F ? (0, d.getStatusBackdropColor)(v) : void 0,
                isMobile: c,
                statusTooltip: !0
            })
        }), W = (0, r.match)(S).with(O.UserProfileTypes.POPOUT, () => {
            let e = (0, _.buildGetPremiumUserBannerStyles)({
                premiumUserWithBanner: L.avatarPositionPremiumBanner,
                premiumUserWithoutBanner: L.avatarPositionPremiumNoBanner,
                default: L.avatarPositionNormal
            });
            return e({
                isPremium: w && !D,
                hasBanner: o,
                hasProfileEffect: T
            })
        }).with(O.UserProfileTypes.POMELO_POPOUT, () => L.avatarPositionPomelo).with(O.UserProfileTypes.PANEL, () => L.avatarPositionPanel).exhaustive();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(d.Clickable, {
                className: s({
                    [L.clickable]: !B,
                    [L.avatarWrapperNonUserBot]: D,
                    [L.avatarWrapperNormal]: !D
                }, W),
                onClick: D || B ? void 0 : function() {
                    (0, A.openUserProfileModal)({
                        userId: t.id,
                        guildId: null != f ? f : void 0,
                        channelId: null != m ? m : void 0,
                        analyticsLocation: j.location
                    }), null == h || h()
                },
                children: [K, !B && function() {
                    let e = null != G,
                        t = e ? b : (0, d.getAvatarSize)(P);
                    return (0, i.jsx)(E.default, {
                        mask: null == u || u === R.StatusTypes.UNKNOWN || F ? E.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, c]).with([!0, !0], () => E.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => E.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => E.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => E.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                        className: e ? L.avatarDecorationHint : L.avatarHint,
                        style: e ? {
                            borderRadius: .4 * t
                        } : void 0,
                        width: t,
                        height: t,
                        children: (0, i.jsx)("div", {
                            className: L.avatarHintInner,
                            children: k.default.Messages.VIEW_PROFILE
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
            children: [p, (0, i.jsx)(T.default, {
                user: t,
                displayProfile: n,
                onClose: s,
                guildId: l,
                profileType: O.UserProfileTypes.POPOUT,
                showPremiumBadgeUpsell: f,
                isHovering: c,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(m.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: c
            }), (0, i.jsx)(D, {
                user: t,
                displayProfile: n,
                status: o ? R.StatusTypes.STREAMING : u,
                isMobile: r,
                guildId: l,
                channelId: a,
                onClose: s,
                disableUserProfileLink: d,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: O.UserProfileTypes.POPOUT
            }), (0, i.jsx)(j, {
                user: t,
                guildId: l
            })]
        })
    }
}
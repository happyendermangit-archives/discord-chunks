function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserPopoutBadgeList: function() {
            return F
        },
        UserPopoutAvatar: function() {
            return H
        },
        default: function() {
            return B
        },
        BiteSizeProfileHeader: function() {
            return V
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
        c = n("502651"),
        f = n("606292"),
        m = n("980215"),
        p = n("824794"),
        h = n("635471"),
        x = n("373469"),
        E = n("305961"),
        y = n("824563"),
        g = n("423487"),
        S = n("587974"),
        C = n("599110"),
        T = n("719923"),
        _ = n("50885"),
        I = n("756507"),
        v = n("713135"),
        A = n("106435"),
        N = n("289918"),
        R = n("878569"),
        O = n("590006"),
        M = n("430312"),
        k = n("401642"),
        L = n("590456"),
        P = n("49111"),
        b = n("646718"),
        j = n("782340"),
        U = n("291809");
    let D = d.AvatarSizes.SIZE_80,
        w = (0, f.getDecorationSizeForAvatarSize)(D);

    function F(e) {
        let {
            user: t,
            guildId: n,
            isTryItOutFlow: l,
            forProfileEffectModal: a
        } = e, s = (0, o.useStateFromStores)([v.default], () => v.default.getUserProfile(t.id), [t]), r = (0, o.useStateFromStores)([E.default], () => E.default.getGuild(n), [n]), c = (0, m.useClydeProfilesEnabled)(r);
        return (0, i.jsxs)(i.Fragment, {
            children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || c) && (0, i.jsx)(d.Tooltip, {
                text: j.default.Messages.USER_PROFILE_LOAD_ERROR,
                spacing: 16,
                children: e => (0, i.jsx)(g.default, {
                    ...e,
                    className: U.warningCircleIcon,
                    color: u.default.unsafe_rawColors.YELLOW_300.css
                })
            }), (0, i.jsx)(O.default, {
                className: a ? U.profileBadgesCompactNoTouch : U.profileBadges,
                user: t,
                guildId: n,
                isTryItOutFlow: l,
                size: O.BadgeSizes.SIZE_22
            })]
        })
    }
    let G = _.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

    function H(e) {
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
            profileType: E,
            animateOnHover: y,
            hasProfileEffect: g
        } = e, {
            profileTheme: _
        } = l.useContext(M.UserProfileContext), v = l.useContext(C.AnalyticsContext), N = t.isNonUserBot() && !t.isClyde(), O = T.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, b.PremiumTypes.TIER_2), F = l.useMemo(() => (0, p.shouldDisableUserPresenceInChannel)(t, m), [t, m]), {
            trackUserProfileAction: H,
            analyticsLocations: B,
            messageId: V,
            roleId: K
        } = (0, I.useUserProfileAnalyticsContext)(), W = x || t.isClyde(), {
            avatarDecorationSrc: Y,
            avatarSrc: z,
            eventHandlers: Q
        } = (0, A.default)({
            user: t,
            guildId: f,
            size: D,
            animateOnHover: y
        }), Z = (0, i.jsx)("div", {
            className: U.avatarHoverTarget,
            ...Q,
            children: (0, i.jsx)(G, {
                src: null != a ? a : z,
                avatarDecoration: Y,
                size: D,
                "aria-label": t.username,
                status: F ? P.StatusTypes.UNKNOWN : u,
                statusBackdropColor: null != _ && O && !F ? (0, d.getStatusBackdropColor)(_) : void 0,
                isMobile: c,
                statusTooltip: !0
            })
        }), q = (0, r.match)(E).with(L.UserProfileTypes.POPOUT, () => {
            let e = (0, R.buildGetPremiumUserBannerStyles)({
                premiumUserWithBanner: U.avatarPositionPremiumBanner,
                premiumUserWithoutBanner: U.avatarPositionPremiumNoBanner,
                default: U.avatarPositionNormal
            });
            return e({
                isPremium: O,
                hasBanner: o,
                hasProfileEffect: g
            })
        }).with(L.UserProfileTypes.POMELO_POPOUT, () => U.avatarPositionPomelo).with(L.UserProfileTypes.PANEL, () => U.avatarPositionPanel).exhaustive();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(d.Clickable, {
                className: s({
                    [U.clickable]: !W,
                    [U.avatarWrapperNonUserBot]: N,
                    [U.avatarWrapperNormal]: !N
                }, q),
                onClick: N || W ? void 0 : function() {
                    H({
                        action: "PRESS_VIEW_PROFILE"
                    }), (0, k.openUserProfileModal)({
                        userId: t.id,
                        guildId: null != f ? f : void 0,
                        channelId: null != m ? m : void 0,
                        messageId: null != V ? V : void 0,
                        roleId: null != K ? K : void 0,
                        sourceAnalyticsLocations: B,
                        analyticsLocation: v.location
                    }), null == h || h()
                },
                children: [Z, !W && function() {
                    let e = null != Y,
                        t = e ? w : (0, d.getAvatarSize)(D);
                    return (0, i.jsx)(S.default, {
                        mask: null == u || u === P.StatusTypes.UNKNOWN || F ? S.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, c]).with([!0, !0], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => S.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => S.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                        className: e ? U.avatarDecorationHint : U.avatarHint,
                        style: e ? {
                            borderRadius: .4 * t
                        } : void 0,
                        width: t,
                        height: t,
                        children: (0, i.jsx)("div", {
                            className: U.avatarHintInner,
                            children: j.default.Messages.VIEW_PROFILE
                        })
                    })
                }()]
            })
        })
    }

    function B(e) {
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
            upsell: m
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [m, (0, i.jsx)(N.default, {
                user: t,
                displayProfile: n,
                onClose: s,
                guildId: l,
                profileType: L.UserProfileTypes.POPOUT,
                showPremiumBadgeUpsell: f,
                isHovering: c,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(h.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: c
            }), (0, i.jsx)(H, {
                user: t,
                displayProfile: n,
                status: o ? P.StatusTypes.STREAMING : u,
                isMobile: r,
                guildId: l,
                channelId: a,
                onClose: s,
                disableUserProfileLink: d,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: L.UserProfileTypes.POPOUT
            }), (0, i.jsx)(F, {
                user: t,
                guildId: l
            })]
        })
    }

    function V(e) {
        let {
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: a,
            onClose: s,
            disableUserProfileLink: r,
            isHovering: u
        } = e, d = t.isNonUserBot(), {
            activity: f,
            status: m,
            isMobile: p
        } = (0, o.useStateFromStoresObject)([x.default, y.default], () => {
            let e = null != x.default.getAnyStreamForUser(t.id);
            return {
                activity: y.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === P.ActivityTypes.PLAYING : n !== P.ActivityTypes.CUSTOM_STATUS
                }),
                status: d ? null : y.default.getStatus(t.id),
                isMobile: y.default.isMobileOnline(t.id)
            }
        });
        return (0, i.jsxs)("div", {
            className: U.biteSizeHeaderContainer,
            children: [(0, i.jsx)(N.default, {
                user: t,
                displayProfile: n,
                onClose: s,
                guildId: l,
                profileType: L.UserProfileTypes.POPOUT,
                isHovering: u,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(h.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: u
            }), (0, i.jsx)(H, {
                user: t,
                displayProfile: n,
                status: (0, c.default)(f) ? P.StatusTypes.STREAMING : m,
                isMobile: p,
                guildId: l,
                channelId: a,
                onClose: s,
                disableUserProfileLink: r,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: L.UserProfileTypes.POPOUT
            })]
        })
    }
}
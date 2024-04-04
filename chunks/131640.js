function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BiteSizeProfileHeader: function() {
            return j
        },
        UserPopoutAvatar: function() {
            return H
        },
        UserPopoutBadgeList: function() {
            return F
        },
        default: function() {
            return Y
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
        c = n("906732"),
        E = n("1585"),
        I = n("927723"),
        T = n("233440"),
        f = n("680295"),
        S = n("199902"),
        h = n("430824"),
        A = n("158776"),
        m = n("759231"),
        N = n("806519"),
        O = n("626135"),
        p = n("74538"),
        R = n("998502"),
        C = n("785717"),
        g = n("621853"),
        L = n("204197"),
        D = n("735336"),
        v = n("793397"),
        M = n("184325"),
        y = n("747074"),
        P = n("171368"),
        U = n("228168"),
        b = n("981631"),
        G = n("474936"),
        w = n("689938"),
        B = n("181390");
    let k = d.AvatarSizes.SIZE_80,
        V = (0, E.getDecorationSizeForAvatarSize)(k);

    function F(e) {
        let {
            user: t,
            guildId: n,
            isTryItOutFlow: r,
            forProfileEffectModal: s
        } = e, a = (0, l.useStateFromStores)([g.default], () => g.default.getUserProfile(t.id), [t]), o = (0, l.useStateFromStores)([h.default], () => h.default.getGuild(n), [n]), _ = (0, I.useClydeProfilesEnabled)(o);
        return (0, i.jsxs)(i.Fragment, {
            children: [(null == a ? void 0 : a.profileFetchFailed) && (!t.isClyde() || _) && (0, i.jsx)(d.Tooltip, {
                text: w.default.Messages.USER_PROFILE_LOAD_ERROR,
                spacing: 16,
                children: e => (0, i.jsx)(m.default, {
                    ...e,
                    className: B.warningCircleIcon,
                    color: u.default.unsafe_rawColors.YELLOW_300.css
                })
            }), (0, i.jsx)(M.default, {
                className: s ? B.profileBadgesCompactNoTouch : B.profileBadges,
                user: t,
                guildId: n,
                isTryItOutFlow: r,
                size: M.BadgeSizes.SIZE_22
            })]
        })
    }
    let x = R.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

    function H(e) {
        let {
            user: t,
            displayProfile: n,
            avatarSrc: s,
            hasBanner: l,
            status: u,
            isMobile: _,
            guildId: E,
            channelId: I,
            onClose: f,
            disableUserProfileLink: S,
            profileType: h,
            animateOnHover: A,
            hasProfileEffect: m
        } = e, {
            profileTheme: R
        } = r.useContext(y.UserProfileContext), g = r.useContext(O.AnalyticsContext), D = t.isNonUserBot() && !t.isClyde(), M = p.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, G.PremiumTypes.TIER_2), F = r.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, I), [t, I]), {
            analyticsLocations: H
        } = (0, c.default)(), {
            trackUserProfileAction: Y,
            messageId: j,
            roleId: W
        } = (0, C.useUserProfileAnalyticsContext)(), K = S || t.isClyde(), {
            avatarDecorationSrc: z,
            avatarSrc: X,
            eventHandlers: Q
        } = (0, L.default)({
            user: t,
            guildId: E,
            size: k,
            animateOnHover: A
        }), q = (0, i.jsx)("div", {
            className: B.avatarHoverTarget,
            ...Q,
            children: (0, i.jsx)(x, {
                src: null != s ? s : X,
                avatarDecoration: z,
                size: k,
                "aria-label": t.username,
                status: F ? b.StatusTypes.UNKNOWN : u,
                statusBackdropColor: null != R && M && !F ? (0, d.getStatusBackdropColor)(R) : void 0,
                isMobile: _,
                statusTooltip: !0
            })
        }), J = (0, o.match)(h).with(U.UserProfileTypes.POPOUT, () => (0, v.buildGetPremiumUserBannerStyles)({
            premiumUserWithBanner: B.avatarPositionPremiumBanner,
            premiumUserWithoutBanner: B.avatarPositionPremiumNoBanner,
            default: B.avatarPositionNormal
        })({
            isPremium: M,
            hasBanner: l,
            hasProfileEffect: m
        })).with(U.UserProfileTypes.POMELO_POPOUT, () => B.avatarPositionPomelo).with(U.UserProfileTypes.PANEL, () => B.avatarPositionPanel).exhaustive();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(d.Clickable, {
                className: a()({
                    [B.clickable]: !K,
                    [B.avatarWrapperNonUserBot]: D,
                    [B.avatarWrapperNormal]: !D
                }, J),
                onClick: D || K ? void 0 : function() {
                    Y({
                        action: "PRESS_VIEW_PROFILE"
                    }), (0, P.openUserProfileModal)({
                        userId: t.id,
                        guildId: E,
                        channelId: I,
                        messageId: j,
                        roleId: W,
                        sourceAnalyticsLocations: H,
                        analyticsLocation: g.location
                    }), null == f || f()
                },
                children: [q, !K && function() {
                    let e = null != z,
                        t = e ? V : (0, d.getAvatarSize)(k);
                    return (0, i.jsx)(N.default, {
                        mask: null == u || u === b.StatusTypes.UNKNOWN || F ? N.default.Masks.AVATAR_DEFAULT : (0, o.match)([e, _]).with([!0, !0], () => N.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => N.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => N.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => N.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                        className: e ? B.avatarDecorationHint : B.avatarHint,
                        style: e ? {
                            borderRadius: .4 * t
                        } : void 0,
                        width: t,
                        height: t,
                        children: (0, i.jsx)("div", {
                            className: B.avatarHintInner,
                            children: w.default.Messages.VIEW_PROFILE
                        })
                    })
                }()]
            })
        })
    }

    function Y(e) {
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
            children: [E, (0, i.jsx)(D.default, {
                user: t,
                displayProfile: n,
                onClose: a,
                guildId: r,
                profileType: U.UserProfileTypes.POPOUT,
                showPremiumBadgeUpsell: c,
                isHovering: _,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(f.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: _
            }), (0, i.jsx)(H, {
                user: t,
                displayProfile: n,
                status: l ? b.StatusTypes.STREAMING : u,
                isMobile: o,
                guildId: r,
                channelId: s,
                onClose: a,
                disableUserProfileLink: d,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: U.UserProfileTypes.POPOUT
            }), (0, i.jsx)(F, {
                user: t,
                guildId: r
            })]
        })
    }

    function j(e) {
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
        } = (0, l.useStateFromStoresObject)([S.default, A.default], () => {
            let e = null != S.default.getAnyStreamForUser(t.id);
            return {
                activity: A.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === b.ActivityTypes.PLAYING : n !== b.ActivityTypes.CUSTOM_STATUS
                }),
                status: d ? null : A.default.getStatus(t.id),
                isMobile: A.default.isMobileOnline(t.id)
            }
        });
        return (0, i.jsxs)("div", {
            className: B.biteSizeHeaderContainer,
            children: [(0, i.jsx)(D.default, {
                user: t,
                displayProfile: n,
                onClose: a,
                guildId: r,
                profileType: U.UserProfileTypes.POPOUT,
                isHovering: u,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(f.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: u
            }), (0, i.jsx)(H, {
                user: t,
                displayProfile: n,
                status: (0, _.default)(c) ? b.StatusTypes.STREAMING : E,
                isMobile: I,
                guildId: r,
                channelId: s,
                onClose: a,
                disableUserProfileLink: o,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: U.UserProfileTypes.POPOUT
            })]
        })
    }
}
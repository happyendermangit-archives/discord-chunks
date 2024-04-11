function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BiteSizeProfileHeader: function() {
            return W
        },
        UserPopoutAvatar: function() {
            return Y
        },
        UserPopoutBadgeList: function() {
            return x
        },
        default: function() {
            return j
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
        A = n("430824"),
        h = n("158776"),
        m = n("759231"),
        N = n("806519"),
        O = n("626135"),
        p = n("74538"),
        R = n("998502"),
        C = n("785717"),
        g = n("621853"),
        L = n("204197"),
        D = n("78675"),
        v = n("735336"),
        M = n("793397"),
        y = n("184325"),
        P = n("747074"),
        U = n("171368"),
        b = n("228168"),
        G = n("981631"),
        w = n("474936"),
        k = n("689938"),
        B = n("181390");
    let F = d.AvatarSizes.SIZE_80,
        V = (0, E.getDecorationSizeForAvatarSize)(F);

    function x(e) {
        let {
            user: t,
            guildId: n,
            isTryItOutFlow: r,
            forProfileEffectModal: s
        } = e, a = (0, l.useStateFromStores)([g.default], () => g.default.getUserProfile(t.id), [t]), o = (0, l.useStateFromStores)([A.default], () => A.default.getGuild(n), [n]), _ = (0, I.useClydeProfilesEnabled)(o);
        return (0, i.jsxs)(i.Fragment, {
            children: [(null == a ? void 0 : a.profileFetchFailed) && (!t.isClyde() || _) && (0, i.jsx)(d.Tooltip, {
                text: k.default.Messages.USER_PROFILE_LOAD_ERROR,
                spacing: 16,
                children: e => (0, i.jsx)(m.default, {
                    ...e,
                    className: B.warningCircleIcon,
                    color: u.default.unsafe_rawColors.YELLOW_300.css
                })
            }), (0, i.jsx)(y.default, {
                className: s ? B.profileBadgesCompactNoTouch : B.profileBadges,
                user: t,
                guildId: n,
                isTryItOutFlow: r,
                size: y.BadgeSizes.SIZE_22
            })]
        })
    }
    let H = R.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

    function Y(e) {
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
            profileType: A,
            animateOnHover: h,
            hasProfileEffect: m
        } = e, {
            profileTheme: R
        } = r.useContext(P.UserProfileContext), g = r.useContext(O.AnalyticsContext), D = t.isNonUserBot() && !t.isClyde(), v = p.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, w.PremiumTypes.TIER_2), y = r.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, I), [t, I]), {
            analyticsLocations: x
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
            size: F,
            animateOnHover: h
        }), q = (0, i.jsx)("div", {
            className: B.avatarHoverTarget,
            ...Q,
            children: (0, i.jsx)(H, {
                src: null != s ? s : X,
                avatarDecoration: z,
                size: F,
                "aria-label": t.username,
                status: y ? G.StatusTypes.UNKNOWN : u,
                statusBackdropColor: null != R && v && !y ? (0, d.getStatusBackdropColor)(R) : void 0,
                isMobile: _,
                statusTooltip: !0
            })
        }), J = (0, o.match)(A).with(b.UserProfileTypes.POPOUT, () => (0, M.buildGetPremiumUserBannerStyles)({
            premiumUserWithBanner: B.avatarPositionPremiumBanner,
            premiumUserWithoutBanner: B.avatarPositionPremiumNoBanner,
            default: B.avatarPositionNormal
        })({
            isPremium: v,
            hasBanner: l,
            hasProfileEffect: m
        })).with(b.UserProfileTypes.POMELO_POPOUT, () => B.avatarPositionPomelo).with(b.UserProfileTypes.PANEL, () => B.avatarPositionPanel).exhaustive();
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
                    }), (0, U.openUserProfileModal)({
                        userId: t.id,
                        guildId: E,
                        channelId: I,
                        messageId: j,
                        roleId: W,
                        sourceAnalyticsLocations: x,
                        analyticsLocation: g.location
                    }), null == f || f()
                },
                children: [q, !K && function() {
                    let e = null != z,
                        t = e ? V : (0, d.getAvatarSize)(F);
                    return (0, i.jsx)(N.default, {
                        mask: null == u || u === G.StatusTypes.UNKNOWN || y ? N.default.Masks.AVATAR_DEFAULT : (0, o.match)([e, _]).with([!0, !0], () => N.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => N.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => N.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => N.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                        className: e ? B.avatarDecorationHint : B.avatarHint,
                        style: e ? {
                            borderRadius: .4 * t
                        } : void 0,
                        width: t,
                        height: t,
                        children: (0, i.jsx)("div", {
                            className: B.avatarHintInner,
                            children: k.default.Messages.VIEW_PROFILE
                        })
                    })
                }()]
            })
        })
    }

    function j(e) {
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
            children: [E, (0, i.jsx)(v.default, {
                user: t,
                displayProfile: n,
                onClose: a,
                guildId: r,
                profileType: b.UserProfileTypes.POPOUT,
                showPremiumBadgeUpsell: c,
                isHovering: _,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(f.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: _
            }), (0, i.jsx)(Y, {
                user: t,
                displayProfile: n,
                status: l ? G.StatusTypes.STREAMING : u,
                isMobile: o,
                guildId: r,
                channelId: s,
                onClose: a,
                disableUserProfileLink: d,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: b.UserProfileTypes.POPOUT
            }), (0, i.jsx)(x, {
                user: t,
                guildId: r
            })]
        })
    }

    function W(e) {
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
        } = (0, l.useStateFromStoresObject)([S.default, h.default], () => {
            let e = null != S.default.getAnyStreamForUser(t.id);
            return {
                activity: h.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === G.ActivityTypes.PLAYING : n !== G.ActivityTypes.CUSTOM_STATUS
                }),
                status: d ? null : h.default.getStatus(t.id),
                isMobile: h.default.isMobileOnline(t.id)
            }
        });
        return (0, i.jsxs)("div", {
            className: B.biteSizeHeaderContainer,
            children: [(0, i.jsx)(D.default, {
                user: t,
                displayProfile: n,
                guildId: r,
                profileType: b.UserProfileTypes.POPOUT,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(f.default, {
                profileEffectId: null == n ? void 0 : n.profileEffectId,
                bannerAdjustment: 0,
                isHovering: u
            }), (0, i.jsx)(Y, {
                user: t,
                displayProfile: n,
                status: (0, _.default)(c) ? G.StatusTypes.STREAMING : E,
                isMobile: I,
                guildId: r,
                channelId: s,
                onClose: a,
                disableUserProfileLink: o,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: b.UserProfileTypes.POPOUT
            })]
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return Q
        }
    }), n("222007");
    var i, l, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("509043"),
        d = n("446674"),
        c = n("669491"),
        f = n("77078"),
        p = n("79112"),
        m = n("812204"),
        h = n("685665"),
        x = n("462274"),
        E = n("335031"),
        y = n("252063"),
        g = n("38766"),
        S = n("845579"),
        C = n("271938"),
        _ = n("42203"),
        T = n("305961"),
        I = n("18494"),
        v = n("697218"),
        N = n("471671"),
        A = n("275623"),
        O = n("945330"),
        R = n("474571"),
        M = n("216422"),
        k = n("987772"),
        L = n("956089"),
        P = n("599110"),
        b = n("315102"),
        j = n("719923"),
        U = n("756507"),
        D = n("713135"),
        w = n("581295"),
        F = n("878569"),
        G = n("236100"),
        H = n("590456"),
        B = n("49111"),
        V = n("646718"),
        K = n("782340"),
        W = n("320399");
    (l = i || (i = {}))[l.SHOULD_LOAD = 0] = "SHOULD_LOAD", l[l.LOADING = 1] = "LOADING", l[l.COMPLETE = 2] = "COMPLETE";
    let Y = {
            [H.UserProfileTypes.POPOUT]: 18,
            [H.UserProfileTypes.MODAL]: 24,
            [H.UserProfileTypes.SETTINGS]: 0,
            [H.UserProfileTypes.PANEL]: 18,
            [H.UserProfileTypes.POMELO_POPOUT]: 18,
            [H.UserProfileTypes.CANCEL_MODAL]: 0
        },
        z = {
            [H.UserProfileTypes.MODAL]: B.AnalyticsPages.USER_PROFILE,
            [H.UserProfileTypes.POPOUT]: B.AnalyticsPages.USER_POPOUT,
            [H.UserProfileTypes.SETTINGS]: B.AnalyticsPages.USER_POPOUT,
            [H.UserProfileTypes.PANEL]: B.AnalyticsPages.DM_CHANNEL,
            [H.UserProfileTypes.POMELO_POPOUT]: B.AnalyticsPages.POMELO_POPOUT,
            [H.UserProfileTypes.CANCEL_MODAL]: B.AnalyticsPages.USER_POPOUT
        };

    function Z(e) {
        let {
            type: t,
            shown: i,
            onClick: l
        } = e, r = (0, d.useStateFromStores)([v.default], () => {
            let e = v.default.getCurrentUser();
            return j.default.canUsePremiumProfileCustomization(e)
        }), u = s.useRef(!1), {
            analyticsLocations: c
        } = (0, h.default)(m.default.BADGE);
        return s.useEffect(() => {
            i && !u.current && (u.current = !0, P.default.track(B.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: V.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                location: {
                    page: z[t],
                    section: B.AnalyticsSections.NITRO_BANNER,
                    object: B.AnalyticsObjects.NITRO_BADGE
                },
                location_stack: c
            }))
        }, [c, i, t]), (0, a.jsx)(f.Tooltip, {
            tooltipContentClassName: W.premiumIconTooltipContent,
            text: r ? K.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : K.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
            children: e => (0, a.jsx)(f.Clickable, {
                ...e,
                onClick: r ? void 0 : () => {
                    var e;
                    e = c, (0, f.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("292890").then(n.bind(n, "292890"));
                        return n => {
                            let {
                                onClose: i,
                                ...l
                            } = n;
                            return (0, a.jsx)(t, {
                                analyticsLocations: e,
                                title: K.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                description: K.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                    onAndMoreWithPremiumClick: () => {
                                        i(), p.default.open(B.UserSettingsSections.PREMIUM, null, {
                                            analyticsLocations: e
                                        })
                                    }
                                }),
                                onClose: i,
                                ...l
                            })
                        }
                    }), null == l || l()
                },
                className: o(W.premiumIconWrapper, {
                    [W.visible]: i,
                    [W.clickable]: !r
                }),
                children: (0, a.jsx)(L.TextBadge, {
                    color: "rgba(32, 34, 37, 0.8)",
                    text: (0, a.jsx)(M.default, {
                        width: 16,
                        height: 16,
                        className: W.premiumIcon
                    })
                })
            })
        })
    }

    function J(e) {
        let {
            darkenOnHover: t,
            profileType: n,
            profileLabel: i,
            icon: l,
            ...s
        } = e, r = Y[n], o = "pencil" === l ? k.default : R.default;
        return (0, a.jsx)(f.Clickable, {
            ...s,
            "aria-label": i,
            className: t ? W.pencilContainerDark : W.pencilContainer,
            children: (0, a.jsx)(f.Tooltip, {
                text: i,
                children: e => (0, a.jsx)(o, {
                    ...e,
                    width: r,
                    height: r,
                    className: W.editIcon
                })
            })
        })
    }

    function Q(e) {
        var t, n, i;
        let {
            user: l,
            displayProfile: r,
            bannerSrc: p,
            onClose: m,
            guildId: h,
            profileType: v = H.UserProfileTypes.POPOUT,
            isHovering: R,
            animateOnHover: M,
            allowEdit: k = !0,
            showPremiumBadgeUpsell: L = !0,
            hasProfileEffect: P = !1
        } = e, [Y, z] = s.useState((null == r ? void 0 : r.banner) == null ? 2 : 0), Q = (0, d.useStateFromStores)([T.default], () => T.default.getGuild(h)), q = (0, d.useStateFromStores)([C.default], () => C.default.getId()), X = q === l.id && k, $ = j.default.isPremiumAtLeast(null == r ? void 0 : r.premiumType, V.PremiumTypes.TIER_2), {
            trackUserProfileAction: ee
        } = (0, U.useUserProfileAnalyticsContext)(), [et, en] = s.useState(!1), ei = (0, d.useStateFromStores)([N.default], () => N.default.isFocused()), el = S.GifAutoPlay.getSetting(), ea = (0, f.useToken)(c.default.unsafe_rawColors.PRIMARY_800).hex(), es = (0, f.getAvatarSize)(f.AvatarSizes.SIZE_80), er = (0, u.hex2int)((0, x.default)(l.getAvatarURL(h, es), ea, !1)), eo = (0, E.default)(null !== (t = null == r ? void 0 : r.primaryColor) && void 0 !== t ? t : er).hsl, eu = (0, F.getUserBannerSize)(v), ed = null != p ? p : null == r ? void 0 : r.getBannerURL({
            size: eu,
            canAnimate: M || !el ? et : ei
        }), ec = null != ed, ef = (0, d.useStateFromStores)([D.default], () => D.default.getUserProfile(l.id)), ep = _.default.getChannel(I.default.getChannelId()), {
            appsInGDMEnabled: em,
            availableApplications: eh
        } = (0, y.usePrivateChannelIntegrationState)({
            channelId: null !== (n = null == ep ? void 0 : ep.id) && void 0 !== n ? n : B.EMPTY_STRING_SNOWFLAKE_ID
        }), ex = null == ef ? void 0 : ef.application, eE = em && null != eh.find(e => e.id === (null == ex ? void 0 : ex.id));
        (0, s.useEffect)(() => {
            if (ec && 0 === Y) {
                z(1);
                let e = new Image;
                e.src = ed, e.onload = () => z(2)
            }
        }, [l, ec, ed, Y]), s.useEffect(() => {
            if (el || !ec) return;
            let e = null != p ? p : null == r ? void 0 : r.getBannerURL({
                size: eu,
                canAnimate: !0
            });
            if (null == e) return;
            let t = new Image;
            t.src = e
        }, [el, ec, p, r, eu]);
        let ey = (0, g.default)({
            analyticsLocation: {
                page: B.AnalyticsPages.USER_POPOUT,
                section: B.AnalyticsSections.PROFILE_POPOUT
            }
        });
        return (0, a.jsx)(w.default, {
            isPremium: $,
            hasThemeColors: null !== (i = null == r ? void 0 : r.canEditThemes) && void 0 !== i && i,
            profileType: v,
            hasBanner: ec,
            hasProfileEffect: P,
            children: (0, a.jsxs)("div", {
                className: o(W.banner, (0, F.getUserBannerStyles)({
                    profileType: v,
                    user: {
                        hasBanner: ec,
                        isPremium: $,
                        hasProfileEffect: P
                    }
                }), {
                    [W.reducedMotion]: !el
                }),
                onMouseMove: () => en(!0),
                onMouseLeave: () => en(!1),
                style: {
                    backgroundImage: ec ? "url(".concat(ed, ")") : void 0,
                    backgroundColor: 2 !== Y ? c.default.unsafe_rawColors.PRIMARY_800.css : eo
                },
                children: [X ? null == Q ? (0, a.jsx)(J, {
                    darkenOnHover: P && R,
                    profileType: v,
                    profileLabel: K.default.Messages.EDIT_PROFILE,
                    icon: "pencil",
                    onClick: () => {
                        ee({
                            action: "EDIT_PROFILE"
                        }), null == m || m(), ey()
                    }
                }) : (0, a.jsx)(f.Popout, {
                    spacing: 6,
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(G.default, {
                            onClose: t,
                            onSelect: m,
                            guild: Q
                        })
                    },
                    children: e => (0, a.jsx)(J, {
                        darkenOnHover: P && R,
                        profileLabel: K.default.Messages.EDIT_PROFILE,
                        icon: "pencil",
                        ...e,
                        profileType: v
                    })
                }) : (() => {
                    let e = L && ec && v !== H.UserProfileTypes.SETTINGS;
                    return e ? (0, a.jsx)(Z, {
                        type: v,
                        shown: void 0 === R ? et : R,
                        onClick: () => {
                            ee({
                                action: "PRESS_PREMIUM_UPSELL"
                            }), null == m || m()
                        }
                    }) : null
                })(), eE ? v !== H.UserProfileTypes.MODAL ? null : (0, a.jsx)(f.Clickable, {
                    onClick: m,
                    "aria-label": K.default.Messages.BACK,
                    className: W.pencilContainer,
                    children: (0, a.jsx)(f.Tooltip, {
                        text: K.default.Messages.BACK,
                        children: e => (0, a.jsx)(O.default, {
                            ...e,
                            className: W.closeIcon,
                            color: "white"
                        })
                    })
                }) : null, !el && (0, b.isAnimatedImageURL)(ed) && (0, a.jsx)(A.default, {
                    className: W.gifTag
                })]
            })
        })
    }
}
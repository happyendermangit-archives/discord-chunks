function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return X
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("866442"),
        l = n("442837"),
        u = n("692547"),
        d = n("481060"),
        _ = n("230711"),
        c = n("100527"),
        E = n("906732"),
        I = n("220082"),
        T = n("583405"),
        f = n("556084"),
        S = n("300284"),
        h = n("695346"),
        A = n("314897"),
        m = n("592125"),
        N = n("430824"),
        p = n("944486"),
        O = n("594174"),
        R = n("451478"),
        C = n("311715"),
        g = n("465670"),
        L = n("937482"),
        v = n("466111"),
        D = n("185403"),
        M = n("26290"),
        y = n("626135"),
        P = n("768581"),
        U = n("74538"),
        b = n("785717"),
        G = n("621853"),
        w = n("888778"),
        B = n("943217"),
        k = n("793397"),
        V = n("841040"),
        x = n("228168"),
        F = n("981631"),
        H = n("474936"),
        Y = n("689938"),
        j = n("851641");
    let W = {
            [x.UserProfileTypes.POPOUT]: 18,
            [x.UserProfileTypes.MODAL]: 24,
            [x.UserProfileTypes.SETTINGS]: 0,
            [x.UserProfileTypes.PANEL]: 18,
            [x.UserProfileTypes.POMELO_POPOUT]: 18,
            [x.UserProfileTypes.CANCEL_MODAL]: 0
        },
        K = {
            [x.UserProfileTypes.MODAL]: F.AnalyticsPages.USER_PROFILE,
            [x.UserProfileTypes.POPOUT]: F.AnalyticsPages.USER_POPOUT,
            [x.UserProfileTypes.SETTINGS]: F.AnalyticsPages.USER_POPOUT,
            [x.UserProfileTypes.PANEL]: F.AnalyticsPages.DM_CHANNEL,
            [x.UserProfileTypes.POMELO_POPOUT]: F.AnalyticsPages.POMELO_POPOUT,
            [x.UserProfileTypes.CANCEL_MODAL]: F.AnalyticsPages.USER_POPOUT
        };

    function z(e) {
        let {
            type: t,
            shown: a,
            onClick: o
        } = e, u = (0, l.useStateFromStores)([O.default], () => {
            let e = O.default.getCurrentUser();
            return U.default.canUsePremiumProfileCustomization(e)
        }), I = r.useRef(!1), {
            analyticsLocations: T
        } = (0, E.default)(c.default.BADGE);
        return r.useEffect(() => {
            a && !I.current && (I.current = !0, y.default.track(F.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: H.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                location: {
                    page: K[t],
                    section: F.AnalyticsSections.NITRO_BANNER,
                    object: F.AnalyticsObjects.NITRO_BADGE
                },
                location_stack: T
            }))
        }, [T, a, t]), (0, i.jsx)(d.Tooltip, {
            tooltipContentClassName: j.premiumIconTooltipContent,
            text: u ? Y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
            children: e => (0, i.jsx)(d.Clickable, {
                ...e,
                onClick: u ? void 0 : () => {
                    var e;
                    e = T, (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await Promise.all([n.e("99387"), n.e("30364")]).then(n.bind(n, "968031"));
                        return n => {
                            let {
                                onClose: r,
                                ...a
                            } = n;
                            return (0, i.jsx)(t, {
                                analyticsLocations: e,
                                title: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                description: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                    onAndMoreWithPremiumClick: () => {
                                        r(), _.default.open(F.UserSettingsSections.PREMIUM, null, {
                                            analyticsLocations: e
                                        })
                                    }
                                }),
                                onClose: r,
                                ...a
                            })
                        }
                    }), null == o || o()
                },
                className: s()(j.premiumIconWrapper, {
                    [j.visible]: a,
                    [j.clickable]: !u
                }),
                children: (0, i.jsx)(M.TextBadge, {
                    color: "rgba(32, 34, 37, 0.8)",
                    text: (0, i.jsx)(v.default, {
                        width: 16,
                        height: 16,
                        className: j.premiumIcon
                    })
                })
            })
        })
    }

    function Z(e) {
        let {
            darkenOnHover: t,
            profileType: n,
            profileLabel: r,
            icon: a,
            ...s
        } = e, o = W[n], l = "pencil" === a ? D.default : L.default;
        return (0, i.jsx)(d.Clickable, {
            ...s,
            "aria-label": r,
            className: t ? j.pencilContainerDark : j.pencilContainer,
            children: (0, i.jsx)(d.Tooltip, {
                text: r,
                children: e => (0, i.jsx)(l, {
                    ...e,
                    width: o,
                    height: o,
                    className: j.editIcon
                })
            })
        })
    }

    function X(e) {
        var t, n, a;
        let {
            user: _,
            displayProfile: c,
            bannerSrc: E,
            onClose: O,
            guildId: L,
            profileType: v,
            isHovering: D,
            animateOnHover: M,
            allowEdit: y = !0,
            showPremiumBadgeUpsell: W = !0,
            hasProfileEffect: K = !1
        } = e, X = (0, l.useStateFromStores)([N.default], () => N.default.getGuild(L)), Q = (0, l.useStateFromStores)([A.default], () => A.default.getId()) === _.id && y, q = U.default.isPremiumAtLeast(null == c ? void 0 : c.premiumType, H.PremiumTypes.TIER_2), {
            trackUserProfileAction: J
        } = (0, b.useUserProfileAnalyticsContext)(), [$, ee] = r.useState(!1), et = (0, l.useStateFromStores)([R.default], () => R.default.isFocused()), en = h.GifAutoPlay.getSetting(), {
            bannerSrc: ei,
            status: er
        } = (0, w.default)({
            displayProfile: c,
            overrideBannerSrc: E,
            size: (0, k.getUserBannerSize)(v),
            canAnimate: M || !en ? $ : et
        }), ea = (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_800).hex(), es = (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80), eo = (0, o.hex2int)((0, I.default)(_.getAvatarURL(L, es), ea, !1)), el = (0, T.default)(null !== (t = null == c ? void 0 : c.primaryColor) && void 0 !== t ? t : eo).hsl, eu = (0, l.useStateFromStores)([G.default], () => G.default.getUserProfile(_.id)), ed = m.default.getChannel(p.default.getChannelId()), {
            appsInGDMEnabled: e_,
            availableApplications: ec
        } = (0, f.usePrivateChannelIntegrationState)({
            channelId: null !== (n = null == ed ? void 0 : ed.id) && void 0 !== n ? n : F.EMPTY_STRING_SNOWFLAKE_ID
        }), eE = null == eu ? void 0 : eu.application, eI = e_ && null != ec.find(e => e.id === (null == eE ? void 0 : eE.id)), eT = (0, S.default)({
            analyticsLocation: {
                page: F.AnalyticsPages.USER_POPOUT,
                section: F.AnalyticsSections.PROFILE_POPOUT
            }
        });
        return (0, i.jsx)(B.default, {
            isPremium: q,
            hasThemeColors: null !== (a = null == c ? void 0 : c.canEditThemes) && void 0 !== a && a,
            profileType: v,
            hasBanner: null != ei,
            hasProfileEffect: K,
            children: (0, i.jsxs)("div", {
                className: s()(j.banner, (0, k.getUserBannerStyles)({
                    profileType: v,
                    user: {
                        hasBanner: null != ei,
                        isPremium: q,
                        hasProfileEffect: K
                    }
                }), {
                    [j.reducedMotion]: !en
                }),
                onMouseMove: () => ee(!0),
                onMouseLeave: () => ee(!1),
                style: {
                    backgroundImage: null != ei ? "url(".concat(ei, ")") : void 0,
                    backgroundColor: er !== w.BannerLoadingStatus.COMPLETE ? u.default.unsafe_rawColors.PRIMARY_800.css : el
                },
                children: [Q ? null == X ? (0, i.jsx)(Z, {
                    darkenOnHover: K && D,
                    profileType: v,
                    profileLabel: Y.default.Messages.EDIT_PROFILE,
                    icon: "pencil",
                    onClick: () => {
                        J({
                            action: "EDIT_PROFILE"
                        }), null == O || O(), eT()
                    }
                }) : (0, i.jsx)(d.Popout, {
                    spacing: 6,
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, i.jsx)(V.default, {
                            onClose: t,
                            onSelect: O,
                            guild: X
                        })
                    },
                    children: e => (0, i.jsx)(Z, {
                        darkenOnHover: K && D,
                        profileLabel: Y.default.Messages.EDIT_PROFILE,
                        icon: "pencil",
                        ...e,
                        profileType: v
                    })
                }) : W && null != ei && v !== x.UserProfileTypes.SETTINGS ? (0, i.jsx)(z, {
                    type: v,
                    shown: void 0 === D ? $ : D,
                    onClick: () => {
                        J({
                            action: "PRESS_PREMIUM_UPSELL"
                        }), null == O || O()
                    }
                }) : null, eI ? v !== x.UserProfileTypes.MODAL ? null : (0, i.jsx)(d.Clickable, {
                    onClick: O,
                    "aria-label": Y.default.Messages.BACK,
                    className: j.pencilContainer,
                    children: (0, i.jsx)(d.Tooltip, {
                        text: Y.default.Messages.BACK,
                        children: e => (0, i.jsx)(g.default, {
                            ...e,
                            className: j.closeIcon,
                            color: "white"
                        })
                    })
                }) : null, !en && (0, P.isAnimatedImageURL)(ei) && (0, i.jsx)(C.default, {
                    className: j.gifTag
                })]
            })
        })
    }
}
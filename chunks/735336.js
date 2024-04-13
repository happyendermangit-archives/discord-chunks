function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return Q
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
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
        A = n("695346"),
        h = n("314897"),
        m = n("592125"),
        N = n("430824"),
        O = n("944486"),
        p = n("594174"),
        R = n("451478"),
        C = n("311715"),
        g = n("465670"),
        L = n("937482"),
        D = n("466111"),
        v = n("185403"),
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
        F = n("228168"),
        x = n("981631"),
        H = n("474936"),
        Y = n("689938"),
        j = n("350315");
    let W = {
            [F.UserProfileTypes.POPOUT]: 18,
            [F.UserProfileTypes.MODAL]: 24,
            [F.UserProfileTypes.SETTINGS]: 0,
            [F.UserProfileTypes.PANEL]: 18,
            [F.UserProfileTypes.POMELO_POPOUT]: 18,
            [F.UserProfileTypes.CANCEL_MODAL]: 0
        },
        K = {
            [F.UserProfileTypes.MODAL]: x.AnalyticsPages.USER_PROFILE,
            [F.UserProfileTypes.POPOUT]: x.AnalyticsPages.USER_POPOUT,
            [F.UserProfileTypes.SETTINGS]: x.AnalyticsPages.USER_POPOUT,
            [F.UserProfileTypes.PANEL]: x.AnalyticsPages.DM_CHANNEL,
            [F.UserProfileTypes.POMELO_POPOUT]: x.AnalyticsPages.POMELO_POPOUT,
            [F.UserProfileTypes.CANCEL_MODAL]: x.AnalyticsPages.USER_POPOUT
        };

    function z(e) {
        let {
            type: t,
            shown: s,
            onClick: o
        } = e, u = (0, l.useStateFromStores)([p.default], () => {
            let e = p.default.getCurrentUser();
            return U.default.canUsePremiumProfileCustomization(e)
        }), I = r.useRef(!1), {
            analyticsLocations: T
        } = (0, E.default)(c.default.BADGE);
        return r.useEffect(() => {
            s && !I.current && (I.current = !0, y.default.track(x.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: H.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                location: {
                    page: K[t],
                    section: x.AnalyticsSections.NITRO_BANNER,
                    object: x.AnalyticsObjects.NITRO_BADGE
                },
                location_stack: T
            }))
        }, [T, s, t]), (0, i.jsx)(d.Tooltip, {
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
                                ...s
                            } = n;
                            return (0, i.jsx)(t, {
                                analyticsLocations: e,
                                title: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                description: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                    onAndMoreWithPremiumClick: () => {
                                        r(), _.default.open(x.UserSettingsSections.PREMIUM, null, {
                                            analyticsLocations: e
                                        })
                                    }
                                }),
                                onClose: r,
                                ...s
                            })
                        }
                    }), null == o || o()
                },
                className: a()(j.premiumIconWrapper, {
                    [j.visible]: s,
                    [j.clickable]: !u
                }),
                children: (0, i.jsx)(M.TextBadge, {
                    color: "rgba(32, 34, 37, 0.8)",
                    text: (0, i.jsx)(D.default, {
                        width: 16,
                        height: 16,
                        className: j.premiumIcon
                    })
                })
            })
        })
    }

    function X(e) {
        let {
            darkenOnHover: t,
            profileType: n,
            profileLabel: r,
            icon: s,
            ...a
        } = e, o = W[n], l = "pencil" === s ? v.default : L.default;
        return (0, i.jsx)(d.Clickable, {
            ...a,
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

    function Q(e) {
        var t, n, s;
        let {
            user: _,
            displayProfile: c,
            bannerSrc: E,
            onClose: p,
            guildId: L,
            profileType: D,
            isHovering: v,
            animateOnHover: M,
            allowEdit: y = !0,
            showPremiumBadgeUpsell: W = !0,
            hasProfileEffect: K = !1
        } = e, Q = (0, l.useStateFromStores)([N.default], () => N.default.getGuild(L)), q = (0, l.useStateFromStores)([h.default], () => h.default.getId()) === _.id && y, Z = U.default.isPremiumAtLeast(null == c ? void 0 : c.premiumType, H.PremiumTypes.TIER_2), {
            trackUserProfileAction: J
        } = (0, b.useUserProfileAnalyticsContext)(), [$, ee] = r.useState(!1), et = (0, l.useStateFromStores)([R.default], () => R.default.isFocused()), en = A.GifAutoPlay.getSetting(), {
            bannerSrc: ei,
            status: er
        } = (0, w.default)({
            displayProfile: c,
            overrideBannerSrc: E,
            size: (0, k.getUserBannerSize)(D),
            canAnimate: M || !en ? $ : et
        }), es = (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_800).hex(), ea = (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80), eo = (0, o.hex2int)((0, I.default)(_.getAvatarURL(L, ea), es, !1)), el = (0, T.default)(null !== (t = null == c ? void 0 : c.primaryColor) && void 0 !== t ? t : eo).hsl, eu = (0, l.useStateFromStores)([G.default], () => G.default.getUserProfile(_.id)), ed = m.default.getChannel(O.default.getChannelId()), {
            appsInGDMEnabled: e_,
            availableApplications: ec
        } = (0, f.usePrivateChannelIntegrationState)({
            channelId: null !== (n = null == ed ? void 0 : ed.id) && void 0 !== n ? n : x.EMPTY_STRING_SNOWFLAKE_ID
        }), eE = null == eu ? void 0 : eu.application, eI = e_ && null != ec.find(e => e.id === (null == eE ? void 0 : eE.id)), eT = (0, S.default)({
            analyticsLocation: {
                page: x.AnalyticsPages.USER_POPOUT,
                section: x.AnalyticsSections.PROFILE_POPOUT
            }
        });
        return (0, i.jsx)(B.default, {
            isPremium: Z,
            hasThemeColors: null !== (s = null == c ? void 0 : c.canEditThemes) && void 0 !== s && s,
            profileType: D,
            hasBanner: null != ei,
            hasProfileEffect: K,
            children: (0, i.jsxs)("div", {
                className: a()(j.banner, (0, k.getUserBannerStyles)({
                    profileType: D,
                    user: {
                        hasBanner: null != ei,
                        isPremium: Z,
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
                children: [q ? null == Q ? (0, i.jsx)(X, {
                    darkenOnHover: K && v,
                    profileType: D,
                    profileLabel: Y.default.Messages.EDIT_PROFILE,
                    icon: "pencil",
                    onClick: () => {
                        J({
                            action: "EDIT_PROFILE"
                        }), null == p || p(), eT()
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
                            onSelect: p,
                            guild: Q
                        })
                    },
                    children: e => (0, i.jsx)(X, {
                        darkenOnHover: K && v,
                        profileLabel: Y.default.Messages.EDIT_PROFILE,
                        icon: "pencil",
                        ...e,
                        profileType: D
                    })
                }) : W && null != ei && D !== F.UserProfileTypes.SETTINGS ? (0, i.jsx)(z, {
                    type: D,
                    shown: void 0 === v ? $ : v,
                    onClick: () => {
                        J({
                            action: "PRESS_PREMIUM_UPSELL"
                        }), null == p || p()
                    }
                }) : null, eI ? D !== F.UserProfileTypes.MODAL ? null : (0, i.jsx)(d.Clickable, {
                    onClick: p,
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
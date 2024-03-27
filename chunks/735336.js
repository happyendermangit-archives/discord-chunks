function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return q
        }
    }), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("803997"),
        l = n.n(o),
        u = n("866442"),
        d = n("442837"),
        _ = n("692547"),
        c = n("481060"),
        E = n("230711"),
        I = n("100527"),
        T = n("906732"),
        f = n("220082"),
        S = n("583405"),
        h = n("556084"),
        A = n("300284"),
        m = n("695346"),
        N = n("314897"),
        O = n("592125"),
        p = n("430824"),
        R = n("944486"),
        C = n("594174"),
        g = n("451478"),
        L = n("311715"),
        D = n("465670"),
        v = n("937482"),
        M = n("466111"),
        y = n("185403"),
        P = n("26290"),
        U = n("626135"),
        b = n("768581"),
        G = n("74538"),
        w = n("785717"),
        k = n("621853"),
        B = n("943217"),
        V = n("793397"),
        F = n("841040"),
        x = n("228168"),
        H = n("981631"),
        Y = n("474936"),
        j = n("689938"),
        W = n("350315");
    (r = i || (i = {}))[r.SHOULD_LOAD = 0] = "SHOULD_LOAD", r[r.LOADING = 1] = "LOADING", r[r.COMPLETE = 2] = "COMPLETE";
    let K = {
            [x.UserProfileTypes.POPOUT]: 18,
            [x.UserProfileTypes.MODAL]: 24,
            [x.UserProfileTypes.SETTINGS]: 0,
            [x.UserProfileTypes.PANEL]: 18,
            [x.UserProfileTypes.POMELO_POPOUT]: 18,
            [x.UserProfileTypes.CANCEL_MODAL]: 0
        },
        z = {
            [x.UserProfileTypes.MODAL]: H.AnalyticsPages.USER_PROFILE,
            [x.UserProfileTypes.POPOUT]: H.AnalyticsPages.USER_POPOUT,
            [x.UserProfileTypes.SETTINGS]: H.AnalyticsPages.USER_POPOUT,
            [x.UserProfileTypes.PANEL]: H.AnalyticsPages.DM_CHANNEL,
            [x.UserProfileTypes.POMELO_POPOUT]: H.AnalyticsPages.POMELO_POPOUT,
            [x.UserProfileTypes.CANCEL_MODAL]: H.AnalyticsPages.USER_POPOUT
        };

    function X(e) {
        let {
            type: t,
            shown: i,
            onClick: r
        } = e, o = (0, d.useStateFromStores)([C.default], () => {
            let e = C.default.getCurrentUser();
            return G.default.canUsePremiumProfileCustomization(e)
        }), u = a.useRef(!1), {
            analyticsLocations: _
        } = (0, T.default)(I.default.BADGE);
        return a.useEffect(() => {
            i && !u.current && (u.current = !0, U.default.track(H.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: Y.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                location: {
                    page: z[t],
                    section: H.AnalyticsSections.NITRO_BANNER,
                    object: H.AnalyticsObjects.NITRO_BADGE
                },
                location_stack: _
            }))
        }, [_, i, t]), (0, s.jsx)(c.Tooltip, {
            tooltipContentClassName: W.premiumIconTooltipContent,
            text: o ? j.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : j.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
            children: e => (0, s.jsx)(c.Clickable, {
                ...e,
                onClick: o ? void 0 : () => {
                    var e;
                    e = _, (0, c.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await Promise.all([n.e("99387"), n.e("30364")]).then(n.bind(n, "968031"));
                        return n => {
                            let {
                                onClose: i,
                                ...r
                            } = n;
                            return (0, s.jsx)(t, {
                                analyticsLocations: e,
                                title: j.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                description: j.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                    onAndMoreWithPremiumClick: () => {
                                        i(), E.default.open(H.UserSettingsSections.PREMIUM, null, {
                                            analyticsLocations: e
                                        })
                                    }
                                }),
                                onClose: i,
                                ...r
                            })
                        }
                    }), null == r || r()
                },
                className: l()(W.premiumIconWrapper, {
                    [W.visible]: i,
                    [W.clickable]: !o
                }),
                children: (0, s.jsx)(P.TextBadge, {
                    color: "rgba(32, 34, 37, 0.8)",
                    text: (0, s.jsx)(M.default, {
                        width: 16,
                        height: 16,
                        className: W.premiumIcon
                    })
                })
            })
        })
    }

    function Q(e) {
        let {
            darkenOnHover: t,
            profileType: n,
            profileLabel: i,
            icon: r,
            ...a
        } = e, o = K[n], l = "pencil" === r ? y.default : v.default;
        return (0, s.jsx)(c.Clickable, {
            ...a,
            "aria-label": i,
            className: t ? W.pencilContainerDark : W.pencilContainer,
            children: (0, s.jsx)(c.Tooltip, {
                text: i,
                children: e => (0, s.jsx)(l, {
                    ...e,
                    width: o,
                    height: o,
                    className: W.editIcon
                })
            })
        })
    }

    function q(e) {
        var t, n, i;
        let {
            user: r,
            displayProfile: o,
            bannerSrc: E,
            onClose: I,
            guildId: T,
            profileType: C = x.UserProfileTypes.POPOUT,
            isHovering: v,
            animateOnHover: M,
            allowEdit: y = !0,
            showPremiumBadgeUpsell: P = !0,
            hasProfileEffect: U = !1
        } = e, [K, z] = a.useState((null == o ? void 0 : o.banner) == null ? 2 : 0), q = (0, d.useStateFromStores)([p.default], () => p.default.getGuild(T)), J = (0, d.useStateFromStores)([N.default], () => N.default.getId()) === r.id && y, Z = G.default.isPremiumAtLeast(null == o ? void 0 : o.premiumType, Y.PremiumTypes.TIER_2), {
            trackUserProfileAction: $
        } = (0, w.useUserProfileAnalyticsContext)(), [ee, et] = a.useState(!1), en = (0, d.useStateFromStores)([g.default], () => g.default.isFocused()), ei = m.GifAutoPlay.getSetting(), er = (0, c.useToken)(_.default.unsafe_rawColors.PRIMARY_800).hex(), es = (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80), ea = (0, u.hex2int)((0, f.default)(r.getAvatarURL(T, es), er, !1)), eo = (0, S.default)(null !== (t = null == o ? void 0 : o.primaryColor) && void 0 !== t ? t : ea).hsl, el = (0, V.getUserBannerSize)(C), eu = null != E ? E : null == o ? void 0 : o.getBannerURL({
            size: el,
            canAnimate: M || !ei ? ee : en
        }), ed = null != eu, e_ = (0, d.useStateFromStores)([k.default], () => k.default.getUserProfile(r.id)), ec = O.default.getChannel(R.default.getChannelId()), {
            appsInGDMEnabled: eE,
            availableApplications: eI
        } = (0, h.usePrivateChannelIntegrationState)({
            channelId: null !== (n = null == ec ? void 0 : ec.id) && void 0 !== n ? n : H.EMPTY_STRING_SNOWFLAKE_ID
        }), eT = null == e_ ? void 0 : e_.application, ef = eE && null != eI.find(e => e.id === (null == eT ? void 0 : eT.id));
        (0, a.useEffect)(() => {
            if (ed && 0 === K) {
                z(1);
                let e = new Image;
                e.src = eu, e.onload = () => z(2)
            }
        }, [r, ed, eu, K]), a.useEffect(() => {
            if (ei || !ed) return;
            let e = null != E ? E : null == o ? void 0 : o.getBannerURL({
                size: el,
                canAnimate: !0
            });
            if (null != e) new Image().src = e
        }, [ei, ed, E, o, el]);
        let eS = (0, A.default)({
            analyticsLocation: {
                page: H.AnalyticsPages.USER_POPOUT,
                section: H.AnalyticsSections.PROFILE_POPOUT
            }
        });
        return (0, s.jsx)(B.default, {
            isPremium: Z,
            hasThemeColors: null !== (i = null == o ? void 0 : o.canEditThemes) && void 0 !== i && i,
            profileType: C,
            hasBanner: ed,
            hasProfileEffect: U,
            children: (0, s.jsxs)("div", {
                className: l()(W.banner, (0, V.getUserBannerStyles)({
                    profileType: C,
                    user: {
                        hasBanner: ed,
                        isPremium: Z,
                        hasProfileEffect: U
                    }
                }), {
                    [W.reducedMotion]: !ei
                }),
                onMouseMove: () => et(!0),
                onMouseLeave: () => et(!1),
                style: {
                    backgroundImage: ed ? "url(".concat(eu, ")") : void 0,
                    backgroundColor: 2 !== K ? _.default.unsafe_rawColors.PRIMARY_800.css : eo
                },
                children: [J ? null == q ? (0, s.jsx)(Q, {
                    darkenOnHover: U && v,
                    profileType: C,
                    profileLabel: j.default.Messages.EDIT_PROFILE,
                    icon: "pencil",
                    onClick: () => {
                        $({
                            action: "EDIT_PROFILE"
                        }), null == I || I(), eS()
                    }
                }) : (0, s.jsx)(c.Popout, {
                    spacing: 6,
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, s.jsx)(F.default, {
                            onClose: t,
                            onSelect: I,
                            guild: q
                        })
                    },
                    children: e => (0, s.jsx)(Q, {
                        darkenOnHover: U && v,
                        profileLabel: j.default.Messages.EDIT_PROFILE,
                        icon: "pencil",
                        ...e,
                        profileType: C
                    })
                }) : P && ed && C !== x.UserProfileTypes.SETTINGS ? (0, s.jsx)(X, {
                    type: C,
                    shown: void 0 === v ? ee : v,
                    onClick: () => {
                        $({
                            action: "PRESS_PREMIUM_UPSELL"
                        }), null == I || I()
                    }
                }) : null, ef ? C !== x.UserProfileTypes.MODAL ? null : (0, s.jsx)(c.Clickable, {
                    onClick: I,
                    "aria-label": j.default.Messages.BACK,
                    className: W.pencilContainer,
                    children: (0, s.jsx)(c.Tooltip, {
                        text: j.default.Messages.BACK,
                        children: e => (0, s.jsx)(D.default, {
                            ...e,
                            className: W.closeIcon,
                            color: "white"
                        })
                    })
                }) : null, !ei && (0, b.isAnimatedImageURL)(eu) && (0, s.jsx)(L.default, {
                    className: W.gifTag
                })]
            })
        })
    }
}
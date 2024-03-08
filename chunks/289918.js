function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return J
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
        I = n("42203"),
        T = n("305961"),
        _ = n("18494"),
        v = n("697218"),
        N = n("471671"),
        A = n("275623"),
        O = n("945330"),
        k = n("474571"),
        M = n("216422"),
        R = n("987772"),
        L = n("956089"),
        b = n("599110"),
        P = n("315102"),
        j = n("719923"),
        U = n("713135"),
        D = n("581295"),
        w = n("878569"),
        F = n("236100"),
        B = n("590456"),
        G = n("49111"),
        H = n("646718"),
        V = n("782340"),
        K = n("320399");
    (l = i || (i = {}))[l.SHOULD_LOAD = 0] = "SHOULD_LOAD", l[l.LOADING = 1] = "LOADING", l[l.COMPLETE = 2] = "COMPLETE";
    let W = {
            [B.UserProfileTypes.POPOUT]: 18,
            [B.UserProfileTypes.MODAL]: 24,
            [B.UserProfileTypes.SETTINGS]: 0,
            [B.UserProfileTypes.PANEL]: 18,
            [B.UserProfileTypes.POMELO_POPOUT]: 18,
            [B.UserProfileTypes.CANCEL_MODAL]: 0
        },
        Y = {
            [B.UserProfileTypes.MODAL]: G.AnalyticsPages.USER_PROFILE,
            [B.UserProfileTypes.POPOUT]: G.AnalyticsPages.USER_POPOUT,
            [B.UserProfileTypes.SETTINGS]: G.AnalyticsPages.USER_POPOUT,
            [B.UserProfileTypes.PANEL]: G.AnalyticsPages.DM_CHANNEL,
            [B.UserProfileTypes.POMELO_POPOUT]: G.AnalyticsPages.POMELO_POPOUT,
            [B.UserProfileTypes.CANCEL_MODAL]: G.AnalyticsPages.USER_POPOUT
        };

    function z(e) {
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
            i && !u.current && (u.current = !0, b.default.track(G.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: H.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                location: {
                    page: Y[t],
                    section: G.AnalyticsSections.NITRO_BANNER,
                    object: G.AnalyticsObjects.NITRO_BADGE
                },
                location_stack: c
            }))
        }, [c, i, t]), (0, a.jsx)(f.Tooltip, {
            tooltipContentClassName: K.premiumIconTooltipContent,
            text: r ? V.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : V.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
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
                                title: V.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                description: V.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                    onAndMoreWithPremiumClick: () => {
                                        i(), p.default.open(G.UserSettingsSections.PREMIUM, null, {
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
                className: o(K.premiumIconWrapper, {
                    [K.visible]: i,
                    [K.clickable]: !r
                }),
                children: (0, a.jsx)(L.TextBadge, {
                    color: "rgba(32, 34, 37, 0.8)",
                    text: (0, a.jsx)(M.default, {
                        width: 16,
                        height: 16,
                        className: K.premiumIcon
                    })
                })
            })
        })
    }

    function Z(e) {
        let {
            darkenOnHover: t,
            profileType: n,
            profileLabel: i,
            icon: l,
            ...s
        } = e, r = W[n], o = "pencil" === l ? R.default : k.default;
        return (0, a.jsx)(f.Clickable, {
            ...s,
            "aria-label": i,
            className: t ? K.pencilContainerDark : K.pencilContainer,
            children: (0, a.jsx)(f.Tooltip, {
                text: i,
                children: e => (0, a.jsx)(o, {
                    ...e,
                    width: r,
                    height: r,
                    className: K.editIcon
                })
            })
        })
    }

    function J(e) {
        var t, n, i;
        let {
            user: l,
            displayProfile: r,
            bannerSrc: p,
            onClose: m,
            guildId: h,
            profileType: v = B.UserProfileTypes.POPOUT,
            isHovering: k,
            animateOnHover: M,
            allowEdit: R = !0,
            showPremiumBadgeUpsell: L = !0,
            hasProfileEffect: b = !1
        } = e, [W, Y] = s.useState((null == r ? void 0 : r.banner) == null ? 2 : 0), J = (0, d.useStateFromStores)([T.default], () => T.default.getGuild(h)), q = (0, d.useStateFromStores)([C.default], () => C.default.getId()), X = q === l.id && R, Q = j.default.isPremiumAtLeast(null == r ? void 0 : r.premiumType, H.PremiumTypes.TIER_2), [$, ee] = s.useState(!1), et = (0, d.useStateFromStores)([N.default], () => N.default.isFocused()), en = S.GifAutoPlay.getSetting(), ei = (0, f.useToken)(c.default.unsafe_rawColors.PRIMARY_800).hex(), el = (0, f.getAvatarSize)(f.AvatarSizes.SIZE_80), ea = (0, u.hex2int)((0, x.default)(l.getAvatarURL(h, el), ei, !1)), es = (0, E.default)(null !== (t = null == r ? void 0 : r.primaryColor) && void 0 !== t ? t : ea).hsl, er = (0, w.getUserBannerSize)(v), eo = null != p ? p : null == r ? void 0 : r.getBannerURL({
            size: er,
            canAnimate: M || !en ? $ : et
        }), eu = null != eo, ed = (0, d.useStateFromStores)([U.default], () => U.default.getUserProfile(l.id)), ec = I.default.getChannel(_.default.getChannelId()), {
            appsInGDMEnabled: ef,
            availableApplications: ep
        } = (0, y.usePrivateChannelIntegrationState)({
            channelId: null !== (n = null == ec ? void 0 : ec.id) && void 0 !== n ? n : G.EMPTY_STRING_SNOWFLAKE_ID
        }), em = null == ed ? void 0 : ed.application, eh = ef && null != ep.find(e => e.id === (null == em ? void 0 : em.id));
        (0, s.useEffect)(() => {
            if (eu && Q && 0 === W) {
                Y(1);
                let e = new Image;
                e.src = eo, e.onload = () => Y(2)
            }
        }, [l, eu, Q, eo, W]), s.useEffect(() => {
            if (en || !Q) return;
            let e = null != p ? p : null == r ? void 0 : r.getBannerURL({
                size: er,
                canAnimate: !0
            });
            if (null == e) return;
            let t = new Image;
            t.src = e
        }, [en, Q, p, r, er]);
        let ex = (0, g.default)({
            analyticsLocation: {
                page: G.AnalyticsPages.USER_POPOUT,
                section: G.AnalyticsSections.PROFILE_POPOUT
            }
        });
        return (0, a.jsx)(D.default, {
            isPremium: Q,
            hasThemeColors: null !== (i = null == r ? void 0 : r.canEditThemes) && void 0 !== i && i,
            profileType: v,
            hasBanner: eu,
            hasProfileEffect: b,
            children: (0, a.jsxs)("div", {
                className: o(K.banner, (0, w.getUserBannerStyles)({
                    profileType: v,
                    user: {
                        hasBanner: eu,
                        isPremium: Q,
                        hasProfileEffect: b
                    }
                }), {
                    [K.reducedMotion]: !en
                }),
                onMouseMove: () => ee(!0),
                onMouseLeave: () => ee(!1),
                style: {
                    backgroundImage: eu && Q ? "url(".concat(eo, ")") : void 0,
                    backgroundColor: 2 !== W ? c.default.unsafe_rawColors.PRIMARY_800.css : es
                },
                children: [X ? null == J ? (0, a.jsx)(Z, {
                    darkenOnHover: b && k,
                    profileType: v,
                    profileLabel: V.default.Messages.EDIT_PROFILE,
                    icon: "pencil",
                    onClick: () => {
                        null == m || m(), ex()
                    }
                }) : null == J ? null : (0, a.jsx)(f.Popout, {
                    spacing: 6,
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(F.default, {
                            onClose: t,
                            onSelect: m,
                            guild: J
                        })
                    },
                    children: e => (0, a.jsx)(Z, {
                        darkenOnHover: b && k,
                        profileLabel: V.default.Messages.EDIT_PROFILE,
                        icon: "pencil",
                        ...e,
                        profileType: v
                    })
                }) : (() => {
                    let e = L && eu && v !== B.UserProfileTypes.SETTINGS;
                    return e ? (0, a.jsx)(z, {
                        type: v,
                        shown: void 0 === k ? $ : k,
                        onClick: m
                    }) : null
                })(), eh ? v !== B.UserProfileTypes.MODAL ? null : (0, a.jsx)(f.Clickable, {
                    onClick: m,
                    "aria-label": V.default.Messages.BACK,
                    className: K.pencilContainer,
                    children: (0, a.jsx)(f.Tooltip, {
                        text: V.default.Messages.BACK,
                        children: e => (0, a.jsx)(O.default, {
                            ...e,
                            className: K.closeIcon,
                            color: "white"
                        })
                    })
                }) : null, !en && (0, P.isAnimatedImageURL)(eo) && (0, a.jsx)(A.default, {
                    className: K.gifTag
                })]
            })
        })
    }
}
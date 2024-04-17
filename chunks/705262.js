function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ThemeSelectionGroupType: function() {
            return i
        },
        trackClientThemeUpdated: function() {
            return x
        }
    }), n("627341"), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("278074"),
        d = n("442837"),
        _ = n("524437"),
        c = n("780384"),
        E = n("481060"),
        I = n("153867"),
        T = n("607070"),
        f = n("100527"),
        S = n("906732"),
        h = n("98278"),
        A = n("639119"),
        m = n("165583"),
        N = n("587446"),
        p = n("781391"),
        O = n("210887"),
        R = n("740492"),
        C = n("301822"),
        g = n("153124"),
        L = n("626135"),
        D = n("238302"),
        v = n("514361"),
        M = n("583901"),
        y = n("469115"),
        P = n("981631"),
        U = n("474936"),
        b = n("874893"),
        G = n("526761"),
        w = n("231338"),
        B = n("689938"),
        k = n("209395");
    (r = i || (i = {})).EDITOR = "EDITOR", r.SETTINGS = "SETTINGS";
    let V = Object.freeze({
            EDITOR: G.UserSettingsDelay.SLOW_USER_ACTION,
            SETTINGS: G.UserSettingsDelay.INFREQUENT_USER_ACTION
        }),
        F = a.createContext({}),
        x = e => {
            let {
                isPersisted: t,
                themeName: n,
                analyticsLocations: i
            } = e;
            L.default.track(P.AnalyticEvents.CLIENT_THEME_UPDATED, {
                feature_name: U.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                theme_name: n,
                is_persisted: t,
                location_stack: i
            })
        },
        H = e => {
            let {
                type: t,
                isPreview: n,
                isCoachmark: i
            } = e, r = (0, u.match)({
                type: t,
                isPreview: n,
                isCoachmark: i
            }).with({
                type: "EDITOR",
                isCoachmark: !0,
                isPreview: !0
            }, () => B.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                type: "EDITOR",
                isCoachmark: !0
            }, () => B.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => B.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
            return (0, s.jsxs)("div", {
                className: k.title,
                children: [(0, s.jsx)(E.Heading, {
                    "aria-label": r,
                    variant: "text-md/medium",
                    children: r
                }), (0, s.jsx)(N.default, {
                    className: k.premiumIcon
                })]
            })
        },
        Y = e => {
            var t, n;
            let {
                type: i,
                isPreview: r,
                isCoachmark: a
            } = e;
            if ((null === (n = (0, A.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === U.PremiumSubscriptionSKUs.TIER_2 && r) return null;
            let o = (0, u.match)({
                type: i,
                isPreview: r,
                isCoachmark: a
            }).with({
                type: "EDITOR",
                isPreview: !0
            }, () => B.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                onPremiumClick: h.navigateToPremiumMarketingPage
            })).with({
                type: "EDITOR",
                isCoachmark: !0
            }, () => B.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                type: "EDITOR",
                isPreview: !1
            }, () => B.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                isPreview: !0
            }, () => B.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                onPremiumClick: h.navigateToPremiumMarketingPage
            })).otherwise(() => B.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
            return (0, s.jsx)(E.Heading, {
                variant: "text-sm/normal",
                children: o
            })
        },
        j = e => {
            let {
                type: t,
                children: n
            } = e, i = (0, g.useUID)(), r = (0, E.useRadioGroup)({
                orientation: "horizontal",
                labelledBy: i
            }), o = a.useMemo(() => ({
                type: t,
                delay: V[t]
            }), [t]);
            return (0, s.jsx)(F.Provider, {
                value: o,
                children: (0, s.jsx)("div", {
                    ...r,
                    className: k.__invalid_container,
                    children: n
                })
            })
        };
    j.Basic = e => {
        let {
            className: t
        } = e, {
            delay: n
        } = a.useContext(F), {
            analyticsLocations: i
        } = (0, S.default)(f.default.CLIENT_THEMES_THEME_SELECTOR), [r, o, u] = (0, d.useStateFromStoresArray)([O.default, R.default, v.default], () => [O.default.theme, null == v.default.gradientPreset, R.default.useSystemTheme === b.SystemThemeState.ON]), _ = e => {
            (0, D.resetBackgroundGradientPreset)(), x({
                isPersisted: !0,
                analyticsLocations: i,
                themeName: "default ".concat(e)
            }), (0, I.saveClientTheme)({
                theme: e
            }, n)
        };
        return (0, s.jsxs)("section", {
            className: l()(k.presets, t),
            children: [(0, s.jsx)(M.DefaultThemeSelection, {
                theme: w.ThemeTypes.LIGHT,
                isSelected: o && !u && (0, c.isThemeLight)(r),
                onSelect: () => _(w.ThemeTypes.LIGHT)
            }), (0, s.jsx)(M.DefaultThemeSelection, {
                theme: w.ThemeTypes.DARK,
                isSelected: o && !u && (0, c.isThemeDark)(r),
                onSelect: () => _(w.ThemeTypes.DARK)
            }), (0, s.jsx)(M.DefaultThemeSelection, {
                theme: "system",
                isSelected: o && u,
                onSelect: () => _("system")
            })]
        })
    }, j.Gradient = e => {
        var t, i;
        let {
            className: r,
            renderCTAButtons: o,
            disabled: l = !1
        } = e, {
            type: u,
            delay: c
        } = a.useContext(F), {
            analyticsLocations: E
        } = (0, S.default)(f.default.CLIENT_THEMES_THEME_SELECTOR), [N, O, R] = (0, d.useStateFromStoresArray)([v.default], () => {
            var e;
            return [v.default.isPreview, v.default.isCoachmark, null === (e = v.default.gradientPreset) || void 0 === e ? void 0 : e.id]
        }), [g, L] = a.useState(!1), [P, G] = a.useState(-1), w = (0, d.useStateFromStores)([T.default], () => T.default.useReducedMotion), V = (null === (i = (0, A.usePremiumTrialOffer)()) || void 0 === i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === U.PremiumSubscriptionSKUs.TIER_2;
        a.useEffect(() => {
            (P === y.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || R === _.BackgroundGradientPresetId.EASTER_EGG) && L(!0)
        }, [P, u, R]);
        let j = (e, t) => {
            if ((0, D.updateBackgroundGradientPreset)(e.id), x({
                    isPersisted: !N,
                    analyticsLocations: E,
                    themeName: _.BackgroundGradientPresetId[e.id]
                }), N) {
                (0, p.setUseSystemTheme)(b.SystemThemeState.OFF);
                return
            }
            if ((0, I.saveClientTheme)({
                    backgroundGradientPresetId: e.id,
                    theme: e.theme
                }, c), null != t) {
                if (g && L(!1), t <= P || 0 === t) {
                    G(0);
                    return
                }
                G(e => e + 1)
            }
        };
        return (0, s.jsxs)("section", {
            className: r,
            children: ["EDITOR" === u && N && V ? (0, s.jsx)(m.default, {
                type: U.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                subscriptionTier: U.PremiumSubscriptionSKUs.TIER_2,
                children: B.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                    onPremiumClick: h.navigateToPremiumMarketingPage
                })
            }) : (0, s.jsxs)("div", {
                className: k.header,
                children: [(0, s.jsxs)("div", {
                    className: k.headings,
                    children: [(0, s.jsx)(H, {
                        type: u,
                        isPreview: N,
                        isCoachmark: O
                    }), (0, s.jsx)(Y, {
                        type: u,
                        isPreview: N,
                        isCoachmark: O
                    })]
                }), null == o ? void 0 : o()]
            }), (0, s.jsxs)("div", {
                className: k.presets,
                children: [y.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                    let {
                        id: t
                    } = e;
                    return t !== _.BackgroundGradientPresetId.EASTER_EGG
                }).map((e, t) => (0, s.jsx)(M.GradientThemeSelection, {
                    preset: e,
                    isSelected: R === e.id,
                    onSelect: () => j(e, t),
                    disabled: l,
                    tabIndex: 0 !== t || l ? void 0 : 0
                }, e.id)), (() => {
                    if (!g) return null;
                    let e = y.BACKGROUND_GRADIENT_PRESETS_MAP[_.BackgroundGradientPresetId.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let {
                            default: e
                        } = await n.e("5217").then(n.t.bind(n, "801048", 19));
                        return e
                    }
                    return (0, s.jsxs)("div", {
                        className: k.easterEggSelection,
                        children: [(0, s.jsx)(M.GradientThemeSelection, {
                            preset: e,
                            isSelected: R === _.BackgroundGradientPresetId.EASTER_EGG,
                            onSelect: () => j(e)
                        }), (0, s.jsx)(C.default, {
                            importData: t,
                            shouldAnimate: !w,
                            className: k.sparkles
                        })]
                    })
                })()]
            })]
        })
    }, t.default = j
}
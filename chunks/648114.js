function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ThemeSelectionGroupType: function() {
            return a
        },
        trackClientThemeUpdated: function() {
            return H
        },
        default: function() {
            return W
        }
    }), n("794252"), n("222007");
    var a, i, s = n("37983"),
        l = n("884691"),
        o = n("414456"),
        r = n.n(o),
        u = n("506838"),
        d = n("446674"),
        c = n("151426"),
        f = n("819855"),
        g = n("77078"),
        m = n("452804"),
        h = n("206230"),
        _ = n("812204"),
        p = n("685665"),
        E = n("626301"),
        S = n("917247"),
        T = n("956597"),
        v = n("891653"),
        N = n("505093"),
        I = n("161778"),
        y = n("168973"),
        C = n("491605"),
        M = n("476765"),
        A = n("599110"),
        O = n("32531"),
        b = n("714657"),
        P = n("164546"),
        w = n("941719"),
        R = n("49111"),
        D = n("646718"),
        L = n("116319"),
        x = n("397336"),
        G = n("843455"),
        U = n("782340"),
        j = n("845797");
    (i = a || (a = {})).EDITOR = "EDITOR", i.SETTINGS = "SETTINGS";
    let k = Object.freeze({
            EDITOR: x.UserSettingsDelay.SLOW_USER_ACTION,
            SETTINGS: x.UserSettingsDelay.INFREQUENT_USER_ACTION
        }),
        F = l.createContext({}),
        H = e => {
            let {
                isPersisted: t,
                themeName: n,
                analyticsLocations: a
            } = e;
            A.default.track(R.AnalyticEvents.CLIENT_THEME_UPDATED, {
                feature_name: D.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                theme_name: n,
                is_persisted: t,
                location_stack: a
            })
        },
        B = e => {
            let {
                type: t,
                isPreview: n,
                isCoachmark: a
            } = e, i = (0, u.match)({
                type: t,
                isPreview: n,
                isCoachmark: a
            }).with({
                type: "EDITOR",
                isCoachmark: !0,
                isPreview: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                type: "EDITOR",
                isCoachmark: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => U.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
            return (0, s.jsxs)("div", {
                className: j.title,
                children: [(0, s.jsx)(g.Heading, {
                    "aria-label": i,
                    variant: "text-md/medium",
                    children: i
                }), (0, s.jsx)(v.default, {
                    className: j.premiumIcon
                })]
            })
        },
        V = e => {
            var t, n;
            let {
                type: a,
                isPreview: i,
                isCoachmark: l
            } = e, o = (null === (n = (0, S.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
            if (o && i) return null;
            let r = (0, u.match)({
                type: a,
                isPreview: i,
                isCoachmark: l
            }).with({
                type: "EDITOR",
                isPreview: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                onPremiumClick: E.navigateToPremiumMarketingPage
            })).with({
                type: "EDITOR",
                isCoachmark: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                type: "EDITOR",
                isPreview: !1
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                isPreview: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                onPremiumClick: E.navigateToPremiumMarketingPage
            })).otherwise(() => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
            return (0, s.jsx)(g.Heading, {
                variant: "text-sm/normal",
                children: r
            })
        },
        K = e => {
            let {
                type: t,
                children: n
            } = e, a = (0, M.useUID)(), i = (0, g.useRadioGroup)({
                orientation: "horizontal",
                labelledBy: a
            }), o = l.useMemo(() => ({
                type: t,
                delay: k[t]
            }), [t]);
            return (0, s.jsx)(F.Provider, {
                value: o,
                children: (0, s.jsx)("div", {
                    ...i,
                    className: j.container,
                    children: n
                })
            })
        };
    K.Basic = e => {
        let {
            className: t
        } = e, {
            delay: n
        } = l.useContext(F), {
            analyticsLocations: a
        } = (0, p.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [i, o, u] = (0, d.useStateFromStoresArray)([I.default, y.default, b.default], () => [I.default.theme, null == b.default.gradientPreset, y.default.useSystemTheme === L.SystemThemeState.ON]), c = e => {
            (0, O.resetBackgroundGradientPreset)(), H({
                isPersisted: !0,
                analyticsLocations: a,
                themeName: "default ".concat(e)
            }), (0, m.saveClientTheme)({
                theme: e
            }, n)
        };
        return (0, s.jsxs)("section", {
            className: r(j.presets, t),
            children: [(0, s.jsx)(P.DefaultThemeSelection, {
                theme: G.ThemeTypes.LIGHT,
                isSelected: o && !u && (0, f.isThemeLight)(i),
                onSelect: () => c(G.ThemeTypes.LIGHT)
            }), (0, s.jsx)(P.DefaultThemeSelection, {
                theme: G.ThemeTypes.DARK,
                isSelected: o && !u && (0, f.isThemeDark)(i),
                onSelect: () => c(G.ThemeTypes.DARK)
            }), (0, s.jsx)(P.DefaultThemeSelection, {
                theme: "system",
                isSelected: o && u,
                onSelect: () => c("system")
            })]
        })
    }, K.Gradient = e => {
        var t, a;
        let {
            className: i,
            renderCTAButtons: o,
            disabled: r = !1
        } = e, {
            type: u,
            delay: f
        } = l.useContext(F), {
            analyticsLocations: g
        } = (0, p.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [v, I, y] = (0, d.useStateFromStoresArray)([b.default], () => {
            var e;
            return [b.default.isPreview, b.default.isCoachmark, null === (e = b.default.gradientPreset) || void 0 === e ? void 0 : e.id]
        }), [M, A] = l.useState(!1), [R, x] = l.useState(-1), G = (0, d.useStateFromStores)([h.default], () => h.default.useReducedMotion), k = (null === (a = (0, S.usePremiumTrialOffer)()) || void 0 === a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
        l.useEffect(() => {
            (R === w.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || y === c.BackgroundGradientPresetId.EASTER_EGG) && A(!0)
        }, [R, u, y]);
        let K = (e, t) => {
            if ((0, O.updateBackgroundGradientPreset)(e.id), H({
                    isPersisted: !v,
                    analyticsLocations: g,
                    themeName: c.BackgroundGradientPresetId[e.id]
                }), v) {
                (0, N.setUseSystemTheme)(L.SystemThemeState.OFF);
                return
            }
            if ((0, m.saveClientTheme)({
                    backgroundGradientPresetId: e.id,
                    theme: e.theme
                }, f), null != t) {
                if (M && A(!1), t <= R || 0 === t) {
                    x(0);
                    return
                }
                x(e => e + 1)
            }
        };
        return (0, s.jsxs)("section", {
            className: i,
            children: ["EDITOR" === u && v && k ? (0, s.jsx)(T.default, {
                type: D.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                children: U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                    onPremiumClick: E.navigateToPremiumMarketingPage
                })
            }) : (0, s.jsxs)("div", {
                className: j.header,
                children: [(0, s.jsxs)("div", {
                    className: j.headings,
                    children: [(0, s.jsx)(B, {
                        type: u,
                        isPreview: v,
                        isCoachmark: I
                    }), (0, s.jsx)(V, {
                        type: u,
                        isPreview: v,
                        isCoachmark: I
                    })]
                }), null == o ? void 0 : o()]
            }), (0, s.jsxs)("div", {
                className: j.presets,
                children: [w.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                    let {
                        id: t
                    } = e;
                    return t !== c.BackgroundGradientPresetId.EASTER_EGG
                }).map((e, t) => (0, s.jsx)(P.GradientThemeSelection, {
                    preset: e,
                    isSelected: y === e.id,
                    onSelect: () => K(e, t),
                    disabled: r,
                    tabIndex: 0 !== t || r ? void 0 : 0
                }, e.id)), (() => {
                    if (!M) return null;
                    let e = w.BACKGROUND_GRADIENT_PRESETS_MAP[c.BackgroundGradientPresetId.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let {
                            default: e
                        } = await n.el("922510").then(n.t.bind(n, "922510", 19));
                        return e
                    }
                    return (0, s.jsxs)("div", {
                        className: j.easterEggSelection,
                        children: [(0, s.jsx)(P.GradientThemeSelection, {
                            preset: e,
                            isSelected: y === c.BackgroundGradientPresetId.EASTER_EGG,
                            onSelect: () => K(e)
                        }), (0, s.jsx)(C.default, {
                            importData: t,
                            shouldAnimate: !G,
                            className: j.sparkles
                        })]
                    })
                })()]
            })]
        })
    };
    var W = K
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ThemeSelectionGroupType: function() {
            return i
        },
        trackClientThemeUpdated: function() {
            return H
        },
        default: function() {
            return W
        }
    }), n("794252"), n("222007");
    var i, a, l = n("37983"),
        s = n("884691"),
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
        S = n("626301"),
        E = n("917247"),
        v = n("956597"),
        T = n("891653"),
        N = n("505093"),
        I = n("161778"),
        y = n("168973"),
        C = n("491605"),
        O = n("476765"),
        b = n("599110"),
        A = n("32531"),
        M = n("714657"),
        w = n("164546"),
        P = n("941719"),
        R = n("49111"),
        D = n("646718"),
        x = n("116319"),
        L = n("397336"),
        G = n("843455"),
        U = n("782340"),
        j = n("845797");
    (a = i || (i = {})).EDITOR = "EDITOR", a.SETTINGS = "SETTINGS";
    let k = Object.freeze({
            EDITOR: L.UserSettingsDelay.SLOW_USER_ACTION,
            SETTINGS: L.UserSettingsDelay.INFREQUENT_USER_ACTION
        }),
        F = s.createContext({}),
        H = e => {
            let {
                isPersisted: t,
                themeName: n,
                analyticsLocations: i
            } = e;
            b.default.track(R.AnalyticEvents.CLIENT_THEME_UPDATED, {
                feature_name: D.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                theme_name: n,
                is_persisted: t,
                location_stack: i
            })
        },
        B = e => {
            let {
                type: t,
                isPreview: n,
                isCoachmark: i
            } = e, a = (0, u.match)({
                type: t,
                isPreview: n,
                isCoachmark: i
            }).with({
                type: "EDITOR",
                isCoachmark: !0,
                isPreview: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                type: "EDITOR",
                isCoachmark: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => U.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
            return (0, l.jsxs)("div", {
                className: j.title,
                children: [(0, l.jsx)(g.Heading, {
                    "aria-label": a,
                    variant: "text-md/medium",
                    children: a
                }), (0, l.jsx)(T.default, {
                    className: j.premiumIcon
                })]
            })
        },
        V = e => {
            var t, n;
            let {
                type: i,
                isPreview: a,
                isCoachmark: s
            } = e, o = (null === (n = (0, E.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
            if (o && a) return null;
            let r = (0, u.match)({
                type: i,
                isPreview: a,
                isCoachmark: s
            }).with({
                type: "EDITOR",
                isPreview: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                onPremiumClick: S.navigateToPremiumMarketingPage
            })).with({
                type: "EDITOR",
                isCoachmark: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                type: "EDITOR",
                isPreview: !1
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                isPreview: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                onPremiumClick: S.navigateToPremiumMarketingPage
            })).otherwise(() => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
            return (0, l.jsx)(g.Heading, {
                variant: "text-sm/normal",
                children: r
            })
        },
        K = e => {
            let {
                type: t,
                children: n
            } = e, i = (0, O.useUID)(), a = (0, g.useRadioGroup)({
                orientation: "horizontal",
                labelledBy: i
            }), o = s.useMemo(() => ({
                type: t,
                delay: k[t]
            }), [t]);
            return (0, l.jsx)(F.Provider, {
                value: o,
                children: (0, l.jsx)("div", {
                    ...a,
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
        } = s.useContext(F), {
            analyticsLocations: i
        } = (0, p.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [a, o, u] = (0, d.useStateFromStoresArray)([I.default, y.default, M.default], () => [I.default.theme, null == M.default.gradientPreset, y.default.useSystemTheme === x.SystemThemeState.ON]), c = e => {
            (0, A.resetBackgroundGradientPreset)(), H({
                isPersisted: !0,
                analyticsLocations: i,
                themeName: "default ".concat(e)
            }), (0, m.saveClientTheme)({
                theme: e
            }, n)
        };
        return (0, l.jsxs)("section", {
            className: r(j.presets, t),
            children: [(0, l.jsx)(w.DefaultThemeSelection, {
                theme: G.ThemeTypes.LIGHT,
                isSelected: o && !u && (0, f.isThemeLight)(a),
                onSelect: () => c(G.ThemeTypes.LIGHT)
            }), (0, l.jsx)(w.DefaultThemeSelection, {
                theme: G.ThemeTypes.DARK,
                isSelected: o && !u && (0, f.isThemeDark)(a),
                onSelect: () => c(G.ThemeTypes.DARK)
            }), (0, l.jsx)(w.DefaultThemeSelection, {
                theme: "system",
                isSelected: o && u,
                onSelect: () => c("system")
            })]
        })
    }, K.Gradient = e => {
        var t, i;
        let {
            className: a,
            renderCTAButtons: o,
            disabled: r = !1
        } = e, {
            type: u,
            delay: f
        } = s.useContext(F), {
            analyticsLocations: g
        } = (0, p.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [T, I, y] = (0, d.useStateFromStoresArray)([M.default], () => {
            var e;
            return [M.default.isPreview, M.default.isCoachmark, null === (e = M.default.gradientPreset) || void 0 === e ? void 0 : e.id]
        }), [O, b] = s.useState(!1), [R, L] = s.useState(-1), G = (0, d.useStateFromStores)([h.default], () => h.default.useReducedMotion), k = (null === (i = (0, E.usePremiumTrialOffer)()) || void 0 === i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
        s.useEffect(() => {
            (R === P.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || y === c.BackgroundGradientPresetId.EASTER_EGG) && b(!0)
        }, [R, u, y]);
        let K = (e, t) => {
            if ((0, A.updateBackgroundGradientPreset)(e.id), H({
                    isPersisted: !T,
                    analyticsLocations: g,
                    themeName: c.BackgroundGradientPresetId[e.id]
                }), T) {
                (0, N.setUseSystemTheme)(x.SystemThemeState.OFF);
                return
            }
            if ((0, m.saveClientTheme)({
                    backgroundGradientPresetId: e.id,
                    theme: e.theme
                }, f), null != t) {
                if (O && b(!1), t <= R || 0 === t) {
                    L(0);
                    return
                }
                L(e => e + 1)
            }
        };
        return (0, l.jsxs)("section", {
            className: a,
            children: ["EDITOR" === u && T && k ? (0, l.jsx)(v.default, {
                type: D.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                children: U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                    onPremiumClick: S.navigateToPremiumMarketingPage
                })
            }) : (0, l.jsxs)("div", {
                className: j.header,
                children: [(0, l.jsxs)("div", {
                    className: j.headings,
                    children: [(0, l.jsx)(B, {
                        type: u,
                        isPreview: T,
                        isCoachmark: I
                    }), (0, l.jsx)(V, {
                        type: u,
                        isPreview: T,
                        isCoachmark: I
                    })]
                }), null == o ? void 0 : o()]
            }), (0, l.jsxs)("div", {
                className: j.presets,
                children: [P.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                    let {
                        id: t
                    } = e;
                    return t !== c.BackgroundGradientPresetId.EASTER_EGG
                }).map((e, t) => (0, l.jsx)(w.GradientThemeSelection, {
                    preset: e,
                    isSelected: y === e.id,
                    onSelect: () => K(e, t),
                    disabled: r,
                    tabIndex: 0 !== t || r ? void 0 : 0
                }, e.id)), (() => {
                    if (!O) return null;
                    let e = P.BACKGROUND_GRADIENT_PRESETS_MAP[c.BackgroundGradientPresetId.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let {
                            default: e
                        } = await n.el("922510").then(n.t.bind(n, "922510", 19));
                        return e
                    }
                    return (0, l.jsxs)("div", {
                        className: j.easterEggSelection,
                        children: [(0, l.jsx)(w.GradientThemeSelection, {
                            preset: e,
                            isSelected: y === c.BackgroundGradientPresetId.EASTER_EGG,
                            onSelect: () => K(e)
                        }), (0, l.jsx)(C.default, {
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
function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        useResetClientThemePreview: function() {
            return A
        },
        useTrackClientThemePreviewEvent: function() {
            return R
        }
    }), E("222007");
    var t = E("884691"),
        o = E("446674"),
        n = E("151426"),
        r = E("505093"),
        a = E("168973"),
        i = E("374363"),
        I = E("599110"),
        T = E("32531"),
        s = E("714657"),
        S = E("49111"),
        N = E("646718"),
        O = E("116319");
    let A = () => {
            let e = (0, o.useStateFromStores)([s.default], () => s.default.gradientPreset),
                _ = (0, o.useStateFromStores)([a.default], () => a.default.useSystemTheme === O.SystemThemeState.ON),
                [E, n] = (0, t.useState)(_);
            return (0, t.useEffect)(() => {
                null == e && n(_)
            }, [e, _]), (0, t.useCallback)(() => {
                if (null != e)(0, T.resetPreviewClientTheme)(), E && (0, r.setUseSystemTheme)(O.SystemThemeState.ON)
            }, [e, E])
        },
        R = () => {
            let {
                previewPaneVariant: e
            } = (0, o.useStateFromStoresObject)([s.default], () => ({
                previewPaneVariant: s.default.isPreview ? N.AnalyticsPremiumFeatureTiers.FREE : N.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
            })), _ = (0, o.useStateFromStores)([i.default], () => {
                var e;
                let _ = null === (e = i.default.settings.appearance) || void 0 === e ? void 0 : e.theme;
                return "default ".concat(_ === n.Theme.LIGHT ? S.ThemeTypes.LIGHT : S.ThemeTypes.DARK)
            });
            return (0, t.useCallback)(E => {
                I.default.track(E, {
                    preview_pane_variant: e,
                    original_theme: _
                })
            }, [e, _])
        }
}
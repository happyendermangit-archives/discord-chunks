function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useResetClientThemePreview: function() {
            return T
        },
        useTrackClientThemePreviewEvent: function() {
            return f
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        a = n("524437"),
        s = n("781391"),
        o = n("740492"),
        l = n("581883"),
        u = n("626135"),
        d = n("238302"),
        _ = n("514361"),
        c = n("981631"),
        E = n("474936"),
        I = n("874893");
    let T = () => {
            let e = (0, r.useStateFromStores)([_.default], () => _.default.gradientPreset),
                t = (0, r.useStateFromStores)([o.default], () => o.default.useSystemTheme === I.SystemThemeState.ON),
                [n, a] = (0, i.useState)(t);
            return (0, i.useEffect)(() => {
                null == e && a(t)
            }, [e, t]), (0, i.useCallback)(() => {
                if (null != e)(0, d.resetPreviewClientTheme)(), n && (0, s.setUseSystemTheme)(I.SystemThemeState.ON)
            }, [e, n])
        },
        f = () => {
            let {
                previewPaneVariant: e
            } = (0, r.useStateFromStoresObject)([_.default], () => ({
                previewPaneVariant: _.default.isPreview ? E.AnalyticsPremiumFeatureTiers.FREE : E.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
            })), t = (0, r.useStateFromStores)([l.default], () => {
                var e;
                let t = null === (e = l.default.settings.appearance) || void 0 === e ? void 0 : e.theme;
                return "default ".concat(t === a.Theme.LIGHT ? c.ThemeTypes.LIGHT : c.ThemeTypes.DARK)
            });
            return (0, i.useCallback)(n => {
                u.default.track(n, {
                    preview_pane_variant: e,
                    original_theme: t
                })
            }, [e, t])
        }
}
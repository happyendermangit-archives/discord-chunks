function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useResetClientThemePreview: function() {
            return m
        },
        useTrackClientThemePreviewEvent: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("14782"),
        a = n("610312"),
        u = n("24039"),
        s = n("851285"),
        l = n("870331"),
        c = n("872042"),
        f = n("15949"),
        d = n("281767"),
        _ = n("868615"),
        E = n("223228");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var m = function() {
            var e, t, n = (0, o.useStateFromStores)([f.default], function() {
                    return f.default.gradientPreset
                }),
                i = (0, o.useStateFromStores)([u.default], function() {
                    return u.default.useSystemTheme === E.SystemThemeState.ON
                });
            var s = (e = (0, r.useState)(i), t = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return p(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                l = s[0],
                d = s[1];
            return (0, r.useEffect)(function() {
                null == n && d(i)
            }, [n, i]), (0, r.useCallback)(function() {
                if (null != n)(0, c.resetPreviewClientTheme)(), l && (0, a.setUseSystemTheme)(E.SystemThemeState.ON)
            }, [n, l])
        },
        y = function() {
            var e = (0, o.useStateFromStoresObject)([f.default], function() {
                    return {
                        previewPaneVariant: f.default.isPreview ? _.AnalyticsPremiumFeatureTiers.FREE : _.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                    }
                }).previewPaneVariant,
                t = (0, o.useStateFromStores)([s.default], function() {
                    var e, t = null === (e = s.default.settings.appearance) || void 0 === e ? void 0 : e.theme;
                    return "default ".concat(t === i.Theme.LIGHT ? d.ThemeTypes.LIGHT : d.ThemeTypes.DARK)
                });
            return (0, r.useCallback)(function(n) {
                l.default.track(n, {
                    preview_pane_variant: e,
                    original_theme: t
                })
            }, [e, t])
        }
}
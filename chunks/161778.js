function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    });
    var s, r = n("446674"),
        a = n("151426"),
        o = n("669491"),
        l = n("819855"),
        u = n("913144"),
        d = n("206230"),
        c = n("253539");
    n("21121");
    var f = n("228803");
    n("831588");
    var _ = n("922932"),
        E = n("773336"),
        h = n("737292"),
        g = n("168973"),
        m = n("374363"),
        p = n("116319"),
        S = n("49111"),
        v = n("941719");
    let T = null !== (s = (0, f.default)()) && void 0 !== s ? s : S.ThemeTypes.DARK,
        I = T,
        A = null,
        C = !1;

    function y() {
        let e = function() {
            var e, t;
            if (__OVERLAY__) return S.ThemeTypes.DARK;
            if (d.default.syncForcedColors && "active" === d.default.systemForcedColors && null != i) return i;
            let n = g.default.useSystemTheme;
            if (n === p.SystemThemeState.ON && null != i) return i;
            let s = null === (e = h.default.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
            if (null != s) return s;
            let r = null === (t = m.default.settings.appearance) || void 0 === t ? void 0 : t.theme;
            return null == r ? I : r === a.Theme.LIGHT ? S.ThemeTypes.LIGHT : S.ThemeTypes.DARK
        }();
        return e
    }

    function N() {
        return O()
    }

    function R() {
        return O()
    }

    function O() {
        let e = y();
        return e !== I && (I = e, !0)
    }
    class D extends r.default.PersistedStore {
        initialize(e) {
            (null == e ? void 0 : e.theme) != null && (I = e.theme), this.waitFor(g.default, h.default, m.default, d.default)
        }
        getState() {
            return {
                theme: this.theme
            }
        }
        get darkSidebar() {
            return (0, l.isThemeLight)(this.theme) && g.default.darkSidebar && !C
        }
        get theme() {
            return y()
        }
        get systemTheme() {
            return A
        }
        get systemPrefersColorScheme() {
            return i
        }
        get isSystemThemeAvailable() {
            return null !== A
        }
    }
    D.displayName = "ThemeStore", D.persistKey = "ThemeStore", D.migrations = [e => {
        let t = e.theme;
        return "amoled" === t && (t = "midnight"), {
            ...e,
            theme: t
        }
    }];
    var P = new D(u.default, {
        CACHE_LOADED: N,
        CONNECTION_OPEN: N,
        LOGOUT: function(e) {
            return !e.isSwitchingAccount && I !== S.ThemeTypes.DARK && (I = S.ThemeTypes.DARK, function() {
                !__OVERLAY__ && E.isPlatformEmbedded && _.default.setApplicationBackgroundColor((0, l.isThemeDark)(y()) ? o.default.unsafe_rawColors.PRIMARY_700.resolve({
                    saturation: d.default.saturation
                }).hsl() : o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: d.default.saturation
                }).hsl())
            }(), O())
        },
        OVERLAY_INITIALIZE: N,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: R,
        UNSYNCED_USER_SETTINGS_UPDATE: R,
        USER_SETTINGS_PROTO_UPDATE: N,
        UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
            var t, n;
            let {
                presetId: i
            } = e;
            I = null != i && null !== (n = null === (t = v.BACKGROUND_GRADIENT_PRESETS_MAP[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : y();
            let s = null != i;
            return C !== s ? (C = s, !0) : function() {
                let e = y();
                return !(0, c.areThemesEqualForGradientThemes)(I, e) && (I = e, !0)
            }()
        },
        RESET_PREVIEW_CLIENT_THEME: N,
        SYSTEM_THEME_CHANGE: function(e) {
            let {
                systemTheme: t
            } = e;
            return A = t, O()
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
            return i = e.systemPrefersColorScheme, O()
        },
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
            return (0, l.isThemeLight)(y())
        }
    })
}
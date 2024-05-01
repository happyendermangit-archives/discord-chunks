function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, a, s = n("442837"),
        o = n("524437"),
        l = n("692547"),
        u = n("780384"),
        d = n("570140"),
        _ = n("607070"),
        c = n("47760");
    n("57132");
    var E = n("541049");
    n("449934");
    var I = n("12647"),
        T = n("358085"),
        f = n("238514"),
        S = n("740492"),
        h = n("581883"),
        A = n("874893"),
        m = n("981631"),
        N = n("469115");

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let O = null !== (r = (0, E.default)()) && void 0 !== r ? r : m.ThemeTypes.DARK,
        R = null,
        C = !1;

    function g() {
        return function() {
            var e, t;
            if (__OVERLAY__) return m.ThemeTypes.DARK;
            if (_.default.syncForcedColors && "active" === _.default.systemForcedColors && null != i || S.default.useSystemTheme === A.SystemThemeState.ON && null != i) return i;
            let n = null === (e = f.default.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
            if (null != n) return n;
            let r = null === (t = h.default.settings.appearance) || void 0 === t ? void 0 : t.theme;
            return null == r ? O : r === o.Theme.LIGHT ? m.ThemeTypes.LIGHT : m.ThemeTypes.DARK
        }()
    }

    function L() {
        return D()
    }

    function v() {
        return D()
    }

    function D() {
        let e = g();
        return e !== O && (O = e, !0)
    }
    class M extends(a = s.default.PersistedStore) {
        initialize(e) {
            (null == e ? void 0 : e.theme) != null && (O = e.theme), this.waitFor(S.default, f.default, h.default, _.default)
        }
        getState() {
            return {
                theme: this.theme
            }
        }
        get darkSidebar() {
            return (0, u.isThemeLight)(this.theme) && S.default.darkSidebar && !C
        }
        get theme() {
            return g()
        }
        get systemTheme() {
            return R
        }
        get systemPrefersColorScheme() {
            return i
        }
        get isSystemThemeAvailable() {
            return null !== R
        }
    }
    p(M, "displayName", "ThemeStore"), p(M, "persistKey", "ThemeStore"), p(M, "migrations", [e => {
        let t = e.theme;
        return "amoled" === t && (t = "midnight"), {
            ...e,
            theme: t
        }
    }]), t.default = new M(d.default, {
        CACHE_LOADED: L,
        CONNECTION_OPEN: L,
        LOGOUT: function(e) {
            return !e.isSwitchingAccount && O !== m.ThemeTypes.DARK && (O = m.ThemeTypes.DARK, function() {
                !__OVERLAY__ && T.isPlatformEmbedded && I.default.setApplicationBackgroundColor((0, u.isThemeDark)(g()) ? l.default.unsafe_rawColors.PRIMARY_700.resolve({
                    saturation: _.default.saturation
                }).hsl() : l.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: _.default.saturation
                }).hsl())
            }(), D())
        },
        OVERLAY_INITIALIZE: L,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: v,
        UNSYNCED_USER_SETTINGS_UPDATE: v,
        USER_SETTINGS_PROTO_UPDATE: L,
        UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
            var t, n;
            let {
                presetId: i
            } = e;
            O = null != i && null !== (n = null === (t = N.BACKGROUND_GRADIENT_PRESETS_MAP[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : g();
            let r = null != i;
            return C !== r ? (C = r, !0) : function() {
                let e = g();
                return !(0, c.areThemesEqualForGradientThemes)(O, e) && (O = e, !0)
            }()
        },
        RESET_PREVIEW_CLIENT_THEME: L,
        SYSTEM_THEME_CHANGE: function(e) {
            let {
                systemTheme: t
            } = e;
            return R = t, D()
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
            return i = e.systemPrefersColorScheme, D()
        },
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
            return (0, u.isThemeLight)(g())
        }
    })
}
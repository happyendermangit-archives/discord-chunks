function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s, a = n("442837"),
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
        A = n("581883"),
        h = n("874893"),
        m = n("981631"),
        N = n("469115");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let p = null !== (r = (0, E.default)()) && void 0 !== r ? r : m.ThemeTypes.DARK,
        R = null,
        C = !1;

    function g() {
        return function() {
            var e, t;
            if (__OVERLAY__) return m.ThemeTypes.DARK;
            if (_.default.syncForcedColors && "active" === _.default.systemForcedColors && null != i || S.default.useSystemTheme === h.SystemThemeState.ON && null != i) return i;
            let n = null === (e = f.default.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
            if (null != n) return n;
            let r = null === (t = A.default.settings.appearance) || void 0 === t ? void 0 : t.theme;
            return null == r ? p : r === o.Theme.LIGHT ? m.ThemeTypes.LIGHT : m.ThemeTypes.DARK
        }()
    }

    function L() {
        return v()
    }

    function D() {
        return v()
    }

    function v() {
        let e = g();
        return e !== p && (p = e, !0)
    }
    class M extends(s = a.default.PersistedStore) {
        initialize(e) {
            (null == e ? void 0 : e.theme) != null && (p = e.theme), this.waitFor(S.default, f.default, A.default, _.default)
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
    O(M, "displayName", "ThemeStore"), O(M, "persistKey", "ThemeStore"), O(M, "migrations", [e => {
        let t = e.theme;
        return "amoled" === t && (t = "midnight"), {
            ...e,
            theme: t
        }
    }]), t.default = new M(d.default, {
        CACHE_LOADED: L,
        CONNECTION_OPEN: L,
        LOGOUT: function(e) {
            return !e.isSwitchingAccount && p !== m.ThemeTypes.DARK && (p = m.ThemeTypes.DARK, function() {
                !__OVERLAY__ && T.isPlatformEmbedded && I.default.setApplicationBackgroundColor((0, u.isThemeDark)(g()) ? l.default.unsafe_rawColors.PRIMARY_700.resolve({
                    saturation: _.default.saturation
                }).hsl() : l.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: _.default.saturation
                }).hsl())
            }(), v())
        },
        OVERLAY_INITIALIZE: L,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: D,
        UNSYNCED_USER_SETTINGS_UPDATE: D,
        USER_SETTINGS_PROTO_UPDATE: L,
        UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
            var t, n;
            let {
                presetId: i
            } = e;
            p = null != i && null !== (n = null === (t = N.BACKGROUND_GRADIENT_PRESETS_MAP[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : g();
            let r = null != i;
            return C !== r ? (C = r, !0) : function() {
                let e = g();
                return !(0, c.areThemesEqualForGradientThemes)(p, e) && (p = e, !0)
            }()
        },
        RESET_PREVIEW_CLIENT_THEME: L,
        SYSTEM_THEME_CHANGE: function(e) {
            let {
                systemTheme: t
            } = e;
            return R = t, v()
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
            return i = e.systemPrefersColorScheme, v()
        },
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
            return (0, u.isThemeLight)(g())
        }
    })
}
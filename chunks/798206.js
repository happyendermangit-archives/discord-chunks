function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("898511"),
        u = n("14782"),
        s = n("447515"),
        l = n("751848"),
        c = n("629815"),
        f = n("622780"),
        d = n("213324");
    n("895517");
    var _ = n("848859");
    n("514848");
    var E = n("618396"),
        p = n("374550"),
        m = n("92118"),
        y = n("24039"),
        I = n("851285"),
        h = n("223228"),
        O = n("281767"),
        T = n("953844");

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var b = null !== (r = (0, _.default)()) && void 0 !== r ? r : O.ThemeTypes.DARK,
        N = null,
        R = !1;

    function C() {
        return function() {
            if (__OVERLAY__) return O.ThemeTypes.DARK;
            if (f.default.syncForcedColors && "active" === f.default.systemForcedColors && null != o) return o;
            if (y.default.useSystemTheme === h.SystemThemeState.ON && null != o) return o;
            var e, t, n = null === (e = m.default.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
            if (null != n) return n;
            var r = null === (t = I.default.settings.appearance) || void 0 === t ? void 0 : t.theme;
            return null == r ? b : r === u.Theme.LIGHT ? O.ThemeTypes.LIGHT : O.ThemeTypes.DARK
        }()
    }

    function P() {
        return L()
    }

    function D() {
        return L()
    }

    function L() {
        var e = C();
        return e !== b && (b = e, !0)
    }
    var M = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t)
        }(s, e);
        var t, n, r, i, a, u = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = g(t);
            if (n) {
                var a = g(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u.apply(this, arguments)
        }
        return r = s, i = [{
            key: "initialize",
            value: function(e) {
                (null == e ? void 0 : e.theme) != null && (b = e.theme), this.waitFor(y.default, m.default, I.default, f.default)
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    theme: this.theme
                }
            }
        }, {
            key: "darkSidebar",
            get: function() {
                return (0, l.isThemeLight)(this.theme) && y.default.darkSidebar && !R
            }
        }, {
            key: "theme",
            get: function() {
                return C()
            }
        }, {
            key: "systemTheme",
            get: function() {
                return N
            }
        }, {
            key: "systemPrefersColorScheme",
            get: function() {
                return o
            }
        }, {
            key: "isSystemThemeAvailable",
            get: function() {
                return null !== N
            }
        }], S(r.prototype, i), a && S(r, a), s
    }(a.default.PersistedStore);
    v(M, "displayName", "ThemeStore"), v(M, "persistKey", "ThemeStore"), v(M, "migrations", [function(e) {
        var t, n, r = e.theme;
        return "amoled" === r && (r = "midnight"), t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    v(e, t, n[t])
                })
            }
            return e
        }({}, e), n = (n = {
            theme: r
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t
    }]), t.default = new M(c.default, {
        CACHE_LOADED: P,
        CONNECTION_OPEN: P,
        LOGOUT: function(e) {
            return !e.isSwitchingAccount && b !== O.ThemeTypes.DARK && (b = O.ThemeTypes.DARK, function() {
                !__OVERLAY__ && p.isPlatformEmbedded && E.default.setApplicationBackgroundColor((0, l.isThemeDark)(C()) ? s.default.unsafe_rawColors.PRIMARY_700.resolve({
                    saturation: f.default.saturation
                }).hsl() : s.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: f.default.saturation
                }).hsl())
            }(), L())
        },
        OVERLAY_INITIALIZE: P,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: D,
        UNSYNCED_USER_SETTINGS_UPDATE: D,
        USER_SETTINGS_PROTO_UPDATE: P,
        UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
            var t, n, r = e.presetId;
            b = null != r && null !== (n = null === (t = T.BACKGROUND_GRADIENT_PRESETS_MAP[r]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : C();
            var o = null != r;
            return R !== o ? (R = o, !0) : function() {
                var e = C();
                return !(0, d.areThemesEqualForGradientThemes)(b, e) && (b = e, !0)
            }()
        },
        RESET_PREVIEW_CLIENT_THEME: P,
        SYSTEM_THEME_CHANGE: function(e) {
            return N = e.systemTheme, L()
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
            return o = e.systemPrefersColorScheme, L()
        },
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
            return (0, l.isThemeLight)(C())
        }
    })
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DisableCustomTheme: function() {
            return E
        },
        RootThemeContextProvider: function() {
            return d
        },
        ThemeContextFlags: function() {
            return o
        },
        ThemeContextProvider: function() {
            return _
        },
        UseThemeContext: function() {
            return m
        },
        setThemeFlag: function() {
            return l
        },
        useThemeContext: function() {
            return p
        }
    });
    var r, o, i = n("470079"),
        a = n("563090");

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function s(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function l(e, t) {
        return e | t
    }

    function c(e) {
        var t = JSON.stringify(e);
        return s(u({}, e), {
            key: t
        })
    }(r = o || (o = {}))[r.MOBILE_REDESIGN_ENABLED = 2] = "MOBILE_REDESIGN_ENABLED", r[r.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4] = "MOBILE_DARK_GRADIENT_THEME_ENABLED", r[r.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED", r[r.REDUCED_CONTRAST_ENABLED = 16] = "REDUCED_CONTRAST_ENABLED", r[r.INCREASED_CONTRAST_ENABLED = 32] = "INCREASED_CONTRAST_ENABLED", r[r.REDUCE_SATURATION_ENABLED = 64] = "REDUCE_SATURATION_ENABLED";
    var f = i.createContext({
        theme: "light",
        primaryColor: null,
        secondaryColor: null,
        gradient: null,
        key: "light-false-null-null-null",
        flags: 0,
        contrast: 1,
        saturation: 1
    });

    function d(e) {
        var t = e.children,
            n = e.theme,
            r = void 0 === n ? a.ThemeTypes.DARK : n,
            o = e.primaryColor,
            u = void 0 === o ? null : o,
            s = e.secondaryColor,
            l = void 0 === s ? null : s,
            d = e.gradient,
            _ = void 0 === d ? null : d,
            E = e.flags,
            p = void 0 === E ? 0 : E,
            m = e.contrast,
            y = void 0 === m ? 1 : m,
            I = e.saturation,
            h = void 0 === I ? 1 : I,
            O = i.useMemo(function() {
                return c({
                    theme: r,
                    primaryColor: u,
                    secondaryColor: l,
                    gradient: _,
                    flags: p,
                    contrast: y,
                    saturation: h
                })
            }, [r, u, l, _, p, y, h]);
        return i.createElement(f.Provider, {
            value: O
        }, t)
    }

    function _(e) {
        var t = e.children,
            n = e.theme,
            r = e.primaryColor,
            o = e.secondaryColor,
            a = e.gradient,
            u = e.flags,
            s = e.contrast,
            l = e.saturation,
            d = i.useContext(f),
            _ = i.useMemo(function() {
                return c({
                    theme: null != n ? n : d.theme,
                    primaryColor: null != r ? r : d.primaryColor,
                    secondaryColor: null != o ? o : d.secondaryColor,
                    gradient: null != a ? a : d.gradient,
                    flags: null != u ? u : d.flags,
                    contrast: null != s ? s : d.contrast,
                    saturation: null != l ? l : d.saturation
                })
            }, [n, d.theme, d.primaryColor, d.secondaryColor, d.gradient, d.flags, d.contrast, d.saturation, r, o, a, u, s, l]);
        return i.createElement(f.Provider, {
            value: _
        }, t)
    }

    function E(e) {
        var t = p(),
            n = i.useMemo(function() {
                return c(s(u({}, t), {
                    primaryColor: null,
                    secondaryColor: null
                }))
            }, [t]);
        return i.createElement(f.Provider, {
            value: n
        }, e.children)
    }

    function p() {
        var e = i.useContext(f);
        if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
        return e
    }

    function m(e) {
        var t = e.children,
            n = p();
        return i.createElement(i.Fragment, null, t(n))
    }
}
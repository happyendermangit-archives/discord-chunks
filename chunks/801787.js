function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DisableCustomTheme: function() {
            return E
        },
        RootThemeContextProvider: function() {
            return _
        },
        ThemeContextFlags: function() {
            return i
        },
        ThemeContextProvider: function() {
            return c
        },
        UseThemeContext: function() {
            return T
        },
        setThemeFlag: function() {
            return l
        },
        useThemeContext: function() {
            return I
        }
    }), n("789020"), n("411104");
    var i, r, a = n("735250"),
        s = n("470079"),
        o = n("231338");

    function l(e, t) {
        return e | t
    }

    function u(e) {
        let t = JSON.stringify(e);
        return {
            ...e,
            key: t
        }
    }(r = i || (i = {}))[r.MOBILE_REDESIGN_ENABLED = 2] = "MOBILE_REDESIGN_ENABLED", r[r.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4] = "MOBILE_DARK_GRADIENT_THEME_ENABLED", r[r.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED", r[r.REDUCED_CONTRAST_ENABLED = 16] = "REDUCED_CONTRAST_ENABLED", r[r.INCREASED_CONTRAST_ENABLED = 32] = "INCREASED_CONTRAST_ENABLED", r[r.REDUCE_SATURATION_ENABLED = 64] = "REDUCE_SATURATION_ENABLED";
    let d = s.createContext({
        theme: "light",
        primaryColor: null,
        secondaryColor: null,
        gradient: null,
        key: "light-false-null-null-null",
        flags: 0,
        contrast: 1,
        saturation: 1
    });

    function _(e) {
        let {
            children: t,
            theme: n = o.ThemeTypes.DARK,
            primaryColor: i = null,
            secondaryColor: r = null,
            gradient: l = null,
            flags: _ = 0,
            contrast: c = 1,
            saturation: E = 1
        } = e, I = s.useMemo(() => u({
            theme: n,
            primaryColor: i,
            secondaryColor: r,
            gradient: l,
            flags: _,
            contrast: c,
            saturation: E
        }), [n, i, r, l, _, c, E]);
        return (0, a.jsx)(d.Provider, {
            value: I,
            children: t
        })
    }

    function c(e) {
        let {
            children: t,
            theme: n,
            primaryColor: i,
            secondaryColor: r,
            gradient: o,
            flags: l,
            contrast: _,
            saturation: c
        } = e, E = s.useContext(d), I = s.useMemo(() => u({
            theme: null != n ? n : E.theme,
            primaryColor: null != i ? i : E.primaryColor,
            secondaryColor: null != r ? r : E.secondaryColor,
            gradient: null != o ? o : E.gradient,
            flags: null != l ? l : E.flags,
            contrast: null != _ ? _ : E.contrast,
            saturation: null != c ? c : E.saturation
        }), [n, E.theme, E.primaryColor, E.secondaryColor, E.gradient, E.flags, E.contrast, E.saturation, i, r, o, l, _, c]);
        return (0, a.jsx)(d.Provider, {
            value: I,
            children: t
        })
    }

    function E(e) {
        let t = I(),
            n = s.useMemo(() => u({
                ...t,
                primaryColor: null,
                secondaryColor: null
            }), [t]);
        return (0, a.jsx)(d.Provider, {
            value: n,
            children: e.children
        })
    }

    function I() {
        let e = s.useContext(d);
        if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
        return e
    }

    function T(e) {
        let {
            children: t
        } = e, n = I();
        return (0, a.jsx)(a.Fragment, {
            children: t(n)
        })
    }
}
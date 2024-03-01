function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ThemeContextFlags: function() {
            return i
        },
        setThemeFlag: function() {
            return a
        },
        RootThemeContextProvider: function() {
            return d
        },
        ThemeContextProvider: function() {
            return _
        },
        DisableCustomTheme: function() {
            return f
        },
        useThemeContext: function() {
            return E
        },
        UseThemeContext: function() {
            return S
        }
    }), n("702976"), n("70102");
    var i, r, o = n("37983"),
        s = n("884691"),
        l = n("843455");

    function a(e, t) {
        return e | t
    }

    function u(e) {
        let t = JSON.stringify(e);
        return {
            ...e,
            key: t
        }
    }(r = i || (i = {}))[r.MOBILE_REDESIGN_ENABLED = 2] = "MOBILE_REDESIGN_ENABLED", r[r.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4] = "MOBILE_DARK_GRADIENT_THEME_ENABLED", r[r.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED", r[r.REDUCED_CONTRAST_ENABLED = 16] = "REDUCED_CONTRAST_ENABLED", r[r.INCREASED_CONTRAST_ENABLED = 32] = "INCREASED_CONTRAST_ENABLED", r[r.REDUCE_SATURATION_ENABLED = 64] = "REDUCE_SATURATION_ENABLED";
    let c = s.createContext({
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
        let {
            children: t,
            theme: n = l.ThemeTypes.DARK,
            primaryColor: i = null,
            secondaryColor: r = null,
            gradient: a = null,
            flags: d = 0,
            contrast: _ = 1,
            saturation: f = 1
        } = e, E = s.useMemo(() => u({
            theme: n,
            primaryColor: i,
            secondaryColor: r,
            gradient: a,
            flags: d,
            contrast: _,
            saturation: f
        }), [n, i, r, a, d, _, f]);
        return (0, o.jsx)(c.Provider, {
            value: E,
            children: t
        })
    }

    function _(e) {
        let {
            children: t,
            theme: n,
            primaryColor: i,
            secondaryColor: r,
            gradient: l,
            flags: a,
            contrast: d,
            saturation: _
        } = e, f = s.useContext(c), E = s.useMemo(() => u({
            theme: null != n ? n : f.theme,
            primaryColor: null != i ? i : f.primaryColor,
            secondaryColor: null != r ? r : f.secondaryColor,
            gradient: null != l ? l : f.gradient,
            flags: null != a ? a : f.flags,
            contrast: null != d ? d : f.contrast,
            saturation: null != _ ? _ : f.saturation
        }), [n, f.theme, f.primaryColor, f.secondaryColor, f.gradient, f.flags, f.contrast, f.saturation, i, r, l, a, d, _]);
        return (0, o.jsx)(c.Provider, {
            value: E,
            children: t
        })
    }

    function f(e) {
        let t = E(),
            n = s.useMemo(() => u({
                ...t,
                primaryColor: null,
                secondaryColor: null
            }), [t]);
        return (0, o.jsx)(c.Provider, {
            value: n,
            children: e.children
        })
    }

    function E() {
        let e = s.useContext(c);
        if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
        return e
    }

    function S(e) {
        let {
            children: t
        } = e, n = E();
        return (0, o.jsx)(o.Fragment, {
            children: t(n)
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DefaultThemeSelection: function() {
            return S
        },
        GradientThemeSelection: function() {
            return v
        },
        SelectionCircle: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("278074"),
        u = n("898511"),
        s = n("447515"),
        l = n("920388"),
        c = n("751848"),
        f = n("784184"),
        d = n("798206"),
        _ = n("943273"),
        E = n("213324"),
        p = n("910812"),
        m = n("281767"),
        y = n("941504"),
        I = n("294423");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O() {
        return r.createElement("div", {
            className: I.selectionCircle
        }, r.createElement(_.default, {
            className: I.checkmarkCircle,
            foreground: I.checkmark,
            backgroundColor: s.default.unsafe_rawColors.WHITE_500.css
        }))
    }

    function T(e) {
        var t = e.name,
            n = e.className,
            o = e.style,
            a = e.onSelect,
            u = e.isSelected,
            s = void 0 !== u && u,
            l = e.tabIndex,
            c = e.children,
            d = (0, f.useRadioItem)({
                label: t,
                isSelected: s
            });
        return r.createElement(f.Tooltip, {
            text: t
        }, function(e) {
            var t, u;
            return r.createElement("div", {
                className: I.themeSelectionContainer
            }, r.createElement(f.Clickable, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        h(e, t, n[t])
                    })
                }
                return e
            }({}, e, d), u = (u = {
                tabIndex: null != l ? l : d.tabIndex,
                className: i()(I.themeSelection, h({}, I.selected, s), n),
                style: o,
                onClick: s ? m.NOOP : a
            }, u), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(u)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(u, e))
            }), t), c), s && r.createElement(O, null))
        })
    }

    function S(e) {
        var t = e.theme,
            n = e.isSelected,
            o = e.onSelect,
            _ = (0, u.useStateFromStores)([d.default], function() {
                return d.default.systemPrefersColorScheme
            }),
            E = function(e) {
                return (0, c.isThemeLight)(e) ? s.default.unsafe_rawColors.PRIMARY_600.css : s.default.unsafe_rawColors.WHITE_500.css
            },
            h = (0, a.match)({
                theme: t,
                systemPrefersColorScheme: _
            }).with({
                theme: "system",
                systemPrefersColorScheme: m.ThemeTypes.LIGHT
            }, function() {
                return I.lightIcon
            }).with({
                theme: m.ThemeTypes.LIGHT
            }, function() {
                return I.lightIcon
            }).otherwise(function() {
                return I.darkIcon
            }),
            O = (0, a.match)(t).with(m.ThemeTypes.LIGHT, function() {
                return y.default.Messages.THEME_LIGHT
            }).with(m.ThemeTypes.DARK, function() {
                return y.default.Messages.THEME_DARK
            }).with("system", function() {
                return y.default.Messages.THEME_SYSTEM
            }).exhaustive(),
            S = (0, f.useRedesignIconContext)().enabled;
        return r.createElement(T, {
            onSelect: o,
            isSelected: n,
            name: O,
            className: i()(I.defaultThemeSelection, h)
        }, "system" === t && r.createElement("div", {
            className: I.iconWrapper
        }, S ? r.createElement(l.RefreshIcon, {
            color: E(_)
        }) : r.createElement(p.default, {
            fill: E(_)
        })))
    }

    function v(e) {
        var t = e.preset,
            n = e.isSelected,
            o = e.disabled,
            a = e.tabIndex,
            u = e.onSelect,
            s = t.colors,
            l = t.angle,
            f = t.theme,
            d = (0, E.getLinearGradientForBackgroundGradient)({
                colors: s,
                angle: l
            });
        return r.createElement(T, {
            onSelect: o ? void 0 : u,
            isSelected: n,
            name: t.getName(),
            className: i()([o ? I.disabled : null, (0, c.isThemeDark)(f) ? I.darkOverlay : I.lightOverlay]),
            style: {
                background: "var(--bg-overlay), ".concat(d)
            },
            tabIndex: a
        })
    }
}
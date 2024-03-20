function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SelectionCircle: function() {
            return S
        },
        DefaultThemeSelection: function() {
            return v
        },
        GradientThemeSelection: function() {
            return N
        }
    }), n("794252");
    var i = n("37983");
    n("884691");
    var a = n("414456"),
        s = n.n(a),
        l = n("506838"),
        o = n("446674"),
        r = n("669491"),
        u = n("2662"),
        d = n("819855"),
        c = n("77078"),
        f = n("161778"),
        g = n("578706"),
        m = n("253539"),
        h = n("92130"),
        _ = n("49111"),
        p = n("782340"),
        E = n("605940");

    function S() {
        return (0, i.jsx)("div", {
            className: E.selectionCircle,
            children: (0, i.jsx)(g.default, {
                className: E.checkmarkCircle,
                foreground: E.checkmark,
                backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
            })
        })
    }

    function T(e) {
        let {
            name: t,
            className: n,
            style: a,
            onSelect: l,
            isSelected: o = !1,
            tabIndex: r,
            children: u
        } = e, d = (0, c.useRadioItem)({
            label: t,
            isSelected: o
        });
        return (0, i.jsx)(c.Tooltip, {
            text: t,
            children: e => (0, i.jsxs)("div", {
                className: E.themeSelectionContainer,
                children: [(0, i.jsx)(c.Clickable, {
                    ...e,
                    ...d,
                    tabIndex: null != r ? r : d.tabIndex,
                    className: s(E.themeSelection, {
                        [E.selected]: o
                    }, n),
                    style: a,
                    onClick: o ? _.NOOP : l,
                    children: u
                }), o && (0, i.jsx)(S, {})]
            })
        })
    }

    function v(e) {
        let {
            theme: t,
            isSelected: n,
            onSelect: a
        } = e, g = (0, o.useStateFromStores)([f.default], () => f.default.systemPrefersColorScheme), m = e => (0, d.isThemeLight)(e) ? r.default.unsafe_rawColors.PRIMARY_600.css : r.default.unsafe_rawColors.WHITE_500.css, S = (0, l.match)({
            theme: t,
            systemPrefersColorScheme: g
        }).with({
            theme: "system",
            systemPrefersColorScheme: _.ThemeTypes.LIGHT
        }, () => E.lightIcon).with({
            theme: _.ThemeTypes.LIGHT
        }, () => E.lightIcon).otherwise(() => E.darkIcon), v = (0, l.match)(t).with(_.ThemeTypes.LIGHT, () => p.default.Messages.THEME_LIGHT).with(_.ThemeTypes.DARK, () => p.default.Messages.THEME_DARK).with("system", () => p.default.Messages.THEME_SYSTEM).exhaustive(), N = (0, c.useRedesignIconContext)().enabled;
        return (0, i.jsx)(T, {
            onSelect: a,
            isSelected: n,
            name: v,
            className: s(E.defaultThemeSelection, S),
            children: "system" === t && (0, i.jsx)("div", {
                className: E.iconWrapper,
                children: N ? (0, i.jsx)(u.RefreshIcon, {
                    color: m(g)
                }) : (0, i.jsx)(h.default, {
                    fill: m(g)
                })
            })
        })
    }

    function N(e) {
        let {
            preset: t,
            isSelected: n,
            disabled: a,
            tabIndex: l,
            onSelect: o
        } = e, {
            colors: r,
            angle: u,
            theme: c
        } = t, f = (0, m.getLinearGradientForBackgroundGradient)({
            colors: r,
            angle: u
        });
        return (0, i.jsx)(T, {
            onSelect: a ? void 0 : o,
            isSelected: n,
            name: t.getName(),
            className: s([a ? E.disabled : null, (0, d.isThemeDark)(c) ? E.darkOverlay : E.lightOverlay]),
            style: {
                background: "var(--bg-overlay), ".concat(f)
            },
            tabIndex: l
        })
    }
}
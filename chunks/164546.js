function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SelectionCircle: function() {
            return E
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
        l = n.n(a),
        s = n("506838"),
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
        S = n("605940");

    function E() {
        return (0, i.jsx)("div", {
            className: S.selectionCircle,
            children: (0, i.jsx)(g.default, {
                className: S.checkmarkCircle,
                foreground: S.checkmark,
                backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
            })
        })
    }

    function T(e) {
        let {
            name: t,
            className: n,
            style: a,
            onSelect: s,
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
                className: S.themeSelectionContainer,
                children: [(0, i.jsx)(c.Clickable, {
                    ...e,
                    ...d,
                    tabIndex: null != r ? r : d.tabIndex,
                    className: l(S.themeSelection, {
                        [S.selected]: o
                    }, n),
                    style: a,
                    onClick: o ? _.NOOP : s,
                    children: u
                }), o && (0, i.jsx)(E, {})]
            })
        })
    }

    function v(e) {
        let {
            theme: t,
            isSelected: n,
            onSelect: a
        } = e, g = (0, o.useStateFromStores)([f.default], () => f.default.systemPrefersColorScheme), m = e => (0, d.isThemeLight)(e) ? r.default.unsafe_rawColors.PRIMARY_600.css : r.default.unsafe_rawColors.WHITE_500.css, E = (0, s.match)({
            theme: t,
            systemPrefersColorScheme: g
        }).with({
            theme: "system",
            systemPrefersColorScheme: _.ThemeTypes.LIGHT
        }, () => S.lightIcon).with({
            theme: _.ThemeTypes.LIGHT
        }, () => S.lightIcon).otherwise(() => S.darkIcon), v = (0, s.match)(t).with(_.ThemeTypes.LIGHT, () => p.default.Messages.THEME_LIGHT).with(_.ThemeTypes.DARK, () => p.default.Messages.THEME_DARK).with("system", () => p.default.Messages.THEME_SYSTEM).exhaustive(), N = (0, c.useRedesignIconContext)().enabled;
        return (0, i.jsx)(T, {
            onSelect: a,
            isSelected: n,
            name: v,
            className: l(S.defaultThemeSelection, E),
            children: "system" === t && (0, i.jsx)("div", {
                className: S.iconWrapper,
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
            tabIndex: s,
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
            className: l([a ? S.disabled : null, (0, d.isThemeDark)(c) ? S.darkOverlay : S.lightOverlay]),
            style: {
                background: "var(--bg-overlay), ".concat(f)
            },
            tabIndex: s
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SelectionCircle: function() {
            return T
        },
        DefaultThemeSelection: function() {
            return v
        },
        GradientThemeSelection: function() {
            return I
        }
    }), n("794252");
    var i = n("37983");
    n("884691");
    var a = n("414456"),
        s = n.n(a),
        l = n("506838"),
        r = n("446674"),
        o = n("669491"),
        u = n("2662"),
        d = n("819855"),
        c = n("77078"),
        f = n("161778"),
        m = n("578706"),
        h = n("253539"),
        g = n("92130"),
        _ = n("49111"),
        S = n("782340"),
        p = n("605940");

    function T() {
        return (0, i.jsx)("div", {
            className: p.selectionCircle,
            children: (0, i.jsx)(m.default, {
                className: p.checkmarkCircle,
                foreground: p.checkmark,
                backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
            })
        })
    }

    function E(e) {
        let {
            name: t,
            className: n,
            style: a,
            onSelect: l,
            isSelected: r = !1,
            tabIndex: o,
            children: u
        } = e, d = (0, c.useRadioItem)({
            label: t,
            isSelected: r
        });
        return (0, i.jsx)(c.Tooltip, {
            text: t,
            children: e => (0, i.jsxs)("div", {
                className: p.themeSelectionContainer,
                children: [(0, i.jsx)(c.Clickable, {
                    ...e,
                    ...d,
                    tabIndex: null != o ? o : d.tabIndex,
                    className: s(p.themeSelection, {
                        [p.selected]: r
                    }, n),
                    style: a,
                    onClick: r ? _.NOOP : l,
                    children: u
                }), r && (0, i.jsx)(T, {})]
            })
        })
    }

    function v(e) {
        let {
            theme: t,
            isSelected: n,
            onSelect: a
        } = e, m = (0, r.useStateFromStores)([f.default], () => f.default.systemPrefersColorScheme), h = e => (0, d.isThemeLight)(e) ? o.default.unsafe_rawColors.PRIMARY_600.css : o.default.unsafe_rawColors.WHITE_500.css, T = (0, l.match)({
            theme: t,
            systemPrefersColorScheme: m
        }).with({
            theme: "system",
            systemPrefersColorScheme: _.ThemeTypes.LIGHT
        }, () => p.lightIcon).with({
            theme: _.ThemeTypes.LIGHT
        }, () => p.lightIcon).otherwise(() => p.darkIcon), v = (0, l.match)(t).with(_.ThemeTypes.LIGHT, () => S.default.Messages.THEME_LIGHT).with(_.ThemeTypes.DARK, () => S.default.Messages.THEME_DARK).with("system", () => S.default.Messages.THEME_SYSTEM).exhaustive(), I = (0, c.useRedesignIconContext)().enabled;
        return (0, i.jsx)(E, {
            onSelect: a,
            isSelected: n,
            name: v,
            className: s(p.defaultThemeSelection, T),
            children: "system" === t && (0, i.jsx)("div", {
                className: p.iconWrapper,
                children: I ? (0, i.jsx)(u.RefreshIcon, {
                    color: h(m)
                }) : (0, i.jsx)(g.default, {
                    fill: h(m)
                })
            })
        })
    }

    function I(e) {
        let {
            preset: t,
            isSelected: n,
            disabled: a,
            tabIndex: l,
            onSelect: r
        } = e, {
            colors: o,
            angle: u,
            theme: c
        } = t, f = (0, h.getLinearGradientForBackgroundGradient)({
            colors: o,
            angle: u
        });
        return (0, i.jsx)(E, {
            onSelect: a ? void 0 : r,
            isSelected: n,
            name: t.getName(),
            className: s([a ? p.disabled : null, (0, d.isThemeDark)(c) ? p.darkOverlay : p.lightOverlay]),
            style: {
                background: "var(--bg-overlay), ".concat(f)
            },
            tabIndex: l
        })
    }
}
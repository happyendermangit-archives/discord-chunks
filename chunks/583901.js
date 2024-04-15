function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DefaultThemeSelection: function() {
            return N
        },
        GradientThemeSelection: function() {
            return O
        },
        SelectionCircle: function() {
            return h
        }
    }), n("627341");
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("278074"),
        o = n("442837"),
        l = n("692547"),
        u = n("76162"),
        d = n("780384"),
        _ = n("481060"),
        c = n("210887"),
        E = n("441674"),
        I = n("47760"),
        T = n("798728"),
        f = n("981631"),
        S = n("689938"),
        A = n("294423");

    function h() {
        return (0, i.jsx)("div", {
            className: A.selectionCircle,
            children: (0, i.jsx)(E.default, {
                className: A.checkmarkCircle,
                foreground: A.checkmark,
                backgroundColor: l.default.unsafe_rawColors.WHITE_500.css
            })
        })
    }

    function m(e) {
        let {
            name: t,
            className: n,
            style: r,
            onSelect: a,
            isSelected: o = !1,
            tabIndex: l,
            children: u
        } = e, d = (0, _.useRadioItem)({
            label: t,
            isSelected: o
        });
        return (0, i.jsx)(_.Tooltip, {
            text: t,
            children: e => (0, i.jsxs)("div", {
                className: A.themeSelectionContainer,
                children: [(0, i.jsx)(_.Clickable, {
                    ...e,
                    ...d,
                    tabIndex: null != l ? l : d.tabIndex,
                    className: s()(A.themeSelection, {
                        [A.selected]: o
                    }, n),
                    style: r,
                    onClick: o ? f.NOOP : a,
                    children: u
                }), o && (0, i.jsx)(h, {})]
            })
        })
    }

    function N(e) {
        let {
            theme: t,
            isSelected: n,
            onSelect: r
        } = e, E = (0, o.useStateFromStores)([c.default], () => c.default.systemPrefersColorScheme), I = e => (0, d.isThemeLight)(e) ? l.default.unsafe_rawColors.PRIMARY_600.css : l.default.unsafe_rawColors.WHITE_500.css, h = (0, a.match)({
            theme: t,
            systemPrefersColorScheme: E
        }).with({
            theme: "system",
            systemPrefersColorScheme: f.ThemeTypes.LIGHT
        }, () => A.lightIcon).with({
            theme: f.ThemeTypes.LIGHT
        }, () => A.lightIcon).otherwise(() => A.darkIcon), N = (0, a.match)(t).with(f.ThemeTypes.LIGHT, () => S.default.Messages.THEME_LIGHT).with(f.ThemeTypes.DARK, () => S.default.Messages.THEME_DARK).with("system", () => S.default.Messages.THEME_SYSTEM).exhaustive(), O = (0, _.useRedesignIconContext)().enabled;
        return (0, i.jsx)(m, {
            onSelect: r,
            isSelected: n,
            name: N,
            className: s()(A.defaultThemeSelection, h),
            children: "system" === t && (0, i.jsx)("div", {
                className: A.iconWrapper,
                children: O ? (0, i.jsx)(u.RefreshIcon, {
                    color: I(E)
                }) : (0, i.jsx)(T.default, {
                    fill: I(E)
                })
            })
        })
    }

    function O(e) {
        let {
            preset: t,
            isSelected: n,
            disabled: r,
            tabIndex: a,
            onSelect: o
        } = e, {
            colors: l,
            angle: u,
            theme: _
        } = t, c = (0, I.getLinearGradientForBackgroundGradient)({
            colors: l,
            angle: u
        });
        return (0, i.jsx)(m, {
            onSelect: r ? void 0 : o,
            isSelected: n,
            name: t.getName(),
            className: s()([r ? A.disabled : null, (0, d.isThemeDark)(_) ? A.darkOverlay : A.lightOverlay]),
            style: {
                background: "var(--bg-overlay), ".concat(c)
            },
            tabIndex: a
        })
    }
}
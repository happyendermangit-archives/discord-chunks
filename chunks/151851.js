function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("442837"),
        o = n("481060"),
        l = n("350810"),
        u = n("579806"),
        d = n("40851"),
        _ = n("358221"),
        c = n("754347"),
        E = n("428548"),
        I = n("718759"),
        T = n("679219"),
        f = n("835225"),
        S = n("939039"),
        A = n("117795"),
        h = n("358085"),
        m = n("792125"),
        N = n("998502"),
        O = n("689938"),
        p = n("835414");
    let R = e => N.default.close(e),
        C = e => N.default.minimize(e),
        g = (e, t) => {
            (0, h.isMac)() && !t.altKey ? N.default.fullscreen(e) : N.default.maximize(e)
        },
        L = e => {
            let {
                windowKey: t,
                themeOverride: n,
                hasOpenLayer: r
            } = e;
            return (0, i.jsxs)("div", {
                className: s()(p.typeWindows, (0, m.getThemeClass)(n), {
                    [p.withBackgroundOverride]: !r
                }),
                children: [(0, i.jsx)("div", {
                    className: p.wordmarkWindows,
                    children: (0, i.jsx)(c.default, {})
                }), (0, i.jsx)(o.Clickable, {
                    className: p.winButtonClose,
                    onClick: () => R(t),
                    "aria-label": O.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                    tabIndex: -1,
                    children: (0, i.jsx)(E.default, {})
                }), (0, i.jsx)(o.Clickable, {
                    className: p.winButtonMinMax,
                    onClick: e => g(t, e),
                    "aria-label": O.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                    tabIndex: -1,
                    children: (0, i.jsx)(T.default, {})
                }), (0, i.jsx)(o.Clickable, {
                    className: p.winButtonMinMax,
                    onClick: () => C(t),
                    "aria-label": O.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                    tabIndex: -1,
                    children: (0, i.jsx)(S.default, {})
                })]
            })
        },
        D = e => {
            let {
                focused: t,
                windowKey: n,
                frame: r,
                themeOverride: a,
                hasOpenLayer: l
            } = e;
            return (0, i.jsxs)(o.Clickable, {
                className: s()(r ? p.typeMacOSWithFrame : p.typeMacOS, t ? p.focused : p.unfocused, (0, m.getThemeClass)(a), {
                    [p.withBackgroundOverride]: !l
                }),
                onDoubleClick: () => N.default.maximize(n),
                tabIndex: -1,
                children: [u.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, i.jsx)("div", {
                    className: p.macDragRegion
                }) : (0, i.jsxs)("div", {
                    className: p.macButtons,
                    children: [(0, i.jsx)(o.Clickable, {
                        className: p.macButtonClose,
                        onClick: () => R(n),
                        "aria-label": O.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                        tabIndex: -1,
                        children: (0, i.jsx)(I.default, {
                            color: "#4c0000"
                        })
                    }), (0, i.jsx)(o.Clickable, {
                        className: p.macButtonMinimize,
                        onClick: () => C(n),
                        "aria-label": O.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                        tabIndex: -1,
                        children: (0, i.jsx)(A.default, {
                            color: "#975500"
                        })
                    }), (0, i.jsx)(o.Clickable, {
                        className: p.macButtonMaximize,
                        onClick: e => g(n, e),
                        "aria-label": O.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                        tabIndex: -1,
                        children: (0, i.jsx)(f.default, {
                            color: "#006500"
                        })
                    })]
                }), r ? (0, i.jsx)("div", {
                    className: p.wordmarkMacOS,
                    children: (0, i.jsx)(c.default, {
                        color: "#ffffff"
                    })
                }) : null]
            })
        };

    function v(e) {
        let {
            focused: t,
            type: n,
            windowKey: r,
            macOSFrame: s = !1,
            themeOverride: o
        } = e, u = (0, d.useAppContext)(), c = (0, a.useStateFromStores)([_.default], () => _.default.isFullscreenInContext(u)), E = (0, l.default)();
        if (c) return null;
        switch (n) {
            case h.PlatformTypes.WINDOWS:
                return (0, i.jsx)(L, {
                    windowKey: r,
                    themeOverride: o,
                    hasOpenLayer: E
                });
            case h.PlatformTypes.OSX:
                return (0, i.jsx)(D, {
                    focused: t,
                    windowKey: r,
                    frame: s,
                    themeOverride: o,
                    hasOpenLayer: E
                });
            default:
                return null
        }
    }
}
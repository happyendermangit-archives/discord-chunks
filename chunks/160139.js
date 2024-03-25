function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        l = n("446674"),
        i = n("77078"),
        u = n("368598"),
        o = n("49671"),
        d = n("244201"),
        c = n("191145"),
        f = n("270227"),
        h = n("940277"),
        E = n("386811"),
        p = n("964264"),
        C = n("655804"),
        m = n("58463"),
        S = n("238500"),
        g = n("773336"),
        _ = n("439932"),
        T = n("50885"),
        v = n("782340"),
        I = n("804392");
    let A = e => T.default.close(e),
        M = e => T.default.minimize(e),
        R = (e, t) => {
            (0, g.isMac)() && !t.altKey ? T.default.fullscreen(e) : T.default.maximize(e)
        },
        N = e => {
            let {
                windowKey: t,
                themeOverride: n,
                hasOpenLayer: r
            } = e;
            return (0, a.jsxs)("div", {
                className: s(I.typeWindows, (0, _.getThemeClass)(n), {
                    [I.withBackgroundOverride]: !r
                }),
                children: [(0, a.jsx)("div", {
                    className: I.wordmarkWindows,
                    children: (0, a.jsx)(f.default, {})
                }), (0, a.jsx)(i.Clickable, {
                    className: I.winButtonClose,
                    onClick: () => A(t),
                    "aria-label": v.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                    tabIndex: -1,
                    children: (0, a.jsx)(h.default, {})
                }), (0, a.jsx)(i.Clickable, {
                    className: I.winButtonMinMax,
                    onClick: e => R(t, e),
                    "aria-label": v.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                    tabIndex: -1,
                    children: (0, a.jsx)(p.default, {})
                }), (0, a.jsx)(i.Clickable, {
                    className: I.winButtonMinMax,
                    onClick: () => M(t),
                    "aria-label": v.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                    tabIndex: -1,
                    children: (0, a.jsx)(m.default, {})
                })]
            })
        },
        y = e => {
            let {
                focused: t,
                windowKey: n,
                frame: r,
                themeOverride: l,
                hasOpenLayer: u
            } = e;
            return (0, a.jsxs)(i.Clickable, {
                className: s(r ? I.typeMacOSWithFrame : I.typeMacOS, t ? I.focused : I.unfocused, (0, _.getThemeClass)(l), {
                    [I.withBackgroundOverride]: !u
                }),
                onDoubleClick: () => T.default.maximize(n),
                tabIndex: -1,
                children: [o.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
                    className: I.macDragRegion
                }) : (0, a.jsxs)("div", {
                    className: I.macButtons,
                    children: [(0, a.jsx)(i.Clickable, {
                        className: I.macButtonClose,
                        onClick: () => A(n),
                        "aria-label": v.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                        tabIndex: -1,
                        children: (0, a.jsx)(E.default, {
                            color: "#4c0000"
                        })
                    }), (0, a.jsx)(i.Clickable, {
                        className: I.macButtonMinimize,
                        onClick: () => M(n),
                        "aria-label": v.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                        tabIndex: -1,
                        children: (0, a.jsx)(S.default, {
                            color: "#975500"
                        })
                    }), (0, a.jsx)(i.Clickable, {
                        className: I.macButtonMaximize,
                        onClick: e => R(n, e),
                        "aria-label": v.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                        tabIndex: -1,
                        children: (0, a.jsx)(C.default, {
                            color: "#006500"
                        })
                    })]
                }), r ? (0, a.jsx)("div", {
                    className: I.wordmarkMacOS,
                    children: (0, a.jsx)(f.default, {
                        color: "#ffffff"
                    })
                }) : null]
            })
        };

    function O(e) {
        let {
            focused: t,
            type: n,
            windowKey: r,
            macOSFrame: s = !1,
            themeOverride: i
        } = e, o = (0, d.useAppContext)(), f = (0, l.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(o)), h = (0, u.default)();
        if (f) return null;
        switch (n) {
            case g.PlatformTypes.WINDOWS:
                return (0, a.jsx)(N, {
                    windowKey: r,
                    themeOverride: i,
                    hasOpenLayer: h
                });
            case g.PlatformTypes.OSX:
                return (0, a.jsx)(y, {
                    focused: t,
                    windowKey: r,
                    frame: s,
                    themeOverride: i,
                    hasOpenLayer: h
                });
            default:
                return null
        }
    }
}
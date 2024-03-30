function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("588530"),
        l = n("517727"),
        c = n("813970"),
        f = n("390579"),
        d = n("21927"),
        _ = n("495268"),
        E = n("426952"),
        p = n("947778"),
        m = n("813442"),
        y = n("798310"),
        I = n("250436"),
        h = n("374550"),
        O = n("153732"),
        T = n("131900"),
        S = n("941504"),
        v = n("835414");

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var A = function(e) {
            return T.default.close(e)
        },
        b = function(e) {
            return T.default.minimize(e)
        },
        N = function(e, t) {
            (0, h.isMac)() && !t.altKey ? T.default.fullscreen(e) : T.default.maximize(e)
        },
        R = function(e) {
            var t = e.windowKey,
                n = e.themeOverride,
                o = e.hasOpenLayer;
            return r.createElement("div", {
                className: i()(v.typeWindows, (0, O.getThemeClass)(n), g({}, v.withBackgroundOverride, !o))
            }, r.createElement("div", {
                className: v.wordmarkWindows
            }, r.createElement(d.default, null)), r.createElement(u.Clickable, {
                className: v.winButtonClose,
                onClick: function() {
                    return A(t)
                },
                "aria-label": S.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                tabIndex: -1
            }, r.createElement(_.default, null)), r.createElement(u.Clickable, {
                className: v.winButtonMinMax,
                onClick: function(e) {
                    return N(t, e)
                },
                "aria-label": S.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                tabIndex: -1
            }, r.createElement(p.default, null)), r.createElement(u.Clickable, {
                className: v.winButtonMinMax,
                onClick: function() {
                    return b(t)
                },
                "aria-label": S.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                tabIndex: -1
            }, r.createElement(y.default, null)))
        },
        C = function(e) {
            var t = e.focused,
                n = e.windowKey,
                o = e.frame,
                a = e.themeOverride,
                s = e.hasOpenLayer;
            return r.createElement(u.Clickable, {
                className: i()(o ? v.typeMacOSWithFrame : v.typeMacOS, t ? v.focused : v.unfocused, (0, O.getThemeClass)(a), g({}, v.withBackgroundOverride, !s)),
                onDoubleClick: function() {
                    return T.default.maximize(n)
                },
                tabIndex: -1
            }, l.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? r.createElement("div", {
                className: v.macDragRegion
            }) : r.createElement("div", {
                className: v.macButtons
            }, r.createElement(u.Clickable, {
                className: v.macButtonClose,
                onClick: function() {
                    return A(n)
                },
                "aria-label": S.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                tabIndex: -1
            }, r.createElement(E.default, {
                color: "#4c0000"
            })), r.createElement(u.Clickable, {
                className: v.macButtonMinimize,
                onClick: function() {
                    return b(n)
                },
                "aria-label": S.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                tabIndex: -1
            }, r.createElement(I.default, {
                color: "#975500"
            })), r.createElement(u.Clickable, {
                className: v.macButtonMaximize,
                onClick: function(e) {
                    return N(n, e)
                },
                "aria-label": S.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                tabIndex: -1
            }, r.createElement(m.default, {
                color: "#006500"
            }))), o ? r.createElement("div", {
                className: v.wordmarkMacOS
            }, r.createElement(d.default, {
                color: "#ffffff"
            })) : null)
        };

    function P(e) {
        var t = e.focused,
            n = e.type,
            o = e.windowKey,
            i = e.macOSFrame,
            u = e.themeOverride,
            l = (0, c.useAppContext)(),
            d = (0, a.useStateFromStores)([f.default], function() {
                return f.default.isFullscreenInContext(l)
            }),
            _ = (0, s.default)();
        if (d) return null;
        switch (n) {
            case h.PlatformTypes.WINDOWS:
                return r.createElement(R, {
                    windowKey: o,
                    themeOverride: u,
                    hasOpenLayer: _
                });
            case h.PlatformTypes.OSX:
                return r.createElement(C, {
                    focused: t,
                    windowKey: o,
                    frame: void 0 !== i && i,
                    themeOverride: u,
                    hasOpenLayer: _
                });
            default:
                return null
        }
    }
}
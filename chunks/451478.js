function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("512722"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("830917");
    let c = null,
        E = new Map;

    function I(e) {
        let t = E.get(e);
        return null == t ? (console.warn("Window state not initialized", e), {
            isElementFullscreen: !1,
            focused: !1,
            windowSize: {
                width: 0,
                height: 0
            },
            visible: !1
        }) : t
    }
    class T extends(i = u.default.Store) {
        isFocused() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, _.getMainWindowId)();
            return I(e).focused
        }
        isVisible() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, _.getMainWindowId)();
            return I(e).visible
        }
        getFocusedWindowId() {
            let e = null;
            return E.forEach((t, n) => {
                t.focused && (e = n)
            }), e
        }
        getLastFocusedWindowId() {
            return c
        }
        isElementFullScreen() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, _.getMainWindowId)();
            return I(e).isElementFullscreen
        }
        windowSize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, _.getMainWindowId)();
            return I(e).windowSize
        }
    }
    s = "WindowStore", (a = "displayName") in(r = T) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s;
    let f = new T(d.default, {
        WINDOW_INIT: function(e) {
            l()(!E.has(e.windowId), "Window initialized multiple times");
            let {
                width: t,
                height: n,
                isElementFullscreen: i,
                focused: r,
                visible: a
            } = e;
            return E.set(e.windowId, {
                windowSize: {
                    width: t,
                    height: n
                },
                isElementFullscreen: i,
                focused: r,
                visible: a
            }), r && (c = e.windowId), !0
        },
        WINDOW_FULLSCREEN_CHANGE: function(e) {
            let t = I(e.windowId);
            return t.isElementFullscreen !== e.isElementFullscreen && (E.set(e.windowId, {
                ...t,
                isElementFullscreen: e.isElementFullscreen
            }), !0)
        },
        WINDOW_FOCUS: function(e) {
            let t = I(e.windowId);
            return t.focused !== e.focused && (e.focused && (c = e.windowId), E.set(e.windowId, {
                ...t,
                focused: e.focused
            }), !0)
        },
        WINDOW_RESIZED: function(e) {
            let t = I(e.windowId);
            return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (E.set(e.windowId, {
                ...t,
                windowSize: {
                    width: e.width,
                    height: e.height
                }
            }), !0)
        },
        WINDOW_UNLOAD: function(e) {
            return E.delete(e.windowId), c === e.windowId && (c = null), !0
        },
        WINDOW_VISIBILITY_CHANGE: function(e) {
            let t = I(e.windowId);
            return t.visible !== e.visible && (E.set(e.windowId, {
                ...t,
                visible: e.visible
            }), !0)
        }
    });
    Promise.resolve().then(n.bind(n, "626135")).then(e => {
        let {
            addExtraAnalyticsDecorator: t
        } = e;
        t(e => {
            e.client_app_state = f.isFocused() ? "focused" : "unfocused"
        })
    }), t.default = f
}
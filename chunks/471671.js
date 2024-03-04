function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("627445"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("816454");
    let l = new Map;

    function u(e) {
        let t = l.get(e);
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
    class d extends r.default.Store {
        isFocused() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
            return u(e).focused
        }
        isVisible() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
            return u(e).visible
        }
        getFocusedWindowId() {
            let e = null;
            return l.forEach((t, n) => {
                t.focused && (e = n)
            }), e
        }
        isElementFullScreen() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
            return u(e).isElementFullscreen
        }
        windowSize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
            return u(e).windowSize
        }
    }
    d.displayName = "WindowStore";
    let c = new d(a.default, {
        WINDOW_INIT: function(e) {
            s(!l.has(e.windowId), "Window initialized multiple times");
            let {
                width: t,
                height: n,
                isElementFullscreen: i,
                focused: r,
                visible: a
            } = e;
            return l.set(e.windowId, {
                windowSize: {
                    width: t,
                    height: n
                },
                isElementFullscreen: i,
                focused: r,
                visible: a
            }), !0
        },
        WINDOW_FULLSCREEN_CHANGE: function(e) {
            let t = u(e.windowId);
            return t.isElementFullscreen !== e.isElementFullscreen && (l.set(e.windowId, {
                ...t,
                isElementFullscreen: e.isElementFullscreen
            }), !0)
        },
        WINDOW_FOCUS: function(e) {
            let t = u(e.windowId);
            return t.focused !== e.focused && (l.set(e.windowId, {
                ...t,
                focused: e.focused
            }), !0)
        },
        WINDOW_RESIZED: function(e) {
            let t = u(e.windowId);
            return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (l.set(e.windowId, {
                ...t,
                windowSize: {
                    width: e.width,
                    height: e.height
                }
            }), !0)
        },
        WINDOW_UNLOAD: function(e) {
            return l.delete(e.windowId), !0
        },
        WINDOW_VISIBILITY_CHANGE: function(e) {
            let t = u(e.windowId);
            return t.visible !== e.visible && (l.set(e.windowId, {
                ...t,
                visible: e.visible
            }), !0)
        }
    });
    n.el("599110").then(n.bind(n, "599110")).then(e => {
        let {
            addExtraAnalyticsDecorator: t
        } = e;
        t(e => {
            e.client_app_state = c.isFocused() ? "focused" : "unfocused"
        })
    });
    var f = c
}
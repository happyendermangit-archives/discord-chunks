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
    let l = null,
        u = new Map;

    function d(e) {
        let t = u.get(e);
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
    class c extends r.default.Store {
        isFocused() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
            return d(e).focused
        }
        isVisible() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
            return d(e).visible
        }
        getFocusedWindowId() {
            let e = null;
            return u.forEach((t, n) => {
                t.focused && (e = n)
            }), e
        }
        getLastFocusedWindowId() {
            return l
        }
        isElementFullScreen() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
            return d(e).isElementFullscreen
        }
        windowSize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
            return d(e).windowSize
        }
    }
    c.displayName = "WindowStore";
    let _ = new c(a.default, {
        WINDOW_INIT: function(e) {
            s(!u.has(e.windowId), "Window initialized multiple times");
            let {
                width: t,
                height: n,
                isElementFullscreen: i,
                focused: r,
                visible: a
            } = e;
            return u.set(e.windowId, {
                windowSize: {
                    width: t,
                    height: n
                },
                isElementFullscreen: i,
                focused: r,
                visible: a
            }), r && (l = e.windowId), !0
        },
        WINDOW_FULLSCREEN_CHANGE: function(e) {
            let t = d(e.windowId);
            return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                ...t,
                isElementFullscreen: e.isElementFullscreen
            }), !0)
        },
        WINDOW_FOCUS: function(e) {
            let t = d(e.windowId);
            return t.focused !== e.focused && (e.focused && (l = e.windowId), u.set(e.windowId, {
                ...t,
                focused: e.focused
            }), !0)
        },
        WINDOW_RESIZED: function(e) {
            let t = d(e.windowId);
            return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                ...t,
                windowSize: {
                    width: e.width,
                    height: e.height
                }
            }), !0)
        },
        WINDOW_UNLOAD: function(e) {
            return u.delete(e.windowId), l === e.windowId && (l = null), !0
        },
        WINDOW_VISIBILITY_CHANGE: function(e) {
            let t = d(e.windowId);
            return t.visible !== e.visible && (u.set(e.windowId, {
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
            e.client_app_state = _.isFocused() ? "focused" : "unfocused"
        })
    });
    var f = _
}
function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return S
        }
    }), E("222007");
    var t = E("627445"),
        o = E.n(t),
        n = E("446674"),
        r = E("913144"),
        i = E("816454");
    let a = new Map;

    function I(e) {
        let _ = a.get(e);
        return null == _ ? (console.warn("Window state not initialized", e), {
            isElementFullscreen: !1,
            focused: !1,
            windowSize: {
                width: 0,
                height: 0
            },
            visible: !1
        }) : _
    }
    class s extends n.default.Store {
        isFocused() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.getMainWindowId)();
            return I(e).focused
        }
        isVisible() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.getMainWindowId)();
            return I(e).visible
        }
        getFocusedWindowId() {
            let e = null;
            return a.forEach((_, E) => {
                _.focused && (e = E)
            }), e
        }
        isElementFullScreen() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.getMainWindowId)();
            return I(e).isElementFullscreen
        }
        windowSize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.getMainWindowId)();
            return I(e).windowSize
        }
    }
    s.displayName = "WindowStore";
    let T = new s(r.default, {
        WINDOW_INIT: function(e) {
            o(!a.has(e.windowId), "Window initialized multiple times");
            let {
                width: _,
                height: E,
                isElementFullscreen: t,
                focused: n,
                visible: r
            } = e;
            return a.set(e.windowId, {
                windowSize: {
                    width: _,
                    height: E
                },
                isElementFullscreen: t,
                focused: n,
                visible: r
            }), !0
        },
        WINDOW_FULLSCREEN_CHANGE: function(e) {
            let _ = I(e.windowId);
            return _.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                ..._,
                isElementFullscreen: e.isElementFullscreen
            }), !0)
        },
        WINDOW_FOCUS: function(e) {
            let _ = I(e.windowId);
            return _.focused !== e.focused && (a.set(e.windowId, {
                ..._,
                focused: e.focused
            }), !0)
        },
        WINDOW_RESIZED: function(e) {
            let _ = I(e.windowId);
            return (_.windowSize.width !== e.width || _.windowSize.height !== e.height) && (a.set(e.windowId, {
                ..._,
                windowSize: {
                    width: e.width,
                    height: e.height
                }
            }), !0)
        },
        WINDOW_UNLOAD: function(e) {
            return a.delete(e.windowId), !0
        },
        WINDOW_VISIBILITY_CHANGE: function(e) {
            let _ = I(e.windowId);
            return _.visible !== e.visible && (a.set(e.windowId, {
                ..._,
                visible: e.visible
            }), !0)
        }
    });
    E.el("599110").then(E.bind(E, "599110")).then(e => {
        let {
            addExtraAnalyticsDecorator: _
        } = e;
        _(e => {
            e.client_app_state = T.isFocused() ? "focused" : "unfocused"
        })
    });
    var S = T
}
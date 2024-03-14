function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        focus: function() {
            return o
        },
        hidden: function() {
            return l
        },
        resized: function() {
            return d
        },
        fullscreenChange: function() {
            return c
        },
        visibilityChange: function() {
            return f
        },
        init: function() {
            return _
        },
        unload: function() {
            return E
        }
    });
    var i = n("917351"),
        s = n("913144"),
        r = n("563680"),
        a = n("816454");

    function o(e, t) {
        s.default.dispatch({
            type: "WINDOW_FOCUS",
            windowId: (0, a.getWindowId)(e),
            focused: t
        })
    }

    function l(e) {
        s.default.dispatch({
            type: "WINDOW_HIDDEN",
            windowId: (0, a.getWindowId)(e)
        })
    }
    let u = (0, i.memoize)(e => (0, i.debounce)((t, n) => {
        s.default.dispatch({
            type: "WINDOW_RESIZED",
            windowId: e,
            width: t,
            height: n
        })
    }, 100));

    function d(e) {
        let t = (0, a.getWindowId)(e),
            n = u(t);
        n(e.innerWidth, e.innerHeight)
    }

    function c(e) {
        let t = (0, a.getWindowId)(e);
        s.default.dispatch({
            type: "WINDOW_FULLSCREEN_CHANGE",
            windowId: t,
            isElementFullscreen: (0, r.isFullScreen)(null, e.document)
        })
    }

    function f(e) {
        let t = (0, a.getWindowId)(e);
        s.default.dispatch({
            type: "WINDOW_VISIBILITY_CHANGE",
            windowId: t,
            visible: "visible" === e.document.visibilityState
        })
    }

    function _(e) {
        let t = (0, a.getWindowId)(e),
            n = e.document;
        s.default.dispatch({
            type: "WINDOW_INIT",
            windowId: t,
            isElementFullscreen: (0, r.isFullScreen)(null, n),
            focused: n.hasFocus(),
            width: e.innerWidth,
            height: e.innerHeight,
            visible: "visible" === n.visibilityState
        })
    }

    function E(e) {
        s.default.dispatch({
            type: "WINDOW_UNLOAD",
            windowId: (0, a.getWindowId)(e)
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        focus: function() {
            return o
        },
        fullscreenChange: function() {
            return _
        },
        hidden: function() {
            return l
        },
        init: function() {
            return E
        },
        resized: function() {
            return d
        },
        unload: function() {
            return I
        },
        visibilityChange: function() {
            return c
        }
    });
    var i = n("392711"),
        r = n("570140"),
        a = n("228488"),
        s = n("830917");

    function o(e, t) {
        r.default.dispatch({
            type: "WINDOW_FOCUS",
            windowId: (0, s.getWindowId)(e),
            focused: t
        })
    }

    function l(e) {
        r.default.dispatch({
            type: "WINDOW_HIDDEN",
            windowId: (0, s.getWindowId)(e)
        })
    }
    let u = (0, i.memoize)(e => (0, i.debounce)((t, n) => {
        r.default.dispatch({
            type: "WINDOW_RESIZED",
            windowId: e,
            width: t,
            height: n
        })
    }, 100));

    function d(e) {
        u((0, s.getWindowId)(e))(e.innerWidth, e.innerHeight)
    }

    function _(e) {
        let t = (0, s.getWindowId)(e);
        r.default.dispatch({
            type: "WINDOW_FULLSCREEN_CHANGE",
            windowId: t,
            isElementFullscreen: (0, a.isFullScreen)(null, e.document)
        })
    }

    function c(e) {
        let t = (0, s.getWindowId)(e);
        r.default.dispatch({
            type: "WINDOW_VISIBILITY_CHANGE",
            windowId: t,
            visible: "visible" === e.document.visibilityState
        })
    }

    function E(e) {
        let t = (0, s.getWindowId)(e),
            n = e.document;
        r.default.dispatch({
            type: "WINDOW_INIT",
            windowId: t,
            isElementFullscreen: (0, a.isFullScreen)(null, n),
            focused: n.hasFocus(),
            width: e.innerWidth,
            height: e.innerHeight,
            visible: "visible" === n.visibilityState
        })
    }

    function I(e) {
        r.default.dispatch({
            type: "WINDOW_UNLOAD",
            windowId: (0, s.getWindowId)(e)
        })
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        focus: function() {
            return u
        },
        fullscreenChange: function() {
            return f
        },
        hidden: function() {
            return s
        },
        init: function() {
            return _
        },
        resized: function() {
            return c
        },
        unload: function() {
            return E
        },
        visibilityChange: function() {
            return d
        }
    });
    var r = n("392711"),
        o = n("629815"),
        i = n("172637"),
        a = n("502752");

    function u(e, t) {
        o.default.dispatch({
            type: "WINDOW_FOCUS",
            windowId: (0, a.getWindowId)(e),
            focused: t
        })
    }

    function s(e) {
        o.default.dispatch({
            type: "WINDOW_HIDDEN",
            windowId: (0, a.getWindowId)(e)
        })
    }
    var l = (0, r.memoize)(function(e) {
        return (0, r.debounce)(function(t, n) {
            o.default.dispatch({
                type: "WINDOW_RESIZED",
                windowId: e,
                width: t,
                height: n
            })
        }, 100)
    });

    function c(e) {
        l((0, a.getWindowId)(e))(e.innerWidth, e.innerHeight)
    }

    function f(e) {
        var t = (0, a.getWindowId)(e);
        o.default.dispatch({
            type: "WINDOW_FULLSCREEN_CHANGE",
            windowId: t,
            isElementFullscreen: (0, i.isFullScreen)(null, e.document)
        })
    }

    function d(e) {
        var t = (0, a.getWindowId)(e);
        o.default.dispatch({
            type: "WINDOW_VISIBILITY_CHANGE",
            windowId: t,
            visible: "visible" === e.document.visibilityState
        })
    }

    function _(e) {
        var t = (0, a.getWindowId)(e),
            n = e.document;
        o.default.dispatch({
            type: "WINDOW_INIT",
            windowId: t,
            isElementFullscreen: (0, i.isFullScreen)(null, n),
            focused: n.hasFocus(),
            width: e.innerWidth,
            height: e.innerHeight,
            visible: "visible" === n.visibilityState
        })
    }

    function E(e) {
        o.default.dispatch({
            type: "WINDOW_UNLOAD",
            windowId: (0, a.getWindowId)(e)
        })
    }
}
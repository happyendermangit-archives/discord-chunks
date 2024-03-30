function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        close: function() {
            return i
        },
        hide: function() {
            return a
        },
        moveTo: function() {
            return s
        },
        open: function() {
            return o
        },
        show: function() {
            return u
        },
        switchPIPFocus: function() {
            return c
        },
        updateRect: function() {
            return l
        }
    });
    var r = n("629815");

    function o(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        r.default.dispatch({
            type: "PICTURE_IN_PICTURE_OPEN",
            id: e,
            component: t,
            props: n
        })
    }

    function i(e) {
        r.default.dispatch({
            type: "PICTURE_IN_PICTURE_CLOSE",
            id: e
        })
    }

    function a(e) {
        r.default.dispatch({
            type: "PICTURE_IN_PICTURE_HIDE",
            id: e
        })
    }

    function u(e) {
        r.default.dispatch({
            type: "PICTURE_IN_PICTURE_SHOW",
            id: e
        })
    }

    function s(e, t) {
        r.default.dispatch({
            type: "PICTURE_IN_PICTURE_MOVE",
            id: e,
            position: t
        })
    }

    function l(e, t) {
        r.default.dispatch({
            type: "PICTURE_IN_PICTURE_UPDATE_RECT",
            id: e,
            rect: t
        })
    }

    function c(e) {
        r.default.dispatch({
            type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW",
            id: e
        })
    }
}
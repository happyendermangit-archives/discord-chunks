function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        close: function() {
            return a
        },
        hide: function() {
            return s
        },
        moveTo: function() {
            return l
        },
        open: function() {
            return r
        },
        show: function() {
            return o
        },
        switchPIPFocus: function() {
            return d
        },
        updateRect: function() {
            return u
        }
    });
    var i = n("570140");

    function r(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        i.default.dispatch({
            type: "PICTURE_IN_PICTURE_OPEN",
            id: e,
            component: t,
            props: n
        })
    }

    function a(e) {
        i.default.dispatch({
            type: "PICTURE_IN_PICTURE_CLOSE",
            id: e
        })
    }

    function s(e) {
        i.default.dispatch({
            type: "PICTURE_IN_PICTURE_HIDE",
            id: e
        })
    }

    function o(e) {
        i.default.dispatch({
            type: "PICTURE_IN_PICTURE_SHOW",
            id: e
        })
    }

    function l(e, t) {
        i.default.dispatch({
            type: "PICTURE_IN_PICTURE_MOVE",
            id: e,
            position: t
        })
    }

    function u(e, t) {
        i.default.dispatch({
            type: "PICTURE_IN_PICTURE_UPDATE_RECT",
            id: e,
            rect: t
        })
    }

    function d(e) {
        i.default.dispatch({
            type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW",
            id: e
        })
    }
}
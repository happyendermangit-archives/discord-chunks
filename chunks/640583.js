function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createLayout: function() {
            return r
        },
        setWidgetLayout: function() {
            return a
        },
        setTopWidget: function() {
            return o
        },
        togglePinned: function() {
            return l
        },
        deleteWidget: function() {
            return u
        },
        deleteAllWidgets: function() {
            return d
        },
        createWidget: function() {
            return c
        },
        createWidgets: function() {
            return f
        }
    });
    var i = n("913144"),
        s = n("819068");

    function r(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.OVERLAY_DEFAULT_RESOLUTION;
        i.default.dispatch({
            type: "LAYOUT_CREATE",
            layoutId: e,
            widgets: t,
            defaultResolution: n
        })
    }

    function a(e, t, n) {
        i.default.dispatch({
            type: "LAYOUT_UPDATE_WIDGET",
            widgetId: e,
            anchor: t,
            size: n
        })
    }

    function o(e) {
        i.default.dispatch({
            type: "LAYOUT_SET_TOP_WIDGET",
            widgetId: e
        })
    }

    function l(e) {
        i.default.dispatch({
            type: "LAYOUT_SET_PINNED",
            widgetId: e
        })
    }

    function u(e) {
        i.default.dispatch({
            type: "LAYOUT_DELETE_WIDGET",
            widgetId: e
        })
    }

    function d(e) {
        i.default.dispatch({
            type: "LAYOUT_DELETE_ALL_WIDGETS",
            layoutId: e
        })
    }

    function c(e) {
        f([e])
    }

    function f(e) {
        i.default.dispatch({
            type: "LAYOUT_CREATE_WIDGETS",
            widgetConfigs: e
        })
    }
}
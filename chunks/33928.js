function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createLayout: function() {
            return i
        },
        createWidget: function() {
            return f
        },
        createWidgets: function() {
            return d
        },
        deleteAllWidgets: function() {
            return c
        },
        deleteWidget: function() {
            return l
        },
        setTopWidget: function() {
            return u
        },
        setWidgetLayout: function() {
            return a
        },
        togglePinned: function() {
            return s
        }
    });
    var r = n("629815"),
        o = n("359212");

    function i(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.OVERLAY_DEFAULT_RESOLUTION;
        r.default.dispatch({
            type: "LAYOUT_CREATE",
            layoutId: e,
            widgets: t,
            defaultResolution: n
        })
    }

    function a(e, t, n) {
        r.default.dispatch({
            type: "LAYOUT_UPDATE_WIDGET",
            widgetId: e,
            anchor: t,
            size: n
        })
    }

    function u(e) {
        r.default.dispatch({
            type: "LAYOUT_SET_TOP_WIDGET",
            widgetId: e
        })
    }

    function s(e) {
        r.default.dispatch({
            type: "LAYOUT_SET_PINNED",
            widgetId: e
        })
    }

    function l(e) {
        r.default.dispatch({
            type: "LAYOUT_DELETE_WIDGET",
            widgetId: e
        })
    }

    function c(e) {
        r.default.dispatch({
            type: "LAYOUT_DELETE_ALL_WIDGETS",
            layoutId: e
        })
    }

    function f(e) {
        d([e])
    }

    function d(e) {
        r.default.dispatch({
            type: "LAYOUT_CREATE_WIDGETS",
            widgetConfigs: e
        })
    }
}
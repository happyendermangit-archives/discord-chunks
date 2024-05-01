function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createLayout: function() {
            return a
        },
        createWidget: function() {
            return _
        },
        createWidgets: function() {
            return c
        },
        deleteAllWidgets: function() {
            return d
        },
        deleteWidget: function() {
            return u
        },
        setTopWidget: function() {
            return o
        },
        setWidgetLayout: function() {
            return s
        },
        togglePinned: function() {
            return l
        }
    });
    var i = n("570140"),
        r = n("145597");

    function a(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.OVERLAY_DEFAULT_RESOLUTION;
        i.default.dispatch({
            type: "LAYOUT_CREATE",
            layoutId: e,
            widgets: t,
            defaultResolution: n
        })
    }

    function s(e, t, n) {
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

    function _(e) {
        c([e])
    }

    function c(e) {
        i.default.dispatch({
            type: "LAYOUT_CREATE_WIDGETS",
            widgetConfigs: e
        })
    }
}
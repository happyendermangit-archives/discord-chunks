function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createLayout: function() {
            return o
        },
        setWidgetLayout: function() {
            return i
        },
        setTopWidget: function() {
            return r
        },
        togglePinned: function() {
            return d
        },
        deleteWidget: function() {
            return E
        },
        deleteAllWidgets: function() {
            return u
        },
        createWidget: function() {
            return s
        },
        createWidgets: function() {
            return _
        }
    });
    var a = n("913144"),
        l = n("819068");

    function o(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.OVERLAY_DEFAULT_RESOLUTION;
        a.default.dispatch({
            type: "LAYOUT_CREATE",
            layoutId: e,
            widgets: t,
            defaultResolution: n
        })
    }

    function i(e, t, n) {
        a.default.dispatch({
            type: "LAYOUT_UPDATE_WIDGET",
            widgetId: e,
            anchor: t,
            size: n
        })
    }

    function r(e) {
        a.default.dispatch({
            type: "LAYOUT_SET_TOP_WIDGET",
            widgetId: e
        })
    }

    function d(e) {
        a.default.dispatch({
            type: "LAYOUT_SET_PINNED",
            widgetId: e
        })
    }

    function E(e) {
        a.default.dispatch({
            type: "LAYOUT_DELETE_WIDGET",
            widgetId: e
        })
    }

    function u(e) {
        a.default.dispatch({
            type: "LAYOUT_DELETE_ALL_WIDGETS",
            layoutId: e
        })
    }

    function s(e) {
        _([e])
    }

    function _(e) {
        a.default.dispatch({
            type: "LAYOUT_CREATE_WIDGETS",
            widgetConfigs: e
        })
    }
}
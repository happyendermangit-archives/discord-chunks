function(t, e, n) {
    "use strict";

    function r(t) {
        return "number" == typeof t && isFinite(t)
    }

    function i(t, {
        startTimestamp: e,
        ...n
    }) {
        return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
            startTimestamp: e,
            ...n
        })
    }
    n.r(e), n.d(e, {
        _startChild: function() {
            return i
        },
        isMeasurementValue: function() {
            return r
        }
    })
}
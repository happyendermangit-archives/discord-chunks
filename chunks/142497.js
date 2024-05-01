function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearHotspotOverride: function() {
            return l
        },
        hideHotspot: function() {
            return s
        },
        setHotspotOverride: function() {
            return o
        }
    });
    var i = n("570140"),
        r = n("626135"),
        a = n("981631");

    function s(e) {
        r.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
            hotspot_location: e
        }), i.default.wait(() => {
            i.default.dispatch({
                type: "HOTSPOT_HIDE",
                location: e
            })
        })
    }

    function o(e, t) {
        i.default.dispatch({
            type: "HOTSPOT_OVERRIDE_SET",
            location: e,
            enabled: t
        })
    }

    function l(e) {
        i.default.dispatch({
            type: "HOTSPOT_OVERRIDE_CLEAR",
            location: e
        })
    }
}
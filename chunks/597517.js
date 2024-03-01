function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hideHotspot: function() {
            return s
        },
        setHotspotOverride: function() {
            return r
        },
        clearHotspotOverride: function() {
            return o
        }
    });
    var l = n("913144"),
        i = n("599110"),
        a = n("49111");

    function s(e) {
        i.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
            hotspot_location: e
        }), l.default.wait(() => {
            l.default.dispatch({
                type: "HOTSPOT_HIDE",
                location: e
            })
        })
    }

    function r(e, t) {
        l.default.dispatch({
            type: "HOTSPOT_OVERRIDE_SET",
            location: e,
            enabled: t
        })
    }

    function o(e) {
        l.default.dispatch({
            type: "HOTSPOT_OVERRIDE_CLEAR",
            location: e
        })
    }
}
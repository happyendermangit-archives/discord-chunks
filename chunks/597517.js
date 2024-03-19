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
    var i = n("913144"),
        l = n("599110"),
        a = n("49111");

    function s(e) {
        l.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
            hotspot_location: e
        }), i.default.wait(() => {
            i.default.dispatch({
                type: "HOTSPOT_HIDE",
                location: e
            })
        })
    }

    function r(e, t) {
        i.default.dispatch({
            type: "HOTSPOT_OVERRIDE_SET",
            location: e,
            enabled: t
        })
    }

    function o(e) {
        i.default.dispatch({
            type: "HOTSPOT_OVERRIDE_CLEAR",
            location: e
        })
    }
}
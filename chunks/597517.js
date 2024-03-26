function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        hideHotspot: function() {
            return s
        },
        setHotspotOverride: function() {
            return o
        },
        clearHotspotOverride: function() {
            return l
        }
    });
    var r = i("913144"),
        n = i("599110"),
        u = i("49111");

    function s(e) {
        n.default.track(u.AnalyticEvents.HOTSPOT_HIDDEN, {
            hotspot_location: e
        }), r.default.wait(() => {
            r.default.dispatch({
                type: "HOTSPOT_HIDE",
                location: e
            })
        })
    }

    function o(e, t) {
        r.default.dispatch({
            type: "HOTSPOT_OVERRIDE_SET",
            location: e,
            enabled: t
        })
    }

    function l(e) {
        r.default.dispatch({
            type: "HOTSPOT_OVERRIDE_CLEAR",
            location: e
        })
    }
}
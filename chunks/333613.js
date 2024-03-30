function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearHotspotOverride: function() {
            return s
        },
        hideHotspot: function() {
            return a
        },
        setHotspotOverride: function() {
            return u
        }
    });
    var r = n("629815"),
        o = n("870331"),
        i = n("281767");

    function a(e) {
        o.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
            hotspot_location: e
        }), r.default.wait(function() {
            r.default.dispatch({
                type: "HOTSPOT_HIDE",
                location: e
            })
        })
    }

    function u(e, t) {
        r.default.dispatch({
            type: "HOTSPOT_OVERRIDE_SET",
            location: e,
            enabled: t
        })
    }

    function s(e) {
        r.default.dispatch({
            type: "HOTSPOT_OVERRIDE_CLEAR",
            location: e
        })
    }
}
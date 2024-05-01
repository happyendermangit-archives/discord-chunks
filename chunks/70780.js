function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        completeRTCLatencyTest: function() {
            return a
        },
        fetchRTCLatencyTestRegions: function() {
            return s
        }
    });
    var i = n("544891"),
        r = n("570140");

    function s() {
        var e;
        return i.HTTP.get("".concat((e = "https:", "https:")).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT))
    }

    function a(e, t) {
        r.default.dispatch({
            type: "RTC_LATENCY_TEST_COMPLETE",
            latencyRankedRegions: e,
            geoRankedRegions: t
        })
    }
}
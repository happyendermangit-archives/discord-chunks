function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        completeRTCLatencyTest: function() {
            return s
        },
        fetchRTCLatencyTestRegions: function() {
            return a
        }
    });
    var i = n("544891"),
        r = n("570140");

    function a() {
        var e;
        return i.HTTP.get("".concat((e = "https:", "https:")).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT))
    }

    function s(e, t) {
        r.default.dispatch({
            type: "RTC_LATENCY_TEST_COMPLETE",
            latencyRankedRegions: e,
            geoRankedRegions: t
        })
    }
}
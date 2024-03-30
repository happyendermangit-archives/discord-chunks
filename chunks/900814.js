function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        completeRTCLatencyTest: function() {
            return a
        },
        fetchRTCLatencyTestRegions: function() {
            return i
        }
    });
    var r = n("967888"),
        o = n("629815");

    function i() {
        var e;
        return r.HTTP.get("".concat((e = "https:", "https:")).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT))
    }

    function a(e, t) {
        o.default.dispatch({
            type: "RTC_LATENCY_TEST_COMPLETE",
            latencyRankedRegions: e,
            geoRankedRegions: t
        })
    }
}
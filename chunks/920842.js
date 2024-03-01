function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        fetchRTCLatencyTestRegions: function() {
            return n
        },
        completeRTCLatencyTest: function() {
            return r
        }
    });
    var t = E("872717"),
        o = E("913144");

    function n() {
        var e;
        return t.default.get("".concat((e = "https:", "https:")).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT))
    }

    function r(e, _) {
        o.default.dispatch({
            type: "RTC_LATENCY_TEST_COMPLETE",
            latencyRankedRegions: e,
            geoRankedRegions: _
        })
    }
}
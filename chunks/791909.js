function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("752701"),
        o = n("891440");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = function() {
        var e, t, n;

        function u() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a(this, "cpuHistogram", new o.Histogram), a(this, "memoryHistogram", new o.Histogram)
        }
        return e = u, t = [{
            key: "getStats",
            value: function() {
                var e = this.cpuHistogram.getReport(),
                    t = this.memoryHistogram.getReport();
                return {
                    client_performance_cpu_percentile25: e.percentiles[25],
                    client_performance_cpu_percentile50: e.percentiles[50],
                    client_performance_cpu_percentile75: e.percentiles[75],
                    client_performance_cpu_percentile90: e.percentiles[90],
                    client_performance_cpu_percentile95: e.percentiles[95],
                    client_performance_memory_percentile25: t.percentiles[25],
                    client_performance_memory_percentile50: t.percentiles[50],
                    client_performance_memory_percentile75: t.percentiles[75],
                    client_performance_memory_percentile90: t.percentiles[90],
                    client_performance_memory_percentile95: t.percentiles[95],
                    client_performance_memory_min: t.min,
                    client_performance_memory_max: t.max
                }
            }
        }, {
            key: "takeSample",
            value: function() {
                var e = r.default.getCurrentCPUUsagePercent(),
                    t = r.default.getCurrentMemoryUsageKB();
                null != e && this.cpuHistogram.addSample(e), null != t && this.memoryHistogram.addSample(t)
            }
        }], i(e.prototype, t), n && i(e, n), u
    }()
}
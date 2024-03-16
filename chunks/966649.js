function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("872507"),
        r = n("226445");
    i = class {
        getStats() {
            let e = this.cpuHistogram.getReport(),
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
        takeSample() {
            let e = s.default.getCurrentCPUUsagePercent(),
                t = s.default.getCurrentMemoryUsageKB();
            null != e && this.cpuHistogram.addSample(e), null != t && this.memoryHistogram.addSample(t)
        }
        constructor() {
            this.cpuHistogram = new r.Histogram, this.memoryHistogram = new r.Histogram
        }
    }
}
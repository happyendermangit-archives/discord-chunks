function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("808653");
    var i = n("811022"),
        s = n("49671"),
        r = n("921278"),
        a = n("50885");
    let o = new i.Logger("ProcessUtilsElectron");
    class l extends r.ProcessUtils {
        setupReportingTimer() {
            var e, t;
            let n = null === s.default || void 0 === s.default ? void 0 : null === (e = s.default.processUtils) || void 0 === e ? void 0 : e.setMemoryInformation;
            if (null == n) {
                o.log("setMemoryInformation not available.");
                return
            }(null === (t = performance.memory) || void 0 === t ? void 0 : t.usedJSHeapSize) == null && o.error("usedJSHeapSize is not available.");
            setInterval(() => {
                var e, t, i;
                let s = null !== (t = null === (e = performance.memory) || void 0 === e ? void 0 : e.usedJSHeapSize) && void 0 !== t ? t : 0;
                n({
                    memoryUsageKB: null !== (i = this.lastMemoryUsageKB) && void 0 !== i ? i : 0,
                    usedJSHeapSizeKB: Math.ceil(s / 1024)
                })
            }, 1e4)
        }
        getProcessUptime() {
            var e, t;
            return null === s.default || void 0 === s.default ? void 0 : null === (t = s.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getProcessUptime) || void 0 === e ? void 0 : e.call(t)
        }
        getCurrentCPUUsagePercent() {
            var e, t;
            return null === s.default || void 0 === s.default ? void 0 : null === (t = s.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCurrentCPUUsagePercent) || void 0 === e ? void 0 : e.call(t)
        }
        getCurrentMemoryUsageKB() {
            let e = l.getCurrentMemoryUsageKBCore();
            return this.lastMemoryUsageKB = e, e
        }
        static getCurrentMemoryUsageKBCore() {
            try {
                let e = a.default.getDiscordMemoryUsage();
                if (null == e) return 0;
                let t = Object.values(e).reduce((e, t) => e + t, 0);
                return Math.ceil(t / 1024)
            } catch (e) {
                return 0
            }
        }
        getMemoryUsageDetails() {
            return a.default.getDiscordMemoryUsage()
        }
        getMemoryUsageElectronRenderer() {
            try {
                return a.default.getDiscordMemoryUsageElectronRenderer()
            } catch (e) {
                return null
            }
        }
        getMemoryUsageElectronRendererUsedHeapSize() {
            var e, t;
            return null === s.default || void 0 === s.default ? void 0 : null === (t = s.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getUsedHeapSize) || void 0 === e ? void 0 : e.call(t)
        }
        constructor() {
            var e, t;
            super(), this.lastMemoryUsageKB = void 0, this.cpuCoreCount = null === s.default || void 0 === s.default ? void 0 : null === (t = s.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCPUCoreCount) || void 0 === e ? void 0 : e.call(t), this.setupReportingTimer()
        }
    }
    var u = new l
}
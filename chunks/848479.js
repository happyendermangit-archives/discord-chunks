function(e, t, n) {
    "use strict";
    n.r(t), n("724458");
    var i = n("259443"),
        r = n("579806"),
        s = n("77450"),
        a = n("998502");
    let o = new i.Logger("ProcessUtilsElectron");
    class l extends s.ProcessUtils {
        setupReportingTimer() {
            var e, t;
            let n = null === r.default || void 0 === r.default ? void 0 : null === (e = r.default.processUtils) || void 0 === e ? void 0 : e.setMemoryInformation;
            if (null == n) {
                o.log("setMemoryInformation not available.");
                return
            }(null === (t = performance.memory) || void 0 === t ? void 0 : t.usedJSHeapSize) == null && o.error("usedJSHeapSize is not available.");
            setInterval(() => {
                var e, t, i;
                let r = null !== (t = null === (e = performance.memory) || void 0 === e ? void 0 : e.usedJSHeapSize) && void 0 !== t ? t : 0;
                n({
                    memoryUsageKB: null !== (i = this.lastMemoryUsageKB) && void 0 !== i ? i : 0,
                    usedJSHeapSizeKB: Math.ceil(r / 1024)
                })
            }, 1e4)
        }
        getProcessUptime() {
            var e, t;
            return null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getProcessUptime) || void 0 === e ? void 0 : e.call(t)
        }
        getCurrentCPUUsagePercent() {
            var e, t;
            return null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCurrentCPUUsagePercent) || void 0 === e ? void 0 : e.call(t)
        }
        getCumulativeCPUUsage() {
            var e, t;
            return null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCumulativeCPUUsage) || void 0 === e ? void 0 : e.call(t)
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
            return null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getUsedHeapSize) || void 0 === e ? void 0 : e.call(t)
        }
        constructor() {
            var e, t, n, i, s;
            super(), n = this, s = void 0, (i = "lastMemoryUsageKB") in n ? Object.defineProperty(n, i, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[i] = s, this.cpuCoreCount = null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCPUCoreCount) || void 0 === e ? void 0 : e.call(t), this.setupReportingTimer()
        }
    }
    t.default = new l
}
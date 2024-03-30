function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProcessUtils: function() {
            return i
        }
    });
    class i {
        getCPUCoreCount() {
            return this.cpuCoreCount
        }
        constructor() {
            var e, t, n;
            e = this, n = void 0, (t = "cpuCoreCount") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}
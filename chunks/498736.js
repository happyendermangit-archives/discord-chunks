function(t, e, n) {
    "use strict";
    let r;
    n.r(e), n.d(e, {
        browserPerformanceTimeOrigin: function() {
            return h
        },
        dateTimestampInSeconds: function() {
            return u
        },
        timestampInSeconds: function() {
            return d
        }
    });
    var i = n("365504"),
        a = n("232945");
    t = n.hmd(t);
    let s = (0, a.getGlobalObject)(),
        o = {
            nowSeconds: () => Date.now() / 1e3
        },
        c = (0, i.isNodeEnv)() ? function() {
            try {
                let e = (0, i.dynamicRequire)(t, "perf_hooks");
                return e.performance
            } catch (t) {
                return
            }
        }() : function() {
            let {
                performance: t
            } = s;
            if (!t || !t.now) return;
            let e = Date.now() - t.now();
            return {
                now: () => t.now(),
                timeOrigin: e
            }
        }(),
        l = void 0 === c ? o : {
            nowSeconds: () => (c.timeOrigin + c.now()) / 1e3
        },
        u = o.nowSeconds.bind(o),
        d = l.nowSeconds.bind(l),
        h = (() => {
            let {
                performance: t
            } = s;
            if (!t || !t.now) return;
            let e = t.now(),
                n = Date.now(),
                r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
                i = t.timing && t.timing.navigationStart,
                a = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
            if (r < 36e5 || a < 36e5) return r <= a ? t.timeOrigin : i;
            return n
        })()
}
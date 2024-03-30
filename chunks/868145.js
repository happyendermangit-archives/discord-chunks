function(t, e, n) {
    "use strict";
    let r;
    n.r(e), n.d(e, {
        browserPerformanceTimeOrigin: function() {
            return f
        },
        dateTimestampInSeconds: function() {
            return c
        },
        timestampInSeconds: function() {
            return d
        }
    });
    var i = n("635602"),
        a = n("24716");
    t = n.hmd(t);
    let o = (0, a.getGlobalObject)(),
        s = {
            nowSeconds: () => Date.now() / 1e3
        },
        u = (0, i.isNodeEnv)() ? function() {
            try {
                return (0, i.dynamicRequire)(t, "perf_hooks").performance
            } catch (t) {
                return
            }
        }() : function() {
            let {
                performance: t
            } = o;
            if (!!t && !!t.now) return {
                now: () => t.now(),
                timeOrigin: Date.now() - t.now()
            }
        }(),
        l = void 0 === u ? s : {
            nowSeconds: () => (u.timeOrigin + u.now()) / 1e3
        },
        c = s.nowSeconds.bind(s),
        d = l.nowSeconds.bind(l),
        f = (() => {
            let {
                performance: t
            } = o;
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
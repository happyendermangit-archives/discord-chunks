function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var s = n("597755"),
        a = n.n(s),
        l = n("279295"),
        r = {
            dump(e) {
                let t;
                null != performance.memory && (t = {
                    jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                    totalJSHeapSize: performance.memory.totalJSHeapSize,
                    usedJSHeapSize: performance.memory.usedJSHeapSize
                });
                let n = {
                    browser: {
                        name: a.name,
                        version: a.version
                    },
                    os: {
                        name: a.os.family,
                        version: a.os.version
                    },
                    memory: t
                };
                e(n)
            },
            getTimeSinceNavigationStart: () => Date.now() - l.navigationStart
        }
}
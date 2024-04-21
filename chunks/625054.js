function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("525654"),
        a = n.n(s),
        l = n("643191");
    t.default = {
        dump(e) {
            let t;
            null != performance.memory && (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize
            }), e({
                browser: {
                    name: a().name,
                    version: a().version
                },
                os: {
                    name: a().os.family,
                    version: a().os.version
                },
                memory: t
            })
        },
        getTimeSinceNavigationStart: () => Date.now() - l.navigationStart
    }
}
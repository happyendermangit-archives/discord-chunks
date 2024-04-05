function(e, t, s) {
    "use strict";
    s.r(t);
    var n = s("525654"),
        a = s.n(n),
        l = s("643191");
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
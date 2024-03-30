function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        onLCP: function() {
            return l
        }
    });
    var r = n("358133"),
        i = n("726300"),
        a = n("233863"),
        o = n("416097"),
        s = n("544457"),
        u = n("527475");
    let c = {},
        l = t => {
            let e;
            let n = (0, a.getVisibilityWatcher)(),
                l = (0, o.initMetric)("LCP"),
                d = t => {
                    let r = t[t.length - 1];
                    if (r) {
                        let t = Math.max(r.startTime - (0, i.getActivationStart)(), 0);
                        t < n.firstHiddenTime && (l.value = t, l.entries = [r], e())
                    }
                },
                f = (0, s.observe)("largest-contentful-paint", d);
            if (f) {
                e = (0, r.bindReporter)(t, l);
                let n = () => {
                    !c[l.id] && (d(f.takeRecords()), f.disconnect(), c[l.id] = !0, e(!0))
                };
                return ["keydown", "click"].forEach(t => {
                    addEventListener(t, n, {
                        once: !0,
                        capture: !0
                    })
                }), (0, u.onHidden)(n, !0), n
            }
        }
}
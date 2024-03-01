function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        onLCP: function() {
            return u
        }
    }), n("222007");
    var r = n("446461"),
        i = n("953556"),
        a = n("810843"),
        s = n("34682"),
        o = n("885405"),
        c = n("906617");
    let l = {},
        u = t => {
            let e;
            let n = (0, a.getVisibilityWatcher)(),
                u = (0, s.initMetric)("LCP"),
                d = t => {
                    let r = t[t.length - 1];
                    if (r) {
                        let t = Math.max(r.startTime - (0, i.getActivationStart)(), 0);
                        t < n.firstHiddenTime && (u.value = t, u.entries = [r], e())
                    }
                },
                h = (0, o.observe)("largest-contentful-paint", d);
            if (h) {
                e = (0, r.bindReporter)(t, u);
                let n = () => {
                    !l[u.id] && (d(h.takeRecords()), h.disconnect(), l[u.id] = !0, e(!0))
                };
                return ["keydown", "click"].forEach(t => {
                    addEventListener(t, n, {
                        once: !0,
                        capture: !0
                    })
                }), (0, c.onHidden)(n, !0), n
            }
        }
}
function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        onCLS: function() {
            return s
        }
    });
    var r = n("358133"),
        i = n("416097"),
        a = n("544457"),
        o = n("527475");
    let s = t => {
        let e;
        let n = (0, i.initMetric)("CLS", 0),
            s = 0,
            u = [],
            c = t => {
                t.forEach(t => {
                    if (!t.hadRecentInput) {
                        let r = u[0],
                            i = u[u.length - 1];
                        s && 0 !== u.length && t.startTime - i.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (s += t.value, u.push(t)) : (s = t.value, u = [t]), s > n.value && (n.value = s, n.entries = u, e && e())
                    }
                })
            },
            l = (0, a.observe)("layout-shift", c);
        if (l) {
            e = (0, r.bindReporter)(t, n);
            let i = () => {
                c(l.takeRecords()), e(!0)
            };
            return (0, o.onHidden)(i), i
        }
    }
}
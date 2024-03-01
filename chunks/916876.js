function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        onCLS: function() {
            return o
        }
    }), n("424973"), n("222007");
    var r = n("446461"),
        i = n("34682"),
        a = n("885405"),
        s = n("906617");
    let o = t => {
        let e;
        let n = (0, i.initMetric)("CLS", 0),
            o = 0,
            c = [],
            l = t => {
                t.forEach(t => {
                    if (!t.hadRecentInput) {
                        let r = c[0],
                            i = c[c.length - 1];
                        o && 0 !== c.length && t.startTime - i.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (o += t.value, c.push(t)) : (o = t.value, c = [t]), o > n.value && (n.value = o, n.entries = c, e && e())
                    }
                })
            },
            u = (0, a.observe)("layout-shift", l);
        if (u) {
            e = (0, r.bindReporter)(t, n);
            let i = () => {
                l(u.takeRecords()), e(!0)
            };
            return (0, s.onHidden)(i), i
        }
    }
}
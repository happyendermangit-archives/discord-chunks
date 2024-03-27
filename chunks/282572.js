function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        onFID: function() {
            return u
        }
    });
    var r = n("358133"),
        i = n("233863"),
        a = n("416097"),
        o = n("544457"),
        s = n("527475");
    let u = t => {
        let e;
        let n = (0, i.getVisibilityWatcher)(),
            u = (0, a.initMetric)("FID"),
            c = t => {
                t.startTime < n.firstHiddenTime && (u.value = t.processingStart - t.startTime, u.entries.push(t), e(!0))
            },
            l = t => {
                t.forEach(c)
            },
            d = (0, o.observe)("first-input", l);
        e = (0, r.bindReporter)(t, u), d && (0, s.onHidden)(() => {
            l(d.takeRecords()), d.disconnect()
        }, !0)
    }
}
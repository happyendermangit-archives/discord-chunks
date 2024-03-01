function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        ResizeObserverController: function() {
            return c
        }
    }), n("222007"), n("424973");
    var r = n("649255"),
        i = n("79071"),
        o = n("136522"),
        a = n("234643"),
        u = new Map,
        s = function(t, e) {
            for (var n = 0; n < t.length; n += 1)
                if (t[n].target === e) return n;
            return -1
        },
        c = function() {
            function t() {}
            return t.connect = function(t, e) {
                var n = new o.ResizeObserverDetail(t, e);
                a.resizeObservers.push(n), u.set(t, n)
            }, t.observe = function(t, e, n) {
                if (u.has(t)) {
                    var o = u.get(t);
                    0 > s(o.observationTargets, e) && (o.observationTargets.push(new i.ResizeObservation(e, n && n.box)), (0, r.updateCount)(1), r.scheduler.schedule())
                }
            }, t.unobserve = function(t, e) {
                if (u.has(t)) {
                    var n = u.get(t),
                        i = s(n.observationTargets, e);
                    i >= 0 && (n.observationTargets.splice(i, 1), (0, r.updateCount)(-1))
                }
            }, t.disconnect = function(t) {
                if (u.has(t)) {
                    var e = u.get(t);
                    a.resizeObservers.splice(a.resizeObservers.indexOf(e), 1), u.delete(t), (0, r.updateCount)(-e.observationTargets.length)
                }
            }, t
        }()
}
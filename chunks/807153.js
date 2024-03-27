function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeObserverController: function() {
            return c
        }
    });
    var r = n("684342"),
        i = n("391756"),
        a = n("797578"),
        o = n("876026"),
        s = new Map,
        u = function(e, t) {
            for (var n = 0; n < e.length; n += 1)
                if (e[n].target === t) return n;
            return -1
        },
        c = function() {
            function e() {}
            return e.connect = function(e, t) {
                var n = new a.ResizeObserverDetail(e, t);
                o.resizeObservers.push(n), s.set(e, n)
            }, e.observe = function(e, t, n) {
                if (s.has(e)) {
                    var a = s.get(e);
                    0 > u(a.observationTargets, t) && (a.observationTargets.push(new i.ResizeObservation(t, n && n.box)), (0, r.updateCount)(1), r.scheduler.schedule())
                }
            }, e.unobserve = function(e, t) {
                if (s.has(e)) {
                    var n = s.get(e),
                        i = u(n.observationTargets, t);
                    i >= 0 && (n.observationTargets.splice(i, 1), (0, r.updateCount)(-1))
                }
            }, e.disconnect = function(e) {
                if (s.has(e)) {
                    var t = s.get(e);
                    o.resizeObservers.splice(o.resizeObservers.indexOf(t), 1), s.delete(e), (0, r.updateCount)(-t.observationTargets.length)
                }
            }, e
        }()
}
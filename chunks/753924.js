function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeObserverController: function() {
            return c
        }
    });
    var r = n("923341"),
        i = n("130501"),
        a = n("75725"),
        o = n("304329"),
        s = new WeakMap,
        u = function(e, t) {
            for (var n = 0; n < e.length; n += 1)
                if (e[n].target === t) return n;
            return -1
        },
        c = function() {
            function e() {}
            return e.connect = function(e, t) {
                var n = new a.ResizeObserverDetail(e, t);
                s.set(e, n)
            }, e.observe = function(e, t, n) {
                var a = s.get(e),
                    c = 0 === a.observationTargets.length;
                0 > u(a.observationTargets, t) && (c && o.resizeObservers.push(a), a.observationTargets.push(new i.ResizeObservation(t, n && n.box)), (0, r.updateCount)(1), r.scheduler.schedule())
            }, e.unobserve = function(e, t) {
                var n = s.get(e),
                    i = u(n.observationTargets, t),
                    a = 1 === n.observationTargets.length;
                i >= 0 && (a && o.resizeObservers.splice(o.resizeObservers.indexOf(n), 1), n.observationTargets.splice(i, 1), (0, r.updateCount)(-1))
            }, e.disconnect = function(e) {
                var t = this,
                    n = s.get(e);
                n.observationTargets.slice().forEach(function(n) {
                    return t.unobserve(e, n.target)
                }), n.activeTargets.splice(0, n.activeTargets.length)
            }, e
        }()
}
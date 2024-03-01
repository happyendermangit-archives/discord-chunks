function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeObserverController: function() {
            return l
        }
    }), n("222007"), n("424973");
    var r = n("293293"),
        a = n("147973"),
        o = n("278703"),
        i = n("514825"),
        s = new WeakMap,
        u = function(e, t) {
            for (var n = 0; n < e.length; n += 1)
                if (e[n].target === t) return n;
            return -1
        },
        l = function() {
            function e() {}
            return e.connect = function(e, t) {
                var n = new o.ResizeObserverDetail(e, t);
                s.set(e, n)
            }, e.observe = function(e, t, n) {
                var o = s.get(e),
                    l = 0 === o.observationTargets.length;
                0 > u(o.observationTargets, t) && (l && i.resizeObservers.push(o), o.observationTargets.push(new a.ResizeObservation(t, n && n.box)), (0, r.updateCount)(1), r.scheduler.schedule())
            }, e.unobserve = function(e, t) {
                var n = s.get(e),
                    a = u(n.observationTargets, t),
                    o = 1 === n.observationTargets.length;
                a >= 0 && (o && i.resizeObservers.splice(i.resizeObservers.indexOf(n), 1), n.observationTargets.splice(a, 1), (0, r.updateCount)(-1))
            }, e.disconnect = function(e) {
                var t = this,
                    n = s.get(e);
                n.observationTargets.slice().forEach(function(n) {
                    return t.unobserve(e, n.target)
                }), n.activeTargets.splice(0, n.activeTargets.length)
            }, e
        }()
}
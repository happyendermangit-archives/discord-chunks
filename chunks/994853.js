function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        ResizeObserverController: function() {
            return l
        }
    }), r("222007"), r("424973");
    var n = r("917712"),
        i = r("654269"),
        o = r("170489"),
        a = r("243546"),
        u = new WeakMap,
        s = function(e, t) {
            for (var r = 0; r < e.length; r += 1)
                if (e[r].target === t) return r;
            return -1
        },
        l = function() {
            function e() {}
            return e.connect = function(e, t) {
                var r = new o.ResizeObserverDetail(e, t);
                u.set(e, r)
            }, e.observe = function(e, t, r) {
                var o = u.get(e),
                    l = 0 === o.observationTargets.length;
                0 > s(o.observationTargets, t) && (l && a.resizeObservers.push(o), o.observationTargets.push(new i.ResizeObservation(t, r && r.box)), (0, n.updateCount)(1), n.scheduler.schedule())
            }, e.unobserve = function(e, t) {
                var r = u.get(e),
                    i = s(r.observationTargets, t),
                    o = 1 === r.observationTargets.length;
                i >= 0 && (o && a.resizeObservers.splice(a.resizeObservers.indexOf(r), 1), r.observationTargets.splice(i, 1), (0, n.updateCount)(-1))
            }, e.disconnect = function(e) {
                var t = this,
                    r = u.get(e);
                r.observationTargets.slice().forEach(function(r) {
                    return t.unobserve(e, r.target)
                }), r.activeTargets.splice(0, r.activeTargets.length)
            }, e
        }()
}
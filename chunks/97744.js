function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        navigationStart: function() {
            return r
        },
        performance: function() {
            return i
        },
        timeOrigin: function() {
            return o
        }
    }), n("295689");
    try {
        null == Date.now && (Date.now = function() {
            return new Date().valueOf()
        })
    } catch (e) {}
    var r = function() {
            try {
                var e;
                return null !== (e = n.g.performance.timing.navigationStart) && void 0 !== e ? e : n.g.performance.now()
            } catch (e) {}
            return Date.now()
        }(),
        o = function() {
            try {
                var e;
                return null !== (e = n.g.performance.timeOrigin) && void 0 !== e ? e : r
            } catch (e) {}
            return Date.now()
        }();
    if (null == n.g.performance.timing) try {
        n.g.performance.timing = {
            navigationStart: r
        }
    } catch (e) {}
    if (null == n.g.performance.timeOrigin) try {
        n.g.performance.timeOrigin = o
    } catch (e) {}
    var i = n.g.performance
}
function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = n.getRegistry(),
            a = r.addTarget(e, t);
        return [a, function() {
            return r.removeTarget(a)
        }]
    }

    function a(e, t, n) {
        var r = n.getRegistry(),
            a = r.addSource(e, t);
        return [a, function() {
            return r.removeSource(a)
        }]
    }
    n.r(t), n.d(t, {
        registerTarget: function() {
            return r
        },
        registerSource: function() {
            return a
        }
    })
}
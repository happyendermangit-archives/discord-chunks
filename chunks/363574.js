function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = n.getRegistry(),
            i = r.addTarget(e, t);
        return [i, function() {
            return r.removeTarget(i)
        }]
    }

    function i(e, t, n) {
        var r = n.getRegistry(),
            i = r.addSource(e, t);
        return [i, function() {
            return r.removeSource(i)
        }]
    }
    n.r(t), n.d(t, {
        registerTarget: function() {
            return r
        },
        registerSource: function() {
            return i
        }
    })
}
function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        getMergedExperimentConfigs: function() {
            return n
        }
    }), a("470079");
    var d = a("392711");

    function n(e, t, a, n) {
        var i, c;
        let r = e.getCurrentConfig(a, n),
            o = t.getCurrentConfig(a, n);
        return i = r, c = o, (0, d.mergeWith)({}, i, c, (e, t) => e || t)
    }
}
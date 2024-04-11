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
        let o = e.getCurrentConfig(a, n),
            r = t.getCurrentConfig(a, n);
        return i = o, c = r, (0, d.mergeWith)({}, i, c, (e, t) => e || t)
    }
}
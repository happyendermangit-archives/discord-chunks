function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        getMergedExperimentConfigs: function() {
            return n
        }
    }), a("470079");
    var d = a("392711");

    function n(e, t, a, n) {
        var c, i;
        let o = e.getCurrentConfig(a, n),
            r = t.getCurrentConfig(a, n);
        return c = o, i = r, (0, d.mergeWith)({}, c, i, (e, t) => e || t)
    }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTriggerDebuggingAA: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-09_trigger_debugging_aa",
        label: "trigger debugging aa mobile",
        defaultConfig: {
            inUse: !1
        },
        treatments: [{
            id: 1,
            label: "On",
            config: {
                inUse: !0
            }
        }]
    });

    function o(e) {
        var t = e.autoTrackExposure,
            n = e.location;
        return r.useExperiment({
            location: n
        }, {
            autoTrackExposure: void 0 !== t && t
        })
    }
}
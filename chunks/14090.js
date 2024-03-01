function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserAppsTreatment: function() {
            return i
        },
        default: function() {
            return a
        }
    });
    var s, i, r = n("862205");
    (s = i || (i = {})).ALLOWED = "allowed", s.DEFAULT = "default";
    var a = (0, r.createExperiment)({
        kind: "user",
        id: "2023-08_new_app_command_serving",
        label: "New Application Command Serving",
        defaultConfig: {
            enabled: !1,
            newScoreLogic: !1
        },
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0,
                newScoreLogic: !1
            }
        }, {
            id: 2,
            label: "Enabled + New Logic",
            config: {
                enabled: !0,
                newScoreLogic: !0
            }
        }]
    })
}
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
        id: "2023-08_user_apps",
        label: "Allow user app commands",
        defaultConfig: {
            userAppsTreatment: "default"
        },
        treatments: [{
            id: 1,
            label: "Allow user app commands",
            config: {
                userAppsTreatment: "allowed"
            }
        }]
    })
}
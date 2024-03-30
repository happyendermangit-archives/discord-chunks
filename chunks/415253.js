function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserAppsTreatment: function() {
            return o
        }
    });
    var r, o, i = n("94498");
    (r = o || (o = {})).ALLOWED = "allowed", r.DEFAULT = "default", t.default = (0, i.createExperiment)({
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
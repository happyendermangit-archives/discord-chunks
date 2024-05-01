function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserAppsTreatment: function() {
            return r
        }
    });
    var i, r, s = n("818083");
    (i = r || (r = {})).ALLOWED = "allowed", i.DEFAULT = "default", t.default = (0, s.createExperiment)({
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
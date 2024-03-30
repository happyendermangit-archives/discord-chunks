function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498"),
        o = n("415253");
    t.default = (0, r.createExperiment)({
        kind: "guild",
        id: "2023-09_user_apps_guild",
        label: "Allow user app commands",
        defaultConfig: {
            userAppsTreatment: o.UserAppsTreatment.DEFAULT
        },
        treatments: [{
            id: 1,
            label: "Allow user app commands",
            config: {
                userAppsTreatment: o.UserAppsTreatment.ALLOWED
            }
        }]
    })
}
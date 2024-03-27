function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083"),
        r = n("420582");
    t.default = (0, i.createExperiment)({
        kind: "guild",
        id: "2023-09_user_apps_guild",
        label: "Allow user app commands",
        defaultConfig: {
            userAppsTreatment: r.UserAppsTreatment.DEFAULT
        },
        treatments: [{
            id: 1,
            label: "Allow user app commands",
            config: {
                userAppsTreatment: r.UserAppsTreatment.ALLOWED
            }
        }]
    })
}
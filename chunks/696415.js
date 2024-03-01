function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var s = n("862205"),
        i = n("970254"),
        r = (0, s.createExperiment)({
            kind: "guild",
            id: "2023-09_user_apps_guild",
            label: "Allow user app commands",
            defaultConfig: {
                userAppsTreatment: i.UserAppsTreatment.DEFAULT
            },
            treatments: [{
                id: 1,
                label: "Allow user app commands",
                config: {
                    userAppsTreatment: i.UserAppsTreatment.ALLOWED
                }
            }]
        })
}
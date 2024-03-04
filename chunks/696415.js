function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("862205"),
        s = n("970254"),
        r = (0, i.createExperiment)({
            kind: "guild",
            id: "2023-09_user_apps_guild",
            label: "Allow user app commands",
            defaultConfig: {
                userAppsTreatment: s.UserAppsTreatment.DEFAULT
            },
            treatments: [{
                id: 1,
                label: "Allow user app commands",
                config: {
                    userAppsTreatment: s.UserAppsTreatment.ALLOWED
                }
            }]
        })
}
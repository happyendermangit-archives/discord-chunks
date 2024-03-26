function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var s = (0, n("862205").createExperiment)({
        id: "2024-03_passwordless_login",
        label: "Passwordless Login",
        kind: "user",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 0,
            label: "Control",
            config: {
                enabled: !1
            }
        }, {
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0
            }
        }]
    })
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getValorantAdminSignupExperiment: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2024-03_valorant_admin_signup",
        label: "Valorant Admin Signup",
        defaultConfig: {
            showAdminSignup: !1
        },
        treatments: [{
            id: 1,
            label: "Show admin signup",
            config: {
                showAdminSignup: !0
            }
        }]
    });

    function o(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: t
        }).showAdminSignup
    }
}
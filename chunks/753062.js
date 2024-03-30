function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getValorantUserSignupExperiment: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2024-03_valorant_user_signup",
        label: "Valorant User Signup",
        defaultConfig: {
            showUserSignup: !1
        },
        treatments: [{
            id: 1,
            label: "Show user signup",
            config: {
                showUserSignup: !0
            }
        }]
    });

    function o(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: t
        }).showUserSignup
    }
}
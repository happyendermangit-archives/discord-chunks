function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getValorantAdminSignupExperiment: function() {
            return r
        }
    });
    let i = (0, n("818083").createExperiment)({
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

    function r(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            {
                showAdminSignup: n
            } = i.getCurrentConfig({
                location: e
            }, {
                autoTrackExposure: t
            });
        return n
    }
}
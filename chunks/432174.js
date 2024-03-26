function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        getValorantAdminSignupExperiment: function() {
            return n
        }
    });
    var t = E("862205");
    let o = (0, t.createExperiment)({
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

    function n(e) {
        let _ = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            {
                showAdminSignup: E
            } = o.getCurrentConfig({
                location: e
            }, {
                autoTrackExposure: _
            });
        return E
    }
}
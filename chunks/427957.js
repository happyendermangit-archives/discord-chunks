function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        getValorantUserSignupExperiment: function() {
            return n
        }
    });
    var t = E("862205");
    let o = (0, t.createExperiment)({
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

    function n(e) {
        let {
            showUserSignup: _
        } = o.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !1
        });
        return _
    }
}
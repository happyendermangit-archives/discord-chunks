function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSimplifiedProfileExperiment: function() {
            return a
        }
    });
    var i = n("862205");
    let l = (0, i.createExperiment)({
            kind: "user",
            id: "2024-03_simplified_profile_phase_one",
            label: "Simplified Profile Experiment",
            defaultConfig: {
                basicsEnabled: !1,
                moreUserDetailsEnabled: !1
            },
            treatments: [{
                id: 1,
                label: "Only the basics",
                config: {
                    basicsEnabled: !0,
                    moreUserDetailsEnabled: !1
                }
            }, {
                id: 2,
                label: "More user details",
                config: {
                    basicsEnabled: !0,
                    moreUserDetailsEnabled: !0
                }
            }]
        }),
        a = e => {
            let {
                location: t,
                autoTrackExposure: n = !0,
                trackExposureOptions: i = {}
            } = e;
            return l.useExperiment({
                location: t
            }, {
                autoTrackExposure: n,
                trackExposureOptions: i
            })
        }
}
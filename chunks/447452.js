function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSimplifiedProfileExperimentConfig: function() {
            return r
        },
        useSimplifiedProfileExperiment: function() {
            return s
        }
    });
    let i = (0, n("818083").createExperiment)({
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
        r = e => {
            let {
                location: t,
                autoTrackExposure: n = !0,
                trackExposureOptions: r = {}
            } = e;
            return i.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: n,
                trackExposureOptions: r
            })
        },
        s = e => {
            let {
                location: t,
                autoTrackExposure: n = !0,
                trackExposureOptions: r = {}
            } = e;
            return i.useExperiment({
                location: t
            }, {
                autoTrackExposure: n,
                trackExposureOptions: r
            })
        }
}
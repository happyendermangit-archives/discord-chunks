function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSimplifiedProfileExperiment: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
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
        o = function(e) {
            var t = e.location,
                n = e.autoTrackExposure,
                o = e.trackExposureOptions;
            return r.useExperiment({
                location: t
            }, {
                autoTrackExposure: void 0 === n || n,
                trackExposureOptions: void 0 === o ? {} : o
            })
        }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useProfileMutualsExperiment: function() {
            return i
        }
    });
    var r = n("94498"),
        o = (0, r.createExperiment)({
            kind: "user",
            id: "2024-03_profile_mutuals",
            label: "Profile Mutuals",
            defaultConfig: {
                enabled: !1,
                compact: !1
            },
            treatments: [{
                id: 1,
                label: "Show Profile Mutuals (Friends/Guilds) - Compact",
                config: {
                    enabled: !0,
                    compact: !0
                }
            }, {
                id: 2,
                label: "Show Profile Mutuals (Friends/Guilds) - Full Lines",
                config: {
                    enabled: !0,
                    compact: !1
                }
            }]
        }),
        i = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.autoTrackExposure,
                n = e.disable,
                r = e.location;
            return o.useExperiment({
                location: void 0 === r ? "24rt789ugh" : r
            }, {
                autoTrackExposure: void 0 !== t && t,
                disable: void 0 !== n && n
            })
        }
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useProfileMutualsExperiment: function() {
            return a
        }
    });
    var i = n("862205");
    let l = (0, i.createExperiment)({
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
        a = function() {
            let {
                autoTrackExposure: e = !1,
                disable: t = !1,
                location: n = "24rt789ugh"
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return l.useExperiment({
                location: n
            }, {
                autoTrackExposure: e,
                disable: t
            })
        }
}
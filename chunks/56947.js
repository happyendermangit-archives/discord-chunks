function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClipsExperiment: function() {
            return d
        },
        areClipsEnabled: function() {
            return f
        },
        useEnableClips: function() {
            return _
        },
        useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock: function() {
            return E
        },
        useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark: function() {
            return h
        },
        isUserPremiumTypeForClipsEarlyAccess: function() {
            return g
        }
    });
    var i = n("862205"),
        s = n("584687"),
        r = n("103979"),
        a = n("42887"),
        o = n("719923"),
        l = n("18346"),
        u = n("646718");
    let d = (0, i.createExperiment)({
            kind: "user",
            id: "2022-11_clips_experiment",
            label: "Clips Experiment",
            defaultConfig: {
                enableClips: !1,
                ignorePlatformRestriction: !1,
                showClipsHeaderEntrypoint: !1
            },
            treatments: [{
                id: 1,
                label: "Clips without upsells",
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !1,
                    showClipsHeaderEntrypoint: !0
                }
            }, {
                id: 2,
                label: "Clips with upsells",
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !1,
                    showClipsHeaderEntrypoint: !0
                }
            }, {
                id: 99,
                label: "Clips 4 da Developerz",
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !0,
                    showClipsHeaderEntrypoint: !0
                }
            }]
        }),
        c = (0, i.createExperiment)({
            kind: "user",
            id: "2023-09_clips_nitro_early_access",
            label: "Clips (Nitro EA)",
            defaultConfig: {
                enableClips: !1,
                enablePremiumEarlyAccessAnnouncementCoachmark: !1,
                enablePremiumEarlyAccessGoLiveRoadblock: !1
            },
            treatments: [{
                id: 1,
                label: "Clips Nitro EA Upsells Visible",
                config: {
                    enableClips: !1,
                    enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                    enablePremiumEarlyAccessGoLiveRoadblock: !0
                }
            }, {
                id: 2,
                label: "Clips Enabled (Nitro)",
                config: {
                    enableClips: !0,
                    enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                    enablePremiumEarlyAccessGoLiveRoadblock: !1
                }
            }]
        });

    function f() {
        if (!(0, l.default)(a.default)) return !1;
        let {
            enableClips: e
        } = c.getCurrentConfig({
            location: "areClipsEnabled"
        }, {
            autoTrackExposure: !1
        }), {
            enableClips: t
        } = d.getCurrentConfig({
            location: "areClipsEnabled"
        }, {
            autoTrackExposure: !1
        }), {
            enableDecoupledGameClipping: n
        } = s.default.getCurrentConfig({
            location: "areClipsEnabled"
        }, {
            autoTrackExposure: !1
        }), {
            enableViewerClipping: i
        } = r.default.getCurrentConfig({
            location: "areClipsEnabled"
        }, {
            autoTrackExposure: !1
        });
        return e || t || n || i
    }

    function _() {
        let e = (0, l.default)(a.default),
            {
                enableClips: t
            } = c.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            }),
            {
                enableClips: n
            } = d.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            }),
            {
                enableDecoupledGameClipping: i
            } = s.default.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            }),
            {
                enableViewerClipping: o
            } = r.default.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            });
        return (n || t || i || o) && e
    }
    let E = e => {
            let {
                autoTrackExposure: t
            } = e, n = (0, l.default)(a.default), {
                enablePremiumEarlyAccessGoLiveRoadblock: i
            } = c.useExperiment({
                location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
            }, {
                autoTrackExposure: t && n
            });
            return !!n && i
        },
        h = e => {
            let {
                autoTrackExposure: t
            } = e, n = (0, l.default)(a.default), {
                enablePremiumEarlyAccessAnnouncementCoachmark: i
            } = c.useExperiment({
                location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
            }, {
                autoTrackExposure: t && n
            });
            return !!n && i
        };

    function g(e) {
        return o.default.isPremiumAtLeast(e.premiumType, u.PremiumTypes.TIER_2)
    }
}
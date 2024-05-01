function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClipsExperiment: function() {
            return d
        },
        areClipsEnabled: function() {
            return c
        },
        isUserPremiumTypeForClipsEarlyAccess: function() {
            return f
        },
        useEnableClips: function() {
            return E
        },
        useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark: function() {
            return T
        },
        useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock: function() {
            return I
        }
    });
    var i = n("818083"),
        r = n("836157"),
        a = n("441167"),
        s = n("131951"),
        o = n("74538"),
        l = n("779618"),
        u = n("474936");
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
        _ = (0, i.createExperiment)({
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

    function c() {
        if (!(0, l.default)(s.default)) return !1;
        let {
            enableClips: e
        } = _.getCurrentConfig({
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
        } = r.default.getCurrentConfig({
            location: "areClipsEnabled"
        }, {
            autoTrackExposure: !1
        }), {
            enableViewerClipping: i
        } = a.default.getCurrentConfig({
            location: "areClipsEnabled"
        }, {
            autoTrackExposure: !1
        });
        return e || t || n || i
    }

    function E() {
        let e = (0, l.default)(s.default),
            {
                enableClips: t
            } = _.useExperiment({
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
            } = r.default.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            }),
            {
                enableViewerClipping: o
            } = a.default.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            });
        return (n || t || i || o) && e
    }
    let I = e => {
            let {
                autoTrackExposure: t
            } = e, n = (0, l.default)(s.default), {
                enablePremiumEarlyAccessGoLiveRoadblock: i
            } = _.useExperiment({
                location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
            }, {
                autoTrackExposure: t && n
            });
            return !!n && i
        },
        T = e => {
            let {
                autoTrackExposure: t
            } = e, n = (0, l.default)(s.default), {
                enablePremiumEarlyAccessAnnouncementCoachmark: i
            } = _.useExperiment({
                location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
            }, {
                autoTrackExposure: t && n
            });
            return !!n && i
        };

    function f(e) {
        return o.default.isPremiumAtLeast(e.premiumType, u.PremiumTypes.TIER_2)
    }
}
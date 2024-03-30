function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClipsExperiment: function() {
            return c
        },
        areClipsEnabled: function() {
            return d
        },
        isUserPremiumTypeForClipsEarlyAccess: function() {
            return m
        },
        useEnableClips: function() {
            return _
        },
        useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark: function() {
            return p
        },
        useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock: function() {
            return E
        }
    });
    var r = n("94498"),
        o = n("354086"),
        i = n("602520"),
        a = n("335911"),
        u = n("830721"),
        s = n("975628"),
        l = n("868615"),
        c = (0, r.createExperiment)({
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
        f = (0, r.createExperiment)({
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

    function d() {
        if (!(0, s.default)(a.default)) return !1;
        var e = f.getCurrentConfig({
                location: "areClipsEnabled"
            }, {
                autoTrackExposure: !1
            }).enableClips,
            t = c.getCurrentConfig({
                location: "areClipsEnabled"
            }, {
                autoTrackExposure: !1
            }).enableClips,
            n = o.default.getCurrentConfig({
                location: "areClipsEnabled"
            }, {
                autoTrackExposure: !1
            }).enableDecoupledGameClipping,
            r = i.default.getCurrentConfig({
                location: "areClipsEnabled"
            }, {
                autoTrackExposure: !1
            }).enableViewerClipping;
        return e || t || n || r
    }

    function _() {
        var e = (0, s.default)(a.default),
            t = f.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            }).enableClips,
            n = c.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            }).enableClips,
            r = o.default.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            }).enableDecoupledGameClipping,
            u = i.default.useExperiment({
                location: "useEnableClips"
            }, {
                autoTrackExposure: !1
            }).enableViewerClipping;
        return (n || t || r || u) && e
    }
    var E = function(e) {
            var t = e.autoTrackExposure,
                n = (0, s.default)(a.default),
                r = f.useExperiment({
                    location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
                }, {
                    autoTrackExposure: t && n
                }).enablePremiumEarlyAccessGoLiveRoadblock;
            return !!n && r
        },
        p = function(e) {
            var t = e.autoTrackExposure,
                n = (0, s.default)(a.default),
                r = f.useExperiment({
                    location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
                }, {
                    autoTrackExposure: t && n
                }).enablePremiumEarlyAccessAnnouncementCoachmark;
            return !!n && r
        };

    function m(e) {
        return u.default.isPremiumAtLeast(e.premiumType, l.PremiumTypes.TIER_2)
    }
}
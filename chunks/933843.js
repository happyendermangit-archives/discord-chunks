function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ineligibleQualitySetting: function() {
            return E
        },
        shouldActivatePerkDemo: function() {
            return c
        },
        shouldFetchPerksDemos: function() {
            return _
        }
    });
    var i = n("594174"),
        r = n("74538"),
        s = n("736871"),
        a = n("351742"),
        o = n("114064"),
        l = n("474936"),
        u = n("37113");

    function d() {
        let e = i.default.getCurrentUser();
        return null != e && !(0, r.isPremium)(e, l.PremiumTypes.TIER_1)
    }
    let _ = () => {
            let {
                inPerksDemosExperiment: e
            } = s.default.getCurrentConfig({
                location: "shouldFetchPerksDemos"
            }, {
                autoTrackExposure: !1
            }), {
                enabled: t
            } = a.default.getCurrentConfig({
                location: "shouldFetchPerksDemos"
            }, {
                autoTrackExposure: !1
            });
            return d() && o.default.shouldFetch() && e && t
        },
        c = e => d() && o.default.shouldActivate(e),
        E = (e, t) => e === u.ApplicationStreamResolutions.RESOLUTION_720 && t !== u.ApplicationStreamFPS.FPS_60
}
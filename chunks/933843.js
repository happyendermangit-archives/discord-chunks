function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ineligibleQualitySetting: function() {
            return c
        },
        shouldActivatePerkDemo: function() {
            return _
        },
        shouldFetchPerksDemos: function() {
            return d
        }
    });
    var i = n("594174"),
        r = n("74538"),
        s = n("351742"),
        a = n("114064"),
        o = n("474936"),
        l = n("37113");

    function u() {
        let e = i.default.getCurrentUser();
        return null != e && !(0, r.isPremium)(e, o.PremiumTypes.TIER_1)
    }
    let d = () => {
            let {
                enabled: e
            } = s.default.getCurrentConfig({
                location: "shouldFetchPerksDemos"
            }, {
                autoTrackExposure: !1
            });
            return u() && a.default.shouldFetch() && e
        },
        _ = e => u() && a.default.shouldActivate(e),
        c = (e, t) => e === l.ApplicationStreamResolutions.RESOLUTION_720 && t !== l.ApplicationStreamFPS.FPS_60
}
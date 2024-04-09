function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldActivatePerkDemo: function() {
            return d
        },
        shouldFetchPerksDemos: function() {
            return u
        }
    });
    var i = n("594174"),
        r = n("74538"),
        s = n("351742"),
        a = n("114064"),
        o = n("474936");

    function l() {
        let e = i.default.getCurrentUser();
        return null != e && !(0, r.isPremium)(e, o.PremiumTypes.TIER_1)
    }
    let u = () => {
            let {
                enabled: e
            } = s.default.getCurrentConfig({
                location: "shouldFetchPerksDemos"
            }, {
                autoTrackExposure: !1
            });
            return l() && a.default.shouldFetch() && e
        },
        d = e => l() && a.default.shouldActivate(e)
}
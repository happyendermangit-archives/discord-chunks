function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("355467"),
        r = n("147913"),
        a = n("400407");
    class s extends r.default {
        constructor(...e) {
            var t, n, r;
            super(...e), t = this, n = "actions", r = {
                POST_CONNECTION_OPEN: () => {
                    let {
                        enabled: e
                    } = a.LocalizedPricingPromoManagerExperiment.getCurrentConfig({
                        location: "cd74f0_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    e && (0, i.fetchLocalizedPromo)()
                }
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r
        }
    }
    t.default = new s
}
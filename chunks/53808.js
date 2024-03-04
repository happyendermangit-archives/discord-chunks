function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return a
        }
    }), E("222007");
    var t = E("850068"),
        o = E("689988"),
        n = E("843663");
    class r extends o.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: () => {
                    let {
                        enabled: e
                    } = n.LocalizedPricingPromoManagerExperiment.getCurrentConfig({
                        location: "cd74f0_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    e && (0, t.fetchLocalizedPromo)()
                }
            }
        }
    }
    var a = new r
}
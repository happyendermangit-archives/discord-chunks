function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return I
        }
    }), E("222007");
    var t = E("689988"),
        o = E("697218"),
        n = E("719923"),
        r = E("538620"),
        a = E("646718");
    class i extends t.default {
        onPostConnectionOpen() {
            this.maybeFetchActiveOutboundPromotions()
        }
        maybeFetchActiveOutboundPromotions() {
            let e = o.default.getCurrentUser();
            null != e && n.default.isPremiumExactly(e, a.PremiumTypes.TIER_2) && (0, r.fetchActiveOutboundPromotions)()
        }
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this)
            }
        }
    }
    var I = new i
}
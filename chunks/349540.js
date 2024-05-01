function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("594174"),
        s = n("74538"),
        a = n("748770"),
        o = n("474936");
    class l extends i.default {
        onPostConnectionOpen() {
            this.maybeFetchActiveOutboundPromotions()
        }
        maybeFetchActiveOutboundPromotions() {
            let e = r.default.getCurrentUser();
            null != e && s.default.isPremiumExactly(e, o.PremiumTypes.TIER_2) && (0, a.fetchActiveOutboundPromotions)()
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this)
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new l
}
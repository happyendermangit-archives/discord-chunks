function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return O
        }
    }), E("222007");
    var t = E("850068"),
        o = E("316718"),
        n = E("689988"),
        r = E("697218"),
        i = E("160299"),
        a = E("521012"),
        I = E("437712"),
        s = E("568734"),
        T = E("719923"),
        S = E("646718");
    class N extends n.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: () => {
                    this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription()
                }
            }, this.maybeFetchSubscriptions = async () => {
                let e = r.default.getCurrentUser();
                if (T.default.isPremium(e)) {
                    !a.default.hasFetchedSubscriptions() && await (0, t.fetchSubscriptions)();
                    let e = a.default.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) == null && !I.default.applicationIdsFetched.has(S.PREMIUM_SUBSCRIPTION_APPLICATION) && await (0, o.fetchUserEntitlementsForApplication)(S.PREMIUM_SUBSCRIPTION_APPLICATION)
                }
            }, this.maybeFetchMostRecentSubscription = () => {
                let e = r.default.getCurrentUser();
                null != e && !T.default.isPremium(e) && null != e.purchasedFlags && ((0, s.hasFlag)(e.purchasedFlags, S.PurchasedFlags.PREMIUM_TIER_1) || (0, s.hasFlag)(e.purchasedFlags, S.PurchasedFlags.PREMIUM_TIER_2)) && (0, t.fetchMostRecentSubscription)()
            }, this.maybeFetchCountryCode = async () => {
                let e = r.default.getCurrentUser();
                T.default.isPremium(e) && !i.default.ipCountryCodeLoaded && await this.fetchCountryCode()
            }, this.fetchCountryCode = async () => {
                await (0, t.fetchIpCountryCode)();
                let e = i.default.ipCountryCode;
                null != e && await (0, t.fetchPaymentSources)()
            }
        }
    }
    var O = new N
}
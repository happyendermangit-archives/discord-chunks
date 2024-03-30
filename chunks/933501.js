function(e, t, n) {
    "use strict";

    function r(e) {
        var t;
        return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }

    function o(e) {
        var t;
        return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.available_for_purchase) !== void 0
    }
    n.r(t), n.d(t, {
        isSubscriptionRole: function() {
            return r
        },
        isSubscriptionRoleAvailableForPurchase: function() {
            return o
        }
    })
}
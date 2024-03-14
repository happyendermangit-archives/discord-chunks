function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        fetchAllSubscriptionListingsDataForApplication: function() {
            return l
        },
        fetchEntitlementsForGuild: function() {
            return a
        },
        dismissApplicationSubscriptionExpirationNotice: function() {
            return o
        },
        fetchSubscriptionListingForPlan: function() {
            return s
        }
    }), n("222007");
    var i = n("913144"),
        r = n("775433"),
        u = n("739295");
    async function l(t, e) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
            applicationId: t
        });
        try {
            let n = await u.getApplicationSubscriptionGroupListingsForApplication(t, e);
            return i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: t,
                groupListing: n
            }), n
        } catch (e) {
            i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                applicationId: t
            })
        }
    }
    async function a(t) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
            guildId: t
        });
        try {
            let e = await u.getEntitlementsForGuild(t);
            i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
                guildId: t,
                entitlements: e
            })
        } catch (e) {
            i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
                guildId: t
            })
        }
    }

    function o(t) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
            guildId: t
        })
    }
    async function s(t) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
            planId: t
        });
        try {
            var e;
            let n = await u.getSubscriptionGroupForSubscriptionPlan(t);
            i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                groupListing: n
            });
            let l = null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
            for (let e of l) e.subscription_plans[0].id === t && await r.fetchSubscriptionPlansForSKU(e.id, void 0, void 0, !0)
        } catch (t) {}
    }
}
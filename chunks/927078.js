function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        fetchAllSubscriptionListingsDataForApplication: function() {
            return c
        },
        fetchEntitlementsForGuild: function() {
            return d
        },
        dismissApplicationSubscriptionExpirationNotice: function() {
            return S
        },
        fetchSubscriptionListingForPlan: function() {
            return E
        }
    }), n("222007");
    var i = n("913144"),
        r = n("775433"),
        u = n("739295"),
        l = n("49111");

    function a(t) {
        return {
            id: t.id,
            type: l.SKUTypes.SUBSCRIPTION,
            application_id: t.application_id,
            product_line: l.SKUProductLines.APPLICATION,
            name: t.name,
            summary: "",
            description: t.description,
            flags: t.sku_flags,
            manifests: [],
            available_regions: [],
            legal_notice: "",
            deleted: t.soft_deleted,
            price_tier: 0,
            show_age_gate: !1,
            restricted: !1
        }
    }

    function o(t) {
        var e;
        return {
            id: t.id,
            sku: a(t),
            summary: t.description,
            description: t.description,
            benefits: null !== (e = t.store_listing_benefits) && void 0 !== e ? e : [],
            thumbnail: t.image_asset
        }
    }

    function s(t) {
        for (let e of (i.default.dispatch({
                type: "SKUS_FETCH_SUCCESS",
                skus: t.map(a)
            }), i.default.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: t.map(o)
            }), t)) i.default.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: e.id,
            subscriptionPlans: e.subscription_plans
        })
    }
    async function c(t, e) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
            applicationId: t
        });
        try {
            var n;
            let r = await u.getApplicationSubscriptionGroupListingsForApplication(t, e);
            return i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: t,
                groupListing: r
            }), s(null !== (n = r.subscription_listings) && void 0 !== n ? n : []), r
        } catch (e) {
            i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                applicationId: t
            })
        }
    }
    async function d(t) {
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

    function S(t) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
            guildId: t
        })
    }
    async function E(t) {
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
            for (let e of l) e.subscription_plans[0].id === t && await r.fetchSubscriptionPlansForSKU(e.id, void 0, void 0, !0);
            s(l)
        } catch (t) {}
    }
}
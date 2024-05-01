function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dismissApplicationSubscriptionExpirationNotice: function() {
            return c
        },
        fetchAllSubscriptionListingsDataForApplication: function() {
            return d
        },
        fetchEntitlementsForGuild: function() {
            return _
        },
        fetchSubscriptionListingForPlan: function() {
            return E
        }
    }), n("47120");
    var i = n("570140"),
        r = n("821849"),
        a = n("307643"),
        s = n("981631");

    function o(e) {
        return {
            id: e.id,
            type: s.SKUTypes.SUBSCRIPTION,
            application_id: e.application_id,
            product_line: s.SKUProductLines.APPLICATION,
            name: e.name,
            summary: "",
            description: e.description,
            flags: e.sku_flags,
            manifests: [],
            available_regions: [],
            legal_notice: "",
            deleted: e.soft_deleted,
            price_tier: 0,
            show_age_gate: !1,
            restricted: !1
        }
    }

    function l(e) {
        var t;
        return {
            id: e.id,
            sku: o(e),
            summary: e.description,
            description: e.description,
            benefits: null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
            thumbnail: e.image_asset
        }
    }

    function u(e) {
        for (let t of (i.default.dispatch({
                type: "SKUS_FETCH_SUCCESS",
                skus: e.map(o)
            }), i.default.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.map(l)
            }), e)) i.default.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans
        })
    }
    async function d(e, t) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
            applicationId: e
        });
        try {
            var n;
            let r = await a.getApplicationSubscriptionGroupListingsForApplication(e, t);
            return i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: e,
                groupListing: r
            }), u(null !== (n = r.subscription_listings) && void 0 !== n ? n : []), r
        } catch (t) {
            i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                applicationId: e
            })
        }
    }
    async function _(e) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
            guildId: e
        });
        try {
            let t = await a.getEntitlementsForGuild(e);
            i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
                guildId: e,
                entitlements: t
            })
        } catch (t) {
            i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
                guildId: e
            })
        }
    }

    function c(e) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
            guildId: e
        })
    }
    async function E(e) {
        i.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
            planId: e
        });
        try {
            var t;
            let n = await a.getSubscriptionGroupForSubscriptionPlan(e);
            i.default.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                groupListing: n
            });
            let s = null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
            for (let t of s) t.subscription_plans[0].id === e && await r.fetchSubscriptionPlansForSKU(t.id, void 0, void 0, !0);
            u(s)
        } catch (e) {}
    }
}
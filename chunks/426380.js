function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openApplicationSubscriptionPaymentModal: function() {
            return x
        },
        openActivityApplicationPaymentModal: function() {
            return S
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("627445"),
        a = n.n(l),
        s = n("77078"),
        r = n("316718"),
        o = n("55620"),
        u = n("651057"),
        d = n("299285"),
        c = n("927078"),
        f = n("248933"),
        p = n("129408"),
        m = n("635357"),
        h = n("49111");

    function x(e) {
        let {
            initialPlanId: t,
            activeSubscription: l,
            analyticsObject: a,
            analyticsLocation: r,
            analyticsLocations: o,
            analyticsSubscriptionType: u,
            renderHeader: d,
            planGroup: c,
            skuId: f,
            guildId: p,
            reviewWarningMessage: x,
            listing: E,
            application: y,
            showBenefitsFirst: g,
            eligibleApplicationSubscriptionGuilds: S,
            onComplete: C,
            forcesTransitionToGuild: _
        } = e;
        (0, s.openModalLazy)(async () => {
            let {
                PaymentContextProvider: e
            } = await n.el("642906").then(n.bind(n, "642906")), s = (await n.el("526257").then(n.bind(n, "526257"))).default, {
                getApplicationSubscriptionPaymentSteps: h
            } = await n.el("999043").then(n.bind(n, "999043")), I = h({
                guildId: p,
                application: y,
                listing: E,
                showBenefitsFirst: g,
                eligibleApplicationSubscriptionGuilds: S
            });
            return n => (0, i.jsx)(e, {
                applicationId: y.id,
                activeSubscription: l,
                stepConfigs: I,
                skuIDs: [f],
                children: (0, i.jsx)(m.GiftContextProvider, {
                    children: (0, i.jsx)(s, {
                        ...n,
                        initialPlanId: t,
                        skuId: f,
                        analyticsLocations: o,
                        analyticsObject: a,
                        analyticsLocation: r,
                        analyticsSubscriptionType: u,
                        renderHeader: d,
                        planGroup: c,
                        reviewWarningMessage: x,
                        applicationId: y.id,
                        guildId: null != p ? p : void 0,
                        onComplete: C,
                        forcesTransitionToGuild: _
                    })
                })
            })
        }, {
            onCloseRequest: h.NOOP
        })
    }
    let E = async e => {
        let t = d.default.getApplication(e);
        if (null != t) return t;
        await u.default.fetchApplications([e], !1);
        let n = d.default.getApplication(e);
        return a(null != n, "Failed to find application with ID %s", e), n
    }, y = async e => {
        let t = f.default.getSubscriptionGroupListingForApplication(e);
        if (null != t) return t;
        let n = await (0, o.fetchAllStoreListingsForApplication)(e),
            i = n.find(e => e.sku.type === h.SKUTypes.SUBSCRIPTION_GROUP);
        a(null != i, "Failed to find subscription store listing"), await (0, c.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
        let l = f.default.getSubscriptionGroupListingForApplication(e);
        return a(null != l, "Failed to find subscription group listing"), l
    }, g = async (e, t) => {
        let n = await (0, r.fetchUserEntitlementsForApplication)(e),
            i = n.filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
        a(null == i, "User already has an active subscription to this SKU")
    };
    async function S(e) {
        let {
            applicationId: t,
            skuId: n,
            initialPlanId: i,
            analyticsLocationObject: l,
            analyticsLocations: s,
            renderHeader: r
        } = e, o = await E(t), u = await y(t), d = (0, p.getPayableSubscriptionListing)(u);
        a(null != d, "Failed to find subscription listing");
        let c = (0, p.isApplicationUserSubscription)(d.sku_flags);
        a(c, "Guild application subscriptions unsupported!"), a(d.published, "Subscription listing not published"), await g(t, n);
        let f = {
            initialPlanId: null != i ? i : null == d ? void 0 : d.subscription_plans[0].id,
            activeSubscription: null,
            analyticsLocations: s,
            analyticsLocationObject: l,
            analyticsSubscriptionType: h.SubscriptionTypes.APPLICATION,
            renderHeader: r,
            planGroup: u.subscription_listings_ids,
            skuId: n,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            application: o,
            listing: d
        };
        x(f)
    }
}
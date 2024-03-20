function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openApplicationSubscriptionPaymentModal: function() {
            return S
        },
        openActivityApplicationPaymentModal: function() {
            return v
        }
    });
    var i = n("37983");
    n("884691");
    var a = n("627445"),
        s = n.n(a),
        r = n("77078"),
        l = n("316718"),
        o = n("55620"),
        u = n("651057"),
        c = n("299285"),
        d = n("927078"),
        f = n("248933"),
        p = n("129408"),
        h = n("635357"),
        m = n("49111");

    function S(e) {
        let {
            initialPlanId: t,
            activeSubscription: a,
            analyticsObject: s,
            analyticsLocation: l,
            analyticsLocations: o,
            analyticsSubscriptionType: u,
            renderHeader: c,
            planGroup: d,
            skuId: f,
            guildId: p,
            reviewWarningMessage: S,
            listing: I,
            application: g,
            showBenefitsFirst: C,
            eligibleApplicationSubscriptionGuilds: v,
            onComplete: E,
            forcesTransitionToGuild: A
        } = e;
        (0, r.openModalLazy)(async () => {
            let {
                PaymentContextProvider: e
            } = await n.el("642906").then(n.bind(n, "642906")), r = (await n.el("526257").then(n.bind(n, "526257"))).default, {
                getApplicationSubscriptionPaymentSteps: m
            } = await n.el("999043").then(n.bind(n, "999043")), N = m({
                guildId: p,
                application: g,
                listing: I,
                showBenefitsFirst: C,
                eligibleApplicationSubscriptionGuilds: v
            });
            return n => (0, i.jsx)(e, {
                applicationId: g.id,
                activeSubscription: a,
                stepConfigs: N,
                skuIDs: [f],
                children: (0, i.jsx)(h.GiftContextProvider, {
                    children: (0, i.jsx)(r, {
                        ...n,
                        initialPlanId: t,
                        skuId: f,
                        analyticsLocations: o,
                        analyticsObject: s,
                        analyticsLocation: l,
                        analyticsSubscriptionType: u,
                        renderHeader: c,
                        planGroup: d,
                        reviewWarningMessage: S,
                        applicationId: g.id,
                        guildId: null != p ? p : void 0,
                        onComplete: E,
                        forcesTransitionToGuild: A
                    })
                })
            })
        }, {
            onCloseRequest: m.NOOP
        })
    }
    let I = async e => {
        let t = c.default.getApplication(e);
        if (null != t) return t;
        await u.default.fetchApplications([e], !1);
        let n = c.default.getApplication(e);
        return s(null != n, "Failed to find application with ID %s", e), n
    }, g = async e => {
        let t = f.default.getSubscriptionGroupListingForApplication(e);
        if (null != t) return t;
        let n = await (0, o.fetchAllStoreListingsForApplication)(e),
            i = n.find(e => e.sku.type === m.SKUTypes.SUBSCRIPTION_GROUP);
        s(null != i, "Failed to find subscription store listing"), await (0, d.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
        let a = f.default.getSubscriptionGroupListingForApplication(e);
        return s(null != a, "Failed to find subscription group listing"), a
    }, C = async (e, t) => {
        let n = await (0, l.fetchUserEntitlementsForApplication)(e),
            i = n.filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
        s(null == i, "User already has an active subscription to this SKU")
    };
    async function v(e) {
        let {
            applicationId: t,
            skuId: n,
            initialPlanId: i,
            analyticsLocationObject: a,
            analyticsLocations: r,
            renderHeader: l
        } = e, o = await I(t), u = await g(t), c = (0, p.getPayableSubscriptionListing)(u);
        s(null != c, "Failed to find subscription listing");
        let d = (0, p.isApplicationUserSubscription)(c.sku_flags);
        s(d, "Guild application subscriptions unsupported!"), s(c.published, "Subscription listing not published"), await C(t, n);
        let f = {
            initialPlanId: null != i ? i : null == c ? void 0 : c.subscription_plans[0].id,
            activeSubscription: null,
            analyticsLocations: r,
            analyticsLocationObject: a,
            analyticsSubscriptionType: m.SubscriptionTypes.APPLICATION,
            renderHeader: l,
            planGroup: u.subscription_listings_ids,
            skuId: n,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            application: o,
            listing: c
        };
        S(f)
    }
}
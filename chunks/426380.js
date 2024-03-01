function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openApplicationSubscriptionPaymentModal: function() {
            return E
        },
        openActivityApplicationPaymentModal: function() {
            return T
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("627445"),
        a = n.n(i),
        s = n("77078"),
        r = n("316718"),
        o = n("55620"),
        u = n("651057"),
        d = n("299285"),
        c = n("927078"),
        f = n("248933"),
        m = n("129408"),
        p = n("635357"),
        h = n("49111");

    function E(e) {
        let {
            initialPlanId: t,
            activeSubscription: i,
            analyticsObject: a,
            analyticsLocation: r,
            analyticsLocations: o,
            analyticsSubscriptionType: u,
            renderHeader: d,
            planGroup: c,
            skuId: f,
            guildId: m,
            reviewWarningMessage: E,
            listing: g,
            application: C,
            showBenefitsFirst: S,
            eligibleApplicationSubscriptionGuilds: T,
            onComplete: v,
            forcesTransitionToGuild: I
        } = e;
        (0, s.openModalLazy)(async () => {
            let {
                PaymentContextProvider: e
            } = await n.el("642906").then(n.bind(n, "642906")), s = (await n.el("73947").then(n.bind(n, "73947"))).default, {
                getApplicationSubscriptionPaymentSteps: h
            } = await n.el("999043").then(n.bind(n, "999043")), _ = h({
                guildId: m,
                application: C,
                listing: g,
                showBenefitsFirst: S,
                eligibleApplicationSubscriptionGuilds: T
            });
            return n => (0, l.jsx)(e, {
                applicationId: C.id,
                activeSubscription: i,
                stepConfigs: _,
                skuIDs: [f],
                children: (0, l.jsx)(p.GiftContextProvider, {
                    children: (0, l.jsx)(s, {
                        ...n,
                        initialPlanId: t,
                        skuId: f,
                        analyticsLocations: o,
                        analyticsObject: a,
                        analyticsLocation: r,
                        analyticsSubscriptionType: u,
                        renderHeader: d,
                        planGroup: c,
                        reviewWarningMessage: E,
                        applicationId: C.id,
                        guildId: null != m ? m : void 0,
                        onComplete: v,
                        forcesTransitionToGuild: I
                    })
                })
            })
        }, {
            onCloseRequest: h.NOOP
        })
    }
    let g = async e => {
        let t = d.default.getApplication(e);
        if (null != t) return t;
        await u.default.fetchApplications([e], !1);
        let n = d.default.getApplication(e);
        return a(null != n, "Failed to find application with ID %s", e), n
    }, C = async e => {
        let t = f.default.getSubscriptionGroupListingForApplication(e);
        if (null != t) return t;
        let n = await (0, o.fetchAllStoreListingsForApplication)(e),
            l = n.find(e => e.sku.type === h.SKUTypes.SUBSCRIPTION_GROUP);
        a(null != l, "Failed to find subscription store listing"), await (0, c.fetchAllSubscriptionListingsDataForApplication)(e, null == l ? void 0 : l.id);
        let i = f.default.getSubscriptionGroupListingForApplication(e);
        return a(null != i, "Failed to find subscription group listing"), i
    }, S = async (e, t) => {
        let n = await (0, r.fetchUserEntitlementsForApplication)(e),
            l = n.filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
        a(null == l, "User already has an active subscription to this SKU")
    };
    async function T(e) {
        let {
            applicationId: t,
            skuId: n,
            initialPlanId: l,
            analyticsLocationObject: i,
            analyticsLocations: s,
            renderHeader: r
        } = e, o = await g(t), u = await C(t), d = (0, m.getPayableSubscriptionListing)(u);
        a(null != d, "Failed to find subscription listing");
        let c = (0, m.isApplicationUserSubscription)(d.sku_flags);
        a(c, "Guild application subscriptions unsupported!"), a(d.published, "Subscription listing not published"), await S(t, n);
        let f = {
            initialPlanId: null != l ? l : null == d ? void 0 : d.subscription_plans[0].id,
            activeSubscription: null,
            analyticsLocations: s,
            analyticsLocationObject: i,
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
        E(f)
    }
}
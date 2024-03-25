function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openApplicationPaymentModal: function() {
            return m
        },
        openActivityApplicationPaymentModal: function() {
            return I
        }
    });
    var i = n("37983");
    n("884691");
    var a = n("627445"),
        s = n.n(a),
        r = n("77078"),
        l = n("316718"),
        o = n("55620"),
        u = n("927078"),
        c = n("248933"),
        d = n("129408"),
        f = n("635357"),
        p = n("49111");

    function m(e) {
        let {
            initialPlanId: t,
            activeSubscription: a,
            analyticsObject: s,
            analyticsLocation: l,
            analyticsLocations: o,
            analyticsSubscriptionType: u,
            renderHeader: c,
            planGroup: d,
            skuId: m,
            guildId: h,
            reviewWarningMessage: S,
            applicationId: I,
            showBenefitsFirst: g,
            eligibleApplicationSubscriptionGuilds: C,
            onComplete: E,
            forcesTransitionToGuild: v
        } = e;
        (0, r.openModalLazy)(async () => {
            let {
                PaymentContextProvider: e
            } = await n.el("642906").then(n.bind(n, "642906")), r = (await n.el("526257").then(n.bind(n, "526257"))).default, {
                getApplicationPaymentSteps: p
            } = await n.el("470521").then(n.bind(n, "470521")), A = p({
                guildId: h,
                showBenefitsFirst: g,
                eligibleApplicationSubscriptionGuilds: C
            });
            return n => (0, i.jsx)(e, {
                applicationId: I,
                activeSubscription: a,
                stepConfigs: A,
                skuIDs: [m],
                children: (0, i.jsx)(f.GiftContextProvider, {
                    children: (0, i.jsx)(r, {
                        ...n,
                        initialPlanId: t,
                        skuId: m,
                        analyticsLocations: o,
                        analyticsObject: s,
                        analyticsLocation: l,
                        analyticsSubscriptionType: u,
                        renderHeader: c,
                        planGroup: d,
                        reviewWarningMessage: S,
                        applicationId: I,
                        guildId: null != h ? h : void 0,
                        onComplete: E,
                        forcesTransitionToGuild: v
                    })
                })
            })
        }, {
            onCloseRequest: p.NOOP
        })
    }
    let h = async e => {
        let t = c.default.getSubscriptionGroupListingForApplication(e);
        if (null != t) return t;
        let n = await (0, o.fetchAllStoreListingsForApplication)(e),
            i = n.find(e => e.sku.type === p.SKUTypes.SUBSCRIPTION_GROUP);
        s(null != i, "Failed to find subscription store listing"), await (0, u.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
        let a = c.default.getSubscriptionGroupListingForApplication(e);
        return s(null != a, "Failed to find subscription group listing"), a
    }, S = async (e, t) => {
        let n = await (0, l.fetchUserEntitlementsForApplication)(e),
            i = n.filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
        s(null == i, "User already has an active subscription to this SKU")
    };
    async function I(e) {
        let {
            applicationId: t,
            skuId: n,
            initialPlanId: i,
            analyticsLocationObject: a,
            analyticsLocations: r,
            renderHeader: l
        } = e, o = await h(t), u = (0, d.getPayableSubscriptionListing)(o);
        s(null != u, "Failed to find subscription listing");
        let c = (0, d.isApplicationUserSubscription)(u.sku_flags);
        s(c, "Guild application subscriptions unsupported!"), s(u.published, "Subscription listing not published"), await S(t, n);
        let f = {
            initialPlanId: null != i ? i : null == u ? void 0 : u.subscription_plans[0].id,
            activeSubscription: null,
            analyticsLocations: r,
            analyticsLocationObject: a,
            analyticsSubscriptionType: p.SubscriptionTypes.APPLICATION,
            renderHeader: l,
            planGroup: o.subscription_listings_ids,
            skuId: n,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: t,
            listing: u
        };
        m(f)
    }
}
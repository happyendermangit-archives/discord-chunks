function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openActivityApplicationPaymentModal: function() {
            return S
        },
        openApplicationPaymentModal: function() {
            return I
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("512722"),
        s = n.n(r),
        a = n("481060"),
        o = n("496929"),
        l = n("558381"),
        u = n("106976"),
        d = n("488915"),
        _ = n("171246"),
        c = n("987209"),
        E = n("981631");

    function I(e) {
        let {
            initialPlanId: t,
            activeSubscription: r,
            analyticsObject: s,
            analyticsLocation: o,
            analyticsLocations: l,
            analyticsSubscriptionType: u,
            renderHeader: d,
            planGroup: _,
            skuId: I,
            guildId: T,
            reviewWarningMessage: f,
            applicationId: S,
            showBenefitsFirst: A,
            eligibleApplicationSubscriptionGuilds: h,
            onComplete: m,
            forcesTransitionToGuild: N
        } = e;
        (0, a.openModalLazy)(async () => {
            let {
                PaymentContextProvider: e
            } = await Promise.resolve().then(n.bind(n, "598")), a = (await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("32776"), n.e("10993")]).then(n.bind(n, "405083"))).default, {
                getApplicationPaymentSteps: E
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("58625"), n.e("14720"), n.e("63438"), n.e("62511"), n.e("61247"), n.e("58600"), n.e("95900"), n.e("89890")]).then(n.bind(n, "759386")), O = E({
                guildId: T,
                showBenefitsFirst: A,
                eligibleApplicationSubscriptionGuilds: h
            });
            return n => (0, i.jsx)(e, {
                applicationId: S,
                activeSubscription: r,
                stepConfigs: O,
                skuIDs: [I],
                children: (0, i.jsx)(c.GiftContextProvider, {
                    children: (0, i.jsx)(a, {
                        ...n,
                        initialPlanId: t,
                        skuId: I,
                        analyticsLocations: l,
                        analyticsObject: s,
                        analyticsLocation: o,
                        analyticsSubscriptionType: u,
                        renderHeader: d,
                        planGroup: _,
                        reviewWarningMessage: f,
                        applicationId: S,
                        guildId: null != T ? T : void 0,
                        onComplete: m,
                        forcesTransitionToGuild: N
                    })
                })
            })
        }, {
            onCloseRequest: E.NOOP
        })
    }
    let T = async e => {
        let t = d.default.getSubscriptionGroupListingForApplication(e);
        if (null != t) return t;
        let n = (await (0, l.fetchAllStoreListingsForApplication)(e)).find(e => e.sku.type === E.SKUTypes.SUBSCRIPTION_GROUP);
        s()(null != n, "Failed to find subscription store listing"), await (0, u.fetchAllSubscriptionListingsDataForApplication)(e, null == n ? void 0 : n.id);
        let i = d.default.getSubscriptionGroupListingForApplication(e);
        return s()(null != i, "Failed to find subscription group listing"), i
    }, f = async (e, t) => {
        let n = (await (0, o.fetchUserEntitlementsForApplication)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
        s()(null == n, "User already has an active subscription to this SKU")
    };
    async function S(e) {
        let {
            applicationId: t,
            skuId: n,
            initialPlanId: i,
            analyticsLocationObject: r,
            analyticsLocations: a,
            renderHeader: o
        } = e, l = await T(t), u = (0, _.getPayableSubscriptionListing)(l);
        s()(null != u, "Failed to find subscription listing");
        let d = (0, _.isApplicationUserSubscription)(u.sku_flags);
        s()(d, "Guild application subscriptions unsupported!"), s()(u.published, "Subscription listing not published"), await f(t, n), I({
            initialPlanId: null != i ? i : null == u ? void 0 : u.subscription_plans[0].id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: r,
            analyticsSubscriptionType: E.SubscriptionTypes.APPLICATION,
            renderHeader: o,
            planGroup: l.subscription_listings_ids,
            skuId: n,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: t,
            listing: u
        })
    }
}
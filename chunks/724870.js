function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openActivityApplicationPaymentModal: function() {
            return T
        },
        openApplicationPaymentModal: function() {
            return E
        }
    }), n("789020");
    var i = n("735250");
    n("470079");
    var r = n("512722"),
        s = n.n(r),
        a = n("481060"),
        o = n("496929"),
        l = n("171246"),
        u = n("509545"),
        d = n("55563"),
        _ = n("987209"),
        c = n("981631");

    function E(e) {
        let {
            initialPlanId: t,
            activeSubscription: r,
            analyticsObject: s,
            analyticsLocation: o,
            analyticsLocations: l,
            analyticsSubscriptionType: u,
            renderHeader: d,
            planGroup: E,
            skuId: I,
            guildId: T,
            reviewWarningMessage: f,
            applicationId: S,
            showBenefitsFirst: h,
            eligibleApplicationSubscriptionGuilds: A,
            onComplete: m,
            forcesTransitionToGuild: N
        } = e;
        (0, a.openModalLazy)(async () => {
            let {
                PaymentContextProvider: e
            } = await Promise.resolve().then(n.bind(n, "598")), a = (await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("32776"), n.e("10993")]).then(n.bind(n, "405083"))).default, {
                getApplicationPaymentSteps: c
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("58625"), n.e("14720"), n.e("63438"), n.e("62511"), n.e("61247"), n.e("58600"), n.e("95900"), n.e("74195")]).then(n.bind(n, "759386")), p = c({
                guildId: T,
                showBenefitsFirst: h,
                eligibleApplicationSubscriptionGuilds: A
            });
            return n => (0, i.jsx)(e, {
                applicationId: S,
                activeSubscription: r,
                stepConfigs: p,
                skuIDs: [I],
                children: (0, i.jsx)(_.GiftContextProvider, {
                    children: (0, i.jsx)(a, {
                        ...n,
                        initialPlanId: t,
                        skuId: I,
                        analyticsLocations: l,
                        analyticsObject: s,
                        analyticsLocation: o,
                        analyticsSubscriptionType: u,
                        renderHeader: d,
                        planGroup: E,
                        reviewWarningMessage: f,
                        applicationId: S,
                        guildId: null != T ? T : void 0,
                        onComplete: m,
                        forcesTransitionToGuild: N
                    })
                })
            })
        }, {
            onCloseRequest: c.NOOP
        })
    }
    let I = async (e, t) => {
        let n = (await (0, o.fetchUserEntitlementsForApplication)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
        s()(null == n, "User already has an active subscription to this SKU")
    };
    async function T(e) {
        var t;
        let {
            applicationId: n,
            skuId: i,
            initialPlanId: r,
            analyticsLocationObject: a,
            analyticsLocations: o,
            renderHeader: _
        } = e, T = d.default.get(i), f = u.default.getForSKU(i);
        s()(null != T, "Failed to find SKU");
        let S = (0, l.isApplicationUserSubscription)(T.flags);
        s()(S, "Guild application subscriptions unsupported!"), await I(n, i), E({
            initialPlanId: null != r ? r : null === (t = f[0]) || void 0 === t ? void 0 : t.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: a,
            analyticsSubscriptionType: c.SubscriptionTypes.APPLICATION,
            renderHeader: _,
            planGroup: [],
            skuId: i,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: n
        })
    }
}
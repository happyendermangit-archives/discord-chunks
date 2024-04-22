function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("512722"),
        a = n.n(s),
        o = n("442837"),
        l = n("570140"),
        u = n("821849"),
        d = n("906732"),
        _ = n("887706"),
        c = n("724870"),
        E = n("594174"),
        I = n("509545"),
        T = n("270144"),
        f = n("171246"),
        S = n("689011"),
        h = n("714441"),
        A = n("981631"),
        m = n("689938");
    t.default = e => {
        var t;
        let n, {
                listing: s,
                guildId: N,
                groupListingId: p,
                analyticsLocation: O,
                showBenefitsFirst: R,
                onComplete: C,
                forcesTransitionToGuild: g
            } = e,
            L = null == s ? void 0 : s.subscription_plans[0],
            D = null == s ? void 0 : s.application_id,
            v = null == L ? void 0 : L.id,
            M = (null == s ? void 0 : s.published) === !0,
            y = null == L ? void 0 : L.sku_id,
            P = (0, o.useStateFromStores)([I.default], () => null != v ? I.default.get(v) : null),
            U = (0, T.useApplication)(D),
            b = (0, T.useSubscriptionListingsForGroup)(p, {
                includeSoftDeleted: !0
            }).map(e => e.subscription_plans[0].id),
            {
                analyticsLocations: G
            } = (0, d.default)(),
            {
                activeSubscription: w,
                activeEntitlement: k
            } = (0, T.useActiveSubscriptionListingForApplication)(D, N),
            B = (0, T.useEligibleApplicationSubscriptionGuilds)(D, N),
            F = (0, _.default)(),
            V = null != s && (0, f.isApplicationUserSubscription)(s.sku_flags),
            x = null != k && k.userId === (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
            H = null == k || x,
            Y = null == k || b.length > 1,
            j = null != N || B.length > 0,
            W = V && x,
            K = null != P && null != U && H && Y && (j || V) && !W;
        return H ? j ? W && null != P && (n = m.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
            tierName: P.name
        })) : n = m.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = m.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
            M && null != y && F && l.default.wait(() => {
                (0, u.fetchSubscriptionPlansForSKU)(y)
            })
        }, [M, y, F]), {
            openModal: r.useCallback(() => {
                a()(null != U, "No application"), a()(null != L, "No subscription plan"), a()(M, "Cannot purchase this unpublished plan");
                let e = () => {
                    (0, c.openApplicationPaymentModal)({
                        activeSubscription: w,
                        analyticsSubscriptionType: A.SubscriptionTypes.APPLICATION,
                        analyticsLocations: G,
                        analyticsLocation: O,
                        renderHeader: (e, t, n) => (0, i.jsx)(S.PurchaseHeader, {
                            step: n,
                            onClose: () => t(!1)
                        }),
                        initialPlanId: L.id,
                        skuId: L.sku_id,
                        guildId: N,
                        eligibleApplicationSubscriptionGuilds: B,
                        planGroup: b,
                        applicationId: U.id,
                        showBenefitsFirst: R,
                        onComplete: C,
                        forcesTransitionToGuild: g
                    })
                };
                !j && V ? (0, h.confirmNoSharedServerSubscribeWarningModal)({
                    applicationName: U.name,
                    onConfirm: e,
                    onCancel: () => {}
                }) : e()
            }, [M, L, b, U, N, j, V, G, O, w, R, B, C, g]),
            canOpenModal: K,
            cannotOpenReason: n
        }
    }
}
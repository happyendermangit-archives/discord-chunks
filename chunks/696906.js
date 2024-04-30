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
            v = null == s ? void 0 : s.application_id,
            D = null == L ? void 0 : L.id,
            M = (null == s ? void 0 : s.published) === !0,
            y = null == L ? void 0 : L.sku_id,
            P = (0, o.useStateFromStores)([I.default], () => null != D ? I.default.get(D) : null),
            U = (0, T.useApplication)(v),
            b = (0, T.useSubscriptionListingsForGroup)(p, {
                includeSoftDeleted: !0
            }).map(e => e.subscription_plans[0].id),
            {
                analyticsLocations: G
            } = (0, d.default)(),
            {
                activeSubscription: w,
                activeEntitlement: B
            } = (0, T.useActiveSubscriptionListingForApplication)(v, N),
            k = (0, T.useEligibleApplicationSubscriptionGuilds)(v, N),
            V = (0, _.default)(),
            x = null != s && (0, f.isApplicationUserSubscription)(s.sku_flags),
            F = null != B && B.userId === (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
            H = null == B || F,
            Y = null == B || b.length > 1,
            j = null != N || k.length > 0,
            W = x && F,
            K = null != P && null != U && H && Y && (j || x) && !W;
        return H ? j ? W && null != P && (n = m.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
            tierName: P.name
        })) : n = m.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = m.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
            M && null != y && V && l.default.wait(() => {
                (0, u.fetchSubscriptionPlansForSKU)(y)
            })
        }, [M, y, V]), {
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
                        eligibleApplicationSubscriptionGuilds: k,
                        planGroup: b,
                        applicationId: U.id,
                        showBenefitsFirst: R,
                        onComplete: C,
                        forcesTransitionToGuild: g
                    })
                };
                !j && x ? (0, h.confirmNoSharedServerSubscribeWarningModal)({
                    applicationName: U.name,
                    onConfirm: e,
                    onCancel: () => {}
                }) : e()
            }, [M, L, b, U, N, j, x, G, O, w, R, k, C, g]),
            canOpenModal: K,
            cannotOpenReason: n
        }
    }
}
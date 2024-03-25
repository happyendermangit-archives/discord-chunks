function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var i = n("37983"),
        a = n("884691"),
        s = n("627445"),
        r = n.n(s),
        l = n("446674"),
        o = n("913144"),
        u = n("775433"),
        c = n("685665"),
        d = n("598981"),
        f = n("426380"),
        p = n("697218"),
        m = n("10514"),
        h = n("991254"),
        S = n("129408"),
        I = n("713536"),
        g = n("449809"),
        C = n("49111"),
        E = n("782340"),
        v = e => {
            var t;
            let n, {
                    listing: s,
                    guildId: v,
                    groupListingId: A,
                    analyticsLocation: N,
                    showBenefitsFirst: x,
                    onComplete: T,
                    forcesTransitionToGuild: _
                } = e,
                b = null == s ? void 0 : s.subscription_plans[0],
                L = null == s ? void 0 : s.application_id,
                j = null == b ? void 0 : b.id,
                y = (null == s ? void 0 : s.published) === !0,
                M = null == b ? void 0 : b.sku_id,
                O = (0, l.useStateFromStores)([m.default], () => null != j ? m.default.get(j) : null),
                P = (0, h.useApplication)(L),
                R = (0, h.useSubscriptionListingsForGroup)(A, {
                    includeSoftDeleted: !0
                }),
                U = R.map(e => e.subscription_plans[0].id),
                {
                    analyticsLocations: B
                } = (0, c.default)(),
                {
                    activeSubscription: G,
                    activeEntitlement: w
                } = (0, h.useActiveSubscriptionListingForApplication)(L, v),
                D = (0, h.useEligibleApplicationSubscriptionGuilds)(L, v),
                k = (0, d.default)(),
                F = null != s && (0, S.isApplicationUserSubscription)(s.sku_flags),
                H = null != w && w.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                K = null == w || H,
                V = null == w || U.length > 1,
                W = null != v || D.length > 0,
                Z = F && H,
                z = null != O && null != P && K && V && (W || F) && !Z;
            K ? W ? Z && null != O && (n = E.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
                tierName: O.name
            })) : n = E.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = E.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, a.useEffect(() => {
                y && null != M && k && o.default.wait(() => {
                    (0, u.fetchSubscriptionPlansForSKU)(M)
                })
            }, [y, M, k]);
            let J = a.useCallback(() => {
                r(null != P, "No application"), r(null != b, "No subscription plan"), r(y, "Cannot purchase this unpublished plan");
                let e = () => {
                    (0, f.openApplicationPaymentModal)({
                        activeSubscription: G,
                        analyticsSubscriptionType: C.SubscriptionTypes.APPLICATION,
                        analyticsLocations: B,
                        analyticsLocation: N,
                        renderHeader: (e, t, n) => (0, i.jsx)(I.PurchaseHeader, {
                            step: n,
                            onClose: () => t(!1)
                        }),
                        initialPlanId: b.id,
                        skuId: b.sku_id,
                        guildId: v,
                        eligibleApplicationSubscriptionGuilds: D,
                        planGroup: U,
                        applicationId: P.id,
                        showBenefitsFirst: x,
                        onComplete: T,
                        forcesTransitionToGuild: _
                    })
                };
                !W && F ? (0, g.confirmNoSharedServerSubscribeWarningModal)({
                    applicationName: P.name,
                    onConfirm: e,
                    onCancel: () => {}
                }) : e()
            }, [y, b, U, P, v, W, F, B, N, G, x, D, T, _]);
            return {
                openModal: J,
                canOpenModal: z,
                cannotOpenReason: n
            }
        }
}
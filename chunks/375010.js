function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("627445"),
        s = n.n(a),
        r = n("446674"),
        o = n("913144"),
        u = n("775433"),
        d = n("685665"),
        c = n("598981"),
        f = n("426380"),
        p = n("697218"),
        m = n("10514"),
        h = n("991254"),
        x = n("129408"),
        E = n("713536"),
        y = n("449809"),
        g = n("49111"),
        S = n("782340"),
        C = e => {
            var t;
            let n, {
                    listing: a,
                    guildId: C,
                    groupListingId: I,
                    analyticsLocation: T,
                    showBenefitsFirst: _,
                    onComplete: v,
                    forcesTransitionToGuild: N
                } = e,
                A = null == a ? void 0 : a.subscription_plans[0],
                O = null == a ? void 0 : a.application_id,
                M = null == A ? void 0 : A.id,
                R = (null == a ? void 0 : a.published) === !0,
                k = null == A ? void 0 : A.sku_id,
                L = (0, r.useStateFromStores)([m.default], () => null != M ? m.default.get(M) : null),
                P = (0, h.useApplication)(O),
                b = (0, h.useSubscriptionListingsForGroup)(I, {
                    includeSoftDeleted: !0
                }),
                j = b.map(e => e.subscription_plans[0].id),
                {
                    analyticsLocations: U
                } = (0, d.default)(),
                {
                    activeSubscription: D,
                    activeEntitlement: w
                } = (0, h.useActiveSubscriptionListingForApplication)(O, C),
                F = (0, h.useEligibleApplicationSubscriptionGuilds)(O, C),
                B = (0, c.default)(),
                G = null != a && (0, x.isApplicationUserSubscription)(a.sku_flags),
                H = null != w && w.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                V = null == w || H,
                K = null == w || j.length > 1,
                W = null != C || F.length > 0,
                Y = G && H,
                z = null != L && null != P && V && K && (W || G) && !Y;
            V ? W ? Y && null != L && (n = S.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
                tierName: L.name
            })) : n = S.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = S.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
                R && null != k && B && o.default.wait(() => {
                    (0, u.fetchSubscriptionPlansForSKU)(k)
                })
            }, [R, k, B]);
            let Z = l.useCallback(() => {
                s(null != a, "No subscription listing"), s(null != P, "No application"), s(null != A, "No subscription plan"), s(R, "Cannot purchase this unpublished plan");
                let e = () => {
                    (0, f.openApplicationSubscriptionPaymentModal)({
                        activeSubscription: D,
                        analyticsSubscriptionType: g.SubscriptionTypes.APPLICATION,
                        analyticsLocations: U,
                        analyticsLocation: T,
                        renderHeader: (e, t, n) => (0, i.jsx)(E.PurchaseHeader, {
                            step: n,
                            onClose: () => t(!1)
                        }),
                        initialPlanId: A.id,
                        skuId: A.sku_id,
                        guildId: C,
                        eligibleApplicationSubscriptionGuilds: F,
                        planGroup: j,
                        listing: a,
                        application: P,
                        showBenefitsFirst: _,
                        onComplete: v,
                        forcesTransitionToGuild: N
                    })
                };
                !W && G ? (0, y.confirmNoSharedServerSubscribeWarningModal)({
                    application: P,
                    onConfirm: e,
                    onCancel: () => {}
                }) : e()
            }, [R, a, A, j, P, C, W, G, U, T, D, _, F, v, N]);
            return {
                openModal: Z,
                canOpenModal: z,
                cannotOpenReason: n
            }
        }
}
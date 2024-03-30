function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("824646"),
        l = n("396586"),
        c = n("974274"),
        f = n("558062"),
        d = n("208454"),
        _ = n("622753"),
        E = n("991142"),
        p = n("216239"),
        m = n("697689"),
        y = n("693102"),
        I = n("281767"),
        h = n("941504");
    t.default = function(e) {
        var t, n, o = e.listing,
            O = e.guildId,
            T = e.groupListingId,
            S = e.analyticsLocation,
            v = e.showBenefitsFirst,
            g = e.onComplete,
            A = e.forcesTransitionToGuild,
            b = null == o ? void 0 : o.subscription_plans[0],
            N = null == o ? void 0 : o.application_id,
            R = null == b ? void 0 : b.id,
            C = (null == o ? void 0 : o.published) === !0,
            P = null == b ? void 0 : b.sku_id,
            D = (0, a.useStateFromStores)([_.default], function() {
                return null != R ? _.default.get(R) : null
            }),
            L = (0, E.useApplication)(N),
            M = (0, E.useSubscriptionListingsForGroup)(T, {
                includeSoftDeleted: !0
            }).map(function(e) {
                return e.subscription_plans[0].id
            }),
            U = (0, l.default)().analyticsLocations,
            w = (0, E.useActiveSubscriptionListingForApplication)(N, O),
            k = w.activeSubscription,
            G = w.activeEntitlement,
            B = (0, E.useEligibleApplicationSubscriptionGuilds)(N, O),
            j = (0, c.default)(),
            F = null != o && (0, p.isApplicationUserSubscription)(o.sku_flags),
            V = null != G && G.userId === (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
            H = null == G || V,
            x = null == G || M.length > 1,
            Y = null != O || B.length > 0,
            W = F && V,
            K = null != D && null != L && H && x && (Y || F) && !W;
        return H ? Y ? W && null != D && (n = h.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
            tierName: D.name
        })) : n = h.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = h.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(function() {
            C && null != P && j && u.default.wait(function() {
                (0, s.fetchSubscriptionPlansForSKU)(P)
            })
        }, [C, P, j]), {
            openModal: r.useCallback(function() {
                i()(null != L, "No application"), i()(null != b, "No subscription plan"), i()(C, "Cannot purchase this unpublished plan");
                var e = function() {
                    (0, f.openApplicationPaymentModal)({
                        activeSubscription: k,
                        analyticsSubscriptionType: I.SubscriptionTypes.APPLICATION,
                        analyticsLocations: U,
                        analyticsLocation: S,
                        renderHeader: function(e, t, n) {
                            return r.createElement(m.PurchaseHeader, {
                                step: n,
                                onClose: function() {
                                    return t(!1)
                                }
                            })
                        },
                        initialPlanId: b.id,
                        skuId: b.sku_id,
                        guildId: O,
                        eligibleApplicationSubscriptionGuilds: B,
                        planGroup: M,
                        applicationId: L.id,
                        showBenefitsFirst: v,
                        onComplete: g,
                        forcesTransitionToGuild: A
                    })
                };
                !Y && F ? (0, y.confirmNoSharedServerSubscribeWarningModal)({
                    applicationName: L.name,
                    onConfirm: e,
                    onCancel: function() {}
                }) : e()
            }, [C, b, M, L, O, Y, F, U, S, k, v, B, g, A]),
            canOpenModal: K,
            cannotOpenReason: n
        }
    }
}
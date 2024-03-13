function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        PaymentContextProvider: function() {
            return H
        },
        PaymentContext: function() {
            return G
        },
        usePaymentContext: function() {
            return D
        },
        useForwardedPaymentContext: function() {
            return B
        }
    }), n("222007"), n("702976");
    var i = n("37983"),
        u = n("884691"),
        r = n("41092"),
        l = n("775560"),
        a = n("748820"),
        o = n("446674"),
        s = n("191225"),
        c = n("837707"),
        S = n("619935"),
        d = n("991254"),
        E = n("467292"),
        f = n("622839"),
        _ = n("105097"),
        T = n("568734"),
        I = n("719923"),
        A = n("286235"),
        p = n("621746"),
        C = n("854381"),
        P = n("237288"),
        N = n("986681"),
        R = n("702924"),
        U = n("241006"),
        L = n("284797"),
        M = n("383802"),
        O = n("334702"),
        F = n("775325"),
        h = n("403293"),
        m = n("523591"),
        y = n("49111"),
        g = n("646718");
    let [G, D, B] = (0, _.default)();

    function H(t) {
        var e, n;
        let {
            loadId: _,
            activeSubscription: D,
            stepConfigs: B,
            breadcrumbs: H = [],
            skuIDs: b,
            isGift: K = !1,
            children: v,
            defaultPlanId: w,
            purchaseType: Y = y.PurchaseTypes.SUBSCRIPTION,
            applicationId: W,
            referralCode: k
        } = t, V = (0, h.default)(), Z = (0, S.useBlockedPaymentsConfig)(), x = (0, P.default)(), {
            paymentSources: J,
            hasPaymentSources: Q,
            paymentSourceId: X,
            setPaymentSourceId: j,
            hasFetchedPaymentSources: z
        } = (0, N.default)({
            isGift: K,
            activeSubscription: D
        }), q = u.useRef(Q), {
            hasFetchedSubscriptionPlans: $,
            priceOptions: tt,
            setCurrency: te,
            currencyLoading: tn,
            currencies: ti
        } = (0, C.default)({
            activeSubscription: D,
            skuIDs: b,
            paymentSourceId: X,
            isGift: K
        }), tu = (0, M.default)(), [tr, tl] = u.useState(!1), {
            step: ta,
            setStep: to,
            steps: ts,
            breadcrumbsData: tc
        } = (0, F.default)({
            stepConfigs: B,
            breadcrumbs: H
        }), [tS, td] = (0, L.default)(ta), {
            paymentError: tE,
            paymentAuthenticationState: tf
        } = (0, R.default)(), {
            purchaseError: t_,
            purchaseErrorBlockRef: tT,
            setPurchaseError: tI
        } = (0, U.default)(), tA = (0, l.useLazyValue)(() => {
            let t = null != _ ? _ : (0, a.v4)();
            return A.default.addBreadcrumb({
                message: "Checkout session ID: ".concat(t)
            }), {
                loadId: t,
                startTime: Date.now()
            }
        }), {
            selectedSkuId: tp,
            selectedPlan: tC,
            setSelectedSkuId: tP,
            setSelectedPlanId: tN
        } = (0, p.default)(), [tR, tU] = (0, o.useStateFromStoresArray)([E.default], () => [E.default.purchaseTokenAuthState, E.default.purchaseTokenHash]), [tL, tM] = (0, o.useStateFromStoresArray)([m.default], () => [m.default.browserCheckoutState, m.default.loadId]), [tO, tF] = u.useState(null), [th, tm] = u.useState(null), [ty, tg] = u.useState(null), [tG, tD] = u.useState(null), [tB, tH] = u.useState(null), [tb, tK] = u.useState(void 0), [tv, tw] = u.useState([]), tY = u.useMemo(() => null == tC || (0, I.isPremiumSubscriptionPlan)(tC.id), [tC]), tW = u.useRef(null != D ? D.planId : null);
        u.useEffect(() => {
            null == tW.current && null != D && (tW.current = D.planId)
        }, [D]);
        let {
            skusById: tk,
            hasFetchedSkus: tV,
            skuPricePreviewsById: tZ
        } = (0, O.default)({
            applicationId: null != W ? W : g.PREMIUM_SUBSCRIPTION_APPLICATION,
            skuIDs: b,
            currentPaymentSourceId: X,
            isGift: K
        }), tx = u.useMemo(() => {
            if (null == tp) return null;
            let t = tZ[tp];
            if (null == t) return null;
            let e = null != X ? X : f.NO_PAYMENT_SOURCE;
            return t[e]
        }, [tp, tZ, X]), tJ = (0, d.useApplication)(W), tQ = (0, T.hasFlag)(null !== (e = null == tJ ? void 0 : tJ.flags) && void 0 !== e ? e : 0, y.ApplicationFlags.EMBEDDED) && (0, T.hasFlag)(null !== (n = null == tJ ? void 0 : tJ.flags) && void 0 !== n ? n : 0, y.ApplicationFlags.EMBEDDED_IAP), tX = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(t => {
            let {
                applicationId: e
            } = t;
            return e === W
        })), tj = (0, c.default)(tX), tz = tk[null != tp ? tp : ""];
        return (0, i.jsx)(G.Provider, {
            value: {
                stripe: V,
                contextMetadata: tA,
                blockedPayments: Z,
                activeSubscription: D,
                hasFetchedSubscriptions: x,
                hasFetchedSubscriptionPlans: $,
                updatedSubscription: tG,
                setUpdatedSubscription: tD,
                subscriptionMetadataRequest: tB,
                setSubscriptionMetadataRequest: tH,
                hasFetchedPaymentSources: z,
                paymentSources: J,
                hasPaymentSources: Q,
                paymentSourceId: X,
                setPaymentSourceId: j,
                priceOptions: tt,
                setCurrency: te,
                currencyLoading: tn,
                currencies: ti,
                ...tu,
                hasAcceptedTerms: tr,
                setHasAcceptedTerms: tl,
                step: ta,
                setStep: to,
                steps: ts,
                stepConfigs: B,
                breadcrumbs: tc,
                purchaseState: tS,
                setPurchaseState: td,
                paymentAuthenticationState: tf,
                paymentError: tE,
                purchaseError: t_,
                setPurchaseError: tI,
                purchaseErrorBlockRef: tT,
                purchaseTokenAuthState: tR,
                purchaseTokenHash: tU,
                browserCheckoutState: tL,
                browserCheckoutStateLoadId: tM,
                bodyNode: tO,
                setBodyNode: tF,
                footerNode: th,
                setFooterNode: tm,
                modalOverlayNode: ty,
                setModalOverlayNode: tg,
                selectedSkuId: tp,
                selectedPlan: tC,
                setSelectedSkuId: tP,
                setSelectedPlanId: tN,
                readySlideId: tb,
                setReadySlideId: tK,
                defaultPlanId: w,
                isPremium: tY,
                productLine: null == tz ? void 0 : tz.productLine,
                startedPaymentFlowWithPaymentSourcesRef: q,
                startingPremiumSubscriptionPlanIdRef: tW,
                hasFetchedSkus: tV,
                skusById: tk,
                skuPricePreviewsById: tZ,
                selectedSkuPricePreview: tx,
                application: tJ,
                purchaseType: Y,
                isEmbeddedIAP: tQ,
                activitySessionId: tj,
                entitlementsGranted: tv,
                setEntitlementsGranted: tw,
                referralCode: k
            },
            children: (0, i.jsx)(r.Elements, {
                options: y.StripeElementsOptions,
                stripe: V,
                children: v
            })
        })
    }
}
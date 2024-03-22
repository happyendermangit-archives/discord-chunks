function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        PaymentContextProvider: function() {
            return H
        },
        PaymentContext: function() {
            return D
        },
        usePaymentContext: function() {
            return B
        },
        useForwardedPaymentContext: function() {
            return b
        }
    }), n("222007"), n("702976");
    var i = n("37983"),
        r = n("884691"),
        u = n("41092"),
        l = n("775560"),
        a = n("748820"),
        o = n("446674"),
        s = n("191225"),
        c = n("837707"),
        S = n("619935"),
        d = n("991254"),
        E = n("467292"),
        f = n("622839"),
        _ = n("698041"),
        T = n("105097"),
        I = n("568734"),
        A = n("719923"),
        p = n("286235"),
        C = n("621746"),
        P = n("854381"),
        N = n("237288"),
        R = n("986681"),
        h = n("702924"),
        U = n("241006"),
        L = n("284797"),
        m = n("383802"),
        M = n("334702"),
        F = n("775325"),
        O = n("403293"),
        g = n("523591"),
        y = n("49111"),
        G = n("646718");
    let [D, B, b] = (0, T.default)();

    function H(t) {
        var e, n;
        let {
            loadId: T,
            activeSubscription: B,
            stepConfigs: b,
            breadcrumbs: H = [],
            skuIDs: v,
            isGift: K = !1,
            children: w,
            defaultPlanId: Y,
            purchaseType: k = y.PurchaseTypes.SUBSCRIPTION,
            applicationId: W,
            referralCode: V
        } = t, x = (0, O.default)(), Z = (0, S.useBlockedPaymentsConfig)(), J = (0, N.default)(), {
            paymentSources: Q,
            hasPaymentSources: X,
            paymentSourceId: j,
            setPaymentSourceId: z,
            hasFetchedPaymentSources: q
        } = (0, R.default)({
            isGift: K,
            activeSubscription: B
        }), $ = r.useRef(X), {
            hasFetchedSubscriptionPlans: tt,
            priceOptions: te,
            setCurrency: tn,
            currencyLoading: ti,
            currencies: tr
        } = (0, P.default)({
            activeSubscription: B,
            skuIDs: v,
            paymentSourceId: j,
            isGift: K
        }), tu = (0, m.default)(), [tl, ta] = r.useState(!1), {
            step: to,
            setStep: ts,
            steps: tc,
            breadcrumbsData: tS
        } = (0, F.default)({
            stepConfigs: b,
            breadcrumbs: H
        }), [td, tE] = (0, L.default)(to), {
            paymentError: tf,
            paymentAuthenticationState: t_
        } = (0, h.default)(), {
            purchaseError: tT,
            purchaseErrorBlockRef: tI,
            setPurchaseError: tA
        } = (0, U.default)(), tp = (0, l.useLazyValue)(() => {
            let t = null != T ? T : (0, a.v4)();
            return p.default.addBreadcrumb({
                message: "Checkout session ID: ".concat(t)
            }), {
                loadId: t,
                startTime: Date.now()
            }
        }), {
            selectedSkuId: tC,
            selectedPlan: tP,
            setSelectedSkuId: tN,
            setSelectedPlanId: tR
        } = (0, C.default)(), [th, tU] = (0, o.useStateFromStoresArray)([E.default], () => [E.default.purchaseTokenAuthState, E.default.purchaseTokenHash]), [tL, tm] = (0, o.useStateFromStoresArray)([g.default], () => [g.default.browserCheckoutState, g.default.loadId]), [tM, tF] = r.useState(null), [tO, tg] = r.useState(null), [ty, tG] = r.useState(null), [tD, tB] = r.useState(null), [tb, tH] = r.useState(null), [tv, tK] = r.useState(void 0), [tw, tY] = r.useState([]), tk = r.useMemo(() => null == tP || (0, A.isPremiumSubscriptionPlan)(tP.id), [tP]), tW = r.useRef(null != B ? B.planId : null);
        r.useEffect(() => {
            null == tW.current && null != B && (tW.current = B.planId)
        }, [B]);
        let {
            skusById: tV,
            hasFetchedSkus: tx,
            skuPricePreviewsById: tZ
        } = (0, M.default)({
            applicationId: null != W ? W : G.PREMIUM_SUBSCRIPTION_APPLICATION,
            skuIDs: v,
            currentPaymentSourceId: j,
            isGift: K
        }), tJ = r.useMemo(() => {
            if (null == tC) return null;
            let t = tZ[tC];
            if (null == t) return null;
            let e = null != j ? j : f.NO_PAYMENT_SOURCE;
            return t[e]
        }, [tC, tZ, j]), tQ = (0, d.useApplication)(W), tX = (0, I.hasFlag)(null !== (e = null == tQ ? void 0 : tQ.flags) && void 0 !== e ? e : 0, y.ApplicationFlags.EMBEDDED) && (0, I.hasFlag)(null !== (n = null == tQ ? void 0 : tQ.flags) && void 0 !== n ? n : 0, y.ApplicationFlags.EMBEDDED_IAP), tj = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(t => {
            let {
                applicationId: e
            } = t;
            return e === W
        })), tz = (0, c.default)(tj), tq = (0, o.useStateFromStores)([_.default], () => null != tC ? _.default.getForSKU(tC) : null, [tC]), t$ = tV[null != tC ? tC : ""];
        return (0, i.jsx)(D.Provider, {
            value: {
                stripe: x,
                contextMetadata: tp,
                blockedPayments: Z,
                activeSubscription: B,
                hasFetchedSubscriptions: J,
                hasFetchedSubscriptionPlans: tt,
                updatedSubscription: tD,
                setUpdatedSubscription: tB,
                subscriptionMetadataRequest: tb,
                setSubscriptionMetadataRequest: tH,
                hasFetchedPaymentSources: q,
                paymentSources: Q,
                hasPaymentSources: X,
                paymentSourceId: j,
                setPaymentSourceId: z,
                priceOptions: te,
                setCurrency: tn,
                currencyLoading: ti,
                currencies: tr,
                ...tu,
                hasAcceptedTerms: tl,
                setHasAcceptedTerms: ta,
                step: to,
                setStep: ts,
                steps: tc,
                stepConfigs: b,
                breadcrumbs: tS,
                purchaseState: td,
                setPurchaseState: tE,
                paymentAuthenticationState: t_,
                paymentError: tf,
                purchaseError: tT,
                setPurchaseError: tA,
                purchaseErrorBlockRef: tI,
                purchaseTokenAuthState: th,
                purchaseTokenHash: tU,
                browserCheckoutState: tL,
                browserCheckoutStateLoadId: tm,
                bodyNode: tM,
                setBodyNode: tF,
                footerNode: tO,
                setFooterNode: tg,
                modalOverlayNode: ty,
                setModalOverlayNode: tG,
                selectedSkuId: tC,
                selectedSku: t$,
                selectedStoreListing: tq,
                selectedPlan: tP,
                setSelectedSkuId: tN,
                setSelectedPlanId: tR,
                readySlideId: tv,
                setReadySlideId: tK,
                defaultPlanId: Y,
                isPremium: tk,
                startedPaymentFlowWithPaymentSourcesRef: $,
                startingPremiumSubscriptionPlanIdRef: tW,
                hasFetchedSkus: tx,
                skusById: tV,
                skuPricePreviewsById: tZ,
                selectedSkuPricePreview: tJ,
                application: tQ,
                purchaseType: k,
                isEmbeddedIAP: tX,
                activitySessionId: tz,
                entitlementsGranted: tw,
                setEntitlementsGranted: tY,
                referralCode: V
            },
            children: (0, i.jsx)(u.Elements, {
                options: y.StripeElementsOptions,
                stripe: x,
                children: w
            })
        })
    }
}
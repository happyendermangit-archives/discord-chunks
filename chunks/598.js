function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PaymentContext: function() {
            return b
        },
        PaymentContextProvider: function() {
            return k
        },
        useForwardedPaymentContext: function() {
            return w
        },
        usePaymentContext: function() {
            return G
        }
    }), n("47120"), n("789020");
    var i = n("735250"),
        r = n("470079"),
        s = n("452079"),
        a = n("207561"),
        o = n("153832"),
        l = n("442837"),
        u = n("317381"),
        d = n("964517"),
        _ = n("211242"),
        c = n("270144"),
        E = n("882712"),
        I = n("855775"),
        T = n("551428"),
        f = n("975104"),
        S = n("630388"),
        h = n("74538"),
        A = n("960048"),
        m = n("735521"),
        N = n("583046"),
        p = n("897829"),
        O = n("74179"),
        R = n("896246"),
        C = n("320317"),
        g = n("994427"),
        L = n("814076"),
        D = n("712297"),
        v = n("585686"),
        M = n("771206"),
        y = n("362755"),
        P = n("981631"),
        U = n("474936");
    let [b, G, w] = (0, f.default)();

    function k(e) {
        var t, n;
        let {
            loadId: f,
            activeSubscription: G,
            stepConfigs: w,
            breadcrumbs: k = [],
            skuIDs: B,
            isGift: F = !1,
            children: V,
            defaultPlanId: x,
            purchaseType: H = P.PurchaseTypes.SUBSCRIPTION,
            applicationId: Y,
            referralCode: j
        } = e, W = (0, M.default)(), K = (0, _.useBlockedPaymentsConfig)(), z = (0, p.default)(), {
            paymentSources: X,
            hasPaymentSources: Q,
            paymentSourceId: q,
            setPaymentSourceId: Z,
            hasFetchedPaymentSources: J
        } = (0, O.default)({
            isGift: F,
            activeSubscription: G
        }), $ = r.useRef(Q), {
            hasFetchedSubscriptionPlans: ee,
            priceOptions: et,
            setCurrency: en,
            currencyLoading: ei,
            currencies: er
        } = (0, N.default)({
            activeSubscription: G,
            skuIDs: B,
            paymentSourceId: q,
            isGift: F
        }), es = (0, L.default)(), [ea, eo] = r.useState(!1), {
            step: el,
            setStep: eu,
            steps: ed,
            breadcrumbsData: e_
        } = (0, v.default)({
            stepConfigs: w,
            breadcrumbs: k
        }), [ec, eE] = (0, g.default)(el), {
            paymentError: eI,
            paymentAuthenticationState: eT
        } = (0, R.default)(), {
            purchaseError: ef,
            purchaseErrorBlockRef: eS,
            setPurchaseError: eh
        } = (0, C.default)(), eA = (0, a.useLazyValue)(() => {
            let e = null != f ? f : (0, o.v4)();
            return A.default.addBreadcrumb({
                message: "Checkout session ID: ".concat(e)
            }), {
                loadId: e,
                startTime: Date.now()
            }
        }), {
            selectedSkuId: em,
            selectedPlan: eN,
            setSelectedSkuId: ep,
            setSelectedPlanId: eO
        } = (0, m.default)(), [eR, eC] = (0, l.useStateFromStoresArray)([E.default], () => [E.default.purchaseTokenAuthState, E.default.purchaseTokenHash]), [eg, eL] = (0, l.useStateFromStoresArray)([y.default], () => [y.default.browserCheckoutState, y.default.loadId]), [eD, ev] = r.useState(null), [eM, ey] = r.useState(null), [eP, eU] = r.useState(null), [eb, eG] = r.useState(null), [ew, ek] = r.useState(null), [eB, eF] = r.useState(void 0), [eV, ex] = r.useState([]), eH = r.useMemo(() => null == eN || (0, h.isPremiumSubscriptionPlan)(eN.id), [eN]), eY = r.useRef(null != G ? G.planId : null);
        r.useEffect(() => {
            null == eY.current && null != G && (eY.current = G.planId)
        }, [G]);
        let {
            skusById: ej,
            hasFetchedSkus: eW,
            skuPricePreviewsById: eK
        } = (0, D.default)({
            applicationId: null != Y ? Y : U.PREMIUM_SUBSCRIPTION_APPLICATION,
            skuIDs: B,
            currentPaymentSourceId: q,
            isGift: F
        }), ez = r.useMemo(() => {
            if (null == em) return null;
            let e = eK[em];
            return null == e ? null : e[null != q ? q : I.NO_PAYMENT_SOURCE]
        }, [em, eK, q]), eX = (0, c.useApplication)(Y), eQ = (0, S.hasFlag)(null !== (t = null == eX ? void 0 : eX.flags) && void 0 !== t ? t : 0, P.ApplicationFlags.EMBEDDED) && (0, S.hasFlag)(null !== (n = null == eX ? void 0 : eX.flags) && void 0 !== n ? n : 0, P.ApplicationFlags.EMBEDDED_IAP), eq = (0, l.useStateFromStores)([u.default], () => Array.from(u.default.getSelfEmbeddedActivities().values()).find(e => {
            let {
                applicationId: t
            } = e;
            return t === Y
        })), eZ = (0, d.default)(eq), eJ = (0, l.useStateFromStores)([T.default], () => null != em ? T.default.getForSKU(em) : null, [em]), e$ = ej[null != em ? em : ""], [e0, e1] = r.useState(null), [e2, e3] = r.useState(null);
        return (0, i.jsx)(b.Provider, {
            value: {
                stripe: W,
                contextMetadata: eA,
                blockedPayments: K,
                activeSubscription: G,
                hasFetchedSubscriptions: z,
                hasFetchedSubscriptionPlans: ee,
                updatedSubscription: eb,
                setUpdatedSubscription: eG,
                subscriptionMetadataRequest: ew,
                setSubscriptionMetadataRequest: ek,
                hasFetchedPaymentSources: J,
                paymentSources: X,
                hasPaymentSources: Q,
                paymentSourceId: q,
                setPaymentSourceId: Z,
                priceOptions: et,
                setCurrency: en,
                currencyLoading: ei,
                currencies: er,
                ...es,
                hasAcceptedTerms: ea,
                setHasAcceptedTerms: eo,
                step: el,
                setStep: eu,
                steps: ed,
                stepConfigs: w,
                breadcrumbs: e_,
                purchaseState: ec,
                setPurchaseState: eE,
                paymentAuthenticationState: eT,
                paymentError: eI,
                purchaseError: ef,
                setPurchaseError: eh,
                purchaseErrorBlockRef: eS,
                purchaseTokenAuthState: eR,
                purchaseTokenHash: eC,
                browserCheckoutState: eg,
                browserCheckoutStateLoadId: eL,
                bodyNode: eD,
                setBodyNode: ev,
                footerNode: eM,
                setFooterNode: ey,
                modalOverlayNode: eP,
                setModalOverlayNode: eU,
                selectedSkuId: em,
                selectedSku: e$,
                selectedStoreListing: eJ,
                selectedPlan: eN,
                setSelectedSkuId: ep,
                setSelectedPlanId: eO,
                readySlideId: eB,
                setReadySlideId: eF,
                defaultPlanId: x,
                isPremium: eH,
                startedPaymentFlowWithPaymentSourcesRef: $,
                startingPremiumSubscriptionPlanIdRef: eY,
                hasFetchedSkus: eW,
                skusById: ej,
                skuPricePreviewsById: eK,
                selectedSkuPricePreview: ez,
                application: eX,
                purchaseType: H,
                isEmbeddedIAP: eQ,
                activitySessionId: eZ,
                entitlementsGranted: eV,
                setEntitlementsGranted: ex,
                referralCode: j,
                invoicePreview: e0,
                setInvoicePreview: e1,
                setAnnualDiscountInvoicePreview: e3,
                annualDiscountInvoicePreview: e2
            },
            children: (0, i.jsx)(s.Elements, {
                options: P.StripeElementsOptions,
                stripe: W,
                children: V
            })
        })
    }
}
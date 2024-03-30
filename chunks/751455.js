function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PaymentContext: function() {
            return k
        },
        PaymentContextProvider: function() {
            return j
        },
        useForwardedPaymentContext: function() {
            return B
        },
        usePaymentContext: function() {
            return G
        }
    });
    var r = n("470079"),
        o = n("452079"),
        i = n("207561"),
        a = n("153832"),
        u = n("898511"),
        s = n("632142"),
        l = n("767770"),
        c = n("453367"),
        f = n("991142"),
        d = n("82012"),
        _ = n("485619"),
        E = n("608771"),
        p = n("343048"),
        m = n("947248"),
        y = n("830721"),
        I = n("285910"),
        h = n("143376"),
        O = n("878143"),
        T = n("160465"),
        S = n("836305"),
        v = n("918061"),
        g = n("71924"),
        A = n("358952"),
        b = n("583145"),
        N = n("812565"),
        R = n("221369"),
        C = n("663955"),
        P = n("186434"),
        D = n("281767"),
        L = n("868615");

    function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function U(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return M(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var w = U((0, p.default)(), 3),
        k = w[0],
        G = w[1],
        B = w[2];

    function j(e) {
        var t, n, p, M, w = e.loadId,
            G = e.activeSubscription,
            B = e.stepConfigs,
            j = e.breadcrumbs,
            F = e.skuIDs,
            V = e.isGift,
            H = void 0 !== V && V,
            x = e.children,
            Y = e.defaultPlanId,
            W = e.purchaseType,
            K = void 0 === W ? D.PurchaseTypes.SUBSCRIPTION : W,
            z = e.applicationId,
            X = e.referralCode,
            q = (0, C.default)(),
            Q = (0, c.useBlockedPaymentsConfig)(),
            J = (0, T.default)(),
            Z = (0, S.default)({
                isGift: H,
                activeSubscription: G
            }),
            $ = Z.paymentSources,
            ee = Z.hasPaymentSources,
            et = Z.paymentSourceId,
            en = Z.setPaymentSourceId,
            er = Z.hasFetchedPaymentSources,
            eo = r.useRef(ee),
            ei = (0, O.default)({
                activeSubscription: G,
                skuIDs: F,
                paymentSourceId: et,
                isGift: H
            }),
            ea = ei.hasFetchedSubscriptionPlans,
            eu = ei.priceOptions,
            es = ei.setCurrency,
            el = ei.currencyLoading,
            ec = ei.currencies,
            ef = (0, b.default)(),
            ed = U(r.useState(!1), 2),
            e_ = ed[0],
            eE = ed[1],
            ep = (0, R.default)({
                stepConfigs: B,
                breadcrumbs: void 0 === j ? [] : j
            }),
            em = ep.step,
            ey = ep.setStep,
            eI = ep.steps,
            eh = ep.breadcrumbsData,
            eO = U((0, A.default)(em), 2),
            eT = eO[0],
            eS = eO[1],
            ev = (0, v.default)(),
            eg = ev.paymentError,
            eA = ev.paymentAuthenticationState,
            eb = (0, g.default)(),
            eN = eb.purchaseError,
            eR = eb.purchaseErrorBlockRef,
            eC = eb.setPurchaseError,
            eP = (0, i.useLazyValue)(function() {
                var e = null != w ? w : (0, a.v4)();
                return I.default.addBreadcrumb({
                    message: "Checkout session ID: ".concat(e)
                }), {
                    loadId: e,
                    startTime: Date.now()
                }
            }),
            eD = (0, h.default)(),
            eL = eD.selectedSkuId,
            eM = eD.selectedPlan,
            eU = eD.setSelectedSkuId,
            ew = eD.setSelectedPlanId,
            ek = U((0, u.useStateFromStoresArray)([d.default], function() {
                return [d.default.purchaseTokenAuthState, d.default.purchaseTokenHash]
            }), 2),
            eG = ek[0],
            eB = ek[1],
            ej = U((0, u.useStateFromStoresArray)([P.default], function() {
                return [P.default.browserCheckoutState, P.default.loadId]
            }), 2),
            eF = ej[0],
            eV = ej[1],
            eH = U(r.useState(null), 2),
            ex = eH[0],
            eY = eH[1],
            eW = U(r.useState(null), 2),
            eK = eW[0],
            ez = eW[1],
            eX = U(r.useState(null), 2),
            eq = eX[0],
            eQ = eX[1],
            eJ = U(r.useState(null), 2),
            eZ = eJ[0],
            e$ = eJ[1],
            e0 = U(r.useState(null), 2),
            e1 = e0[0],
            e2 = e0[1],
            e3 = U(r.useState(void 0), 2),
            e4 = e3[0],
            e6 = e3[1],
            e8 = U(r.useState([]), 2),
            e7 = e8[0],
            e9 = e8[1],
            e5 = r.useMemo(function() {
                return null == eM || (0, y.isPremiumSubscriptionPlan)(eM.id)
            }, [eM]),
            te = r.useRef(null != G ? G.planId : null);
        r.useEffect(function() {
            null == te.current && null != G && (te.current = G.planId)
        }, [G]);
        var tt = (0, N.default)({
                applicationId: null != z ? z : L.PREMIUM_SUBSCRIPTION_APPLICATION,
                skuIDs: F,
                currentPaymentSourceId: et,
                isGift: H
            }),
            tn = tt.skusById,
            tr = tt.hasFetchedSkus,
            to = tt.skuPricePreviewsById,
            ti = r.useMemo(function() {
                if (null == eL) return null;
                var e = to[eL];
                return null == e ? null : e[null != et ? et : _.NO_PAYMENT_SOURCE]
            }, [eL, to, et]),
            ta = (0, f.useApplication)(z),
            tu = (0, m.hasFlag)(null !== (p = null == ta ? void 0 : ta.flags) && void 0 !== p ? p : 0, D.ApplicationFlags.EMBEDDED) && (0, m.hasFlag)(null !== (M = null == ta ? void 0 : ta.flags) && void 0 !== M ? M : 0, D.ApplicationFlags.EMBEDDED_IAP),
            ts = (0, u.useStateFromStores)([s.default], function() {
                return Array.from(s.default.getSelfEmbeddedActivities().values()).find(function(e) {
                    return e.applicationId === z
                })
            }),
            tl = (0, l.default)(ts),
            tc = (0, u.useStateFromStores)([E.default], function() {
                return null != eL ? E.default.getForSKU(eL) : null
            }, [eL]),
            tf = tn[null != eL ? eL : ""];
        return r.createElement(k.Provider, {
            value: (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({
                stripe: q,
                contextMetadata: eP,
                blockedPayments: Q,
                activeSubscription: G,
                hasFetchedSubscriptions: J,
                hasFetchedSubscriptionPlans: ea,
                updatedSubscription: eZ,
                setUpdatedSubscription: e$,
                subscriptionMetadataRequest: e1,
                setSubscriptionMetadataRequest: e2,
                hasFetchedPaymentSources: er,
                paymentSources: $,
                hasPaymentSources: ee,
                paymentSourceId: et,
                setPaymentSourceId: en,
                priceOptions: eu,
                setCurrency: es,
                currencyLoading: el,
                currencies: ec
            }, ef), n = (n = {
                hasAcceptedTerms: e_,
                setHasAcceptedTerms: eE,
                step: em,
                setStep: ey,
                steps: eI,
                stepConfigs: B,
                breadcrumbs: eh,
                purchaseState: eT,
                setPurchaseState: eS,
                paymentAuthenticationState: eA,
                paymentError: eg,
                purchaseError: eN,
                setPurchaseError: eC,
                purchaseErrorBlockRef: eR,
                purchaseTokenAuthState: eG,
                purchaseTokenHash: eB,
                browserCheckoutState: eF,
                browserCheckoutStateLoadId: eV,
                bodyNode: ex,
                setBodyNode: eY,
                footerNode: eK,
                setFooterNode: ez,
                modalOverlayNode: eq,
                setModalOverlayNode: eQ,
                selectedSkuId: eL,
                selectedSku: tf,
                selectedStoreListing: tc,
                selectedPlan: eM,
                setSelectedSkuId: eU,
                setSelectedPlanId: ew,
                readySlideId: e4,
                setReadySlideId: e6,
                defaultPlanId: Y,
                isPremium: e5,
                startedPaymentFlowWithPaymentSourcesRef: eo,
                startingPremiumSubscriptionPlanIdRef: te,
                hasFetchedSkus: tr,
                skusById: tn,
                skuPricePreviewsById: to,
                selectedSkuPricePreview: ti,
                application: ta,
                purchaseType: K,
                isEmbeddedIAP: tu,
                activitySessionId: tl,
                entitlementsGranted: e7,
                setEntitlementsGranted: e9,
                referralCode: X
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t)
        }, r.createElement(o.Elements, {
            options: D.StripeElementsOptions,
            stripe: q
        }, x))
    }
}
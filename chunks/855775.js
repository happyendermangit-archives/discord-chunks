function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        NO_PAYMENT_SOURCE: function() {
            return c
        }
    }), n("47120");
    var s, a, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("981631");
    let c = "no_payment_source",
        E = null,
        I = null,
        T = null,
        f = null,
        S = null,
        A = {},
        h = null,
        m = !1,
        N = null,
        O = !1,
        p = !1,
        R = !1,
        C = !1,
        g = null,
        L = new Set;

    function D(e) {
        null != i && null != h ? i(h) : null != r && r(e), i = null, r = null
    }
    class v extends(s = u.default.Store) {
        getPricesForSku(e) {
            return A[e]
        }
        isOpen() {
            let e = __OVERLAY__ ? _.AppContext.OVERLAY : _.AppContext.APP;
            return g === e && R
        }
        get isPurchasingSKU() {
            return m
        }
        get forceConfirmationStepOnMount() {
            return O
        }
        get error() {
            return N
        }
        get skuId() {
            return E
        }
        get applicationId() {
            return T
        }
        get analyticsLocation() {
            return f
        }
        get promotionId() {
            return S
        }
        get isIAP() {
            return p
        }
        get giftCode() {
            return I
        }
        get isGift() {
            return C
        }
        isFetchingSKU(e) {
            return L.has(e)
        }
    }
    l = "SKUPaymentModalStore", (o = "displayName") in(a = v) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new v(d.default, {
        SKU_PURCHASE_MODAL_OPEN: function(e) {
            D(), E = e.skuId, T = e.applicationId, p = e.isIAP, f = e.analyticsLocation, g = e.context, C = e.isGift, R = !0, O = !1, i = e.resolve, r = e.reject, N = null, h = null, S = e.promotionId
        },
        SKU_PURCHASE_MODAL_CLOSE: function(e) {
            let {
                error: t
            } = e;
            R = !1, g = null, D(t)
        },
        SKU_PURCHASE_PREVIEW_FETCH: function(e) {
            let {
                skuId: t
            } = e;
            L.add(t)
        },
        SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function(e) {
            let {
                skuId: t,
                paymentSourceId: n,
                price: i
            } = e;
            A = {
                ...A,
                [t]: {
                    ...A[t],
                    [null != n ? n : c]: i
                }
            }, L.delete(t)
        },
        SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function(e) {
            let {
                skuId: t
            } = e;
            L.delete(t)
        },
        SKU_PURCHASE_START: function() {
            m = !0
        },
        SKU_PURCHASE_SUCCESS: function(e) {
            let {
                entitlements: t,
                giftCode: n
            } = e;
            m = !1, h = t, I = n
        },
        SKU_PURCHASE_FAIL: function(e) {
            let {
                error: t
            } = e;
            m = !1, N = t
        },
        SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function() {
            O = !0
        },
        SKU_PURCHASE_CLEAR_ERROR: function() {
            N = null
        },
        SKU_PURCHASE_UPDATE_IS_GIFT: function(e) {
            C = e.isGift
        },
        OVERLAY_SET_INPUT_LOCKED: function(e) {
            let {
                locked: t
            } = e;
            if (!t || null == g) return !1;
            R = !1, g = null, D()
        },
        GIFT_CODE_CREATE: function(e) {
            let {
                giftCode: t
            } = e;
            if (0 !== t.uses || t.sku_id !== E) return !1;
            I = t.code
        }
    })
}
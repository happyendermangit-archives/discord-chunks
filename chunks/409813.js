function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        COLLAPSED_PAYMENT_BREADCRUMB_STEPS: function() {
            return c
        },
        Step: function() {
            return i
        },
        errorToStep: function() {
            return I
        },
        getLabelForStep: function() {
            return E
        },
        usePurchaseStateForStep: function() {
            return T
        }
    }), n("47120"), n("411104");
    var i, r, a = n("470079"),
        s = n("881052"),
        o = n("710845"),
        l = n("122289"),
        u = n("45572"),
        d = n("689938");
    let _ = new o.default("PaymentSteps");
    (r = i || (i = {})).PAYMENT_TYPE = "payment_type", r.CREDIT_CARD_INFORMATION = "credit_card_information", r.PAYPAL_INFORMATION = "paypal_information", r.VENMO_INFORMATION = "venmo_information", r.SOFORT_INFORMATION = "sofort_information", r.PRZELEWY24_INFORMATION = "przelewy24_information", r.EPS_INFORMATION = "eps_information", r.IDEAL_INFORMATION = "ideal_information", r.CASH_APP_INFORMATION = "cash_app_information", r.PAYMENT_REQUEST_INFORMATION = "payment_request_information", r.ADDRESS = "address", r.AWAITING_AUTHENTICATION = "awaiting_authentication", r.SKU_SELECT = "sku_select", r.PLAN_SELECT = "plan_select", r.PREMIUM_UPSELL = "premium_upsell", r.PREMIUM_GUILD_UPSELL = "premium_guild_upsell", r.REVIEW = "review", r.CONFIRM = "confirm", r.CLAIM_FREE_SKU = "claim_free_sku", r.SKU_PREVIEW = "sku_preview", r.LOADING_PAYMENT_SOURCES = "loading_payment_sources", r.SHOP = "shop", r.PROMOTION_INFO = "promotion_info", r.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth", r.BENEFITS = "benefits", r.WHAT_YOU_LOSE = "what_you_lose", r.ADD_PAYMENT_STEPS = "add_payment_steps", r.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout", r.GIFT_CUSTOMIZATION = "gift_customization";
    let c = new Set(["credit_card_information", "payment_request_information", "paypal_information", "venmo_information", "cash_app_information", "address", "claim_free_sku", "sku_preview", "premium_upsell", "sofort_information", "przelewy24_information"]);

    function E(e) {
        switch (e) {
            case "plan_select":
                return d.default.Messages.BILLING_STEP_SELECT_PLAN;
            case "payment_type":
            case "add_payment_steps":
                return d.default.Messages.BILLING_STEP_PAYMENT;
            case "awaiting_purchase_token_auth":
            case "review":
                return d.default.Messages.BILLING_STEP_REVIEW;
            case "shop":
                return d.default.Messages.BILLING_STEP_SHOP;
            case "payment_request_information":
                return d.default.Messages.BILLING_STEP_PAYMENT_INFO;
            case "credit_card_information":
                return d.default.Messages.PAYMENT_SOURCE_INFORMATION;
            case "address":
                return d.default.Messages.BILLING_ADDRESS;
            case "paypal_information":
                return d.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
            case "venmo_information":
                return d.default.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
            case "sofort_information":
                return d.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
            case "przelewy24_information":
                return d.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
            case "cash_app_information":
                return d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS;
            case "gift_customization":
                return d.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER
        }
        throw Error("Unexpected step: ".concat(e))
    }

    function I(e) {
        if (null != e) {
            if (!(e instanceof s.BillingError)) throw _.error(e), (0, l.captureBillingException)(e), Error("Unexpected error type");
            if (e.hasCardError()) return "credit_card_information";
            if (e.hasAddressError()) return "address"
        }
        return null
    }

    function T(e, t, n) {
        a.useEffect(() => {
            null != e && "review" !== e && t !== u.PurchaseState.WAITING && t !== u.PurchaseState.COMPLETED && n(u.PurchaseState.WAITING)
        }, [e, t, n])
    }
}
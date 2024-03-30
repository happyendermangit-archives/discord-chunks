function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        COLLAPSED_PAYMENT_BREADCRUMB_STEPS: function() {
            return d
        },
        Step: function() {
            return o
        },
        errorToStep: function() {
            return E
        },
        getLabelForStep: function() {
            return _
        },
        usePurchaseStateForStep: function() {
            return p
        }
    });
    var r, o, i = n("470079"),
        a = n("146591"),
        u = n("35523"),
        s = n("146703"),
        l = n("283497"),
        c = n("941504"),
        f = new u.default("PaymentSteps");
    (r = o || (o = {})).PAYMENT_TYPE = "payment_type", r.CREDIT_CARD_INFORMATION = "credit_card_information", r.PAYPAL_INFORMATION = "paypal_information", r.VENMO_INFORMATION = "venmo_information", r.SOFORT_INFORMATION = "sofort_information", r.PRZELEWY24_INFORMATION = "przelewy24_information", r.EPS_INFORMATION = "eps_information", r.IDEAL_INFORMATION = "ideal_information", r.CASH_APP_INFORMATION = "cash_app_information", r.PAYMENT_REQUEST_INFORMATION = "payment_request_information", r.ADDRESS = "address", r.AWAITING_AUTHENTICATION = "awaiting_authentication", r.SKU_SELECT = "sku_select", r.PLAN_SELECT = "plan_select", r.PREMIUM_UPSELL = "premium_upsell", r.PREMIUM_GUILD_UPSELL = "premium_guild_upsell", r.REVIEW = "review", r.CONFIRM = "confirm", r.CLAIM_FREE_SKU = "claim_free_sku", r.SKU_PREVIEW = "sku_preview", r.LOADING_PAYMENT_SOURCES = "loading_payment_sources", r.SHOP = "shop", r.PROMOTION_INFO = "promotion_info", r.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth", r.BENEFITS = "benefits", r.WHAT_YOU_LOSE = "what_you_lose", r.ADD_PAYMENT_STEPS = "add_payment_steps", r.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout", r.GIFT_CUSTOMIZATION = "gift_customization";
    var d = new Set(["credit_card_information", "payment_request_information", "paypal_information", "venmo_information", "cash_app_information", "address", "claim_free_sku", "sku_preview", "premium_upsell", "sofort_information", "przelewy24_information"]);

    function _(e) {
        switch (e) {
            case "plan_select":
                return c.default.Messages.BILLING_STEP_SELECT_PLAN;
            case "payment_type":
            case "add_payment_steps":
                return c.default.Messages.BILLING_STEP_PAYMENT;
            case "awaiting_purchase_token_auth":
            case "review":
                return c.default.Messages.BILLING_STEP_REVIEW;
            case "shop":
                return c.default.Messages.BILLING_STEP_SHOP;
            case "payment_request_information":
                return c.default.Messages.BILLING_STEP_PAYMENT_INFO;
            case "credit_card_information":
                return c.default.Messages.PAYMENT_SOURCE_INFORMATION;
            case "address":
                return c.default.Messages.BILLING_ADDRESS;
            case "paypal_information":
                return c.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
            case "venmo_information":
                return c.default.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
            case "sofort_information":
                return c.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
            case "przelewy24_information":
                return c.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
            case "cash_app_information":
                return c.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS;
            case "gift_customization":
                return c.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER
        }
        throw Error("Unexpected step: ".concat(e))
    }

    function E(e) {
        if (null != e) {
            var t, n;
            if (t = e, null != (n = a.BillingError) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !n[Symbol.hasInstance](t) : !(t instanceof n)) throw f.error(e), (0, s.captureBillingException)(e), Error("Unexpected error type");
            if (e.hasCardError()) return "credit_card_information";
            if (e.hasAddressError()) return "address"
        }
        return null
    }

    function p(e, t, n) {
        i.useEffect(function() {
            null != e && "review" !== e && t !== l.PurchaseState.WAITING && t !== l.PurchaseState.COMPLETED && n(l.PurchaseState.WAITING)
        }, [e, t, n])
    }
}
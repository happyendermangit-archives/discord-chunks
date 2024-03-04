function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ErrorCodes: function() {
            return i
        },
        parseV8BillingAddressSkemaErrorToBillingError: function() {
            return T
        },
        default: function() {
            return C
        }
    }), n("222007");
    var i, s, r, a, o, l, u, d, c = n("486196"),
        f = n("614247"),
        _ = n("821879"),
        h = n("333805"),
        E = n("782340");
    (o = i || (i = {}))[o.UNKNOWN = 0] = "UNKNOWN", o[o.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", o[o.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", o[o.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", o[o.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", o[o.INVALID_PLAN = 100005] = "INVALID_PLAN", o[o.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", o[o.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", o[o.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", o[o.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", o[o.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", o[o.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", o[o.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", o[o.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", o[o.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", o[o.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", o[o.CARD_DECLINED = 100054] = "CARD_DECLINED", o[o.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", o[o.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", o[o.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", o[o.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", o[o.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", o[o.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", o[o.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", o[o.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", o[o.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", o[o.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", o[o.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (l = s || (s = {})).CARD_NUMBER = "cardNumber", l.CARD_CVC = "cvc", l.CARD_EXPIRATION_DATE = "expirationDate", l.CARD_NAME = "name", l.ADDRESS_NAME = "name", l.ADDRESS_LINE_1 = "line1", l.ADDRESS_LINE_2 = "line2", l.ADDRESS_CITY = "city", l.ADDRESS_STATE = "state", l.ADDRESS_POSTAL_CODE = "postalCode", l.ADDRESS_COUNTRY = "country", (u = r || (r = {})).ADDRESS_LINE_1 = "address_line1", u.ADDRESS_LINE_2 = "address_line2", u.ADDRESS_CITY = "address_city", u.ADDRESS_STATE = "address_state", u.ADDRESS_ZIP = "address_zip", u.ADDRESS_COUNTRY = "address_country", u.CARD_NUMBER = "number", u.CARD_EXPIRATION_DATE = "exp", u.CARD_EXPIRATION_MONTH = "exp_month", u.CARD_EXPIRATION_YEAR = "exp_year";
    let g = Object.freeze({
            address_line1: "line1",
            address_line2: "line2",
            address_city: "city",
            address_state: "state",
            address_zip: "postalCode",
            address_country: "country",
            number: "cardNumber",
            exp: "expirationDate",
            exp_month: "expirationDate",
            exp_year: "expirationDate"
        }),
        m = Object.freeze({
            line_1: "line1",
            line_2: "line2",
            postal_code: "postalCode"
        });
    (d = a || (a = {})).CARD = "card", d.ADDRESS = "address";
    let p = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
        S = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
        v = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

    function T(e) {
        var t, n, i, s, r;
        if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === c.INVALID_FORM_BODY_ERROR_CODE) {
            if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : null === (i = s.errors) || void 0 === i ? void 0 : i.billing_address) != null) {
                for (let t in e.body.errors.billing_address) {
                    let n = e.body.errors.billing_address[t];
                    delete e.body.errors.billing_address[t], e.body.errors[t] = n
                }
                delete e.body.errors.billing_address
            }(null === (r = e.body) || void 0 === r ? void 0 : r.errors) != null && (e.body = (0, f.default)(e.body.errors))
        }
        return new I(e)
    }
    class I extends h.default {
        _isInFieldSet(e) {
            for (let t in this.fields)
                if (e.has(t)) return !0
        }
        hasCardError() {
            return 2 === (0, _.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(S) : this._isInFieldSet(p)
        }
        hasAddressError() {
            return this._isInFieldSet(v)
        }
        constructor(e, t) {
            for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = E.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = E.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = E.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = E.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = E.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = E.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = E.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = E.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                let e = g[n] || m[n];
                if (null != e) {
                    let t = this.fields[n];
                    delete this.fields[n], this.fields[e] = t
                }
            }
            null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
        }
    }
    I.ErrorCodes = i, I.Fields = s, I.Sections = a, I.CARD_ERRORS = p, I.ADDRESS_ERRORS = v;
    var C = I
}
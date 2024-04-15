function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ErrorCodes: function() {
            return i
        },
        parseV8BillingAddressSkemaErrorToBillingError: function() {
            return N
        }
    }), n("47120");
    var i, r, s, a, o, l, u, d, _ = n("544891"),
        c = n("812169"),
        E = n("34756"),
        I = n("689938");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(o = i || (i = {}))[o.UNKNOWN = 0] = "UNKNOWN", o[o.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", o[o.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", o[o.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", o[o.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", o[o.INVALID_PLAN = 100005] = "INVALID_PLAN", o[o.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", o[o.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", o[o.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", o[o.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", o[o.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", o[o.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", o[o.DUPLICATE_PURCHASE_ATTEMPT = 100012] = "DUPLICATE_PURCHASE_ATTEMPT", o[o.BILLING_PURCHASE_REQUEST_INVALID = 100017] = "BILLING_PURCHASE_REQUEST_INVALID", o[o.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", o[o.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", o[o.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", o[o.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", o[o.CARD_DECLINED = 100054] = "CARD_DECLINED", o[o.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", o[o.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", o[o.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", o[o.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", o[o.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", o[o.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", o[o.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", o[o.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", o[o.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", o[o.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", o[o.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", o[o.BILLING_CANNOT_CHARGE_ZERO_AMOUNT = 100084] = "BILLING_CANNOT_CHARGE_ZERO_AMOUNT", (l = r || (r = {})).CARD_NUMBER = "cardNumber", l.CARD_CVC = "cvc", l.CARD_EXPIRATION_DATE = "expirationDate", l.CARD_NAME = "name", l.ADDRESS_NAME = "name", l.ADDRESS_LINE_1 = "line1", l.ADDRESS_LINE_2 = "line2", l.ADDRESS_CITY = "city", l.ADDRESS_STATE = "state", l.ADDRESS_POSTAL_CODE = "postalCode", l.ADDRESS_COUNTRY = "country", (u = s || (s = {})).ADDRESS_LINE_1 = "address_line1", u.ADDRESS_LINE_2 = "address_line2", u.ADDRESS_CITY = "address_city", u.ADDRESS_STATE = "address_state", u.ADDRESS_ZIP = "address_zip", u.ADDRESS_COUNTRY = "address_country", u.CARD_NUMBER = "number", u.CARD_EXPIRATION_DATE = "exp", u.CARD_EXPIRATION_MONTH = "exp_month", u.CARD_EXPIRATION_YEAR = "exp_year";
    let f = Object.freeze({
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
        S = Object.freeze({
            line_1: "line1",
            line_2: "line2",
            postal_code: "postalCode"
        });
    (d = a || (a = {})).CARD = "card", d.ADDRESS = "address";
    let h = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
        A = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
        m = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

    function N(e) {
        var t, n, i, r, s;
        if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === _.INVALID_FORM_BODY_ERROR_CODE) {
            if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : null === (i = r.errors) || void 0 === i ? void 0 : i.billing_address) != null) {
                for (let t in e.body.errors.billing_address) {
                    let n = e.body.errors.billing_address[t];
                    delete e.body.errors.billing_address[t], e.body.errors[t] = n
                }
                delete e.body.errors.billing_address
            }(null === (s = e.body) || void 0 === s ? void 0 : s.errors) != null && (e.body = (0, _.convertSkemaError)(e.body.errors))
        }
        return new p(e)
    }
    class p extends E.default {
        _isInFieldSet(e) {
            for (let t in this.fields)
                if (e.has(t)) return !0
        }
        hasCardError() {
            return 2 === (0, c.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(A) : this._isInFieldSet(h)
        }
        hasAddressError() {
            return this._isInFieldSet(m)
        }
        constructor(e, t) {
            for (let n in super(e, t), T(this, "paymentId", null), 100027 === this.code ? this.message = I.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = I.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = I.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = I.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = I.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = I.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = I.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = I.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                let e = f[n] || S[n];
                if (null != e) {
                    let t = this.fields[n];
                    delete this.fields[n], this.fields[e] = t
                }
            }
            null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
        }
    }
    T(p, "ErrorCodes", i), T(p, "Fields", r), T(p, "Sections", a), T(p, "CARD_ERRORS", h), T(p, "ADDRESS_ERRORS", m), t.default = p
}
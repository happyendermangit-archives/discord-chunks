function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ErrorCodes: function() {
            return u
        },
        parseV8BillingAddressSkemaErrorToBillingError: function() {
            return b
        }
    });
    var r, o, i, a, u, s, l, c, f, d = n("967888"),
        _ = n("225906"),
        E = n("445515"),
        p = n("941504");

    function m(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = u || (u = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", r[r.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", r[r.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", r[r.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", r[r.INVALID_PLAN = 100005] = "INVALID_PLAN", r[r.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", r[r.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", r[r.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", r[r.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", r[r.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", r[r.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", r[r.DUPLICATE_PURCHASE_ATTEMPT = 100012] = "DUPLICATE_PURCHASE_ATTEMPT", r[r.BILLING_PURCHASE_REQUEST_INVALID = 100017] = "BILLING_PURCHASE_REQUEST_INVALID", r[r.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", r[r.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", r[r.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", r[r.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", r[r.CARD_DECLINED = 100054] = "CARD_DECLINED", r[r.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", r[r.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", r[r.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", r[r.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", r[r.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", r[r.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", r[r.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", r[r.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", r[r.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", r[r.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", r[r.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", r[r.BILLING_CANNOT_CHARGE_ZERO_AMOUNT = 100084] = "BILLING_CANNOT_CHARGE_ZERO_AMOUNT", (o = s || (s = {})).CARD_NUMBER = "cardNumber", o.CARD_CVC = "cvc", o.CARD_EXPIRATION_DATE = "expirationDate", o.CARD_NAME = "name", o.ADDRESS_NAME = "name", o.ADDRESS_LINE_1 = "line1", o.ADDRESS_LINE_2 = "line2", o.ADDRESS_CITY = "city", o.ADDRESS_STATE = "state", o.ADDRESS_POSTAL_CODE = "postalCode", o.ADDRESS_COUNTRY = "country", (i = l || (l = {})).ADDRESS_LINE_1 = "address_line1", i.ADDRESS_LINE_2 = "address_line2", i.ADDRESS_CITY = "address_city", i.ADDRESS_STATE = "address_state", i.ADDRESS_ZIP = "address_zip", i.ADDRESS_COUNTRY = "address_country", i.CARD_NUMBER = "number", i.CARD_EXPIRATION_DATE = "exp", i.CARD_EXPIRATION_MONTH = "exp_month", i.CARD_EXPIRATION_YEAR = "exp_year";
    var T = Object.freeze((I(c = {}, "address_line1", "line1"), I(c, "address_line2", "line2"), I(c, "address_city", "city"), I(c, "address_state", "state"), I(c, "address_zip", "postalCode"), I(c, "address_country", "country"), I(c, "number", "cardNumber"), I(c, "exp", "expirationDate"), I(c, "exp_month", "expirationDate"), I(c, "exp_year", "expirationDate"), c)),
        S = Object.freeze({
            line_1: "line1",
            line_2: "line2",
            postal_code: "postalCode"
        });
    (a = f || (f = {})).CARD = "card", a.ADDRESS = "address";
    var v = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
        g = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
        A = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

    function b(e) {
        if ("string" != typeof e && (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.code) === d.INVALID_FORM_BODY_ERROR_CODE) {
            if (!Array.isArray(null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.errors) && (null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : null === (o = i.errors) || void 0 === o ? void 0 : o.billing_address) != null) {
                for (var t in e.body.errors.billing_address) {
                    var n, r, o, i, a, u = e.body.errors.billing_address[t];
                    delete e.body.errors.billing_address[t], e.body.errors[t] = u
                }
                delete e.body.errors.billing_address
            }(null === (a = e.body) || void 0 === a ? void 0 : a.errors) != null && (e.body = (0, d.convertSkemaError)(e.body.errors))
        }
        return new N(e)
    }
    var N = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : m(e)
        });

        function u(e, t) {
            for (var n in ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), I(m(r = a.call(this, e, t)), "paymentId", null), 100027 === r.code ? r.message = p.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === r.code ? r.message = p.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === r.code ? r.message = p.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === r.code ? r.message = p.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === r.code ? r.message = p.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === r.status ? r.message = p.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === r.code ? r.message = p.default.Messages.BILLING_ERROR_GENERIC : 400 === r.status && null != r.fields.captcha_key && (r.message = p.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), r.fields) {
                var r, o = T[n] || S[n];
                if (null != o) {
                    var i = r.fields[n];
                    delete r.fields[n], r.fields[o] = i
                }
            }
            return null != e.body && "string" == typeof e.body.payment_id && (r.paymentId = e.body.payment_id), r
        }
        return r = u, o = [{
            key: "_isInFieldSet",
            value: function(e) {
                for (var t in this.fields)
                    if (e.has(t)) return !0
            }
        }, {
            key: "hasCardError",
            value: function() {
                return 2 === (0, _.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(g) : this._isInFieldSet(v)
            }
        }, {
            key: "hasAddressError",
            value: function() {
                return this._isInFieldSet(A)
            }
        }], y(r.prototype, o), i && y(r, i), u
    }(E.default);
    I(N, "ErrorCodes", u), I(N, "Fields", s), I(N, "Sections", f), I(N, "CARD_ERRORS", v), I(N, "ADDRESS_ERRORS", A), t.default = N
}
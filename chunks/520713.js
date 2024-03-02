function(e, t, n) {
    "use strict";
    let r;
    n.r(t), n.d(t, {
        validateExpiry: function() {
            return d
        },
        getStripe: function() {
            return E
        },
        parseStripePaymentMethod: function() {
            return _
        },
        authenticatePaymentIntentForPaymentId: function() {
            return c
        }
    }), n("222007");
    var i, l, u = n("60979"),
        a = n("872717"),
        o = n("49111");
    (l = i || (i = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", l.REQUIRES_CONFIRMATION = "requires_confirmation", l.REQUIRES_ACTION = "requires_action", l.PROCESSING = "processing", l.CANCELED = "canceled", l.SUCCEEDED = "succeeded";
    let s = e => {
            let t = t => "You passed an invalid expiration date ".concat(e) + "".concat(null != t ? t : "") + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`",
                n = e.split(/[.\-/\s]+/g);
            2 !== n.length && t();
            let r = n.map(e => {
                    let r = parseInt(e);
                    return isNaN(r) && t("".concat(n, " is not a number.")), r < 1 && t("".concat(r, " is less than one.")), r
                }),
                [i, l] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
            return i > 12 && t("Month must be a number 1-12, not ".concat(i, ".")), l < 100 && (l += 2e3), [i, l]
        },
        d = e => {
            let t, n;
            try {
                [t, n] = s(e)
            } catch (e) {
                return !1
            }
            let r = new Date(n, t),
                i = new Date;
            return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i
        };

    function E() {
        return null != r ? Promise.resolve(r) : (0, u.loadStripe)(o.PaymentSettings.STRIPE.KEY).then(e => (r = e, e))
    }

    function _(e) {
        var t, n, r, i, l, u, a, o;
        let {
            billing_details: s
        } = e, d = null !== (t = s.address) && void 0 !== t ? t : {}, E = {
            name: null !== (n = s.name) && void 0 !== n ? n : "",
            line1: null !== (r = d.line1) && void 0 !== r ? r : "",
            line2: null !== (i = d.line2) && void 0 !== i ? i : "",
            city: null !== (l = d.city) && void 0 !== l ? l : "",
            state: null !== (u = d.state) && void 0 !== u ? u : "",
            country: null !== (a = d.country) && void 0 !== a ? a : "",
            postalCode: null !== (o = d.postal_code) && void 0 !== o ? o : ""
        };
        return {
            token: e.id,
            billingAddressInfo: E
        }
    }
    async function c(e) {
        try {
            let t = await a.default.get({
                    url: o.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                    oldFormErrors: !0
                }),
                {
                    stripe_payment_intent_client_secret: n
                } = t.body,
                r = await E();
            if (null == r) return {
                error: "unable to load stripe"
            };
            let {
                error: i,
                paymentIntent: l
            } = await r.retrievePaymentIntent(n);
            if (null != i) return {
                error: i.message
            };
            if (null == l) return {
                error: "payment intent does not exist"
            };
            let u = {};
            switch ("requires_payment_method" === l.status && null != l.last_payment_error && null != l.last_payment_error.payment_method && (u.payment_method = l.last_payment_error.payment_method.id), l.status) {
                case "requires_payment_method":
                case "requires_confirmation":
                case "requires_action":
                    let {
                        error: s
                    } = await r.confirmCardPayment(n, u);
                    if (null != s) return {
                        error: s.message
                    };
                    return {};
                case "succeeded":
                case "processing":
                    return {};
                default:
                    return {
                        error: "Invalid Payment Intent status: ".concat(l.status)
                    }
            }
        } catch (e) {
            return {
                error: e.message
            }
        }
    }
}
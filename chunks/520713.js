function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        validateExpiry: function() {
            return d
        },
        getStripe: function() {
            return c
        },
        parseStripePaymentMethod: function() {
            return _
        },
        authenticatePaymentIntentForPaymentId: function() {
            return f
        }
    }), n("222007");
    var s, r, a = n("60979"),
        o = n("872717"),
        l = n("49111");
    (r = s || (s = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", r.REQUIRES_CONFIRMATION = "requires_confirmation", r.REQUIRES_ACTION = "requires_action", r.PROCESSING = "processing", r.CANCELED = "canceled", r.SUCCEEDED = "succeeded";
    let u = e => {
            let t = t => "You passed an invalid expiration date ".concat(e) + "".concat(null != t ? t : "") + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`",
                n = e.split(/[.\-/\s]+/g);
            2 !== n.length && t();
            let i = n.map(e => {
                    let i = parseInt(e);
                    return isNaN(i) && t("".concat(n, " is not a number.")), i < 1 && t("".concat(i, " is less than one.")), i
                }),
                [s, r] = i[0] > 12 ? [i[1], i[0]] : [i[0], i[1]];
            return s > 12 && t("Month must be a number 1-12, not ".concat(s, ".")), r < 100 && (r += 2e3), [s, r]
        },
        d = e => {
            let t, n;
            try {
                [t, n] = u(e)
            } catch (e) {
                return !1
            }
            let i = new Date(n, t),
                s = new Date;
            return i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > s
        };

    function c() {
        return null != i ? Promise.resolve(i) : (0, a.loadStripe)(l.PaymentSettings.STRIPE.KEY).then(e => (i = e, e))
    }

    function _(e) {
        var t, n, i, s, r, a, o, l;
        let {
            billing_details: u
        } = e, d = null !== (t = u.address) && void 0 !== t ? t : {}, c = {
            name: null !== (n = u.name) && void 0 !== n ? n : "",
            line1: null !== (i = d.line1) && void 0 !== i ? i : "",
            line2: null !== (s = d.line2) && void 0 !== s ? s : "",
            city: null !== (r = d.city) && void 0 !== r ? r : "",
            state: null !== (a = d.state) && void 0 !== a ? a : "",
            country: null !== (o = d.country) && void 0 !== o ? o : "",
            postalCode: null !== (l = d.postal_code) && void 0 !== l ? l : ""
        };
        return {
            token: e.id,
            billingAddressInfo: c
        }
    }
    async function f(e) {
        try {
            let t = await o.HTTP.get({
                    url: l.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                    oldFormErrors: !0
                }),
                {
                    stripe_payment_intent_client_secret: n
                } = t.body,
                i = await c();
            if (null == i) return {
                error: "unable to load stripe"
            };
            let {
                error: s,
                paymentIntent: r
            } = await i.retrievePaymentIntent(n);
            if (null != s) return {
                error: s.message
            };
            if (null == r) return {
                error: "payment intent does not exist"
            };
            let a = {};
            switch ("requires_payment_method" === r.status && null != r.last_payment_error && null != r.last_payment_error.payment_method && (a.payment_method = r.last_payment_error.payment_method.id), r.status) {
                case "requires_payment_method":
                case "requires_confirmation":
                case "requires_action":
                    let {
                        error: u
                    } = await i.confirmCardPayment(n, a);
                    if (null != u) return {
                        error: u.message
                    };
                    return {};
                case "succeeded":
                case "processing":
                    return {};
                default:
                    return {
                        error: "Invalid Payment Intent status: ".concat(r.status)
                    }
            }
        } catch (e) {
            return {
                error: e.message
            }
        }
    }
}
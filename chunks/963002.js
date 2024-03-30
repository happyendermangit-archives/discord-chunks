function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("679064"),
        c = n("382966"),
        f = n("402223"),
        d = n("146703"),
        _ = n("537135"),
        E = n("281767"),
        p = n("941504");

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = !1,
        T = null,
        S = null;

    function v() {
        O = !1, S = null
    }

    function g(e) {
        var t = e.error,
            n = t.code,
            r = t.paymentId;
        if (n !== f.default.ErrorCodes.AUTHENTICATION_REQUIRED) return O = !1, !1;
        !O && (O = !0, T = r, function(e) {
            A.apply(this, arguments)
        }(r))
    }

    function A() {
        var e;
        return e = function(e) {
            var t, n;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (null == e) return [2];
                        return [4, (0, _.authenticatePaymentIntentForPaymentId)(e)];
                    case 1:
                        return null != (t = r.sent().error) && (s.default.dispatch({
                            type: "PAYMENT_AUTHENTICATION_ERROR",
                            error: new f.default(p.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
                        }), n = Error(t), (0, d.captureBillingException)(n, {
                            extra: {
                                authenticationError: t
                            }
                        })), [2]
                }
            })
        }, (A = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    m(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    m(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function b(e) {
        var t = e.payment;
        if (!O || t.id !== T || ![E.PaymentStatusTypes.COMPLETED, E.PaymentStatusTypes.CANCELED].includes(t.status)) return !1;
        O = !1, S = null, T = null, s.default.wait(l.clearError), s.default.wait(c.clearPurchaseError)
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
            }), t && h(e, t)
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
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "isAwaitingAuthentication",
            get: function() {
                return O
            }
        }, {
            key: "error",
            get: function() {
                return S
            }
        }, {
            key: "awaitingPaymentId",
            get: function() {
                return T
            }
        }], y(r.prototype, o), i && y(r, i), u
    }(u.default.Store);
    i = "PaymentAuthenticationStore", (o = "displayName") in(r = N) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new N(s.default, {
        BILLING_SUBSCRIPTION_UPDATE_START: v,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: v,
        PREMIUM_PAYMENT_ERROR_CLEAR: v,
        PREMIUM_PAYMENT_MODAL_CLOSE: v,
        PREMIUM_PAYMENT_MODAL_OPEN: v,
        PREMIUM_PAYMENT_SUBSCRIBE_START: v,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: v,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: v,
        SKU_PURCHASE_MODAL_CLOSE: v,
        SKU_PURCHASE_MODAL_OPEN: v,
        SKU_PURCHASE_START: v,
        SKU_PURCHASE_SUCCESS: v,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: g,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: g,
        PREMIUM_PAYMENT_UPDATE_FAIL: g,
        SKU_PURCHASE_FAIL: g,
        GIFT_CODE_REDEEM_FAILURE: g,
        PAYMENT_AUTHENTICATION_ERROR: function(e) {
            S = e.error, O = !1
        },
        PAYMENT_UPDATE: b,
        BILLING_PAYMENT_FETCH_SUCCESS: b
    })
}
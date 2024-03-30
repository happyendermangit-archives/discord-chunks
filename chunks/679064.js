function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        changePaymentSource: function() {
            return O
        },
        changeSubscriptionCurrency: function() {
            return I
        },
        clearError: function() {
            return S
        },
        resubscribe: function() {
            return E
        },
        resume: function() {
            return m
        },
        subscribe: function() {
            return d
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("629815"),
        a = n("830721"),
        u = n("950175"),
        s = n("281767");

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function c(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    l(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    l(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function f(e, t) {
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
    }

    function d(e) {
        return _.apply(this, arguments)
    }

    function _() {
        return (_ = c(function(e) {
            var t, n, r, o, a, s, l, c, d, _;
            return f(this, function(f) {
                switch (f.label) {
                    case 0:
                        t = e.planId, n = e.currency, r = e.paymentSource, o = e.trialId, a = e.code, s = e.metadata, l = e.referralCode, c = e.loadId, i.default.dispatch({
                            type: "PREMIUM_PAYMENT_SUBSCRIBE_START"
                        }), f.label = 1;
                    case 1:
                        return f.trys.push([1, 3, , 4]), [4, u.createSubscription({
                            items: [{
                                planId: t,
                                quantity: 1
                            }],
                            paymentSource: r,
                            trialId: o,
                            code: a,
                            currency: n,
                            metadata: s,
                            referralCode: l,
                            loadId: c
                        })];
                    case 2:
                        return null != (d = f.sent()).subscription && i.default.dispatch({
                            type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                            subscription: d.subscription
                        }), [2, d];
                    case 3:
                        throw _ = f.sent(), i.default.dispatch({
                            type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
                            error: _
                        }), _;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function E(e, t, n, r, o, i) {
        return p.apply(this, arguments)
    }

    function p() {
        return (p = c(function(e, t, n, r, l, c) {
            var d, _, E;
            return f(this, function(f) {
                switch (f.label) {
                    case 0:
                        return f.trys.push([0, 2, , 3]), d = (0, a.getPremiumPlanItem)(e), o()(d, "Expected existing premium plan"), _ = (0, a.getItemsWithUpsertedPremiumPlanId)(e, d.planId), [4, u.updateSubscription(e, {
                            status: s.SubscriptionStatusTypes.ACTIVE,
                            paymentSource: r,
                            items: _,
                            currency: n
                        }, t, l, c)];
                    case 1:
                        return f.sent(), i.default.dispatch({
                            type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
                        }), [3, 3];
                    case 2:
                        throw E = f.sent(), i.default.dispatch({
                            type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                            error: E
                        }), E;
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function m(e, t, n) {
        return y.apply(this, arguments)
    }

    function y() {
        return (y = c(function(e, t, n) {
            return f(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), [4, u.updateSubscription(e, {
                            status: s.SubscriptionStatusTypes.ACTIVE
                        }, t, n)];
                    case 1:
                        return r.sent(), [3, 3];
                    case 2:
                        throw r.sent();
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function I(e, t, n, r) {
        return h.apply(this, arguments)
    }

    function h() {
        return (h = c(function(e, t, n, r) {
            var o;
            return f(this, function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 2, , 3]), [4, u.changeSubscriptionCurrency(e, t, n, r)];
                    case 1:
                        return a.sent(), i.default.dispatch({
                            type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
                        }), [3, 3];
                    case 2:
                        throw o = a.sent(), i.default.dispatch({
                            type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                            error: o
                        }), o;
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function O(e, t, n, r, o) {
        return T.apply(this, arguments)
    }

    function T() {
        return (T = c(function(e, t, n, r, o) {
            var a;
            return f(this, function(s) {
                switch (s.label) {
                    case 0:
                        return s.trys.push([0, 2, , 3]), [4, u.changePaymentSource(e, t, n, r, o)];
                    case 1:
                        return s.sent(), i.default.dispatch({
                            type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
                        }), [3, 3];
                    case 2:
                        throw a = s.sent(), i.default.dispatch({
                            type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                            error: a
                        }), a;
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function S() {
        i.default.dispatch({
            type: "PREMIUM_PAYMENT_ERROR_CLEAR"
        })
    }
}
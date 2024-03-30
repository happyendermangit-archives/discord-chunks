function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getItemUnitPriceWithDiscount: function() {
            return D
        },
        updateSubscriptionInvoicePreview: function() {
            return v
        },
        useGetSubscriptionInvoice: function() {
            return P
        },
        useOneTimePurchaseInvoicePreview: function() {
            return R
        },
        useSubscriptionInvoicePreview: function() {
            return C
        }
    });
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o),
        a = n("898511"),
        u = n("967888"),
        s = n("146591"),
        l = n("313498"),
        c = n("428920"),
        f = n("830721"),
        d = n("329903"),
        _ = n("281767");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function I(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function h(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function O(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function T(e, t) {
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

    function S() {
        return (S = m(function(e) {
            var t, n, r, o, i, a, c, d, E, p, m, O;
            return T(this, function(T) {
                switch (T.label) {
                    case 0:
                        t = e.items, n = e.paymentSourceId, r = e.trialId, o = e.code, a = void 0 !== (i = e.applyEntitlements) && i, c = e.currency, d = e.renewal, E = e.metadata, p = {
                            items: (t = (0, f.coerceExistingItemsToNewItemInterval)(t)).map(function(e) {
                                var t = e.planId;
                                return I(y({}, h(e, ["planId"])), {
                                    plan_id: t
                                })
                            }),
                            payment_source_id: n,
                            trial_id: r,
                            code: o,
                            apply_entitlements: a,
                            currency: c,
                            renewal: d,
                            metadata: E
                        }, T.label = 1;
                    case 1:
                        return T.trys.push([1, 3, , 4]), [4, u.HTTP.post({
                            url: _.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                            body: p,
                            oldFormErrors: !0
                        })];
                    case 2:
                        return m = T.sent(), [2, l.default.createInvoiceFromServer(m.body)];
                    case 3:
                        throw O = T.sent(), new s.BillingError(O);
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function v(e) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = m(function(e) {
            var t, n, r, o, i, a, c, d, E, p, m, O, S;
            return T(this, function(T) {
                switch (T.label) {
                    case 0:
                        t = e.subscriptionId, n = e.items, r = e.paymentSourceId, o = e.renewal, i = e.currency, c = void 0 !== (a = e.applyEntitlements) && a, d = e.analyticsLocations, E = e.analyticsLocation, p = e.userDiscountOfferId, null != n && (n = (0, f.coerceExistingItemsToNewItemInterval)(n)), m = {
                            items: null == n ? void 0 : n.map(function(e) {
                                var t = e.planId;
                                return I(y({}, h(e, ["planId"])), {
                                    plan_id: t
                                })
                            }),
                            payment_source_id: r,
                            renewal: o,
                            apply_entitlements: c,
                            currency: i,
                            user_discount_offer_id: p
                        }, T.label = 1;
                    case 1:
                        return T.trys.push([1, 3, , 4]), [4, u.HTTP.patch({
                            url: _.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                            query: {
                                location: E,
                                location_stack: d
                            },
                            body: m,
                            oldFormErrors: !0
                        })];
                    case 2:
                        return O = T.sent(), [2, l.default.createInvoiceFromServer(O.body)];
                    case 3:
                        throw S = T.sent(), new s.BillingError(S);
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function A() {
        return (A = m(function(e) {
            var t, n, r, o, a, u;
            return T(this, function(c) {
                switch (c.label) {
                    case 0:
                        t = e.paymentSourceId, n = e.skuId, r = e.subscriptionPlanId, i()(n, "SKU ID is missing for one time purchase gift invoice preview"), o = {
                            gift: !0,
                            payment_source_id: t,
                            sku_subscription_plan_id: r
                        }, c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]), [4, (0, d.httpGetWithCountryCodeQuery)({
                            url: _.Endpoints.STORE_SKU_PURCHASE(n),
                            query: o,
                            oldFormErrors: !0
                        })];
                    case 2:
                        return a = c.sent(), [2, l.default.createInvoiceFromServer(a.body)];
                    case 3:
                        throw u = c.sent(), new s.BillingError(u);
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function b() {
        return (b = m(function(e) {
            var t, n;
            return T(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (t = e.subscriptionId, e.preventFetch) return [2, null];
                        return [4, u.HTTP.get({
                            url: _.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return n = r.sent(), [2, l.default.createInvoiceFromServer(n.body)]
                }
            })
        })).apply(this, arguments)
    }

    function N(e, t) {
        var n = e.preventFetch,
            o = void 0 !== n && n,
            i = O((0, r.useState)(null), 2),
            u = i[0],
            s = i[1],
            l = O((0, r.useState)(null), 2),
            f = l[0],
            d = l[1],
            _ = (0, a.useStateFromStores)([c.default], function() {
                return c.default.getSubscriptions()
            });
        return (0, r.useEffect)(function() {
            var e = !1;

            function n() {
                return (n = m(function() {
                    var n, r;
                    return T(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), d(null), s(null), [4, t()];
                            case 1:
                                return n = o.sent(), !e && s(n), [3, 3];
                            case 2:
                                return r = o.sent(), !e && d(r), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
            return !o && ! function() {
                    n.apply(this, arguments)
                }(),
                function() {
                    e = !0
                }
        }, [o, t, _]), [u, f]
    }

    function R(e) {
        var t = (0, r.useCallback)(function() {
            return function(e) {
                return A.apply(this, arguments)
            }(e)
        }, [JSON.stringify(e)]);
        return N(e, t)
    }

    function C(e) {
        "subscriptionId" in e && null == e.subscriptionId && (e.subscriptionId, e = h(e, ["subscriptionId"]));
        var t = (0, r.useCallback)(function() {
            return "subscriptionId" in e ? v(e) : "items" in e ? function(e) {
                return S.apply(this, arguments)
            }(e) : null
        }, [JSON.stringify(e)]);
        return N(e, t)
    }

    function P(e) {
        var t = (0, r.useCallback)(function() {
            return function(e) {
                return b.apply(this, arguments)
            }(e)
        }, [JSON.stringify(e)]);
        return N(e, t)
    }

    function D(e) {
        var t = e.subscriptionPlanPrice;
        return e.discounts.forEach(function(n) {
            var r = n.amount / e.quantity;
            t -= r
        }), t
    }
}
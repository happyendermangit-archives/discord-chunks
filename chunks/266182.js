function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchSubscriptionPlansOnNewPaymentSource: function() {
            return I
        },
        getCurrencies: function() {
            return h
        },
        planHasCurrency: function() {
            return O
        },
        useCurrencyWithPaymentSourceChange: function() {
            return T
        }
    });
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o),
        a = n("629815"),
        u = n("824646"),
        s = n("420462"),
        l = n("622753"),
        c = n("830721"),
        f = n("281767"),
        d = n("868615");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    E(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    E(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function m(e, t) {
        if (e) {
            if ("string" == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
        }
    }

    function y(e, t) {
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

    function I(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
            if (Array.isArray(e)) return _(e)
        }(t = d.ACTIVE_PREMIUM_SKUS) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(t) || m(t) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }();
        return null == e || l.default.hasPaymentSourceForSKUIds(e, n) ? Promise.resolve() : new Promise(function(e) {
            a.default.wait(p(function() {
                return y(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, (0, u.fetchSubscriptionPlansBySKUs)(n)];
                        case 1:
                            return t.sent(), e(), [2]
                    }
                })
            }))
        })
    }

    function h(e, t, n) {
        var r, o = [],
            a = [],
            u = {
                purchaseType: n ? f.PriceSetAssignmentPurchaseTypes.GIFT : f.PriceSetAssignmentPurchaseTypes.DEFAULT
            };
        return r = "string" == typeof e ? l.default.get(e) : e, i()(r, "subscription plan not loaded"), null != t && l.default.hasPaymentSourceForSKUId(t, r.skuId) && (u.paymentSourceId = t), (o = (a = (0, c.experimentalGetPrices)(r.id, u)).map(function(e) {
            return e.currency
        })).length < 1 && (o = [f.CurrencyCodes.USD]), o
    }

    function O(e, t, n) {
        var r = l.default.get(e);
        return i()(null != r, "plan is undefined"), h(r, n, !1).includes(t)
    }

    function T(e, t, n, o, i) {
        var a, u, c = (a = r.useReducer(function(e, t) {
                return function(e) {
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
                }({}, e, t)
            }, null != n ? {
                paymentSourceId: n,
                currency: e,
                loaded: !1
            } : {
                currency: e,
                loaded: !1
            }), u = 2, function(e) {
                if (Array.isArray(e)) return e
            }(a) || function(e, t) {
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
            }(a, u) || m(a, u) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = c[0],
            d = c[1],
            _ = (0, s.useSubscriptionPlansLoaded)(i);
        r.useEffect(function() {
            var e;
            (e = p(function() {
                var e;
                return y(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, I(n, i)];
                        case 1:
                            return r.sent(), e = [], null != t && null != l.default.get(t) && (e = h(t, n, o)), e.length > 0 ? d({
                                paymentSourceId: n,
                                currency: e[0],
                                loaded: !0
                            }) : d({
                                paymentSourceId: n,
                                loaded: !1
                            }), [2]
                    }
                })
            }), function() {
                return e.apply(this, arguments)
            })()
        }, [n, JSON.stringify(i), t, o, _]);
        var E = f.paymentSourceId !== n || null == t || !_ || !0 !== f.loaded;
        return {
            hasFetchedSubscriptionPlans: _,
            priceOptions: f,
            setCurrency: function(e) {
                d({
                    currency: e
                })
            },
            currencyLoading: E
        }
    }
}
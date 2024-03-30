function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("153832"),
        i = n("784184"),
        a = n("663131"),
        u = n("628657"),
        s = n("426697"),
        l = n("208454"),
        c = n("870331"),
        f = n("120447"),
        d = n("830721"),
        _ = n("281767"),
        E = n("868615");

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
        var t, m = null != e ? e : {},
            y = m.initialPlanId,
            I = m.followupSKUInfo,
            h = m.onClose,
            O = m.onComplete,
            T = m.onSubscriptionConfirmation,
            S = m.analyticsLocations,
            v = m.analyticsObject,
            g = m.analyticsLocation,
            A = m.analyticsSourceLocation,
            b = m.isGift,
            N = void 0 !== b && b,
            R = m.giftMessage,
            C = m.subscriptionTier,
            P = m.trialId,
            D = m.postSuccessGuild,
            L = m.openInvoiceId,
            M = m.applicationId,
            U = m.referralTrialOfferId,
            w = m.giftRecipient,
            k = m.returnRef,
            G = m.subscription,
            B = m.skipConfirm,
            j = !1,
            F = (0, o.v4)(),
            V = l.default.getCurrentUser(),
            H = (0, d.isPremiumExactly)(V, E.PremiumTypes.TIER_2);
        (0, i.openModalLazy)((t = function() {
            var e;
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
            }(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("91134"), n.e("80734"), n.e("76423"), n.e("31633"), n.e("78190"), n.e("90865"), n.e("51241"), n.e("67944"), n.e("36083"), n.e("5475"), n.e("91162"), n.e("69115"), n.e("37048"), n.e("19732"), n.e("1716"), n.e("28701"), n.e("85447"), n.e("34312")]).then(n.bind(n, "34132"))];
                    case 1:
                        return e = t.sent().default, [2, function(t) {
                            var n, o, i = t.onClose,
                                a = function(e, t) {
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
                                }(t, ["onClose"]);
                            return r.createElement(e, (n = function(e) {
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
                            }({}, a), o = (o = {
                                loadId: F,
                                subscriptionTier: C,
                                skuId: (0, d.castPremiumSubscriptionAsSkuId)(C),
                                isGift: N,
                                giftMessage: R,
                                giftRecipient: w,
                                initialPlanId: y,
                                followupSKUInfo: I,
                                onClose: function(e, t) {
                                    i(), null == h || h(e), e && (null == T || T(), !N && null != t && t === E.PremiumSubscriptionSKUs.TIER_2 && !H && f.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                                },
                                onComplete: function() {
                                    j = !0, null == O || O(), !N && (0, s.setCanPlayWowMoment)(!0)
                                },
                                onSubscriptionConfirmation: T,
                                analyticsLocations: S,
                                analyticsObject: v,
                                analyticsLocation: g,
                                analyticsSourceLocation: A,
                                trialId: P,
                                postSuccessGuild: D,
                                planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                                openInvoiceId: L,
                                applicationId: M,
                                referralTrialOfferId: U,
                                returnRef: k,
                                subscription: G,
                                skipConfirm: !!B
                            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(o)).forEach(function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                            }), n))
                        }]
                }
            })
        }, function() {
            var e = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = t.apply(e, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }), {
            modalKey: "payment-modal",
            onCloseCallback: function() {
                !j && c.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                    load_id: F,
                    payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
                    location: null != g ? g : v,
                    source: A,
                    subscription_type: _.SubscriptionTypes.PREMIUM,
                    is_gift: N,
                    eligible_for_trial: null != P,
                    application_id: M,
                    location_stack: S
                }), (0, a.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == h || h(j), j && (null == T || T())
            }
        })
    }
}
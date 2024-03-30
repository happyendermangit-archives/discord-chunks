function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("483587"),
        a = n("950175"),
        u = n("824646"),
        s = n("428920"),
        l = n("870331"),
        c = n("830721"),
        f = n("281767"),
        d = n("941504");

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    _(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    _(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function p(e, t) {
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

    function m(e) {
        return y.apply(this, arguments)
    }

    function y() {
        return (y = E(function(e) {
            var t, _, m, y, I, h, O, T, S, v, g, A, b, N, R, C;
            return p(this, function(P) {
                switch (P.label) {
                    case 0:
                        if (t = e.analyticsLocations, _ = e.analyticsLocation, m = e.analyticsSourceLocation, y = e.guildId, I = e.closeLayer, h = e.onCloseModal, T = void 0 === (O = e.totalNumberOfSlotsToAssign) ? 1 : O, S = e.disablePremiumUpsell, v = e.onSubscriptionConfirmation, g = e.inPopout, A = e.applicationId, b = g ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT, null != (N = s.default.getPremiumTypeSubscription()) && N.isPurchasedExternally && null != N.paymentGateway) return null != I && I(), i.default.show({
                            title: d.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                                paymentGatewayName: f.PaymentGatewayToFriendlyName[N.paymentGateway]
                            }),
                            body: d.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                                paymentGatewayName: f.PaymentGatewayToFriendlyName[N.paymentGateway],
                                subscriptionManagementLink: (0, c.getExternalSubscriptionMethodUrl)(N.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            })
                        }), [2];
                        return Promise.all([(0, a.fetchPaymentSources)(), (0, u.fetchPremiumSubscriptionPlans)()]), R = function() {
                            l.default.track(f.AnalyticEvents.MODAL_DISMISSED, {
                                type: f.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                                location: _
                            })
                        }, [4, (0, o.openModalLazy)(E(function() {
                            var e;
                            return p(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("91134"), n.e("80734"), n.e("76423"), n.e("31633"), n.e("90865"), n.e("51241"), n.e("67944"), n.e("36083"), n.e("5475"), n.e("19732"), n.e("97360"), n.e("40756"), n.e("98993")]).then(n.bind(n, "789609"))];
                                    case 1:
                                        return e = o.sent().default, [2, function(n) {
                                            var o = n.transitionState,
                                                i = n.onClose;
                                            return r.createElement(e, {
                                                transitionState: o,
                                                onClose: function(e) {
                                                    i(), null == h || h(e)
                                                },
                                                analyticsLocations: t,
                                                analyticsLocation: _,
                                                analyticsSourceLocation: null != m ? m : _,
                                                guildId: y,
                                                totalNumberOfSlotsToAssign: T,
                                                closeGuildPerksModal: I,
                                                disablePremiumUpsell: S,
                                                onSubscriptionConfirmation: v,
                                                applicationId: A
                                            })
                                        }]
                                }
                            })
                        }), {
                            onCloseCallback: R,
                            onCloseRequest: function() {
                                null != C && (0, o.closeModal)(C), null == h || h(!1)
                            },
                            contextKey: b
                        })];
                    case 1:
                        return C = P.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }
}
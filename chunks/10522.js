function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("649455"),
        l = n("396586"),
        c = n("587753"),
        f = n("844615"),
        d = n("444169"),
        _ = n("935741"),
        E = n("894288"),
        p = n("283248"),
        m = n("412791"),
        y = n("870331"),
        I = n("281767"),
        h = n("868615"),
        O = n("941504"),
        T = n("459229");

    function S(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function v(e) {
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

    function g() {
        var e;
        (0, u.openModalLazy)((e = function() {
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
                        return [4, n.e("22300").then(n.bind(n, "980452"))];
                    case 1:
                        return e = t.sent().default, [2, function(t) {
                            return r.createElement(e, v({
                                channel: null
                            }, t))
                        }]
                }
            })
        }, function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    S(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    S(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }))
    }

    function A(e) {
        var t, n = e.className,
            o = e.iconOnly,
            S = e.remaining,
            A = (0, a.useStateFromStores)([E.default, _.default], function() {
                var e = _.default.getChannel(E.default.getChannelId());
                return (null == e ? void 0 : e.isPrivate()) ? I.AnalyticsPages.DM_CHANNEL : I.AnalyticsPages.GUILD_CHANNEL
            }),
            b = (0, l.default)(s.default.PREMIUM_UPSELL).analyticsLocations,
            N = (0, c.usePremiumDiscountOffer)(),
            R = (0, f.usePremiumTrialOffer)(),
            C = (0, c.discountOfferHasTier)(N, h.PremiumSubscriptionSKUs.TIER_2),
            P = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === h.PremiumSubscriptionSKUs.TIER_2;
        return (r.useEffect(function() {
            y.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: {
                    location_page: A,
                    location_section: I.AnalyticsSections.CHANNEL_TEXT_AREA
                },
                location_stack: b
            })
        }, [A, b]), (P || C) && S < 0) ? r.createElement(d.default, {
            type: h.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
            subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
            context: S,
            discountOffer: N,
            trialOffer: R
        }, O.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
            onLearnMore: g
        })) : o ? r.createElement(u.Clickable, {
            className: T.iconOnly,
            onClick: function() {
                return g()
            }
        }, r.createElement(u.Tooltip, {
            text: O.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
            position: "top"
        }, function(e) {
            return r.createElement(m.default, v({
                className: T.premium
            }, e))
        })) : r.createElement("div", {
            className: i()(T.root, n)
        }, r.createElement(m.default, {
            className: T.premium,
            color: p.GradientCssUrls.PREMIUM_TIER_2
        }), r.createElement(u.Text, {
            className: T.text,
            variant: "text-sm/normal"
        }, O.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
            onLearnMore: g
        })))
    }
}
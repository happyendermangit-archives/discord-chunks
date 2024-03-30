function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("482644"),
        l = n("396586"),
        c = n("276328"),
        f = n("78074"),
        d = n("163291"),
        _ = n("590515"),
        E = n("208454"),
        p = n("428920"),
        m = n("290976"),
        y = n("622208"),
        I = n("588954"),
        h = n("412791"),
        O = n("830721"),
        T = n("868615"),
        S = n("281767"),
        v = n("941504"),
        g = n("232248");

    function A(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function b(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    A(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    A(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function N(e) {
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

    function R(e, t) {
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

    function C(e, t) {
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

    function P(e, t) {
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
    t.default = function(e) {
        var t = e.isGift,
            o = e.subscriptionTier,
            A = e.onClick,
            D = e.size,
            L = e.className,
            M = e.trialId,
            U = e.isTrialCTA,
            w = e.buttonText,
            k = e.buttonTextClassName,
            G = e.iconClassName,
            B = e.postSuccessGuild,
            j = e.onSubscribeModalClose,
            F = e.premiumModalAnalyticsLocation,
            V = e.showIcon,
            H = void 0 === V || V,
            x = e.disableShine,
            Y = e.applicationId,
            W = e.giftMessage,
            K = e.overrideDisabledButtonText,
            z = e.shinyButtonClassName,
            X = C(e, ["isGift", "subscriptionTier", "onClick", "size", "className", "trialId", "isTrialCTA", "buttonText", "buttonTextClassName", "iconClassName", "postSuccessGuild", "onSubscribeModalClose", "premiumModalAnalyticsLocation", "showIcon", "disableShine", "applicationId", "giftMessage", "overrideDisabledButtonText", "shinyButtonClassName"]),
            q = (0, a.useStateFromStores)([E.default], function() {
                return E.default.getCurrentUser()
            }),
            Q = (0, a.useStateFromStores)([m.default], function() {
                return m.default.isFocused()
            }),
            J = (0, a.useStateFromStores)([p.default], function() {
                return p.default.getPremiumTypeSubscription()
            }),
            Z = (0, l.default)().analyticsLocations,
            $ = function(e) {
                if (e.preventDefault(), null == q) {
                    (0, d.transitionTo)(S.Routes.LOGIN);
                    return
                }
                if (null == A || A(e), (null == J ? void 0 : J.status) === S.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                    (0, c.trackPremiumSettingsPaneOpened)(), s.default.open(S.UserSettingsSections.PREMIUM), null == j || j(!1);
                    return
                }! function(e) {
                    var t = e.isClaimed,
                        o = e.isVerified,
                        i = e.isGift,
                        a = e.subscriptionTier,
                        s = e.trialId,
                        l = e.postSuccessGuild,
                        c = e.onSubscribeModalClose,
                        d = e.analyticsLocations,
                        _ = e.premiumModalAnalyticsLocation,
                        E = e.applicationId,
                        p = e.giftMessage;
                    if (!t) {
                        (0, u.openModalLazy)(b(function() {
                            var e;
                            return P(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("99387"), n.e("6813")]).then(n.bind(n, "40808"))];
                                    case 1:
                                        return e = t.sent().default, [2, function(t) {
                                            var n = t.onClose,
                                                o = C(t, ["onClose"]);
                                            return r.createElement(e, R(N({}, o), {
                                                onClose: n
                                            }))
                                        }]
                                }
                            })
                        }));
                        return
                    }
                    if (!o) {
                        (0, u.openModalLazy)(b(function() {
                            var e;
                            return P(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("99387"), n.e("46104")]).then(n.bind(n, "587151"))];
                                    case 1:
                                        return e = t.sent().default, [2, function(t) {
                                            var n = t.onClose,
                                                o = C(t, ["onClose"]);
                                            return r.createElement(e, R(N({}, o), {
                                                onClose: n
                                            }))
                                        }]
                                }
                            })
                        }));
                        return
                    }
                    var m = S.AnalyticsObjectTypes.BUY;
                    null != s ? m = S.AnalyticsObjectTypes.TRIAL : i && (m = S.AnalyticsObjectTypes.GIFT), (0, f.default)({
                        isGift: i,
                        initialPlanId: null,
                        subscriptionTier: a,
                        analyticsLocations: d,
                        analyticsObject: N({
                            object: S.AnalyticsObjects.BUTTON_CTA,
                            objectType: m
                        }, _),
                        trialId: s,
                        postSuccessGuild: l,
                        onClose: c,
                        applicationId: E,
                        giftMessage: p
                    })
                }({
                    isClaimed: q.isClaimed(),
                    isVerified: q.verified,
                    isGift: t,
                    subscriptionTier: o,
                    trialId: M,
                    postSuccessGuild: B,
                    onSubscribeModalClose: j,
                    analyticsLocations: Z,
                    premiumModalAnalyticsLocation: F,
                    applicationId: Y,
                    giftMessage: W
                })
            };
        if (U) return r.createElement(u.Button, N({
            size: D,
            className: L,
            innerClassName: g.premiumSubscribeButton,
            look: u.Button.Looks.INVERTED,
            onClick: $
        }, X), H && r.createElement(h.default, {
            className: g.premiumIcon
        }), r.createElement("span", {
            className: i()(g.buttonText, k)
        }, null != w ? w : v.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT));
        if (t) return r.createElement(u.Button, N({
            size: D,
            className: L,
            innerClassName: g.giftButton,
            color: u.Button.Colors.PRIMARY,
            onClick: $
        }, X), r.createElement(I.default, {
            className: g.giftIcon
        }), r.createElement("span", {
            className: i()(g.buttonText, k)
        }, null != w ? w : v.default.Messages.PREMIUM_GIFTING_BUTTON));
        var ee = v.default.Messages.APPLICATION_STORE_GET_PREMIUM,
            et = null != J ? (0, O.getPremiumPlanItem)(J) : null,
            en = null != et ? O.default.getPremiumType(et.planId) : null == q ? void 0 : q.premiumType,
            er = o === T.PremiumSubscriptionSKUs.TIER_2 && null != en && [T.PremiumTypes.TIER_0, T.PremiumTypes.TIER_1].includes(en);
        er && (ee = v.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
        var eo = null != J && J.status !== S.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, _.isNoneSubscription)(J.planId) && !er,
            ei = eo ? null != K ? K : function(e) {
                var t = e.ctaSubscriptionSkuId,
                    n = e.currentPremiumType,
                    r = null,
                    o = null;
                if (null != t && t !== T.PremiumSubscriptionSKUs.LEGACY && t !== T.PremiumSubscriptionSKUs.TIER_0 && t !== T.PremiumSubscriptionSKUs.TIER_1 && t !== T.PremiumSubscriptionSKUs.TIER_2) return {
                    disabledButtonText: r,
                    disabledButtonTooltipText: o
                };
                var i = null != t ? T.PremiumSubscriptionSKUToPremiumType[(0, O.castPremiumSubscriptionAsSkuId)(t)] : null,
                    a = null != i ? T.PremiumTypeOrder[i] : null,
                    u = null != n ? T.PremiumTypeOrder[n] : null;
                return null != u && null != a && a < u ? (r = v.default.Messages.APPLICATION_STORE_GET_PREMIUM, o = v.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != i && null != n && i === n ? (r = v.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, o = v.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == i && null != n && n === T.PremiumTypes.TIER_2 && (o = v.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                    disabledButtonText: r,
                    disabledButtonTooltipText: o
                }
            }({
                ctaSubscriptionSkuId: o,
                currentPremiumType: en
            }) : null;

        function ea(e) {
            var t, n;
            return r.createElement(y.default, N({
                disabled: eo,
                onClick: $,
                innerClassName: g.premiumSubscribeButton,
                color: o === T.PremiumSubscriptionSKUs.TIER_1 ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
                size: D,
                className: z,
                wrapperClassName: L,
                pauseAnimation: !Q || x
            }, X, e), H && r.createElement(h.default, {
                className: i()(g.premiumIcon, G)
            }), r.createElement("span", {
                className: i()(g.buttonText, k)
            }, null !== (n = null !== (t = null == ei ? void 0 : ei.disabledButtonText) && void 0 !== t ? t : w) && void 0 !== n ? n : ee))
        }
        return (null == ei ? void 0 : ei.disabledButtonTooltipText) != null ? r.createElement(u.Tooltip, {
            text: ei.disabledButtonTooltipText
        }, ea) : ea()
    }
}
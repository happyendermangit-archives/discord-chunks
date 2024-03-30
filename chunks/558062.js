function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openActivityApplicationPaymentModal: function() {
            return S
        },
        openApplicationPaymentModal: function() {
            return h
        }
    });
    var r, o, i = n("470079"),
        a = n("512722"),
        u = n.n(a),
        s = n("784184"),
        l = n("772309"),
        c = n("186531"),
        f = n("942604"),
        d = n("512001"),
        _ = n("216239"),
        E = n("949098"),
        p = n("281767");

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

    function y(e) {
        return function() {
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
        }
    }

    function I(e, t) {
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

    function h(e) {
        var t = e.initialPlanId,
            r = e.activeSubscription,
            o = e.analyticsObject,
            a = e.analyticsLocation,
            u = e.analyticsLocations,
            l = e.analyticsSubscriptionType,
            c = e.renderHeader,
            f = e.planGroup,
            d = e.skuId,
            _ = e.guildId,
            m = e.reviewWarningMessage,
            h = e.applicationId,
            O = e.showBenefitsFirst,
            T = e.eligibleApplicationSubscriptionGuilds,
            S = e.onComplete,
            v = e.forcesTransitionToGuild;
        (0, s.openModalLazy)(y(function() {
            var e, s, p;
            return I(this, function(y) {
                switch (y.label) {
                    case 0:
                        return [4, Promise.resolve().then(n.bind(n, "751455"))];
                    case 1:
                        return e = y.sent().PaymentContextProvider, [4, Promise.all([n.e("49237"), n.e("99387"), n.e("91134"), n.e("78190"), n.e("67944"), n.e("91162"), n.e("69115"), n.e("69309")]).then(n.bind(n, "6734"))];
                    case 2:
                        return s = y.sent().default, [4, Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("80734"), n.e("76423"), n.e("31633"), n.e("90865"), n.e("51241"), n.e("36083"), n.e("5475"), n.e("37048"), n.e("93406")]).then(n.bind(n, "127171"))];
                    case 3:
                        return p = (0, y.sent().getApplicationPaymentSteps)({
                            guildId: _,
                            showBenefitsFirst: O,
                            eligibleApplicationSubscriptionGuilds: T
                        }), [2, function(n) {
                            var y, I;
                            return i.createElement(e, {
                                applicationId: h,
                                activeSubscription: r,
                                stepConfigs: p,
                                skuIDs: [d]
                            }, i.createElement(E.GiftContextProvider, null, i.createElement(s, (y = function(e) {
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
                            }({}, n), I = (I = {
                                initialPlanId: t,
                                skuId: d,
                                analyticsLocations: u,
                                analyticsObject: o,
                                analyticsLocation: a,
                                analyticsSubscriptionType: l,
                                renderHeader: c,
                                planGroup: f,
                                reviewWarningMessage: m,
                                applicationId: h,
                                guildId: null != _ ? _ : void 0,
                                onComplete: S,
                                forcesTransitionToGuild: v
                            }, I), Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(I)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(I)).forEach(function(e) {
                                Object.defineProperty(y, e, Object.getOwnPropertyDescriptor(I, e))
                            }), y))))
                        }]
                }
            })
        }), {
            onCloseRequest: p.NOOP
        })
    }
    var O = (r = y(function(e) {
        var t, n, r;
        return I(this, function(o) {
            switch (o.label) {
                case 0:
                    if (null != (t = d.default.getSubscriptionGroupListingForApplication(e))) return [2, t];
                    return [4, (0, c.fetchAllStoreListingsForApplication)(e)];
                case 1:
                    return n = o.sent().find(function(e) {
                        return e.sku.type === p.SKUTypes.SUBSCRIPTION_GROUP
                    }), u()(null != n, "Failed to find subscription store listing"), [4, (0, f.fetchAllSubscriptionListingsDataForApplication)(e, null == n ? void 0 : n.id)];
                case 2:
                    return o.sent(), r = d.default.getSubscriptionGroupListingForApplication(e), u()(null != r, "Failed to find subscription group listing"), [2, r]
            }
        })
    }), function(e) {
        return r.apply(this, arguments)
    });
    var T = (o = y(function(e, t) {
        var n;
        return I(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, (0, l.fetchUserEntitlementsForApplication)(e)];
                case 1:
                    return n = r.sent().filter(function(e) {
                        return null == e.ends_at || new Date(e.ends_at) > new Date
                    }).find(function(e) {
                        return e.sku_id === t
                    }), u()(null == n, "User already has an active subscription to this SKU"), [2]
            }
        })
    }), function(e, t) {
        return o.apply(this, arguments)
    });

    function S(e) {
        return v.apply(this, arguments)
    }

    function v() {
        return (v = y(function(e) {
            var t, n, r, o, i, a, s, l, c;
            return I(this, function(f) {
                switch (f.label) {
                    case 0:
                        return t = e.applicationId, n = e.skuId, r = e.initialPlanId, o = e.analyticsLocationObject, i = e.analyticsLocations, a = e.renderHeader, [4, O(t)];
                    case 1:
                        return s = f.sent(), l = (0, _.getPayableSubscriptionListing)(s), u()(null != l, "Failed to find subscription listing"), c = (0, _.isApplicationUserSubscription)(l.sku_flags), u()(c, "Guild application subscriptions unsupported!"), u()(l.published, "Subscription listing not published"), [4, T(t, n)];
                    case 2:
                        return f.sent(), h({
                            initialPlanId: null != r ? r : null == l ? void 0 : l.subscription_plans[0].id,
                            activeSubscription: null,
                            analyticsLocations: i,
                            analyticsLocationObject: o,
                            analyticsSubscriptionType: p.SubscriptionTypes.APPLICATION,
                            renderHeader: a,
                            planGroup: s.subscription_listings_ids,
                            skuId: n,
                            guildId: null,
                            eligibleApplicationSubscriptionGuilds: [],
                            showBenefitsFirst: !1,
                            applicationId: t,
                            listing: l
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }
}
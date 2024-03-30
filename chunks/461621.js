function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NON_SUBSCRIBER_SENTINEL: function() {
            return y
        },
        maybeFetchPremiumLikelihood: function() {
            return h
        },
        useMaybeFetchPremiumLikelihood: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("37295"),
        i = n("967888"),
        a = n("629815"),
        u = n("824646"),
        s = n("208454"),
        l = n("622753"),
        c = n("32950"),
        f = n("830721"),
        d = n("449229"),
        _ = n("868615"),
        E = n("281767");

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

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var y = "nonSubscriber";

    function I() {
        var e;
        return e = function() {
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
                        return t.trys.push([0, 2, , 3]), a.default.dispatch({
                            type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                        }), [4, i.HTTP.get({
                            url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                        })];
                    case 1:
                        return e = t.sent().body, a.default.dispatch({
                            type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                            premiumLikelihood: function(e) {
                                var t;
                                return m(t = {}, y, e.non_subscriber), m(t, _.PremiumSubscriptionSKUs.TIER_0, e[_.PremiumSubscriptionSKUs.TIER_0]), m(t, _.PremiumSubscriptionSKUs.TIER_2, e[_.PremiumSubscriptionSKUs.TIER_2]), t
                            }(e)
                        }), [3, 3];
                    case 2:
                        return 404 === t.sent().status ? a.default.dispatch({
                            type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                        }) : a.default.dispatch({
                            type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        }, (I = function() {
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
        }).apply(this, arguments)
    }

    function h(e) {
        var t = e.getCurrentConfig({
                location: "443cca_1"
            }, {
                autoTrackExposure: !1
            }),
            n = t.enabled,
            r = t.useExpectedValue,
            o = d.default.shouldFetchPremiumLikelihood();
        T(s.default.getCurrentUser(), o, n, r)
    }

    function O(e) {
        var t = e.useExperiment({
                location: "443cca_2"
            }, {
                autoTrackExposure: !1
            }),
            n = t.enabled,
            i = t.useExpectedValue,
            a = (0, o.useStateFromStores)([d.default], function() {
                return d.default.shouldFetchPremiumLikelihood()
            }),
            u = (0, o.useStateFromStores)([s.default], function() {
                return s.default.getCurrentUser()
            });
        r.useEffect(function() {
            T(u, a, n, i)
        }, [u, a, n, i])
    }

    function T(e, t, n, r) {
        null != e && !(0, c.isPremium)(e) && n && (t && ! function() {
            I.apply(this, arguments)
        }(), r && (!l.default.isLoadedForSKU((0, f.castPremiumSubscriptionAsSkuId)(_.PremiumSubscriptionSKUs.TIER_0)) && !l.default.isFetchingForSKU((0, f.castPremiumSubscriptionAsSkuId)(_.PremiumSubscriptionSKUs.TIER_0)) && (0, u.fetchSubscriptionPlansForSKU)((0, f.castPremiumSubscriptionAsSkuId)(_.PremiumSubscriptionSKUs.TIER_0)), !l.default.isLoadedForSKU((0, f.castPremiumSubscriptionAsSkuId)(_.PremiumSubscriptionSKUs.TIER_2)) && !l.default.isFetchingForSKU((0, f.castPremiumSubscriptionAsSkuId)(_.PremiumSubscriptionSKUs.TIER_2)) && (0, u.fetchSubscriptionPlansForSKU)((0, f.castPremiumSubscriptionAsSkuId)(_.PremiumSubscriptionSKUs.TIER_2))))
    }
}
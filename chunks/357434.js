function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useActiveDiscountInfo: function() {
            return S
        },
        useFetchChurnUserDiscountOffer: function() {
            return g
        },
        useHasDiscountApplied: function() {
            return T
        },
        useIsInPremiumOfferExperience: function() {
            return O
        },
        useShouldFetchChurnOffer: function() {
            return A
        }
    });
    var r, o, i = n("470079"),
        a = n("913527"),
        u = n.n(a),
        s = n("898511"),
        l = n("967888"),
        c = n("428920"),
        f = n("552437"),
        d = n("222728"),
        _ = n("587753"),
        E = n("844615"),
        p = n("868615"),
        m = n("281767");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function h(e, t) {
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
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function O() {
        var e = (0, E.usePremiumTrialOffer)(),
            t = (0, f.useHasActiveTrial)(),
            n = (0, _.usePremiumDiscountOffer)(),
            r = T();
        return null != e || t || null != n || r
    }
    var T = function() {
            var e, t = (0, s.useStateFromStores)([c.default], function() {
                    return c.default.getPremiumTypeSubscription()
                }),
                n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
            return null != n && u()(Date.now()) <= u()(n)
        },
        S = function() {
            var e, t = (0, s.useStateFromStores)([c.default], function() {
                return c.default.getPremiumTypeSubscription()
            });
            switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
                case p.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID:
                case p.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID:
                    return {
                        duration: 1, percentage: 30
                    };
                case p.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID:
                case p.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID:
                case p.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID:
                    return {
                        duration: 3, percentage: 30
                    };
                case p.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID:
                    return {
                        duration: 1, percentage: 40
                    };
                default:
                    return
            }
        };
    var v = (o = (r = function() {
            var e, t, n;
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
            }(this, function(n) {
                switch (n.label) {
                    case 0:
                        e = null, n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, l.HTTP.post({
                            url: m.Endpoints.CHURN_USER_OFFER
                        })];
                    case 2:
                        return e = null !== (t = n.sent().body.offer) && void 0 !== t ? t : null, [3, 4];
                    case 3:
                        return n.sent(), [3, 4];
                    case 4:
                        return [2, e]
                }
            })
        }, function() {
            var e = this,
                t = arguments;
            return new Promise(function(n, o) {
                var i = r.apply(e, t);

                function a(e) {
                    I(i, n, o, a, u, "next", e)
                }

                function u(e) {
                    I(i, n, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }), function() {
            return o.apply(this, arguments)
        }),
        g = function(e) {
            var t = h(i.useState(!1), 2),
                n = t[0],
                r = t[1],
                o = h(i.useState(!1), 2),
                a = o[0],
                u = o[1],
                s = h(i.useState(null), 2),
                l = s[0],
                c = s[1];
            if (e) return {
                churnUserDiscountOffer: l,
                isFetchingChurnDiscountOffer: a
            };
            var f = function() {
                r(!0), u(!1)
            };
            return !a && !n && (u(!0), v().then(function(e) {
                c(e), f()
            }).catch(function(e) {
                f()
            })), {
                churnUserDiscountOffer: l,
                isFetchingChurnDiscountOffer: a
            }
        },
        A = function() {
            var e = d.default.useExperiment({
                    location: "useShouldFetchChurnOffer"
                }, {
                    autoTrackExposure: !1
                }).enabled,
                t = (0, s.useStateFromStores)([c.default], function() {
                    return c.default.getPremiumTypeSubscription()
                }),
                n = T(),
                r = null !== t && t.hasPremiumNitroMonthly,
                o = null != t && null != t.trialId;
            return e && r && !o && !n
        }
}
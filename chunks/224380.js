function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("913527"),
        o = n.n(r),
        i = n("629815"),
        a = n("807471"),
        u = n("660560"),
        s = n("208454"),
        l = n("756658"),
        c = n("32950"),
        f = n("289039"),
        d = n("739516"),
        _ = n("806533"),
        E = n("590371"),
        p = n("868615"),
        m = n("784166");

    function y(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
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

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = null,
        S = !1,
        v = 0;

    function g(e) {
        var t = u.default.createFromServer(e.entitlement);
        (0, E.isPremiumTier2Entitlement)(t) ? (v = 0, A({
            forceRefresh: !0,
            retryOnFail: !0
        })) : (0, E.isValidTenureRewardEntitlement)(t) && null != _.default.getTenureRewardStatusForRewardId(t.skuId) && i.default.dispatch({
            type: "USER_TENURE_REWARD_STATUS_DELETE",
            tenureRewardIds: [t.skuId]
        })
    }

    function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.forceRefresh,
            n = e.retryOnFail;
        N();
        var r = l.default.getForApplication(p.PREMIUM_SUBSCRIPTION_APPLICATION),
            a = (0, E.getPremiumTier2Entitlement)(r),
            u = s.default.getCurrentUser();
        if (!(0, c.isPremiumExactly)(u, p.PremiumTypes.TIER_2) && null == a) {
            i.default.dispatch({
                type: "USER_TENURE_REWARD_STATUS_RESET"
            });
            return
        }
        if ((0, d.isUserEligibleForNitroTenureRewardCard)({
                location: "tenure_reward_manager"
            })) {
            if (_.default.getFetchState() !== _.FetchState.FETCHED || !0 === (void 0 !== t && t) || function() {
                    var e, t = null !== (e = _.default.getTenureRewardStatusForRewardId(m.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : _.default.getTenureRewardStatusForRewardId(m.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS);
                    return null != t && null != t.redeemable_at && 0 >= o()(t.redeemable_at).diff(o().utc(), "seconds")
                }())(function() {
                b.apply(this, arguments)
            })({
                retryOnFail: void 0 !== n && n
            });
            else {
                var f = l.default.getForApplication(p.PREMIUM_SUBSCRIPTION_APPLICATION);
                if (null == f) return;
                var y = Array.from(f).filter(function(e) {
                    return null != _.default.getTenureRewardStatusForRewardId(e.skuId)
                }).map(function(e) {
                    return e.skuId
                });
                y.length > 0 && i.default.dispatch({
                    type: "USER_TENURE_REWARD_STATUS_DELETE",
                    tenureRewardIds: y
                })
            }
        }
    }

    function b() {
        var e;
        return e = function() {
            var e, t, n = arguments;
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
            }(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (t = void 0 !== (e = (n.length > 0 && void 0 !== n[0] ? n[0] : {}).retryOnFail) && e, S) return [2];
                        return S = !0, [4, f.syncUserTenureRewardStatus()];
                    case 1:
                        return r.sent(), S = !1, i.default.wait(function() {
                            return function() {
                                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = t.retryOnFail,
                                    r = void 0 !== n && n;
                                if (N(), _.default.getFetchState() === _.FetchState.FETCHED && !S) {
                                    var o = null !== (e = _.default.getTenureRewardStatusForRewardId(m.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : _.default.getTenureRewardStatusForRewardId(m.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS);
                                    if ((null == o ? void 0 : o.redeemable_at) != null || !1 !== r) {
                                        var i, a, u = (null == o ? void 0 : o.redeemable_at) != null ? new Date(o.redeemable_at).getTime() - Date.now() : null;
                                        if (null != u && u > 0) T = setTimeout(A, u);
                                        else {
                                            ;
                                            if (a = ({
                                                    retryOnFail: r
                                                }).retryOnFail, null == (null !== (i = _.default.getTenureRewardStatusForRewardId(m.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== i ? i : _.default.getTenureRewardStatusForRewardId(m.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS)) && !0 === a && v < 1) v += 1, T = setTimeout(function() {
                                                return A({
                                                    forceRefresh: !0
                                                })
                                            }, 5e3)
                                        }
                                    }
                                }
                            }({
                                retryOnFail: t
                            })
                        }), [2]
                }
            })
        }, (b = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    I(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    I(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function N() {
        clearTimeout(T), T = null
    }

    function R() {
        N()
    }

    function C() {
        A()
    }
    var P = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : y(e)
        });

        function o() {
            var e, t, n, i;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = r.apply(this, arguments), t = y(e), n = "actions", i = {
                POST_CONNECTION_OPEN: C,
                CONNECTION_CLOSED: R,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function() {
                    return A()
                },
                ENTITLEMENT_CREATE: g,
                ENTITLEMENT_UPDATE: function() {
                    return A()
                },
                ENTITLEMENT_DELETE: function() {
                    return A()
                },
                LOGOUT: N
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, e
        }
        return o
    }(a.default);
    t.default = new P
}
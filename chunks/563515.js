function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("950175"),
        o = n("772309"),
        i = n("807471"),
        a = n("208454"),
        u = n("362108"),
        s = n("428920"),
        l = n("756658"),
        c = n("947248"),
        f = n("830721"),
        d = n("868615");

    function _(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
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

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e, t) {
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
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
        }(E, e);
        var t, n, i = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : _(e)
        });

        function E() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), e = i.apply(this, arguments), m(_(e), "actions", {
                POST_CONNECTION_OPEN: function() {
                    e.maybeFetchSubscriptions(), e.maybeFetchCountryCode(), e.maybeFetchMostRecentSubscription()
                }
            }), m(_(e), "maybeFetchSubscriptions", p(function() {
                var e, t;
                return h(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (e = a.default.getCurrentUser(), !f.default.isPremium(e)) return [3, 4];
                            if (s.default.hasFetchedSubscriptions()) return [3, 2];
                            return [4, (0, r.fetchSubscriptions)()];
                        case 1:
                            n.sent(), n.label = 2;
                        case 2:
                            if (!((null == (t = s.default.getPremiumSubscription()) ? void 0 : t.paymentSourceId) == null && !l.default.applicationIdsFetched.has(d.PREMIUM_SUBSCRIPTION_APPLICATION))) return [3, 4];
                            return [4, (0, o.fetchUserEntitlementsForApplication)(d.PREMIUM_SUBSCRIPTION_APPLICATION)];
                        case 3:
                            n.sent(), n.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })), m(_(e), "maybeFetchMostRecentSubscription", function() {
                var e = a.default.getCurrentUser();
                null != e && !f.default.isPremium(e) && null != e.purchasedFlags && ((0, c.hasFlag)(e.purchasedFlags, d.PurchasedFlags.PREMIUM_TIER_1) || (0, c.hasFlag)(e.purchasedFlags, d.PurchasedFlags.PREMIUM_TIER_2)) && (0, r.fetchMostRecentSubscription)()
            });
            var e, t = _(e);
            return m(_(e), "maybeFetchCountryCode", p(function() {
                var e;
                return h(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (e = a.default.getCurrentUser(), !(f.default.isPremium(e) && !u.default.ipCountryCodeLoaded)) return [3, 2];
                            return [4, t.fetchCountryCode()];
                        case 1:
                            n.sent(), n.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })), m(_(e), "fetchCountryCode", p(function() {
                return h(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, (0, r.fetchIpCountryCode)()];
                        case 1:
                            if (e.sent(), !(null != u.default.ipCountryCode)) return [3, 3];
                            return [4, (0, r.fetchPaymentSources)()];
                        case 2:
                            e.sent(), e.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })), e
        }
        return E
    }(i.default);
    t.default = new O
}
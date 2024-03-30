function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addAppliedGuildBoosts: function() {
            return T
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("950175"),
        a = n("70341"),
        u = n("824646"),
        s = n("208454"),
        l = n("762497"),
        c = n("622753"),
        f = n("870331"),
        d = n("665199"),
        _ = n("974864"),
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

    function m(e) {
        return function() {
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
        }
    }

    function y(e) {
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

    function I(e, t) {
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

    function h(e, t) {
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

    function O(e, t) {
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

    function T(e) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = m(function(e) {
            var t, p, T, S, v, g, A, b, N, R, C, P, D, L, M, U, w, k, G, B, j;
            return O(this, function(F) {
                switch (F.label) {
                    case 0:
                        if (t = e.analyticsLocations, p = e.analyticsLocation, T = e.analyticsSourceLocation, S = e.numberOfBoostsToAdd, v = e.onClose, g = e.closeLayer, A = e.onSubscriptionConfirmation, b = e.guild, N = e.handleSubscribeModalClose, R = e.disablePremiumUpsell, C = e.inPopout, P = e.applicationId, D = C ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT, null == (L = s.default.getCurrentUser())) return [2];
                        if (!L.verified) return (0, o.openModalLazy)(m(function() {
                            var e;
                            return O(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("99387"), n.e("46104")]).then(n.bind(n, "587151"))];
                                    case 1:
                                        return e = t.sent().default, [2, function(t) {
                                            var n = t.onClose,
                                                o = h(t, ["onClose"]);
                                            return r.createElement(e, I(y({}, o), {
                                                onClose: n
                                            }))
                                        }]
                                }
                            })
                        }), {
                            contextKey: D
                        }), [2];
                        if (M = [], !c.default.isLoadedForPremiumSKUs() && M.push((0, u.fetchPremiumSubscriptionPlans)()), !l.default.hasFetched && (M.push(i.fetchSubscriptions()), M.push((0, a.fetchGuildBoostSlots)())), !(M.length > 0)) return [3, 2];
                        return [4, Promise.allSettled(M)];
                    case 1:
                        F.sent(), F.label = 2;
                    case 2:
                        if (w = (U = (0, d.getAvailableGuildBoostSlots)(l.default.boostSlots)).length, k = function(e) {
                                null == v || v(), null == N || N(e)
                            }, G = function() {
                                null == v || v(), null == g || g(), f.default.track(E.AnalyticEvents.MODAL_DISMISSED, {
                                    type: E.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                    location_section: p.section
                                })
                            }, !(w > 0 && (null == S || w >= S))) return [3, 4];
                        return 1 === w ? B = U.slice(0, 1) : null != S && (B = U.slice(0, S)), [4, (0, o.openModalLazy)(m(function() {
                            var e;
                            return O(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("91134"), n.e("80734"), n.e("31633"), n.e("90865"), n.e("67944"), n.e("19732"), n.e("97360"), n.e("44048"), n.e("61363")]).then(n.bind(n, "60115"))];
                                    case 1:
                                        return e = t.sent().default, [2, function(t) {
                                            var n = t.onClose,
                                                o = h(t, ["onClose"]);
                                            return r.createElement(e, I(y({}, o), {
                                                onClose: function(e) {
                                                    n(), k(e)
                                                },
                                                selectedGuild: b,
                                                locationSection: E.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                                guildBoostSlots: B
                                            }))
                                        }]
                                }
                            })
                        }), {
                            onCloseRequest: function() {
                                null != j && (0, o.closeModal)(j), k(!1)
                            },
                            contextKey: D
                        })];
                    case 3:
                        return j = F.sent(), [3, 5];
                    case 4:
                        (0, _.default)({
                            analyticsLocations: t,
                            analyticsLocation: p,
                            analyticsSourceLocation: T,
                            guildId: b.id,
                            closeLayer: G,
                            totalNumberOfSlotsToAssign: null != S ? S : 1,
                            onCloseModal: k,
                            disablePremiumUpsell: R,
                            onSubscriptionConfirmation: A,
                            inPopout: C,
                            applicationId: P
                        }), F.label = 5;
                    case 5:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}
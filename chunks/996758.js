function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBOGOPillCopy: function() {
            return B
        },
        isEligibleForBOGOAnnouncementModal: function() {
            return k
        },
        maybeFetchActiveBogoPromotion: function() {
            return U
        },
        useIsEligibleForBogoPromotion: function() {
            return D
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("37295"),
        a = n("14782"),
        u = n("950175"),
        s = n("62756"),
        l = n("453367"),
        c = n("510077"),
        f = n("225098"),
        d = n("208454"),
        _ = n("428920"),
        E = n("432683"),
        p = n("830721"),
        m = n("500831"),
        y = n("501302"),
        I = n("812868"),
        h = n("580111"),
        O = n("844615"),
        T = n("141095"),
        S = n("274785"),
        v = n("489248"),
        g = n("868615"),
        A = n("281767"),
        b = n("941504");

    function N(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function R(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    N(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    N(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function C(e, t) {
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

    function P(e) {
        var t = e.experimentEnabled,
            n = e.premiumSubscription,
            r = e.mostRecentSubscription,
            i = !1,
            a = !1;
        if (null != r && r.status === A.SubscriptionStatusTypes.ENDED) {
            var u, s, l = (null === (u = r.metadata) || void 0 === u ? void 0 : u.ended_at) != null ? o()(r.metadata.ended_at) : null,
                c = null === (s = (0, p.getPremiumPlanItem)(r)) || void 0 === s ? void 0 : s.planId,
                f = null != c && p.default.getPremiumType(c) === g.PremiumTypes.TIER_2;
            a = null != l && f && l.add(10, "days").isAfter(o()())
        }
        if (null != n) {
            var _, E = null === (_ = (0, p.getPremiumPlanItem)(n)) || void 0 === _ ? void 0 : _.planId,
                m = null != E && p.default.getPremiumType(E) === g.PremiumTypes.TIER_2,
                y = d.default.getCurrentUser(),
                I = (null == n ? void 0 : n.trialId) != null && p.default.isPremiumExactly(y, g.PremiumTypes.TIER_0);
            i = m || I
        }
        return !t || i || a
    }

    function D() {
        var e, t = l.default.useExperiment({
                location: "153d31_1"
            }, {
                autoTrackExposure: !1
            }).paymentsBlocked,
            n = (0, S.useBogoPromotion)().promotion,
            r = (0, h.default)().enabled,
            o = (0, i.useStateFromStoresObject)([_.default], function() {
                return {
                    mostRecentSubscription: _.default.getMostRecentPremiumTypeSubscription(),
                    premiumSubscription: _.default.getPremiumTypeSubscription()
                }
            }),
            a = o.mostRecentSubscription,
            u = o.premiumSubscription,
            c = (0, O.usePremiumTrialOffer)(),
            f = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
        (0, s.default)(f, 1e3, void 0, f + 2e3 < Date.now());
        var d = !P({
                experimentEnabled: r,
                premiumSubscription: u,
                mostRecentSubscription: a
            }) && null == c && null != n && !t,
            E = Date.now(),
            p = I.default.useExperiment({
                location: "153d31_2"
            }, {
                autoTrackExposure: d,
                disable: !d
            }).enabled;
        return !(E > f) && p
    }

    function L() {
        return M.apply(this, arguments)
    }

    function M() {
        return (M = R(function() {
            var e, t, n, r, o, i, a, s, c;
            return C(this, function(f) {
                switch (f.label) {
                    case 0:
                        if (n = !(null == (t = d.default.getCurrentUser()) ? void 0 : t.isClaimed()), r = l.default.getCurrentConfig({
                                location: "153d31_3"
                            }, {
                                autoTrackExposure: !1
                            }).paymentsBlocked, o = (0, h.isBogoPromotionExperimentEnabled)().enabled, i = I.default.getCurrentConfig({
                                location: "153d31_4"
                            }, {
                                autoTrackExposure: !1
                            }).enabled, a = y.BOGOAnnouncementModalExperiment.getCurrentConfig({
                                location: "153d31_5"
                            }, {
                                autoTrackExposure: !1
                            }).enabled, n || r || !o || !a && !i) return [2, !1];
                        if (!E.default.shouldFetchOffer()) return [3, 2];
                        return [4, m.default.fetchUserTrialOffer()];
                    case 1:
                        f.sent(), f.label = 2;
                    case 2:
                        if (E.default.hasFetchedOffer() && E.default.hasAnyUnexpiredOffer()) return [2, !1];
                        if (!(!_.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(g.PremiumSubscriptionSKUs.TIER_2)))) return [3, 4];
                        return [4, (0, u.fetchMostRecentSubscription)()];
                    case 3:
                        f.sent(), f.label = 4;
                    case 4:
                        if (_.default.hasFetchedSubscriptions()) return [3, 6];
                        return [4, (0, u.fetchSubscriptions)()];
                    case 5:
                        f.sent(), f.label = 6;
                    case 6:
                        return s = _.default.getMostRecentPremiumTypeSubscription(), c = _.default.getPremiumTypeSubscription(), [2, !P({
                            experimentEnabled: o,
                            premiumSubscription: c,
                            mostRecentSubscription: s
                        })]
                }
            })
        })).apply(this, arguments)
    }

    function U() {
        return w.apply(this, arguments)
    }

    function w() {
        return (w = R(function() {
            var e;
            return C(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, L()];
                    case 1:
                        if (!t.sent() || null != (e = v.default.bogoPromotion) && new Date(e.endDate).valueOf() >= Date.now()) return [2];
                        return [4, (0, T.fetchActiveBogoPromotion)()];
                    case 2:
                        return t.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function k() {
        return G.apply(this, arguments)
    }

    function G() {
        return (G = R(function() {
            var e, t, n, r, o, i;
            return C(this, function(u) {
                switch (u.label) {
                    case 0:
                        return t = null != (e = v.default.bogoPromotion) && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(), n = (0, c.isDismissibleContentDismissed)(a.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL), [4, L()];
                    case 1:
                        return r = u.sent(), o = h.BogoPromotionExperiment.getCurrentConfig({
                            location: "153d31_6"
                        }, {
                            autoTrackExposure: !1
                        }).enabled, i = y.BOGOAnnouncementModalExperiment.getCurrentConfig({
                            location: "153d31_7"
                        }, {
                            autoTrackExposure: t && o && !n && r
                        }).enabled, [2, t && i && o && !n && r]
                }
            })
        })).apply(this, arguments)
    }

    function B() {
        switch (f.default.locale) {
            case "de":
            case "es-ES":
            case "fr":
            case "hr":
            case "it":
            case "lt":
            case "nl":
            case "pl":
            case "pt-BR":
            case "ro":
            case "fi":
            case "sv-SE":
            case "tr":
            case "cs":
            case "el":
            case "bg":
            case "ru":
            case "uk":
            case "ja":
            case "ko":
                return b.default.Messages.NITRO_BADGE_TEXT;
            default:
                return b.default.Messages.BOGO_PILL
        }
    }
}
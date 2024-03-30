function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dismissApplicationSubscriptionExpirationNotice: function() {
            return y
        },
        fetchAllSubscriptionListingsDataForApplication: function() {
            return _
        },
        fetchEntitlementsForGuild: function() {
            return p
        },
        fetchSubscriptionListingForPlan: function() {
            return I
        }
    });
    var r = n("629815"),
        o = n("824646"),
        i = n("557537"),
        a = n("281767");

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function s(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    u(i, r, o, a, s, "next", e)
                }

                function s(e) {
                    u(i, r, o, a, s, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function l(e, t) {
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

    function c(e) {
        return {
            id: e.id,
            type: a.SKUTypes.SUBSCRIPTION,
            application_id: e.application_id,
            product_line: a.SKUProductLines.APPLICATION,
            name: e.name,
            summary: "",
            description: e.description,
            flags: e.sku_flags,
            manifests: [],
            available_regions: [],
            legal_notice: "",
            deleted: e.soft_deleted,
            price_tier: 0,
            show_age_gate: !1,
            restricted: !1
        }
    }

    function f(e) {
        var t;
        return {
            id: e.id,
            sku: c(e),
            summary: e.description,
            description: e.description,
            benefits: null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
            thumbnail: e.image_asset
        }
    }

    function d(e) {
        r.default.dispatch({
            type: "SKUS_FETCH_SUCCESS",
            skus: e.map(c)
        }), r.default.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: e.map(f)
        });
        var t = !0,
            n = !1,
            o = void 0;
        try {
            for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                var u = i.value;
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: u.id,
                    subscriptionPlans: u.subscription_plans
                })
            }
        } catch (e) {
            n = !0, o = e
        } finally {
            try {
                !t && null != a.return && a.return()
            } finally {
                if (n) throw o
            }
        }
    }

    function _(e, t) {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = s(function(e, t) {
            var n, o, a;
            return l(this, function(a) {
                switch (a.label) {
                    case 0:
                        r.default.dispatch({
                            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
                            applicationId: e
                        }), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, i.getApplicationSubscriptionGroupListingsForApplication(e, t)];
                    case 2:
                        return n = a.sent(), r.default.dispatch({
                            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                            applicationId: e,
                            groupListing: n
                        }), d(null !== (o = n.subscription_listings) && void 0 !== o ? o : []), [2, n];
                    case 3:
                        return a.sent(), r.default.dispatch({
                            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                            applicationId: e
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function p(e) {
        return m.apply(this, arguments)
    }

    function m() {
        return (m = s(function(e) {
            var t, n;
            return l(this, function(n) {
                switch (n.label) {
                    case 0:
                        r.default.dispatch({
                            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
                            guildId: e
                        }), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, i.getEntitlementsForGuild(e)];
                    case 2:
                        return t = n.sent(), r.default.dispatch({
                            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
                            guildId: e,
                            entitlements: t
                        }), [3, 4];
                    case 3:
                        return n.sent(), r.default.dispatch({
                            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
                            guildId: e
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function y(e) {
        r.default.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
            guildId: e
        })
    }

    function I(e) {
        return h.apply(this, arguments)
    }

    function h() {
        return (h = s(function(e) {
            var t, n, a, u, s, c, f, _, E, p, m;
            return l(this, function(l) {
                switch (l.label) {
                    case 0:
                        r.default.dispatch({
                            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
                            planId: e
                        }), l.label = 1;
                    case 1:
                        return l.trys.push([1, 11, , 12]), [4, i.getSubscriptionGroupForSubscriptionPlan(e)];
                    case 2:
                        t = l.sent(), r.default.dispatch({
                            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                            groupListing: t
                        }), a = null !== (n = t.subscription_listings) && void 0 !== n ? n : [], u = !0, s = !1, c = void 0, l.label = 3;
                    case 3:
                        l.trys.push([3, 8, 9, 10]), f = a[Symbol.iterator](), l.label = 4;
                    case 4:
                        if (u = (_ = f.next()).done) return [3, 7];
                        if ((E = _.value).subscription_plans[0].id !== e) return [3, 6];
                        return [4, o.fetchSubscriptionPlansForSKU(E.id, void 0, void 0, !0)];
                    case 5:
                        l.sent(), l.label = 6;
                    case 6:
                        return u = !0, [3, 4];
                    case 7:
                        return [3, 10];
                    case 8:
                        return p = l.sent(), s = !0, c = p, [3, 10];
                    case 9:
                        try {
                            !u && null != f.return && f.return()
                        } finally {
                            if (s) throw c
                        }
                        return [7];
                    case 10:
                        return d(a), [3, 12];
                    case 11:
                        return l.sent(), [3, 12];
                    case 12:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}
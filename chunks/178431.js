function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        archiveSubscriptionListing: function() {
            return C
        },
        createSubscriptionGroupListing: function() {
            return v
        },
        createSubscriptionListing: function() {
            return w
        },
        deleteSubscriptionListing: function() {
            return N
        },
        fetchAllSubscriptionListingsDataForGuild: function() {
            return T
        },
        fetchMonetizationRestrictions: function() {
            return j
        },
        fetchSubscriptionListingForPlan: function() {
            return A
        },
        fetchSubscriptionsSettings: function() {
            return y
        },
        updateSubscriptionListing: function() {
            return G
        },
        updateSubscriptionTrial: function() {
            return D
        },
        updateSubscriptionsSettings: function() {
            return h
        }
    });
    var r = n("849680"),
        o = n("629815"),
        i = n("950175"),
        a = n("824646"),
        u = n("140817"),
        s = n("870331"),
        l = n("388990"),
        c = n("567067"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    _(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    _(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function p(e, t) {
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
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t) {
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

    function y(e) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = E(function(e) {
            var t;
            return m(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, c.getGuildRoleSubscriptionsSettings(e)];
                    case 1:
                        return t = n.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
                            settings: t
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function h(e, t) {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = E(function(e, t) {
            var n;
            return m(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, c.updateGuildRoleSubscriptionsSettings(e, t)];
                    case 1:
                        return n = r.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
                            settings: n
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function T(e) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = E(function(e) {
            var t, n, r, a, u, s, l, f, d, _ = arguments;
            return m(this, function(d) {
                switch (d.label) {
                    case 0:
                        r = void 0 === (n = (t = _.length > 1 && void 0 !== _[1] ? _[1] : {}).includeSoftDeleted) || n, a = t.countryCode, o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
                            guildId: e
                        }), d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 4]), [4, Promise.all([c.getGuildRoleSubscriptionGroupListingsForGuild(e, {
                            includeSoftDeleted: r,
                            countryCode: a
                        }), c.getGuildRoleSubscriptionsSettings(e), c.getGuildRoleSubscriptionTrials(e), (0, i.fetchSubscriptions)()])];
                    case 2:
                        return s = (u = p.apply(void 0, [d.sent(), 3]))[0], l = u[1], f = u[2], o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                            guildId: e,
                            groupListings: s,
                            settings: l,
                            subscriptionTrials: f
                        }), [3, 4];
                    case 3:
                        return d.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                            guildId: e
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function v(e, t) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = E(function(e, t) {
            var n;
            return m(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, c.createGuildRoleSubscriptionGroupListing(e, t)];
                    case 1:
                        return n = r.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
                            listing: n
                        }), [2, n]
                }
            })
        })).apply(this, arguments)
    }

    function A(e) {
        return b.apply(this, arguments)
    }

    function b() {
        return (b = E(function(e) {
            var t, n, r, i, u, s, l, f, d, _;
            return m(this, function(E) {
                switch (E.label) {
                    case 0:
                        return o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
                            planId: e
                        }), [4, c.getGuildRoleSubscriptionGroupForSubscriptionPlan(e)];
                    case 1:
                        t = E.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                            groupListing: t
                        }), r = null !== (n = t.subscription_listings) && void 0 !== n ? n : [], i = !0, u = !1, s = void 0, E.label = 2;
                    case 2:
                        E.trys.push([2, 7, 8, 9]), l = r[Symbol.iterator](), E.label = 3;
                    case 3:
                        if (i = (f = l.next()).done) return [3, 6];
                        if ((d = f.value).subscription_plans[0].id !== e) return [3, 5];
                        return [4, a.fetchSubscriptionPlansForSKU(d.id, void 0, void 0, !0)];
                    case 4:
                        E.sent(), E.label = 5;
                    case 5:
                        return i = !0, [3, 3];
                    case 6:
                        return [3, 9];
                    case 7:
                        return _ = E.sent(), u = !0, s = _, [3, 9];
                    case 8:
                        try {
                            !i && null != l.return && l.return()
                        } finally {
                            if (u) throw s
                        }
                        return [7];
                    case 9:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function N(e, t, n) {
        return R.apply(this, arguments)
    }

    function R() {
        return (R = E(function(e, t, n) {
            return m(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, c.deleteGuildRoleSubscriptionListing(e, t, n)];
                    case 1:
                        return r.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
                            listingId: n
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function C(e, t, n) {
        return P.apply(this, arguments)
    }

    function P() {
        return (P = E(function(e, t, n) {
            var r;
            return m(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, c.archiveGuildRoleSubscriptionListing(e, t, n)];
                    case 1:
                        return r = i.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
                            listing: r
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function D(e, t, n) {
        return L.apply(this, arguments)
    }

    function L() {
        return (L = E(function(e, t, n) {
            var r;
            return m(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, c.updateGuildRoleSubscriptionsTrial(e, t, n)];
                    case 1:
                        return r = i.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
                            subscriptionTrial: r
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function M(e, t) {
        return U.apply(this, arguments)
    }

    function U() {
        return (U = E(function(e, t) {
            var n, r, i = arguments;
            return m(this, function(a) {
                switch (a.label) {
                    case 0:
                        return n = i.length > 2 && void 0 !== i[2] ? i[2] : {}, [4, c.getGuildRoleSubscriptionGroupListing(e, t, n)];
                    case 1:
                        return r = a.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
                            listing: r
                        }), [2, r]
                }
            })
        })).apply(this, arguments)
    }

    function w(e) {
        return k.apply(this, arguments)
    }

    function k() {
        return (k = E(function(e) {
            var t, n, r, i, a, l;
            return m(this, function(d) {
                switch (d.label) {
                    case 0:
                        return t = e.guildId, n = e.groupListingId, r = e.data, i = e.analyticsContext, a = e.onBeforeDispatchNewListing, [4, c.createGuildRoleSubscriptionListing(t, n, r)];
                    case 1:
                        return l = d.sent(), s.default.track(f.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_CREATED, function(e) {
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
                        }({
                            role_subscription_listing_id: l.id,
                            role_subscription_group_listing_id: n,
                            template_name: i.templateCategory,
                            has_change_from_template: i.hasChangeFromTemplate
                        }, (0, u.collectGuildAnalyticsMetadata)(t))), [4, M(t, n, {
                            includeArchivedListings: !0
                        })];
                    case 2:
                        return d.sent(), null == a || a(l), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
                            listing: l
                        }), [2, l]
                }
            })
        })).apply(this, arguments)
    }

    function G(e) {
        return B.apply(this, arguments)
    }

    function B() {
        return (B = E(function(e) {
            var t, n, r, i, a;
            return m(this, function(u) {
                switch (u.label) {
                    case 0:
                        return t = e.guildId, n = e.listingId, r = e.groupListingId, i = e.data, [4, c.updateGuildRoleSubscriptionListing(t, r, n, i)];
                    case 1:
                        return a = u.sent(), o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
                            listing: a
                        }), [4, M(t, r, {
                            includeArchivedListings: !0
                        })];
                    case 2:
                        return u.sent(), [2, a]
                }
            })
        })).apply(this, arguments)
    }

    function j(e) {
        return F.apply(this, arguments)
    }

    function F() {
        return (F = E(function(e) {
            var t, n, i, a, u, s = arguments;
            return m(this, function(u) {
                switch (u.label) {
                    case 0:
                        t = (s.length > 1 && void 0 !== s[1] ? s[1] : {}).signal, n = !1, i = 0, u.label = 1;
                    case 1:
                        if (!(i < 3)) return [3, 7];
                        u.label = 2;
                    case 2:
                        if (u.trys.push([2, 4, , 6]), null == t ? void 0 : t.aborted) return o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
                            guildId: e
                        }), [2];
                        return o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
                            guildId: e
                        }), [4, c.getGuildMonetizationRestrictions(e, {
                            signal: t
                        })];
                    case 3:
                        return a = u.sent().restrictions, o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                            guildId: e,
                            restrictions: null != a ? a : []
                        }), n = !0, [3, 7];
                    case 4:
                        return u.sent(), [4, (0, r.sleep)((i + 1) * l.default.Millis.SECOND)];
                    case 5:
                        return u.sent(), [3, 6];
                    case 6:
                        return i++, [3, 1];
                    case 7:
                        return !n && o.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
                            guildId: e
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }
}
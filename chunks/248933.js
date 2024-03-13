function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        FetchState: function() {
            return i
        },
        default: function() {
            return L
        }
    }), n("222007");
    var i, u, r = n("627445"),
        l = n.n(r),
        a = n("446674"),
        o = n("407846"),
        s = n("913144"),
        c = n("984273"),
        S = n("552712");

    function d(t) {
        return "subscription_listing:".concat(t)
    }

    function E(t) {
        return "application:".concat(t)
    }

    function f(t) {
        return "plan:".concat(t)
    }

    function _(t, e, n) {
        return "entitlement:".concat(t, ":").concat(n, ":").concat(e)
    }

    function T(t, e) {
        return "entitlement:".concat(e, ":").concat(t)
    }(u = i || (i = {}))[u.NOT_FETCHED = 0] = "NOT_FETCHED", u[u.FETCHING = 1] = "FETCHING", u[u.FETCHED = 2] = "FETCHED";
    let I = new o.default(t => [E(t.application_id), ...t.subscription_listings_ids.map(d)], t => t.id),
        A = new o.default(t => [E(t.application_id), f(t.subscription_plans[0].id)], t => t.id),
        p = new o.default(t => [_(t.applicationId, t.isValid(null, S.default), t.guildId), T(t.isValid(null, S.default), t.guildId)], t => t.id),
        C = {},
        P = {};

    function N(t) {
        let e = I.values(E(t));
        return l(e.length <= 1, "Found multiple group listings for application"), e[0]
    }

    function R(t) {
        var e;
        for (let n of (I.set(t.id, t), null !== (e = t.subscription_listings) && void 0 !== e ? e : []))(function(t) {
            A.set(t.id, t)
        })(n)
    }
    class U extends a.default.Store {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
            var e;
            return null !== (e = C[t]) && void 0 !== e ? e : 0
        }
        getSubscriptionGroupListing(t) {
            return I.get(t)
        }
        getSubscriptionGroupListingForApplication(t) {
            return N(t)
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
            let e = I.values(d(t));
            return l(e.length <= 1, "Found multiple group listings for listing"), e[0]
        }
        getSubscriptionListing(t) {
            return A.get(t)
        }
        getSubscriptionListingsForApplication(t) {
            return A.values(E(t))
        }
        getEntitlementsForGuildFetchState(t) {
            var e;
            return null !== (e = P[t]) && void 0 !== e ? e : 0
        }
        getSubscriptionListingForPlan(t) {
            let e = A.values(f(t));
            return l(e.length <= 1, "Found multiple listings for plan"), e[0]
        }
        getApplicationEntitlementsForGuild(t, e) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            return p.values(_(t, n, e))
        }
        getEntitlementsForGuild(t) {
            let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return p.values(T(e, t))
        }
    }
    U.displayName = "ApplicationSubscriptionStore";
    var L = new U(s.default, {
        LOGOUT: function() {
            I.clear(), A.clear(), p.clear(), C = {}, P = {}
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(t) {
            let {
                applicationId: e
            } = t;
            C[e] = 1;
            let n = N(e);
            if (null != n)
                for (let t of n.subscription_listings_ids) A.delete(t)
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(t) {
            let {
                applicationId: e,
                groupListing: n
            } = t;
            C[e] = 2, R(n)
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(t) {
            let {
                applicationId: e
            } = t;
            C[e] = 2
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let {
                guildId: e
            } = t;
            P[e] = 1
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let {
                guildId: e,
                entitlements: n
            } = t;
            P[e] = 2, n.forEach(t => {
                let e = c.default.createFromServer(t);
                p.set(e.id, e)
            })
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let {
                guildId: e
            } = t;
            P[e] = 0
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(t) {
            let {
                groupListing: e
            } = t;
            R(e)
        }
    })
}
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return i
        }
    }), n("47120");
    var i, r, s, a, o, l, u = n("512722"),
        d = n.n(u),
        _ = n("442837"),
        c = n("759174"),
        E = n("570140"),
        I = n("959546"),
        T = n("55563");

    function f(e) {
        return "subscription_listing:".concat(e)
    }

    function S(e) {
        return "application:".concat(e)
    }

    function h(e) {
        return "plan:".concat(e)
    }

    function A(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t)
    }

    function m(e, t) {
        return "entitlement:".concat(t, ":").concat(e)
    }(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
    let N = new c.SecondaryIndexMap(e => [S(e.application_id), ...e.subscription_listings_ids.map(f)], e => e.id),
        p = new c.SecondaryIndexMap(e => [S(e.application_id), h(e.subscription_plans[0].id)], e => e.id),
        O = new c.SecondaryIndexMap(e => [A(e.applicationId, e.isValid(null, T.default), e.guildId), m(e.isValid(null, T.default), e.guildId)], e => e.id),
        R = {},
        C = {};

    function g(e) {
        let t = N.values(S(e));
        return d()(t.length <= 1, "Found multiple group listings for application"), t[0]
    }

    function L(e) {
        var t;
        for (let n of (N.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : []))(function(e) {
            p.set(e.id, e)
        })(n)
    }
    class D extends(r = _.Store) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
            var t;
            return null !== (t = R[e]) && void 0 !== t ? t : 0
        }
        getSubscriptionGroupListing(e) {
            return N.get(e)
        }
        getSubscriptionGroupListingForApplication(e) {
            return g(e)
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
            let t = N.values(f(e));
            return d()(t.length <= 1, "Found multiple group listings for listing"), t[0]
        }
        getSubscriptionListing(e) {
            return p.get(e)
        }
        getSubscriptionListingsForApplication(e) {
            return p.values(S(e))
        }
        getEntitlementsForGuildFetchState(e) {
            var t;
            return null !== (t = C[e]) && void 0 !== t ? t : 0
        }
        getSubscriptionListingForPlan(e) {
            let t = p.values(h(e));
            return d()(t.length <= 1, "Found multiple listings for plan"), t[0]
        }
        getApplicationEntitlementsForGuild(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            return O.values(A(e, n, t))
        }
        getEntitlementsForGuild(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return O.values(m(t, e))
        }
    }
    l = "ApplicationSubscriptionStore", (o = "displayName") in(a = D) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new D(E.default, {
        LOGOUT: function() {
            N.clear(), p.clear(), O.clear(), R = {}, C = {}
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
            let {
                applicationId: t
            } = e;
            R[t] = 1;
            let n = g(t);
            if (null != n)
                for (let e of n.subscription_listings_ids) p.delete(e)
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
            let {
                applicationId: t,
                groupListing: n
            } = e;
            R[t] = 2, L(n)
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
            let {
                applicationId: t
            } = e;
            R[t] = 2
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let {
                guildId: t
            } = e;
            C[t] = 1
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let {
                guildId: t,
                entitlements: n
            } = e;
            C[t] = 2, n.forEach(e => {
                let t = I.default.createFromServer(e);
                O.set(t.id, t)
            })
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let {
                guildId: t
            } = e;
            C[t] = 0
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
            let {
                groupListing: t
            } = e;
            L(t)
        }
    })
}
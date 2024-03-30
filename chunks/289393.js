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
        I = n("308636");

    function T(e) {
        return "guild:".concat(e)
    }

    function f(e) {
        return "subscription_listing:".concat(e)
    }

    function S(e) {
        return "application:".concat(e)
    }

    function h(e) {
        return "plan:".concat(e)
    }(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
    let A = new c.SecondaryIndexMap(e => [T(e.guild_id), ...e.subscription_listings_ids.map(f)], e => e.id),
        m = new c.SecondaryIndexMap(e => [S(e.application_id), h(e.subscription_plans[0].id)], e => e.id),
        N = {},
        O = new Set,
        p = {},
        R = {},
        C = {},
        g = {},
        L = new Map;

    function D(e) {
        return A.values(T(e))
    }

    function v(e) {
        var t;
        for (let n of (A.set(e.id, e), L.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) M(n)
    }

    function M(e) {
        m.set(e.id, e)
    }
    let y = [];
    class P extends(r = _.default.Store) {
        getSubscriptionGroupListingsForGuildFetchState(e) {
            var t;
            return null !== (t = N[e]) && void 0 !== t ? t : 0
        }
        getDidFetchListingForSubscriptionPlanId(e) {
            return O.has(e)
        }
        getSubscriptionGroupListing(e) {
            return A.get(e)
        }
        getSubscriptionGroupListingsForGuild(e) {
            return D(e)
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
            let t = A.values(f(e));
            return d()(t.length <= 1, "Found multiple group listings for listing"), t[0]
        }
        getSubscriptionListing(e) {
            return m.get(e)
        }
        getSubscriptionListingsForGuild(e) {
            var t;
            let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
            return null != n ? m.values(S(n)) : y
        }
        getSubscriptionListingForPlan(e) {
            let t = m.values(h(e));
            return d()(t.length <= 1, "Found multiple listings for plan"), t[0]
        }
        getSubscriptionSettings(e) {
            return p[e]
        }
        getSubscriptionTrial(e) {
            return R[e]
        }
        getMonetizationRestrictions(e) {
            return C[e]
        }
        getMonetizationRestrictionsFetchState(e) {
            var t;
            return null !== (t = g[e]) && void 0 !== t ? t : 0
        }
        getApplicationIdForGuild(e) {
            return L.get(e)
        }
    }
    l = "GuildRoleSubscriptionsStore", (o = "displayName") in(a = P) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new P(E.default, {
        CONNECTION_OPEN: function() {
            A.clear(), m.clear(), N = {}, O.clear(), p = {}, R = {}, C = {}, g = {}, L.clear()
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            p[t.guild_id] = t
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
            let {
                guildId: t
            } = e;
            for (let e of (N[t] = 1, D(t)))
                for (let t of (A.delete(e.id), e.subscription_listings_ids)) m.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
            let {
                guildId: t,
                groupListings: n,
                settings: i,
                subscriptionTrials: r
            } = e;
            for (let e of (N[t] = 2, n)) v(e);
            for (let e of (p[t] = i, r)) R[e.id] = e
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
            let {
                guildId: t
            } = e;
            N[t] = 2
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function(e) {
            let {
                listing: t
            } = e;
            v(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function(e) {
            let {
                groupListingId: t
            } = e;
            A.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function(e) {
            let {
                planId: t
            } = e;
            O.add(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
            let {
                groupListing: t
            } = e;
            v(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function(e) {
            let {
                listing: t,
                groupListing: n
            } = e;
            M(t), v(n)
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function(e) {
            let {
                listing: t
            } = e;
            M(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function(e) {
            let {
                listingId: t
            } = e;
            return m.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function(e) {
            let {
                subscriptionTrial: t
            } = e;
            R[t.id] = t
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function(e) {
            let {
                guildId: t
            } = e;
            g[t] = 1
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
            let {
                guildId: t,
                restrictions: n
            } = e;
            C[t] = n, g[t] = 2
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
            let {
                guildId: t
            } = e;
            g[t] = 2, C[t] = I.DefaultCreatorMonetizationRestrictions
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function(e) {
            let {
                guildId: t
            } = e;
            g[t] = 0
        }
    })
}
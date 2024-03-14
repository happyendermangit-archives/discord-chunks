function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return i
        },
        default: function() {
            return D
        }
    }), n("222007");
    var i, s, r = n("627445"),
        a = n.n(r),
        o = n("446674"),
        l = n("407846"),
        u = n("913144"),
        d = n("139170");

    function c(e) {
        return "guild:".concat(e)
    }

    function f(e) {
        return "subscription_listing:".concat(e)
    }

    function _(e) {
        return "application:".concat(e)
    }

    function h(e) {
        return "plan:".concat(e)
    }(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
    let E = new l.default(e => [c(e.guild_id), ...e.subscription_listings_ids.map(f)], e => e.id),
        g = new l.default(e => [_(e.application_id), h(e.subscription_plans[0].id)], e => e.id),
        m = {},
        p = new Set,
        S = {},
        v = {},
        T = {},
        I = {},
        C = new Map;

    function A(e) {
        return E.values(c(e))
    }

    function y(e) {
        var t;
        for (let n of (E.set(e.id, e), C.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) N(n)
    }

    function N(e) {
        g.set(e.id, e)
    }
    let R = [];
    class O extends o.default.Store {
        getSubscriptionGroupListingsForGuildFetchState(e) {
            var t;
            return null !== (t = m[e]) && void 0 !== t ? t : 0
        }
        getDidFetchListingForSubscriptionPlanId(e) {
            return p.has(e)
        }
        getSubscriptionGroupListing(e) {
            return E.get(e)
        }
        getSubscriptionGroupListingsForGuild(e) {
            return A(e)
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
            let t = E.values(f(e));
            return a(t.length <= 1, "Found multiple group listings for listing"), t[0]
        }
        getSubscriptionListing(e) {
            return g.get(e)
        }
        getSubscriptionListingsForGuild(e) {
            var t;
            let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
            return null != n ? g.values(_(n)) : R
        }
        getSubscriptionListingForPlan(e) {
            let t = g.values(h(e));
            return a(t.length <= 1, "Found multiple listings for plan"), t[0]
        }
        getSubscriptionSettings(e) {
            return S[e]
        }
        getSubscriptionTrial(e) {
            return v[e]
        }
        getMonetizationRestrictions(e) {
            return T[e]
        }
        getMonetizationRestrictionsFetchState(e) {
            var t;
            return null !== (t = I[e]) && void 0 !== t ? t : 0
        }
        getApplicationIdForGuild(e) {
            return C.get(e)
        }
    }
    O.displayName = "GuildRoleSubscriptionsStore";
    var D = new O(u.default, {
        CONNECTION_OPEN: function() {
            E.clear(), g.clear(), m = {}, p.clear(), S = {}, v = {}, T = {}, I = {}, C.clear()
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            S[t.guild_id] = t
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
            let {
                guildId: t
            } = e;
            for (let e of (m[t] = 1, A(t)))
                for (let t of (E.delete(e.id), e.subscription_listings_ids)) g.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
            let {
                guildId: t,
                groupListings: n,
                settings: i,
                subscriptionTrials: s
            } = e;
            for (let e of (m[t] = 2, n)) y(e);
            for (let e of (S[t] = i, s)) v[e.id] = e
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
            let {
                guildId: t
            } = e;
            m[t] = 2
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function(e) {
            let {
                listing: t
            } = e;
            y(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function(e) {
            let {
                groupListingId: t
            } = e;
            E.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function(e) {
            let {
                planId: t
            } = e;
            p.add(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
            let {
                groupListing: t
            } = e;
            y(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function(e) {
            let {
                listing: t,
                groupListing: n
            } = e;
            N(t), y(n)
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function(e) {
            let {
                listing: t
            } = e;
            N(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function(e) {
            let {
                listingId: t
            } = e;
            return g.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function(e) {
            let {
                subscriptionTrial: t
            } = e;
            v[t.id] = t
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function(e) {
            let {
                guildId: t
            } = e;
            I[t] = 1
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
            let {
                guildId: t,
                restrictions: n
            } = e;
            T[t] = n, I[t] = 2
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
            let {
                guildId: t
            } = e;
            I[t] = 2, T[t] = d.DefaultCreatorMonetizationRestrictions
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function(e) {
            let {
                guildId: t
            } = e;
            I[t] = 0
        }
    })
}
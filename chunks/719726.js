function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createGuildRoleSubscriptionGroupListing: function() {
            return o
        },
        createGuildRoleSubscriptionListing: function() {
            return d
        },
        updateGuildRoleSubscriptionListing: function() {
            return u
        },
        getGuildRoleSubscriptionGroupListingsForGuild: function() {
            return l
        },
        getGuildRoleSubscriptionsSettings: function() {
            return f
        },
        updateGuildRoleSubscriptionsSettings: function() {
            return _
        },
        getPriceTiers: function() {
            return c
        },
        getGuildRoleSubscriptionGroupListing: function() {
            return g
        },
        getGuildRoleSubscriptionGroupForSubscriptionPlan: function() {
            return m
        },
        deleteGuildRoleSubscriptionListing: function() {
            return h
        },
        archiveGuildRoleSubscriptionListing: function() {
            return v
        },
        getGuildRoleSubscriptionTrials: function() {
            return E
        },
        updateGuildRoleSubscriptionsTrial: function() {
            return p
        },
        getGuildRoleSubscriptionTrialEligibility: function() {
            return y
        },
        getGuildMonetizationRestrictions: function() {
            return T
        },
        fetchHighlightedCreatorGuildDetails: function() {
            return C
        }
    });
    var s = n("872717"),
        i = n("448993"),
        r = n("49111"),
        a = n("843455");
    let o = async (e, t) => {
        try {
            let n = await s.default.post({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                body: t
            });
            return n.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, d = async (e, t, n) => {
        let {
            priceTier: a,
            ...o
        } = n;
        try {
            let n = await s.default.post({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                body: {
                    ...o,
                    price_tier: a
                }
            });
            return n.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, u = async (e, t, n, a) => {
        let {
            priceTier: o,
            ...d
        } = a;
        try {
            let i = await s.default.patch({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                body: {
                    ...d,
                    price_tier: o
                }
            });
            return i.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, l = async function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                includeSoftDeleted: !1
            },
            n = {
                include_soft_deleted: t.includeSoftDeleted,
                country_code: t.countryCode
            };
        try {
            let t = await s.default.get({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                query: n
            });
            return t.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, f = async e => {
        let t = await s.default.get({
            url: r.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e)
        });
        return t.body
    }, _ = async (e, t) => {
        try {
            let n = await s.default.patch({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                body: t
            });
            return n.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, c = async e => {
        try {
            let t = await s.default.get({
                url: r.Endpoints.PRICE_TIERS,
                query: {
                    price_tier_type: a.PriceTierTypes.GUILD_ROLE_SUBSCRIPTIONS,
                    guild_id: e
                }
            });
            return t.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, g = async function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
            let i = await s.default.get({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                query: {
                    include_draft_listings: n.includeDraftListings,
                    include_archived_listings: n.includeArchivedListings
                }
            });
            return i.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, m = async e => {
        try {
            let t = await s.default.get({
                url: r.Endpoints.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e)
            });
            return t.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, h = async (e, t, n) => {
        try {
            await s.default.delete({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n)
            })
        } catch (e) {
            throw new i.APIError(e)
        }
    }, v = async (e, t, n) => {
        try {
            let i = await s.default.post({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n)
            });
            return i.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, E = async e => {
        try {
            let t = await s.default.get({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIALS(e)
            });
            return t.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, p = async (e, t, n) => {
        try {
            let i = await s.default.patch({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                body: n
            });
            return i.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, y = async (e, t, n) => {
        try {
            let i = await s.default.get({
                url: r.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n)
            });
            return i.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, T = async function(e) {
        let {
            signal: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            let n = await s.default.get({
                url: r.Endpoints.CREATOR_MONETIZATION_RESTRICTIONS(e),
                signal: t
            });
            return n.body
        } catch (e) {
            throw new i.APIError(e)
        }
    }, C = async e => {
        try {
            var t;
            let n = await s.default.get({
                url: r.Endpoints.GUILD_DISCOVERY_SLUG(e)
            });
            return null !== (t = n.body) && void 0 !== t ? t : JSON.parse(n.text)
        } catch (e) {
            throw new i.APIError(e)
        }
    }
}